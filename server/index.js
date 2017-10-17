require('dotenv').config()

const express= require ('express'),
    bodyParser= require ('body-parser'),
    cors= require ('cors'),
    massive=require ('massive'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    session = require('express-session'),

    stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
   

 // allows this to connect to process.env once we attempt to invoke massive.    
  


   const app =express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.static(`${__dirname}/../build`));


    app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true
    }))

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use( new Auth0Strategy({
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.AUTH_CALLBACK
      }, function(accessToken, refreshToken, extraParams, profile, done) {
          console.log(profile);
        const db = app.get('db');
            db.get_user([profile.identities[0].user_id]).then( user => {
                if (user[0]) {
                    done(null, user[0].id)
                } else {
                    db.create_user([
                        profile.emails[0].value,
                        profile.identities[0].user_id]).then( user => {
                            done(null, user[0].id)
                        })
                }})
          }))
    
        passport.serializeUser(function(userId, done) {
            done(null, userId);
        
        })
          passport.deserializeUser( function( userId, done) {
            app.get('db').current_user(userId).then(user => {   
                done(null, user[0])
        })

        app.get('/auth/logout',(req,res)=>{
            req.logOut();
            res.redirect(302, 'https://simoneholder1.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3030%2F&client_id=W8f4hY97be7DqCItsG7XGYC9iobESDG_')
        })

        })
        app.get('/auth', passport.authenticate('auth0'));
        app.get('/auth/callback', passport.authenticate('auth0',{
            successRedirect: 'http://localhost:3030/#/',
            failureRedirect: 'localhost:3030/fail'
        }))

       app.get('/api/user',  passport.authenticate('auth0'), (req, res) => {
            req.app.get('db').current_user().then(user =>{
                res.status(200).send(user)
            }).catch((err) => {console.log(err)})
        })
// Massive is a library that looks in the DB folder looking for SQL files that turn the sql functions into javascript functions.
// In order to connect to massive you must put in the CONNECTION STRING that our database provides to us as a parameter. Heroku gives the connection string to the postgres database we created.
// .env file is a way to hide private data from github.
// app is where we are storing our DB instance 
    massive(process.env.CONNECTION_STRING).then((dbInstance)=>{
        app.set('db',dbInstance)
        console.log("connected to DB")
    })

//Axios endpoint to get recently added products for new arrival page.
    app.get('/api/newarrivals',(req,res)=>{
        res.app.get('db').getNewInventory().then((Products)=>{
            res.json(Products)
        })
    })
   
// Axios endpoint to get products to display on catalog page.
    app.get('/api/products',(req,res)=>{
        const db= req.app.get('db');
        db.getProducts().then((products)=>{
            res.json(products);
        })
    })

// Axios endpoint to get the details of a specific item.    
    app.get('/api/details/:id',(req,res)=>{
        res.app.get('db').returnProductById([req.params.id]).then((product)=>{
            res.json(product[0])
        })
    })


// Axios endpoint to get the brands for the drop down.    
    app.get('/api/brands',(req,res)=>{
        res.app.get('db').getBrandList().then((brands)=>{
            res.json(brands)
        })
    })
    
    // Axios endpoint to get the handbag style for the drop down.    
        app.get('/api/style',(req,res)=>{
            res.app.get('db').getHandbagStyle().then((styles)=>{
                res.json(styles)
            })
        })
     
// Axios endpoint to get products with the specific brand in the URL.
app.get('/api/brand/:brand',(req,res)=>{
    res.app.get('db').getSpecificBrand([req.params.brand]).then((products)=>{
        res.json(products)
    })
})


//Axios endpoint to get products with the specific style in the URL.
app.get('/api/style/:style',(req,res)=>{
    res.app.get('db').getSpecificHandbagStyle([req.params.style]).then((products)=>{res.json(products)})
})

// Axios endpoint for searched products
    app.get('/api/search',(req,res)=>{
        res.app.get('db').searchProducts(['%'+req.query.term+'%']).then((products)=>{
           res.json(products)})
    })

// Axios endpoint to add new products to database
    app.post('/api/products',(req,res)=>{
        req.app.get('db').insertNewItems([
            req.body.imageUrl,
            req.body. brand,
            req.body.productName,
            req.body.price,
            req.body.dateAdded,
            req.body.accessoryType,
            req.body.color,
            req.body.material,
            req.body.style,
            req.body.detail,
            req.body.length,
            req.body. width,
            req.body.height,
            req.body.drop,
            req.body.productLocation,
            req.body.yearMade,
            req.body.comesWith
        ]).then(()=>{console.log('Added Successfully');res.send('Item added successfully!')})
    })

// Axios endpoint for cart    
// cart check 1- userid
    app.post('/api/cart',(req,res)=>{
        console.log('we have arrived')
        const {productid,quantity}=req.body
        // determines whether the user already has a cart.
        if(req.user) {
            req.app.get('db').cartcheck([req.user.id]).then((cart)=>{
                    if (cart[0]){
                        req.app.get('db').duplicateitems([productid,cart[0].id]).then((dup)=>{
            //determines whether the same item is already in the cart and if so, update the quantity
                            if(dup[0]){
                                console.log("cart already active",dup[0].quantity)
                                req.app.get('db').updateQuantity([dup[0].quantity + 1, dup[0].id]).then(()=>{req.app.get('db').returnCart([cart[0].id]).then((cartItems)=>{
                                    res.send(cartItems)
                                })
                            console.log("We found a duplicate!")})
                            } else { 
                                req.app.get('db').addToCart([productid,cart[0].id,1]).then(()=>{
                                    req.app.get('db').returnCart([cart[0].id]).then((cartItems)=>{
                                        res.send(cartItems)
                                    })
                                })
                            }
                        }).catch((err)=>{console.log(err)})



            // user has no cart            
            } else {
                console.log(req.user.id)
                    req.app.get('db').createNewCart([req.user.id]).then((response)=> {
                        req.app.get('db').cartcheck([req.user.id]).then((cart)=>{
                            console.log('before add to Cart',cart[0])
                        req.app.get('db').addToCart([product,cart[0].id,1]).then(()=>{
                            console.log('after abc')
                            req.app.get('db').returnCart([cart[0].id]).then((cartItems)=>{
                                res.send(cartItems)
                            })
                        })
                    })
                    }).catch((err)=>{console.log(err)})
                }

            })
        } else {
            res.send([])
        }
            
        })

    // Store an entire content of someones cart.
    // add something to a cart
    // retrieve infor from what is inside of that particular cart.

    // delete from cart
    app.delete('/api/products/:id',(req,res)=>{
        req.app.get('db').cartcheck([req.user.id]).then((order)=>{
            console.log("delete endpoint",req.user.id,order[0].id)
    req.app.get('db').deleteItem([req.params.id,order[0].id]).then((cart)=>{
            req.app.get('db').returnCart([order[0].id]).then((cart)=>{
                res.send(cart);
            })
            // Insert the entire content of what is left remaining in your cart.
        })
    })
})

    // create an end point that receives a request from the agent for saving an object to the cart.
    // app.post('/api/cart',(req,res)=>{
    //     req.app.get('db').addToCart(
    //         [req.body.productname,
    //         req.body.price]
    //     ).then(()=>{console.log('added product successfully'); res.send ('product added successfully')});
        
    // })


    //Just Return the Cart
    app.get('/api/cart',(req,res)=>{
        if(req.user) {
            req.app.get('db').cartcheck(req.user.id).then((orders)=>{
                if(orders[0]) {
                    req.app.get('db').returnCart([orders[0].id]).then((cart)=>{
                        res.send(cart);
                    })
                } else {
                    res.send([])
                }
            })
        } else {
            res.send([])
        }
    })

    
app.post('/api/payment', function (req, res, next) {
    console.log('yup this is it', req.body)
  const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if (amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
        break;
      } else {
        pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
    const charge = stripe.charges.create({
      amount: convertedAmt * 100, // amount in cents, again
      currency: 'usd',
      source: req.body.token.id,
      description: 'Test charge from react app'
    }, function (err, charge) {
      if (err) return res.sendStatus(500)

    })
})
    const port= 3030
    app.listen(port, ()=>console.log(`listening on port ${port}`))
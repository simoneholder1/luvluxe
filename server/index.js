const express= require ('express'),
    bodyParser= require ('body-parser'),
    cors= require ('cors'),
    massive=require ('massive')
    // stripe = require ('stripe')(config.secret_key);

 // allows this to connect to process.env once we attempt to invoke massive.    
  require('dotenv').config()


   const app =express();


    app.use(bodyParser.json());

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
        console.log(req.app.get('db'));
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
        const {userid,productid,quantity}=req.body
        // determines whether the user already has a cart.
        req.app.get('db').cartcheck([userid]).then((cart)=>{
                if (cart[0]){
                    req.app.get('db').duplicateitems([productid,cart[0].id]).then((dup)=>{
        //determines whether the same item is already in the cart and if so, update the quantity
                        if(dup[0]){
                            console.log("cart already active",quantity,lineitem[0].id)
                            req.app.get('db').updateQuantity([dup[0].quantity + 1, dup[0].productid]).then(()=>{req.app.get('db').returnCart([cart[0].id]).then((cartItems)=>{
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
             console.log(userid)
                req.app.get('db').createNewCart([userid]).then((response)=> {
                    req.app.get('db').cartcheck([userid]).then((cart)=>{
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

        
    })

    // Store an entire content of someones cart.
    // add something to a cart
    // retrieve infor from what is inside of that particular cart.

    // delete from cart
    app.delete('/api/products/:id/:userid',(req,res)=>{
        req.app.get('db').cartcheck([req.params.userid]).then((order)=>{
            console.log("delete endpoint",req.params.id,order[0].id)
    req.app.get('db').deleteItem([req.params.id,order[0].id]).then((cart)=>{
            req.app.get('db').returnCart([order[0].id]).then((cart)=>{
                res.send(cart);
            })
            // Insert the entire content of what is left remaining in your cart.
        })
    })
})

    // create an end point that receives a request from the agent for saving an object to the cart.
    app.post('/api/cart',(req,res)=>{
        req.app.get('db').addToCart(
            [req.body.productname,
            req.body.price]
        ).then(()=>{console.log('added product successfully'); res.send ('product added successfully')});
        
    })


    //Just Return the Cart
    app.get('/api/cart',(req,res)=>{
        req.app.get('db').cartcheck(2).then((orders)=>{
            req.app.get('db').returnCart([orders[0].id]).then((cart)=>{
                res.send(cart);

            })
        })
    })


    const port= 3030
    app.listen(port, ()=>console.log(`listening on port ${port}`));
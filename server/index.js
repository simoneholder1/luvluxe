const express= require ('express'),
    bodyParser= require ('body-parser'),
    cors= require ('cors'),
    massive=require ('massive');

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
            console.log(res.app.get('db').getHandbagStyle())
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
        res.app.get('db').getProducts().then((products)=>{
            products.filter((product)=>{
                if(req.query.term.toLowerCase() == product.productname.toLowerCase() || 
                req.query.term.toLowerCase() == product.brand.toLowerCase() || 
                req.query.term.toLowerCase() == product.color.toLowerCase() || 
                req.query.term.toLowerCase() == product.comeswith.toLowerCase() || 
                req.query.term.toLowerCase() == product.accessorytype.toLowerCase() || 
                req.query.term.toLowerCase() == product.style.toLowerCase() || 
                req.query.term.toLowerCase() == product.material.toLowerCase()
                ){
                    return true
                } else {
                    return "Oh no, it looks like we do not have that inventory available!"
                }

            }) 
        }
            )
    })



// Axios endpoint for cart    

    app.post('/api/cart',(req,res)=>{
        const {userid,product,quantity}=req.body
        // determines whether the user already has a cart.
        res.app.get('db').cartcheck(userid).then((cart)=>{
                if (cart[0]){
                    res.app.get('db').duplicateitems([product,cart[0].id]).then((lineitem)=>{
        //determines whether the same item is already in the cart and if so, update the quantity
                        if(lineitem[0]){
                            console.log(quantity,lineitem[0].id)
                            res.app.get('db').updateQuantity([quantity, lineitem[0].id])
                        } else { 
                            res.app.get('db').addNewLineItem([product,cart[0].id,quantity])
                        }
                    }).catch((err)=>{console.log(err)})



        // user has no cart            
         } else {
                res.app.get('db').createNewCart(userid).then((response)=> {
                    console.log(userid);
                    // res.app.get('db').addNewLineItem([product,])
                    console.log(response)
                }).catch((err)=>{console.log(err)})
            }

        })

        
    })

    // Store an entire content of someones cart.
    // add something to a cart
    // retrieve infor from what is inside of that particular cart.

    

    // create an end point that receives a request from the agent for saving an object to the cart.
    app.post('/api/cart',(req,res)=>{
        req.app.get('db').addToCart(
            [req.body.productname,
            req.body.price]
        ).then(()=>{console.log('added product successfully'); res.send ('product added successfully')});
        
    })



    const port= 3030
    app.listen(port, ()=>console.log(`listening on port ${port}`));
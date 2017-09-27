const express= require ('express'),
    bodyParser= require ('body-parser'),
    cors= require ('cors'),


    app=express();
    const port= 3030
    app.listen(port, ()=>console.log(`listening on port ${port}`));


    var fakeData= 
    [{
        id: 0,
        imageUrl: '',
        brand: 'Louis Vuitton',
        price: 300 ,
    },{
        id: 1,
        imageUrl:'',
        brand: 'Gucci',
        price: 400,
    },{
        id: 2,
        imageUrl:'',
        brand: 'Chanel',
        price: 500,
    }]

    app.get('/api/products',(req,res)=>{
        // req.app.get(fakeData).then((products)=>{
        //     res.json(products);
        // })
        res.json(fakeData);
    })
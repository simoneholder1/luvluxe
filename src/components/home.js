import React, { Component } from 'react';
import '../App.css';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import details from './details';
import lastCall from '../lastCall.jpg'

class Home extends Component  {
  constructor(){
    super()

    this.state={
      products:[],
      cart:[]

  }

this.displayProducts=this.displayProducts.bind(this);

}



// to display products we want to send a request to the server via an axios.get request, then the server will return a response with the data we want. Once the data is returned it will setState with the updated products

  displayProducts(){
    axios.get('/api/products').then((res)=>{
        this.setState({
      products: res.data})
  })
  }


  componentDidMount(){
    this.displayProducts()
  }


    render() {
        const displayProducts= this.state.products.map((products,index)=>{
            return (
                <div>
                <Link className= "HomePageProducts" style={{textDecoration: 'none', color: '#434343'}}key={index} to={`/details/${products.id}`}>
           
                <img className="productImage" src={products.imageurl}/>
                <p className="brand" > {products.brand}</p>
                <p className="price" > ${products.price}</p>
                </Link>
                </div>
                )
        })
        return (
            <div className="Homepage">
                <div className="ShopSellRepeat">
                   
                    <Link to="/shop" style={{textDecoration: 'none', color: '#434343'}}>
                        <h1 className='shop'>SHOP</h1>
                    </Link>
                    <Link to="/login" style={{textDecoration: 'none', color: '#434343'}}>
                        <h1 className='sell' >SELL</h1>
                    </Link>
                    <Link to="/login" style={{textDecoration: 'none', color: '#434343'}}>
                        <h1 className='repeat'>REPEAT.</h1>
                    </Link>
                </div>
                
                <div className="productContainer">{displayProducts}</div>
                

                <div>
                    <Route path='/details/:id' component={details}/>
                </div>

            </div>
        );
    
}
}
export default Home;
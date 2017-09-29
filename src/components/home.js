import React, { Component } from 'react';
import '../App.css';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import details from './details'

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
                <Link key={index} to={`/details/${products.id}`}>
           
                <img className="HomePageProducts" src={products.imageurl}/>
                <p>{products.brand}</p>
                <p>${products.price}</p>
                </Link>
                )
        })
        return (
            <div>
                <div>
                   
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
                
                {displayProducts}

                <div>
                    <Route path='/details/:id' component={details}/>
                </div>
            </div>
        );
    
}
}
export default Home;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../style/css/main.css';


class Catalog extends Component  {
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
                  <div className='catalogProducts'>
                  <Link key={index} to={`/details/${products.id}`}>
             
                  <img className='imgContainer' src={products.imageurl} alt=""/>
                  <p>{products.brand}</p>
                  <p>{products.productname}</p>
                  <p>${products.price}</p>

                  </Link>
                  </div>
                  )
          })
          return (
              
              <div className="catalog">
                 
                  
                  {displayProducts}
  
              </div>
          );
      
  }
  }
  export default Catalog;
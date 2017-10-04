import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';


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
                  <Link key={index} to={`/details/${products.id}`}>
             
                  <img className="AllProducts" src={products.imageurl}/>
                  <p>{products.brand}</p>
                  <p>{products.name}</p>
                  <p>${products.price}</p>

                  </Link>
                  )
          })
          return (
              <div>
                 
                  
                  {displayProducts}
  
              </div>
          );
      
  }
  }
  export default Catalog;
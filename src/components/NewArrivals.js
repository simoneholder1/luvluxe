import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Link} from 'react-router-dom';

class NewArrivals extends Component  {
    constructor(){
      super()
  
      this.state={
        products:[],
        cart:[]
  
    }
  

  }
  
  
  
  // to display the new products we want to send a request to the server via an axios.get request, then the server will return a response with the data we want. Once the data is returned it will setState with the updated products
  
    
  
    componentDidMount(){
        axios.get('/api/newarrivals').then((res)=>{
            this.setState({
                products: res.data
            })
        })
    }
  
  
      render() {

        
          const displayNewProducts= this.state.products.map((products,index)=>{
              return (
                  <Link key={index} to={`/details/${products.id}`}>
             
                  <img className="AllProducts" src={products.imageurl} alt=""/>
                  <p>{products.brand}</p>
                  <p>{products.productname}</p>
                  <p>${products.price}</p>

                  </Link>
                  )
          })

          console.log(displayNewProducts);
          return (
              
              <div>
                 
                  {displayNewProducts}
  
              </div>
          );
      
  }
  }
  export default NewArrivals;


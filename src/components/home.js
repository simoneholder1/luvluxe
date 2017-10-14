import React, { Component } from 'react';
import '../style/css/main.css';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';
import details from './details';
// import lastCall from '../lastCall.jpg'

class Home extends Component  {
  constructor(){
    super()

    this.state={
      products:[],
      cart:[],
      randomNumber: 0

  }


}



// to display products we want to send a request to the server via an axios.get request, then the server will return a response with the data we want. Once the data is returned it will setState with the updated products




  componentDidMount(){
    axios.get('/api/products').then((res)=>{
        this.setState({
        products: res.data,
        randomNumber: Math.floor(Math.random()*res.data.length)})
  })
  }


  

    render() {

        
        const displayProducts= this.state.products.map((products,index)=>{
            return (
                <div key={index}>
                <Link className= "HomePageProducts" style={{textDecoration: 'none', color: '#434343'}}key={index} to={`/details/${products.id}`}>
           
                <img className="productImage" src={products.imageurl} alt=""/>
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

                

                {this.state.products.length>0 ? 
                <div> 
                    <Link to="/shop"> 
                    <h1> SHOP {this.state.products[this.state.randomNumber].brand} </h1> 
                    </Link>

                <div>
                    {this.state.products[this.state.randomNumber].productname}</div>

                <div><img src={this.state.products[this.state.randomNumber].imageurl} alt=""/></div>

                <div>${this.state.products[this.state.randomNumber].price}</div>

                </div> 
                : null
                
              }





                <div className="productContainer">{displayProducts}</div>
                

                <div>
                    <Route path='/details/:id' component={details}/>
                </div>

            </div>
        );
    
}
}
export default Home;
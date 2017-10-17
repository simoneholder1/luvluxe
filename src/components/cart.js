import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../ducks/reducer';
import {removeFromCart} from '../ducks/reducer';
import {getCart} from '../ducks/reducer';
// import {updateCart} from '../ducks/reducer';
import StripeCheckout from 'react-stripe-checkout';
import stripe from '../stripeKey';
import axios from 'axios'


class Cart extends Component {
    constructor(){
        super() 
        this.state = {
        amount: {}
    }
        
    this.onToken=this.onToken.bind(this);
      }
    

      onToken(token) {
          token.card = void 0;
          console.log('token', this.state);
          axios.post('/api/payment', { token, amount: this.props.cart.reduce((sum,product)=>sum + (product.quantity * product.price), 0), 
     options: this.state} ).then(response => {
            alert('we are in business')
          });
        }


   
   componentDidMount(){
    this.props.getCart()
   }

   
    render() {
            let displayCartContent= this.props.cart.map((products, i)=>{
        return (
            <div key={i}> 
               <h1>{products.productname}</h1> 
               <p>{products.id}</p>
               <p>{products.brand}</p>
               <p>{products.quantity}</p>
               <p>${products.price}</p>
                <button onClick={(()=>this.props.removeFromCart(products.id))}> Remove </button>

                
            </div>

)
})
            let cartTotal = this.props.cart.reduce((sum,product)=>{
               return sum + (product.quantity * product.price)
                
            }, 0
        )

        
            
    

    return(
        <div>
            <h1>My Shopping Cart</h1>
            {displayCartContent}

            <h2>TOTAL:${cartTotal} </h2>

            
            <StripeCheckout
                            token={this.onToken}
                            stripeKey={ stripe }
                            amount={cartTotal *100}
            />
   
        </div>
    )
}
}

function mapStateToProps(store){
    return{
        cart: store.cart
    }
}


export default connect (mapStateToProps,{removeFromCart, getCart})(Cart);


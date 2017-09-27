import React, { Component } from 'react';
import {connect} from 'react-redux';

import {removeFromCart} from '../ducks/reducer';
// import {updateCart} from '../ducks/reducer';

class Cart extends Component {
    render() {
            let displayCartContent= this.props.cart.map((products, i)=>{
        return (
            <div> 
               <h1>{products.name}</h1> 
               <p>{products.brand}</p>
               <p>{products.price}</p>
                <button onClick={(()=>this.props.removeFromCart(i))}> Remove </button>
            </div>
        )
    })

    return(
        <div>
            <h1>My Shopping Cart</h1>
            {displayCartContent}
        </div>
    )
}
}

function mapStateToProps(store){
    return{
        cart: store.cart
    }
}


export default connect (mapStateToProps,{removeFromCart})(Cart);
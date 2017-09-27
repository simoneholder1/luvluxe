import React, { Component } from 'react';

class Cart extends Component {
    render() {

        return (
            <div>
               <h1>My Shopping Cart</h1> 
                <button onClick={(()=>this.props.removeProductFromCart())}> Remove </button>
            </div>
        );
    }
}

export default Cart;
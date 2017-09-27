import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../ducks/reducer';
import axios from 'axios';

class Details extends Component {
    constructor(){
        super()

        this.state={
            productDetails:{}
        }
    }

componentDidMount(){
    axios.get(`api/products/${this.props.match.params.name}`).then((res)=>{
        this.setState({
            productDetails: res.data
        })
    })
}    

// addToCart(){
//     axios.post('/api/cart').then((res)=>{this.props.addToCart(products)
        
//     })
// }
    render() {
        const displayProducts= this.props.products.map

        return (
            <div>
                <img/>
                <h1>{this.state.productDetails.name}</h1>
                <p>{this.state.productDetails.condition}</p>
                <p>{this.state.productDetails.price}</p>
                <button onClick={()=>{
                    }}>Add to Cart</button>
            </div>
        );
    
}
}

// function MapStateToProps(store){
//     return{
//         cart: store.cart
//     }
// }

// export default connect(mapStateToProps)(Details);

export default Details;
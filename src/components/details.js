import React, { Component } from 'react';
import axios from 'axios';

// import {connect} from 'react-redux';


// import {addToCart} from '../ducks/reducer';


class Details extends Component {
    constructor(){
        super()

        this.state={
            productDetails:{}
        }

  
    }
// addToCart(){
//     axios.post(`/api/cart/${this.props.match.params.id}`).then((res)=>{this.props.addToCart()
        
//     })
// }



  componentWillMount(){
    axios.get(`/api/details/${this.props.match.params.id}`).then((res)=>{
        
        this.setState({
            productDetails: res.data
        })
    }).catch((error)=>{console.log(error)})
  }


    render() {
      console.log(this.state);
            return (
                <div className="Details">
                    <div className="product" >
                <img src={this.state.productDetails.imageurl}/></div>
                <div>
            <p>{this.state.productDetails.brand}</p>
            <p>{this.state.productDetails.productname}</p>
            <p>{this.state.productDetails.detail}</p>
            <p>{this.state.productDetails.length}</p>
            <p>{this.state.productDetails.width}</p>
            <p>{this.state.productDetails.height}</p>
            <p>{this.state.productDetails.drop}</p>
            <p>{this.state.productDetails.productlocation}</p>
            <p>{this.state.productDetails.yearmade}</p>
            <p>{this.state.productDetails.comeswith}</p>
            <p>${this.state.productDetails.price}</p>
            </div>

            <button onClick={()=>{
                }}>Add to Cart</button>
            </div> )
                
                

        }
    }
    


// function mapStateToProps(store){
//     return{
//         cart: store.cart
//     }
// }

// export default connect(mapStateToProps)(Details);

export default Details;
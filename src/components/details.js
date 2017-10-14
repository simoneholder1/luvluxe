import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addToCart} from '../ducks/reducer';


class Details extends Component {
    constructor(){
        super()
        this.state={
            productDetails:{}
        }
    }


  componentWillMount(){
    axios.get(`/api/details/${this.props.match.params.id}`).then((res)=>{
        
        this.setState({
            productDetails: res.data
        })
    }).catch((error)=>{console.log(error)})
  }


    render() {
        
            return (
                <div className="Details">
                    <div className="product" >
                <img src={this.state.productDetails.imageurl} alt=""/></div>
                <div>
            <p>{this.state.productDetails.brand}</p>
            <p>{this.state.productDetails.productname}</p>
            <p>{this.state.productDetails.detail}</p>
            <p>length: {this.state.productDetails.length}in.</p>
            <p>width: {this.state.productDetails.width}in.</p>
            <p>height: {this.state.productDetails.height}in.</p>
            <p>drop: {this.state.productDetails.drop}in.</p>
            <p>{this.state.productDetails.productlocation}</p>
            <p>{this.state.productDetails.yearmade}</p>
            <p>{this.state.productDetails.comeswith}</p>
            <p>${this.state.productDetails.price}</p>
            </div>

            <button onClick={(e)=>{ this.props.addToCart(this.state.productDetails)}}>Add to Cart</button>
            </div> )
                
                

        }
    }
    


function mapStateToProps(store){
    return{
      
    }
}

export default connect(mapStateToProps,{addToCart})(Details);

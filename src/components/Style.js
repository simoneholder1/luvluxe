import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';

class Style extends Component {
    constructor(){
        super()
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        axios.get(`/api/style/${this.props.match.params.style}`).then((res)=>{
            this.setState({
                products: res.data
            })
        })
    }

    componentWillReceiveProps(props){
        axios.get(`/api/style/${props.match.params.style}`).then((res)=>{
            this.setState({
                products: res.data
            })
        })
    } 
    
    
    render() {
        const displayProducts=this.state.products.map((product,index)=>{
            return(
                <Link key={index} to={`/details/${product.id}`}>
                <img className="Allproduct" src={product.imageurl}/>
                <p>{product.brand}</p>
                <p>{product.productname}</p>
                <p>${product.price}</p>
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

export default Style;
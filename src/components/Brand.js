import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';


class Brand extends Component {
    constructor(){
        super()
        this.state={
            products: []
        }
    }

    componentDidMount(){
        axios.get(`/api/brand/${this.props.match.params.brand}`).then((res)=>{
            this.setState({
                products: res.data
            })
        })
    }

    componentWillReceiveProps(props){
        axios.get(`/api/brand/${props.match.params.brand}`).then((res)=>{
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        const displayProducts= this.state.products.map((product,index)=>{
            return(
                <Link key={index} to={`/brand/${product.brand}`}>
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

export default Brand;
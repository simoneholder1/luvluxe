import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';

class HandbagDropDown extends Component {
    constructor(){
        super()
        this.state={
        handbags: []
}
    }
    
componentDidMount(){
    axios.get('/api/style').then((res)=>{
        this.setState({
            handbags: res.data
        })
    })
}


    render() {
      const  displayHandbagStyles = this.state.handbags.map((product,index)=>{
          return (
            <div key={index} > 
            <Link className= "handbagStyle" style={{textDecoration: 'none', color: '#434343'}} to={`/style/${product.style}`}> 
            {product.style}
            </Link>
            </div>
            )
      })

        return (
            <div> 
                {displayHandbagStyles}
            </div>
        );
    }
}

export default HandbagDropDown;
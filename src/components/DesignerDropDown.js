import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import '../App.css';

class DesignerDropDown extends Component {
    constructor(){
        super()
this.state={
    designers: []
}


    }
    

componentDidMount(){
    axios.get('/api/brands').then((res)=>{
        this.setState({
            designers: res.data
        })
    })
}


    render() {
        console.log(this.state,'designerdrop down state')
      const  displayDesigners = this.state.designers.map((product)=>{
          return (
            <div > 
            <Link className= "designerDropDown" style={{textDecoration: 'none', color: '#434343'}} to={`/${product.brand}`}> 
            {product.brand}
            </Link>
            </div>
            )
      })

        return (
            <div> 
                {displayDesigners}
            </div>
        );
    }
}

export default DesignerDropDown;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';


class Catalog extends Component {

    componentWillMount(){
        axios.get('/api/shop').then((res)=>{this.props.displayProducts(res.data)})
    }
    
    render() {
        return (
            <div>
                Detailed list of products for Catalog
            </div>
        );
    }
}

export default Catalog;
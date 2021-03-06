import React, { Component } from 'react';
import '../style/css/main.css';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {returnResults} from '../ducks/reducer.js';

class Search extends Component {


    render() {
        const displayProducts= this.props.searchResults.map((products,index)=>{
            return (
                <Link key={index} to={`/details/${products.id}`}>
           
                <img className="AllProducts" src={products.imageurl} alt=""/>
                <p>{products.brand}</p>
                <p>{products.productname}</p>
                <p>${products.price}</p>

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


function mapStateToProps(store){
    return{
        searchResults: store.searchResults
    }
}
export default connect(mapStateToProps,{returnResults})(Search);
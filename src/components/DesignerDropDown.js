import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/css/main.css';

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
      const  displayDesigners = this.state.designers.map((product,index)=>{
          return (
            <div key={index}> 
            <Link className= "designerDropDown" style={{textDecoration: 'none', color: '#434343'}} to={`/brand/${product.brand}`}> 
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
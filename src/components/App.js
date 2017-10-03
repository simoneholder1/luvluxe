
import React, { Component } from 'react';
import '../App.css';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from './home';
import Cart from './cart';
import Login from './login';
import Catalog from './catalog';
import About from './About';
import Contact from './contact';
import Details from './details.js';
import DesignerDropDown from './DesignerDropDown';

class App extends Component {
  constructor(){
    super();
    this.state = {
      designers: false,
      handbags: false,
      accessories: false, 
      jewelry: false,
      discounted: false

    }

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
}

//param is going to be one of the properties above.
handleHoverOn(param){
  var x = {}
  x[param] = true;
  this.setState(x)
}

handleHoverOff(param){
  var x = {}
  x[param] = false;
  this.setState(x)
 
}


    
//change phone number to allow a call to be made if done on a mobile device
  render() {

    var designerList = ()=>{
      if( this.state.designers){
        return( <div>
          <DesignerDropDown/> 
        </div>)
      }
    }


    return (
     <div>
          <div className='NavBar1'>
            <div>844.448.LUXE</div>
            <div><Link to='/contact' style={{textDecoration: 'none', color: "white"}}>contact</Link></div>
            
            <div ><Link to ='/login' style={{textDecoration: 'none', color: "white"}}>Login</Link></div>
            <div><Link to='/cart' style={{textDecoration: 'none', color: "white"}}>Cart</Link></div>
            <div><Link to='/about' style={{textDecoration: 'none', color: "white"}}>About Us</Link></div>
            <div><Link to='/login' style={{textDecoration: 'none', color: "white"}}>Sell Your Bag</Link></div>
           
            
          </div>

          <div className='Logo'><Link to ='/' style={{textDecoration: 'none', color: "#434343"}}> FASHIONPHILE </Link> </div>

          <div className='NavBar2'>
            <Link to='/new'></Link>
            <div>NEW ARRIVALS</div>
            
          
            <div onMouseOver={()=>{this.handleHoverOn('designers')}} onMouseLeave={()=>{this.handleHoverOff('designers')}} >DESIGNERS
            {designerList()}
            </div>
            
            <div onMouseOver={()=>{this.handleHoverOn('handbags')}} onMouseLeave={()=>{this.handleHoverOff('handbags')}}>HANDBAGS</div>
            
            <div onMouseOver={()=>{this.handleHoverOn('accessories')}} onMouseLeave={()=>{this.handleHoverOff('accessories')}}>ACCESSORIES</div>
            
            <div onMouseOver={()=>{this.handleHoverOn('jewelry')}} onMouseLeave={()=>{this.handleHoverOff('jewelry')}}>JEWELRY</div>
            
            <div onMouseOver={()=>{this.handleHoverOn('discounted')}} onMouseLeave={()=>{this.handleHoverOff('discounted')}}>DISCOUNTED</div>

          </div>

          <div>
              <Route exact path='/' component={Home}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/login' component={Login}/>
              <Route path='/shop' component={Catalog}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/details/:id' component={Details}/>
              {/* <Route path= '/shop/brands/:brand' component={Brand}/> */}

          </div>


          <div className="container3"></div>
          
<div className='footer'></div>
    </div> 
    );
  }
}

export default App;
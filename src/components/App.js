
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
import logo from '../logo.png';

class App extends Component {
  
    
//change phone number to allow a call to be made if done on a mobile device
  render() {
    return (
     <div>
          <div className='NavBar1'>
            <div>844.448.LUXE</div>
            <div><Link to='/contact' style={{textDecoration: 'none', color: "white"}}>Contact</Link></div>
            <div><Link to ='/login' style={{textDecoration: 'none', color: "white"}}>Login</Link></div>
            <div><Link to='/cart' style={{textDecoration: 'none', color: "white"}}>Cart</Link></div>
            <div><Link to='/about' style={{textDecoration: 'none', color: "white"}}>About Us</Link></div>
            <div><Link to='/login' style={{textDecoration: 'none', color: "white"}}>Sell Your Bag</Link></div>
          </div>

          <div className='Logo'><Link to ='/'><img src={logo} height="30" width='156' /> </Link> </div>

          <div className='NavBar2'>
            <Link to='/new'></Link>
            <div>New Arrivals</div>
            <div >Designers</div>
            <div>Handbags</div>
            <div>Accessories</div>
            <div>Jewelry</div>
            <div>Discounted</div>
          </div>

          <div>
              <Route exact path='/' component={Home}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/login' component={Login}/>
              <Route path='/shop' component={Catalog}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/details/:id' component={Details}/>
          </div>

          <div className="Footer">

          </div>


    </div> 
    );
  }
}

export default App;
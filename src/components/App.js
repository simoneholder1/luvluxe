
import React, { Component } from 'react';
import '../style/css/main.css';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';
import Home from './home';
import Cart from './cart';
import Login from './login';
import Catalog from './catalog';
import About from './About';
import Contact from './contact';
import Details from './details.js';
import DesignerDropDown from './DesignerDropDown';
import HandbagDropDown from './HandbagDropDown';
import Brand from './Brand';
import Style from './Style';
import Search from './Search';
import Admin from './Admin';
import '../style/css/main.css';
import '../images/facebook.svg';
import '../images/instagram.svg';
import '../images/pinterest.svg';
import '../images/twitter.svg';
import Footer from './Footer';
import shoppingBag from '../images/shoppingBag.svg';
import NewArrivals from './NewArrivals';
import {connect} from 'react-redux';
import {returnResults, getCart} from '../ducks/reducer.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      designers: false,
      handbags: false,
      accessories: false, 
      jewelry: false,
      discounted: false,
      searchText: '',
      

    }

    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);

}

//param is going to be one of the properties above.
handleHoverOn(param){
  var x = {}
  x[param] = true;
  this.setState(x)
  // this.setState({
  //   [param]: true
  // })
}

handleHoverOff(param){
  var x = {}
  x[param] = false;
  this.setState(x)
//  this.setState({
//    [param]: false
//  })
}

onSearchChange(e){
  this.setState({
      searchText: e.target.value
  })
}

getResults(){
  axios.get('/api/search?term='+this.state.searchText).then((res)=>{
    this.props.history.push("/search")
      this.props.returnResults(res.data)
  })
}


componentDidMount(){
 this.props.getCart()
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

    var styleList = ()=>{
      if(this.state.handbags){
        return (
          <div>
            <HandbagDropDown/>
          </div>
        )
      }
    }

    return (
     <div className='background'>
          <div className='NavBar1'>
            <div className="Left">
            <div className='InsideLeft'>844.448.LUXE</div>
            <div className='InsideLeft'><Link to='/contact' style={{textDecoration: 'none', color: "white"}}>contact</Link></div>
            

            </div>


            <div className="Right">
              <div className="InsideRight"><Link to ='/login' style={{textDecoration: 'none', color: "white"}}>Login</Link></div>

            
            <div className='InsideRight'><Link to='/cart' style={{textDecoration: 'none', color: "white"}}>
            {/* <FontAwesome
            className="shoppingbag"
            name=  */}
            {/* {<img src={shoppingBag} alt="" color='white' width='50%' height='55%'/>} */}
            Cart({this.props.cart.reduce((sum,items)=>{return sum + (items.quantity)},0)})</Link></div>
            <div className="InsideRight"><Link to='/about' style={{textDecoration: 'none', color: "white"}}>About Us</Link></div>
            <div className="InsideRight"> <Link to='/login' style={{textDecoration: 'none', color: "white"}}>Sell Your Bag</Link></div>
            </div>
            
          </div>

          <div className='Logo'><Link to ='/' style={{textDecoration: 'none', color: "#434343"}}> FASHIONPHILE </Link> </div>

          <div className='NavBar2'>
            <div className= 'InsideNavBar2'>
            <Link to='/newarrivals'style={{textDecoration: 'none', color: '#434343'}}> <div>NEW ARRIVALS</div></Link>
            
            
          
            <div onMouseOver={()=>{this.handleHoverOn('designers')}} onMouseLeave={()=>{this.handleHoverOff('designers')}} >DESIGNERS
            {designerList()}
            </div>
            
            <div onMouseOver={()=>{this.handleHoverOn('handbags')}} onMouseLeave={()=>{this.handleHoverOff('handbags')}}
            >HANDBAGS
            {styleList()}
            </div>
            
            <div onMouseOver={()=>{this.handleHoverOn('accessories')}} onMouseLeave={()=>{this.handleHoverOff('accessories')}}>ACCESSORIES</div>
            
            <div onMouseOver={()=>{this.handleHoverOn('jewelry')}} onMouseLeave={()=>{this.handleHoverOff('jewelry')}}>JEWELRY</div>
            
            <div onMouseOver={()=>{this.handleHoverOn('discounted')}} onMouseLeave={()=>{this.handleHoverOff('discounted')}}>DISCOUNTED</div>

            <div className="Search">
              <input onChange={(e)=>{this.onSearchChange(e)}}></input>
              <button onClick={(e)=>{this.getResults()}}>Search</button>
            </div>
          </div>
          </div>
          <div>
              <Route exact path='/' component={Home}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/login' component={Login}/>
              <Route path='/shop' component={Catalog}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/details/:id' component={Details}/>
              <Route path='/newarrivals' component={NewArrivals}/>
              <Route path='/brand/:brand' component={Brand}/>
              <Route path='/style/:style' component={Style}/>
              <Route path='/search' component={Search}/>
              <Route path='/Admin' component={Admin}/>
              <Route path='/consign'/>
          </div>


          <div className="container3"></div>
          
<div>
  <Footer/>
</div>
    </div> 
    );
  }
}


function mapStateToProps(store){
  return{
      cart: store.cart
  }
}
export default connect(mapStateToProps,{returnResults, getCart})(App);
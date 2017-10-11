import React, { Component } from 'react';
import '../App.css';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import '../css/footer.scss';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from  '../images/twitter.svg';


class Footer extends Component {
    render() {
        return (

            <div className='footer'>
                <div>
                ABOUT US and LOCATIONS
                
                <div className='AboutUs'> 
                <li>
                   Behind the Name</li>
                   <li>Scottsdale</li> 
                    <li>Press</li>
                   <li>Unboxing Videos</li> 
                    <li>Careers</li>
                    
                    </div>
                
                </div>
           
                <div>
                    SHOPPING
                    <div className="Shopping">
                        <li>FAQ</li>
                       <li>Authenticity</li>
                       <li>Certified</li>
                       <li>BuyBacks</li>
                       <li>Sold Items</li>
                       <li>Gift Cards</li>
                       <li>Returns</li>
                       <li>Shipping</li>
                    
                </div>
                </div>

                <div>
                    MY ACCOUNT
                    <div className="MyAcct">
                       <li>Sell Your Bag</li>
                       <li>Consignment</li>
                       <li>Alerts</li>
                       <li>My Purchases</li>
                       <li>My Sales</li>
                       <li>Layaway</li>
                       <li>Wishlist</li>

                     </div>
                </div>

                <div>
                    LET'S SOCIALIZE
                    <div className="socialize">
                    <span>
                    <Link to='https://www.facebook.com/shopluvluxe/'>
                    <img src={facebook}/></Link>
                    <Link to='https://www.instagram.com/luv_luxe/'><img src={instagram}/> </Link>
                    <Link to='https://twitter.com/luv_luxe'><img src={twitter}/></Link>
                    </span>
                    </div>
                </div> 

                <div>
                    <Link to='/Admin'>Admin</Link></div>
            </div>
        );
    }
}

export default Footer;
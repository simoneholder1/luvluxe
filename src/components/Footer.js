import React, { Component } from 'react';
import '../App.css';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import '../css/footer.scss';
import '../images/facebook.svg';
import '../images/instagram.svg';
import '../images/pinterest.svg';
import '../images/twitter.svg';


class Footer extends Component {
    render() {
        return (

            <div className='footer'>
                <div className='AboutUs'> 
                ABOUT US and LOCATIONS
                <ul>
                <li>
                   Behind the Name</li>
                   <li>Scottsdale</li> 
                    <li>Press</li>
                   <li>Unboxing Videos</li> 
                    <li>Careers</li>
                    
                
                </ul>
                
                </div>
           
                <div className="Shopping">
                    SHOPPING
                        <li>FAQ</li>
                       <li>Authenticity</li>
                       <li>Certified</li>
                       <li>BuyBacks</li>
                       <li>Sold Items</li>
                       <li>Gift Cards</li>
                       <li>Returns</li>
                       <li>Shipping</li>
                    
                </div>

                <div className="MyAcct">
                    MY ACCOUNT
                    <li>
                       <li>Sell Your Bag</li>
                       <li>Consignment</li>
                       <li>Alerts</li>
                       <li>My Purchases</li>
                       <li>My Sales</li>
                       <li>Layaway</li>
                       <li>Wishlist</li>

                    </li>
                </div>

                <div className="socialize">
                    LET'S SOCIALIZE
                  <li><img src='../../images/facebook.svg'/></li>  
                    <li><img src='../../images/instagram.svg'/></li>
                    <li><img src='../../images/pinterest.svg'/></li>
                    <li><img src='../../images/twitter.svg'/></li>
                </div> 

            </div>
        );
    }
}

export default Footer;
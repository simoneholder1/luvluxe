import React, { Component } from 'react';
import '../style/css/main.css';
import {Link} from 'react-router-dom';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from  '../images/twitter.svg';
import featuredPress from '../images/featuredPress.gif';


class Footer extends Component {
    render() {
        return (

            <div className='footer'>
                <div className='columns'>
                <div className="left"> 
                    <h3>ABOUT US and LOCATIONS</h3>
                    
                    <div> 
                        <p>Behind the Name</p>
                        <p>Scottsdale</p> 
                        <p>Press</p>
                        <p>Unboxing Videos</p> 
                        <p>Careers</p>    
                     </div>
                
                </div>
           
                <div className="center">
                    <h3>SHOPPING</h3>
                    <div>
                        <p>FAQ</p>
                        <p>Authenticity</p>
                        <p>Certified</p>
                        <p>BuyBacks</p>
                        <p>Sold Items</p>
                        <p>Gift Cards</p>
                        <p>Returns</p>
                        <p>Shipping</p>
                    </div>
                </div>

                <div className= "right">
                    <h3>MY ACCOUNT</h3>
                    <div>
                        <p>Sell Your Bag</p>
                        <p>Consignment</p>
                        <p>Alerts</p>
                        <p>My Purchases</p>
                        <p>My Sales</p>
                        <p>Layaway</p>
                        <p>Wishlist</p>
                     </div>
                </div>

                <div className="links">
                    <h3>LET'S SOCIALIZE</h3>
                    <div className="socialize">
                    <span>
                        <Link to='https://www.facebook.com/shopluvluxe/'>
                    <img src={facebook} alt=""/></Link>
                    <Link to='https://www.instagram.com/luv_luxe/'><img src={instagram} alt=""/> </Link>
                    <Link to='https://twitter.com/luv_luxe'><img src={twitter} alt=""/></Link>
                    
                    </span>
                    </div>
                

                    <div>
                    <Link to='/Admin'>Admin</Link></div>
                
                </div> 


               <div className="Money">
                   <Link to='/consign' style={{textDecoration: 'none', color: "#CCCCCC"}}>Money For Your Bags</Link>
                 <div className='img-container'></div> 
                 <img src={featuredPress} alt=""/>
                </div> 

            </div>


              
                  


   
</div>

           
        );
    }
}

export default Footer;
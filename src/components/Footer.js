import React, { Component } from 'react';
import '../style/css/main.css';
import {Link} from 'react-router-dom';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from  '../images/twitter.svg';
import featuredPress from '../images/featuredPress.gif';
import FontAwesome from 'react-fontawesome';


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
                        <a href='https://www.facebook.com/shopluvluxe/'>
                    <img src={facebook} alt=""/></a>
                    <a  href='https://www.instagram.com/luv_luxe/'><img src={instagram} alt=""/> </a>
                    <a href='https://twitter.com/luv_luxe'><img src={twitter} alt=""/></a>
                    
                    </span>
                    </div>
                

                    <div>
                    <Link to='/Admin'>Admin</Link></div>
                
                </div> 
                </div>

               <div className="Money">
                   <Link to='/consign' style={{textDecoration: 'none', color: "#CCCCCC"}}> 
                   
                   <h1>Money For Your Bags  <FontAwesome
                  className="caret-right"
                  name='caret-right'/> </h1>

                  
                  </Link>
                 <img className='FeaturedPress' src={featuredPress} alt=""/>
                 

                 <p>We are Your Premium Luxury Handbag Outlet. Since 1999, LuvLuxe has worked hard to become the leading and most trusted source in the secondary market for luxury handbags. Buy that irresistible authentic nearly new, vintage, rare or limited edition Louis Vuitton, Hermes, Chanel, Gucci, Balenciaga, Bottega Veneta, Marc Jacobs, Prada, Chloe, Fendi, Christian Dior, and Burberry designer handbags at exceptional value. We can help you clean out your closet, earn quick cash and make room for more amazing bags! You'll always find a great selection of original gently used designer shoulder bags, clutches, totes, wallets, IPad or tablets, luggage, and other lavish accessories at truly affordable prices. Every item goes through an extensive procedure by our skilled experts, to guarantee 100% authenticity. Our success is measured by continuous shopper support and our renowned worldwide luxury handbag selection. LuvLuxe has had the honor to be recognized by: The Wall Street Journal, Good Day LA, Fox 11, Good Morning America, The Today Show, and E! Entertainment TV Live from the Red Carpet Academy Awards--but we are more honored by our loyal customer following.</p>


                <p className="SignOff">We are your Premium Luxury Handbag Outlet © LuvLuxe, LLC</p>
                <p className="Disclaimer">Disclaimer: This website was created by a student for a project. It is not an official business.</p>
                 </div> 
            </div> 

            
                
              
                  


   


           
        );
    }
}

export default Footer;
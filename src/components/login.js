import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div>
                Login

                <a className='auth0' href={`${process.env.REACT_APP_HOSTEDURL}/auth`}>
                     <button className='Login'> Login or Register </button> 
                </a>

                <a href={`${process.env.REACT_APP_HOSTEDURL}/auth/logout`}>
                    <button className='logout buttontheme'> Logout </button> 
                </a>


            </div>
        );
    }
}

export default Login;
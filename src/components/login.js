import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div>
                Login

                <a className='auth0' href={'http://localhost:3030/auth' }>
                     <button className='Login'> Login or Register </button> 
                </a>

                <a href={'http://localhost:3030/auth/logout'}>
                    <button className='logout buttontheme'> Logout </button> 
                </a>


            </div>
        );
    }
}

export default Login;
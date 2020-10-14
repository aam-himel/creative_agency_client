import React from 'react';
import LoginForm from './LoginForm';
import logo from '../../../images/logos/logo.png';
const Login = () => {
    return (
        <div className="container text-center">
            <img src={logo} alt="logo" height="40px"/>
            <LoginForm />
        </div>
    )
}

export default Login;
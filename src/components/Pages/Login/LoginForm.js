import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css';
const LoginForm = () => {
    return (
        <div className="login-form px-5 py-5">
            <h3 className="py-5">Login With</h3>
            <button type="button" class="btn btn-main btn-lg btn-block ">Continue With Google</button>
            <p className="pt-4">
                Dont's have an account? 
                <Link to="login" >Create an account</Link>
            </p>
        </div>
    )
}

export default LoginForm

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg container">
            
            {/* <a class="navbar-brand" href="#">Navbar</a> */}

            <Link to="#" className="navbar-brand">
                <img src={logo} alt="logo" height="40px"/>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active mr-3">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item mr-3">
                    <a class="nav-link" href="#our-works">Our Portfolio</a>
                </li>
                <li class="nav-item mr-3">
                    <a class="nav-link" href="#ourTem">Our Team</a>
                </li>
                <li class="nav-item mr-3">
                    <a class="nav-link" href="#footer">Contact Us</a>
                </li>
                <li class="nav-item">
                    <Link to="login" className="login">
                        <button className="btn btn-main px-4">Login</button>
                    </Link>
                </li>
                </ul>
                
            </div>
        </nav>
    )
}
export default Navbar;
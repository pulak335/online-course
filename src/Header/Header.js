
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img style={{width:'70px'}} src={logo} alt=''></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/serivce">Serivce</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>    
                    </ul>
                        <Link to='/serivce'>
                        <button className="btn btn-outline-danger fw-bold" type="submit">Get started</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
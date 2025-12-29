import { Link } from "react-router-dom";
import { HeaderLogo_URL } from "../utils/constants";
import { useState, useEffect } from "react";    
import {Link} from "react-router-dom"; 

const Header = () => {

    const [btnSignIn, setSignInName] = useState("Sign In");


    // if no dependency array is provided, useEffect will run after every render
    // if an empty dependency array is provided, useEffect will run only once after the initial render
    // if dependecy array is btnSignIn, useEffect will run only when btnSignIn is updated
    useEffect(() => {
        console.log("Header Component Mounted");
    }, [btnSignIn]);

    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src={HeaderLogo_URL} 
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="sign-in" onClick={()=> {setSignInName("SignOut");}}>{btnSignIn}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
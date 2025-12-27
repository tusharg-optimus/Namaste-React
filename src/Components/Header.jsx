import { HeaderLogo_URL } from "../utils/constants";
import { useState } from "react";    

const Header = () => {

    const [btnSignIn, setSignInName] = useState("Sign In");

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="sign-in" onClick={()=> {setSignInName("SignOut");}}>{btnSignIn}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
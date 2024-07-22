import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("login");
    return (
        <div className="header">
            <div className="=logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className="login-btn" onClick={() => {
                // btnNameReact = "logout"; //cant directlt modify
                btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login");
                // console.log(btnNameReact);
            }}>
                {btnNameReact}</button>
        </div>
    )
}

export default Header;  //Explorting a file: M-1
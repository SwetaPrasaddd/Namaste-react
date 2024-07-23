import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("login");
    return (
        <div className="header">
            <div className="=logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className="login-btn" onClick={() => {
                btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login");
            }}>
                {btnNameReact}</button>
        </div>
    )
}

export default Header;  
import React, {useContext} from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import "./NavBar.css";
import logo from './log1.svg';
import {AuthContext} from "../../Authenticate/AuthContext";

const NavBar = () => {
    //assigning location variable
    const location = useLocation();
    const {isAuth, logout} = useContext(AuthContext);

    //destructuring pathname from location
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return(
        <nav className="navbar">
            <div><Link to="/" className="home"><img src={logo} alt="Logo" /></Link></div>
            <ul className="nav-links">
                <li className={splitLocation[1] === "train" ? "active" : ""}>
                <NavLink exact={"true"} to="/train" className="train" activeclassname="train-active">
                    Trenuj
                </NavLink></li>
                <li className={splitLocation[1] === "care" ? "active" : ""}>
                <NavLink exact={"true"} to="/care" className="care" activeclassname="care-active">
                    Opieka
                </NavLink></li>
                {isAuth ||
                <li className={splitLocation[1] === "login" ? "active" : ""}>
                <NavLink to="/login" className="login" activeclassname="login-active">
                   ZALOGUJ / ZAŁÓŻ KONTO
                </NavLink></li>
                }
                {isAuth &&
                <li>
                <Link to="/" className="logout" onClick={logout}>
                   Wyloguj
                </Link></li>
                }
            </ul>
        </nav>
    )

}

export default NavBar

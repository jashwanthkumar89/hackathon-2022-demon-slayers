import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './NavBar.css';

const NavBar = () => {
  const loginAuth = useSelector((state)=>state);
  const ActionDispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
    return (
        <div className="nav-bar">
        {loginAuth && <Link to="/"  className="nav-buttons">
          Home
        </Link>}
        {loginAuth &&<Link to="/qr-code"  className="nav-buttons">
          QRCode
        </Link> }
        {loginAuth &&<Link to="/profile"  className="nav-buttons">
          Profile
        </Link> }
        {!loginAuth && location.pathname.includes("/login") && <Link to="/register"  className="nav-buttons">
          <li> Register </li>
          </Link>}
        {!loginAuth && location.pathname.includes("/register") && <Link to="/login"  className="nav-buttons">
        <li> Login </li>
        </Link>}
        {loginAuth &&<Link to="/login"  className="nav-buttons" onClick={()=>{ActionDispatch({type:"LOGOUT"})}}>
          Logout
        </Link>}
        </div>
    );
}

export default NavBar;
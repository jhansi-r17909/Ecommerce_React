import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import profile_icon from "../Assets/profile_icon.png";
import image from "../Assets/images.png"



import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from '../Assets/nav_dropdown.png';
// import { Link } from "react-router-dom";
function Navbar() {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext)
  const menuRef = useRef()
  const dropdown_toggle=(e)=>{
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle("open")
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={image} alt="" />
        <p>SHOPIFY</p>
      </div>
      <img  className="nav-dropdown" onClick={dropdown_toggle}   src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">Women</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <img src={profile_icon} alt=""/>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">

          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;

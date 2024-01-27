import React from "react";
import reactLogo from "../assets/react.svg"
import "../Styles/navbar.css";
import logo from "../Images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      
      <div>
        <a href="/">
         <img src={logo} className="logo"/>
        </a>
        {/* <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>

      <div>
      <h2>Wasatch Pro Fitness Supply</h2>
      </div>

      <div>
      <a href="/">Home</a>
      <a href="/Products">Products</a>
      <a href="/About">About</a>
      <a href="/Link">Link #3</a>
      </div>

    </div>
  );
};

export default Navbar;

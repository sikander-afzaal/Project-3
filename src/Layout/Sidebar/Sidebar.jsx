import React from "react";
import "./Sidebar.css";
import logo from "../../Assets/logo.png";
// react router-----
import { BrowserRouter as Router, Link } from "react-router-dom";
function Sidebar() {
  const clickHandler = (e) => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("open");
  };
  return (
    <div className="sidebar">
      <i onClick={clickHandler} className="mobile fas fa-times"></i>
      <img className="logo" src={logo} alt="..." />
      <Link to="/" className="nav-text">
        <i className="fas fa-home"></i>
        Dashboard
      </Link>
      <Link to="/mint" className="nav-text">
        <i className="fas fa-theater-masks"></i>
        Mint your masks
      </Link>
      <Link to="/gochi" className="nav-text">
        <i className="fas fa-mask"></i>
        My masks and utilities
      </Link>
      <Link to="/app" className="nav-text">
        <i className="fas fa-mobile"></i>
        Mobile app
      </Link>
      <Link to="/farm" className="nav-text">
        <i className="fas fa-skull-crossbones"></i>
        Rogue staking
      </Link>
      <Link to="/shop" className="nav-text">
        <i className="fas fa-store-alt"></i>
        Rogue marketplace
      </Link>
      <Link to="/verse" className="nav-text">
        <i className="fas fa-meteor"></i>
        Underworld metaverse
      </Link>
    </div>
  );
}

export default Sidebar;

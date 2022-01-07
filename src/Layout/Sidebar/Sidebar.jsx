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
  const activeHandler = (e) => {
    const active = document.querySelector(".active-link");
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("open");
    active.classList.remove("active-link");
    e.target.classList.add("active-link");
  };
  return (
    <div className="sidebar">
      <i onClick={clickHandler} className="mobile fas fa-times"></i>
      <img className="logo" src={logo} alt="..." />
      <Link onClick={activeHandler} to="/" className="nav-text active-link">
        <i className="fas fa-home"></i>
        Dashboard
      </Link>
      <Link onClick={activeHandler} to="/mint" className="nav-text">
        <i className="fas fa-theater-masks"></i>
        Mint your masks
      </Link>
      <Link onClick={activeHandler} to="/gochi" className="nav-text">
        <i className="fas fa-mask"></i>
        My masks and utilities
      </Link>
      <Link onClick={activeHandler} to="/app" className="nav-text">
        <i className="fas fa-mobile"></i>
        Mobile app
      </Link>
      <Link onClick={activeHandler} to="/farm" className="nav-text disabled">
        <i className="fas fa-skull-crossbones"></i>
        Rogue staking
      </Link>
      <Link onClick={activeHandler} to="/shop" className="nav-text disabled">
        <i className="fas fa-store-alt"></i>
        Rogue marketplace
      </Link>
      <Link onClick={activeHandler} to="/verse" className="nav-text disabled">
        <i className="fas fa-meteor"></i>
        Underworld metaverse
      </Link>
      <div className="bottom-sidebar mobile-sidebar">
        <a href="...." className="top-text">
          <i className="fab fa-twitter"></i>
          Twitter
        </a>
        <a href="...." className="top-text">
          <i className="fab fa-telegram"></i>
          Telegram
        </a>
        <a href="...." className="top-text">
          <i className="fas fa-globe"></i>
          Website
        </a>
        <a href="...." className="top-text">
          <i className="fas fa-sticky-note"></i>
          WhitePaper
        </a>
      </div>
    </div>
  );
}

export default Sidebar;

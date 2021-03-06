import React from "react";
import "./Sidebar.css";
import logo from "../../Assets/logo.png";
// react router-----
import { Link } from "react-router-dom";
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
      <Link onClick={activeHandler} to="/mint" className="nav-text ">
        <i className="fas fa-theater-masks"></i>
        Mint your masks
      </Link>
      <Link onClick={activeHandler} to="/gochi" className="nav-text">
        <i className="fas fa-mask"></i>
        My masks and utilities
      </Link>

      <Link
        onClick={activeHandler}
        to="/farm"
        className="nav-text disabled link-abs"
      >
        <i className="fas fa-skull-crossbones"></i>
        Rogue staking <span className="fifty">5100% APY</span>
      </Link>
      <Link onClick={activeHandler} to="/shop" className="nav-text disabled">
        <i className="fas fa-store-alt"></i>
        Rogue marketplace
      </Link>
      <Link onClick={activeHandler} to="/app" className="nav-text disabled">
        <i className="fas fa-mobile"></i>
        Mobile app
      </Link>
      <Link onClick={activeHandler} to="/verse" className="nav-text disabled">
        <i className="fas fa-meteor"></i>
        Underworld metaverse
      </Link>
      <div className="bottom-sidebar mobile-sidebar">
        <a
          target="_blank"
          href="https://twitter.com/gonerogue_io"
          className="top-text"
        >
          <i className="fab fa-twitter"></i>
          Twitter
        </a>
        <a
          target="_blank"
          href="https://t.me/+Da7cFG4nEU4yZTVk"
          className="top-text"
        >
          <i className="fab fa-telegram"></i>
          Telegram
        </a>
        <a target="_blank" href="...." className="top-text">
          <i className="fas fa-globe"></i>
          Website
        </a>
        <a target="_blank" href="...." className="top-text">
          <i className="fas fa-sticky-note"></i>
          WhitePaper
        </a>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./Top-bar.css";
function Topbar({ show }) {
  const clickHandler = (e) => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("open");
  };
  return (
    <div className="topbar">
      <i onClick={clickHandler} className="mobile fas fa-bars"></i>
      <div className="left_topbar">
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
      {show ? (
        <button className="connect-wallet">
          CONNECT <br></br> (Refresh to Update)
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Topbar;

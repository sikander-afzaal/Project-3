import React from 'react'
import "./Sidebar.css"
import logo from "../../Assets/logo.png"
// react router-----
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function Sidebar() {
    const clickHandler = (e) => {
         const sidebar = document.querySelector(".sidebar")
        sidebar.classList.remove("open")
    }
    return (
        <div className='sidebar'>
            <i onClick={clickHandler} className="mobile fas fa-times"></i>
            <img className='logo' src={logo} alt="..." />
                <Link to="/" className="nav-text">
                    <i className="fas fa-home"></i>
                    Dashboard
                    </Link>
                <Link to="/mint" className="nav-text">
                    <i className="fas fa-egg"></i>
                    Mint an Egg
                    </Link>
                <Link to="/gochi" className="nav-text">
                     <i className="fas fa-paw"></i>
                    My Gochis
                    </Link>
                <Link to="/app" className="nav-text">
                    <i className="fas fa-mobile"></i>
                    App
                    </Link>
                <Link to="/farm" className="nav-text">
                       <i className="fas fa-tractor"></i>
                       Gochi Farm
                       </Link>
                <Link to="/shop" className="nav-text">
                    <i className="fas fa-store-alt"></i>
                    Gochi Shop
                    </Link>
                <Link to="/verse" className="nav-text">
                    <i className="fas fa-meteor"></i>
                    Gochi Verse
                    </Link>
        </div>
    )
}

export default Sidebar

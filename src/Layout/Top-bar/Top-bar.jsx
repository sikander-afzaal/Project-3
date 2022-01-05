import React from 'react'
import "./Top-bar.css"
function Topbar() {
    const clickHandler = (e) => {
        const sidebar = document.querySelector(".sidebar")
        sidebar.classList.add("open")
    }
    return (
        <div className='topbar'>
            <i onClick={clickHandler} className="mobile fas fa-bars"></i>
            <div className="left_topbar">
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
            <button className='connect-wallet'>Connect Wallet</button>
        </div>
    )
}

export default Topbar

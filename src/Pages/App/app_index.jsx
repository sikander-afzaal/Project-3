import React from "react";
import "./app_index.css";
import phone from "../../Assets/phone.png";
import appStore from "../../Assets/appstore.png";
import gif from "../../Assets/rotate-logo.gif";
function AppGochi() {
  return (
    <div className="app">
      <div className="app_left anim-left">
        <img src={phone} alt="..." />
        <img src={gif} alt="..." />
      </div>
      <div className="app_right">
        <h1 className="anim-up">App Coming Soon</h1>
        <p style={{ animationDelay: "0.3s" }} className="anim-right">
          We are currently in the process of creating a mobile marketplace app
          where non-crypto currency have the chance to invest into the game via
          rogue masks through our crypto/Fiat gateway
        </p>
        <p style={{ animationDelay: "0.3s" }} className="anim-right">
          The release of this on Google play and App Store Will create a big
          push to mass adoption of the game driving prices up on in game nfts
        </p>
        <img
          style={{ animationDelay: "0.7s" }}
          src={appStore}
          alt="..."
          className="app_img fade-in"
        />
      </div>
    </div>
  );
}

export default AppGochi;

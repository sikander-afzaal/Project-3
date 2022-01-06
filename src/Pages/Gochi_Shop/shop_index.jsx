import React from "react";
import "./shop_index.css";
import logo from "../../Assets/question-logo.png";
function Shop() {
  return (
    <div className="shop">
      <div className="shop_left">
        <img src={logo} alt="" />
      </div>
      <div className="shop_right">
        <h2>HATCH, TRAIN, EARN</h2>
        <h1>MetaGochi Shop</h1>
        <p>
          Our Market Place will allow you to sell your trained MetaGochis to
          others, or buy already trained MetaGochis to use in the MetaGochi
          Games and earn $MGCHI rewards.
        </p>
        <p>
          To be the first to find out when the MetaGotch store will launch join
          our telegram group.
        </p>
        <button className="join-tele">
          <i className="fab fa-telegram"></i>
          Join Our Telegram
        </button>
      </div>
    </div>
  );
}

export default Shop;

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
        <h1>ROGUE MARKETPLACE </h1>
        <p>
          Our online NFT marketplace will allow the sales and buying of rogue
          masks and Ingame utilities
        </p>
        <p>
          As mass adoption from the non-crypto population stream in through the
          app anyone miss surplus masks can take bits start to raise the price
          of their Nfts to sell To people desperate to be 1 of the 100,000 only
          Underworld meta verse inhabitants
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

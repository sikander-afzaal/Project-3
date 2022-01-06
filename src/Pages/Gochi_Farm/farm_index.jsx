import React from "react";
import "./farm_index.css";
import logo from "../../Assets/question-logo.png";
function Farm() {
  const clickHandler = (e) => {
    document
      .querySelector(".button-opacity")
      .classList.remove("button-opacity");
    e.target.classList.add("button-opacity");
  };
  return (
    <div className="farm">
      <div className="farm_left anim-left">
        <h1>Stake your $FKYC tokens to earn extra rewards</h1>

        <div className="farm_btn-div">
          <button onClick={clickHandler}>$FKYC staking</button>
          <button onClick={clickHandler} className="button-opacity">
            POOL STAKING
          </button>
        </div>
        <p>Your pool tokens a free Nft each week</p>
        <button className="farm-wallet connect-wallet">Connect Wallet</button>
      </div>
      <div className="farm_right anim-right">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Farm;

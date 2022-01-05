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
      <div className="farm_left">
        <h1>$MGCHI Farm Token Staking</h1>
        <p>
          Stake your $MGCHI to earn Metagochi eggs that hatch into Metagochi
          creatures that you can train, breed, and earn rewards with by winning
          our GochiGames.
        </p>
        <p>
          New to staking? Check out our FAQ's section here to find out more.
        </p>
        <div className="farm_btn-div">
          <button onClick={clickHandler}>Stake $MGCHI</button>
          <button onClick={clickHandler} className="button-opacity">
            Stake LP (Double Rewards)
          </button>
        </div>
        <button className="farm-wallet connect-wallet">Connect Wallet</button>
      </div>
      <div className="farm_right">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Farm;

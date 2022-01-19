import React, { useEffect } from "react";
import gif from "../../Assets/Flipping-Masks.gif";
import logo from "../../Assets/logo.png";
import "./dashboard_index.css";
function Dashboard({ func2 }) {
  useEffect(() => {
    return func2(true);
  }, [func2]);
  return (
    <div className="dashboard">
      <div className="dashboard_left">
        <img
          style={{ animationDelay: "0.1s" }}
          className="dashboard_logo anim-up"
          src={logo}
          alt=""
        />
        <p
          style={{ animationDelay: "0.2s" }}
          className="dashboard_text anim-up"
        >
          Minting a rogue mask NFT is the only way to enter into this
          underworld, there will only be 100,000 unique masks worldwide each of
          which will grow in value as the game gains in popularity and they are
          resold on the open market place . The mask logs your players progress
          and in game earnings. 1 x mask can be your in game avatar for your
          character to wear as you navigate the metaverse.
        </p>
        <h1 style={{ animationDelay: "0.4s" }} className="but anim-left">
          BUT
        </h1>
        <p
          style={{ animationDelay: "0.5s" }}
          className="dashboard_text anim-up"
        >
          You can purchase multiple masks Up to 10 in fact, which you can then
          use to earn yourself a whopping 5100% APY If you choose to stake them.
          Obviously this will increase the speed in which the masks are minted ,
          as for every mask you mint and hold for seven days you receive another
          one at no extra cost , just the gas fee of approx 2usd per nft Needs
          to be available in your wallet.
        </p>
        <h1 style={{ animationDelay: "0.75s" }} className="nft_drop anim-left">
          FREE NFT AIRDROP
        </h1>
        <p
          style={{ animationDelay: "0.8s" }}
          className="dashboard_text anim-up"
        >
          TO BE ANOUNCED AT A LATER DATE THERE WILL BE REGULAR NFT AIRDROPS.
        </p>
      </div>
      <div className="dashboard_right anim-right">
        <img src={gif} alt="" className="gif" />
      </div>
    </div>
  );
}

export default Dashboard;

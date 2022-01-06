import React from "react";
import gif from "../../Assets/rotate-logo.gif";
import logo from "../../Assets/logo.png";
import "./dashboard_index.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard_left anim-left">
        <img className="dashboard_logo" src={logo} alt="" />
        <p className="dashboard_text">
          Minting a rogue mask NFT is the only way to enter into this
          underworld, there will only be 100,000 unique masks worldwide each of
          which will grow in value as the game gains in popularity and they are
          resold on the open market place The mask logs your players progress
          and in game earnings
        </p>
        <p className="dashboard_text">
          1 x mask can be your in game avatar for your character to wear as you
          navigate the metaverse
        </p>
        <h1 className="but">BUT</h1>
        <p className="dashboard_text">
          you can purchase multiple masks which all vary in rarity and therefore
          are worth on opensea and other marketplaces including our own that
          will also be in dashboard crypto / fiat bridge which allows the non
          crypto late adopters a chance to buy in and pay you handsomely for
          your spare masks just to be able to enter this crazy underworld{" "}
        </p>
        <p className="dashboard_text">
          The first 1000 buyers get a free mask for everyone they buy, we will
          match it
        </p>
        <h1 className="nft_drop">FREE NFT AIRDROP</h1>
        <p className="dashboard_text">
          TO BE ANOUNCED AT A LATER DATE THERE WILL BE REGULAR NFT AIRDROPS ,and
          when the air drop hdashboardens you simply connect your metamask
          wallet and dependant on your $FKYC holdings, if they surpass a pre
          decided amount will determine if you get that free nft sent to your
          wallet{" "}
        </p>
        <p className="dashboard_text">
          {" "}
          All NFTs dropped will go into your in game "Rogue utility package" To
          give you an edge towards conquering The underworld.
        </p>
      </div>
      <div className="dashboard_right anim-right">
        <img src={gif} alt="" className="gif" />
      </div>
    </div>
  );
}

export default Dashboard;

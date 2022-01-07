import React from "react";
import gif from "../../Assets/rotate-logo.gif";
import logo from "../../Assets/logo.png";
import "./dashboard_index.css";
function Dashboard() {
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
          resold on the open market place The mask logs your players progress
          and in game earnings
        </p>
        <p
          style={{ animationDelay: "0.3s" }}
          className="dashboard_text anim-up"
        >
          1 x mask can be your in game avatar for your character to wear as you
          navigate the metaverse
        </p>
        <h1 style={{ animationDelay: "0.4s" }} className="but anim-left">
          BUT
        </h1>
        <p
          style={{ animationDelay: "0.5s" }}
          className="dashboard_text anim-up"
        >
          you can purchase multiple masks which all vary in rarity that are
          worth” more “ on opensea And other market places Including our own
          which will be on the dashboard. We are also creating a crypto/fiat
          bridge. <br></br> which allows the non crypto late adopters a chance
          to buy in and pay you handsomely for your spare masks just to be able
          to enter this crazy underworld{" "}
        </p>
        <p
          style={{ animationDelay: "0.55s" }}
          className="dashboard_text anim-up"
        >
          The first 1000 buyers get a free mask for everyone they buy, we will
          match it
        </p>
        <h1 style={{ animationDelay: "0.75s" }} className="nft_drop anim-left">
          FREE NFT AIRDROP
        </h1>
        <p
          style={{ animationDelay: "0.8s" }}
          className="dashboard_text anim-up"
        >
          TO BE ANOUNCED AT A LATER DATE THERE WILL BE REGULAR NFT AIRDROPS ,and
          when the air drop hdashboardens you simply connect your metamask
          wallet and dependant on your $FKYC holdings, if they surpass a pre
          decided amount will determine if you get that free nft sent to your
          wallet{" "}
        </p>
        <p
          style={{ animationDelay: "0.85s" }}
          className="dashboard_text anim-up"
        >
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

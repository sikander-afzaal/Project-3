import React from "react";
import "./gochi_index.css";
function Gochi() {
  return (
    <div className="gochi">
      <h1 className="anim-up">MY MASKS AND UTILITIES </h1>
      <p className="anim-up">
        All you need to do is connect your MetaMask to see your masks or any NFT
        drops that of landed to you on this page, check in the telegram group to
        keep an eye on the updated reveal date
      </p>
      <button className="gochi_connect connect-wallet anim-down">
        Press this button to refresh to check for your masks if they don’t
        immediately appear
      </button>
    </div>
  );
}

export default Gochi;

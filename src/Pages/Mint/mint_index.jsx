import React, { useState } from "react";
import "./mint_index.css";
import item from "../../Assets/question-logo.png";
function Mint() {
  const [number, setNumber] = useState(1);
  const [array, setArray] = useState([item]);
  const increment = (e) => {
    if (number <= 49 && number >= 0) {
      setNumber((prev) => {
        return (prev = prev + 1);
      });
      setArray((prev) => {
        return [...prev, item];
      });
    } else {
      return;
    }
  };
  const decrement = (e) => {
    if (number <= 50 && number >= 1) {
      setNumber((prev) => {
        return (prev = prev - 1);
      });
      setArray((prev) => {
        prev.pop();
        return prev;
      });
    } else {
      return;
    }
  };
  return (
    <div className="mint">
      <div className="left_mint anim-left">
        <h1>Mint a Mask</h1>
        <p>
          After connecting your MetaMask wallet You can choose the amount of
          masks that you want to mint, choose a number then hit the “ mint
          masks” button You will then Be able to come into this page and view
          them any time you want by just connecting a MetaMask wallet,, On the
          reveal date you’re lucky box rogue mask With varying rarity will be
          visible to you The first 1000 Buyers of rogue masks Will get 2 for the
          price of 1 For example if you choose to mint five masks, we will give
          you another five for free which then you can sell on the open market
          place either OpenSea or our own Rogue marketplace , I remember no mask
          no entry to the underworld
        </p>

        <p>Masks to Mint</p>
        <div className="additon-div">
          <p onClick={decrement} className="minus">
            -
          </p>
          <p className="number">{number}</p>
          <p onClick={increment} className="plus">
            +
          </p>
          <button className="mint_connect connect-wallet">
            Connect Wallet
          </button>
        </div>
        <div className="item_div">
          <img src={item} alt="..." />;
        </div>
      </div>
      <div className="right_mint anim-right">
        <div className="box">
          <h2>Want a limited Edition Twin Mask?</h2>
          <p>
            For a limited time only we're offering all holders with more than
            15T $MGCHI tokens limted edition twin masks.
          </p>
          <p>Each twin mask NFT will grant you two NFT's on hatching day.</p>
          <h2>Your Tokens:</h2>
          <p className="not_enough">
            You don't have enough $MGCHI for a twin mask
          </p>
          <button className="buy-more">Buy More</button>
        </div>
      </div>
    </div>
  );
}

export default Mint;

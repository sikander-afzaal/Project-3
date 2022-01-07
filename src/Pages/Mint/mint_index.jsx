import React, { useState } from "react";
import "./mint_index.css";
import item from "../../Assets/small-logo.png";
function Mint() {
  const [array, setArray] = useState([1]);
  const clickHandlerMinus = (e) => {
    if (array.length <= 50 && array.length >= 0) {
      const copy = [...array];
      copy.splice(0, 1);
      setArray(copy);
    }
  };
  const clickHandlerPlus = (e) => {
    if (array.length <= 49 && array.length >= 0) {
      setArray((prev) => {
        return [...prev, prev.length + 1];
      });
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
          <div className="calc">
            <p onClick={clickHandlerMinus} className="minus">
              -
            </p>
            <p className="number">{array.length}</p>
            <p onClick={clickHandlerPlus} className="plus">
              +
            </p>
          </div>

          <button className="mint_connect connect-wallet">
            Connect Wallet
          </button>
        </div>
        <div className="item_div">
          {array.map((elem, index) => {
            return (
              <img className="anim-left" key={index} src={item} alt="..." />
            );
          })}
        </div>
      </div>
      <div className="right_mint anim-right">
        <div className="box">
          <h2>BUY $FKYC on UNISWAP</h2>
          <p>connect to uni swap To Buy $FKYC Tokens,</p>
          <p>
            dependent on your size of token holdings will depend on the level of
            utility pack you get later in our free “Rogue utilities airdrop”
          </p>
          <h2>Your Tokens:</h2>
          <p className="not_enough">
            Increase your holdings of $FKYC tokens To qualify for utility drops
            further into our roadmap
          </p>
          <button className="buy-more">Buy More</button>
        </div>
      </div>
    </div>
  );
}

export default Mint;

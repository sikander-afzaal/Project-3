import React, { useState, useEffect } from "react";
import "./mint_index.css";
import item from "../../Assets/small-logo.png";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
function Mint({ func, func2 }) {
  useEffect(() => {
    return func2(false);
  }, []);
  const [array, setArray] = useState([1]);
  const clickHandlerMinus = (e) => {
    if (array.length <= 10 && array.length >= 0) {
      const copy = [...array];
      copy.splice(0, 1);
      setArray(copy);
    }
  };
  const clickHandlerPlus = (e) => {
    if (array.length <= 9 && array.length >= 0) {
      setArray((prev) => {
        return [...prev, prev.length + 1];
      });
    }
  };
  return (
    <div className="mint">
      <div className="left_mint anim-left">
        <img
          style={{ animationDelay: "0.1s" }}
          className="dashboard_logo anim-up mint-lo"
          src={logo}
          alt=""
          style={{ marginBottom: "14px" }}
        />
        <h1>Mint a Mask</h1>
        <p>
          After connecting your MetaMask wallet you can choose the amount of
          masks that you want to mint to a maximum of 10 per wallet. Then just
          hit the “mint masks” Button You can go into your “My masks and
          utilities” Page any time you want , by connecting your MetaMask wallet
          to see your mask and airdrop holdings From the “ masks And utilities”
          Page you can also choose to stake your masks to earn a massive 5100%
          APY.<br></br>
          <br></br>
          <strong> MASKS ARE MINTED USING BINANCE SMART CHAIN $BNB</strong>
        </p>
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

          <button
            className="mint_connect connect-wallet"
            onClick={() => {
              func(array.length);
            }}
          >
            MINT YOUR MASK WITH BNB
          </button>
        </div>
        <Link
          style={{ textDecoration: "none", margin: "20px 0px" }}
          to="/gochi"
        >
          <button className="mint_connect connect-wallet">
            VIEW YOUR MASKS
          </button>
        </Link>
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
          <button style={{ alignSelf: "center" }} className="buy-more">
            BUY $FKYC on PancakeSwap
          </button>
          <p>
            The more $FKYC you hold, the better you’re free utility pack will be
            on AirDrop day
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mint;

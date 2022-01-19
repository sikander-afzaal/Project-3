import React, { useEffect, useState } from "react";
import "./gochi_index.css";
import item from "../../Assets/small-logo.png";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
function Gochi({ number, func, func2 }) {
  const [array, setArray] = useState([]);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    func2(false);
    setArray([]);
    for (let index = 1; index <= number; index++) {
      setArray((prev) => {
        return [...prev, index];
      });
    }
  }, [number]);
  const checkHandler = (e) => {
    if (selected >= 0) {
      if (e.target.checked) {
        setSelected((prev) => {
          return prev + 1;
        });
      } else {
        setSelected((prev) => {
          return prev - 1;
        });
      }
    }
    console.log(selected);
  };
  return (
    <div className="gochi">
      <img
        style={{ animationDelay: "0.1s" }}
        className="dashboard_logo anim-up gochi-img"
        src={logo}
        alt=""
        style={{ marginBottom: "40px", maxWidth: "40%" }}
      />
      <h1 style={{ textDecoration: "underline" }} className="anim-up">
        MY MASKS AND UTILITIES{" "}
      </h1>
      <p className="fade-in">
        All you need to do is connect your MetaMask to see your masks or any NFT
        drops.
      </p>
      <h1 className="anim-up">MY ROGUE MASKS</h1>{" "}
      <p className="fade-in">Click on each mask you want to stake</p>
      <div className="item_div2 util">
        {array.map((elem, index) => {
          return (
            <label
              onClick={(e) => {
                if (e.target.classList.contains("box-mask")) {
                  e.target.classList.toggle("bigger");
                }
              }}
              htmlFor={index}
              key={index}
              className="box-mask"
            >
              <img
                style={{ pointerEvents: "none" }}
                className="anim-left"
                src={item}
                alt="..."
              />
              <input
                onClick={checkHandler}
                type="checkbox"
                name="name"
                id={index}
                style={{ display: "none", pointerEvents: "none" }}
              />
            </label>
          );
        })}
      </div>
      <h1 className="anim-up">MY STAKING REWARDS</h1>{" "}
      <div className="item_div2 util"></div>
      <Link
        onClick={() => {
          func(selected);
        }}
        to="/farm"
        className="gochi_connect connect-wallet anim-down"
      >
        Stake My Mask
      </Link>
    </div>
  );
}

export default Gochi;

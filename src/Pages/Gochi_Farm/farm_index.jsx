import React, { useEffect, useState } from "react";
import "./farm_index.css";
import logo from "../../Assets/rotate-logo.gif";
import item from "../../Assets/small-logo.png";
import logo2 from "../../Assets/logo.png";
function Farm({ number, func2 }) {
  const [array, setArray] = useState([]);
  useEffect(() => {
    func2(false);
    setArray([]);
    for (let index = 1; index <= number; index++) {
      setArray((prev) => {
        return [...prev, index];
      });
    }
  }, [number]);
  const clickHandler = (e) => {
    document
      .querySelector(".button-opacity")
      .classList.remove("button-opacity");
    e.target.classList.add("button-opacity");
  };
  return (
    <div className="farm">
      <div className="farm_left">
        <img
          style={{ animationDelay: "0.1s" }}
          className="dashboard_logo anim-up"
          src={logo2}
          alt=""
          style={{ marginBottom: "40px" }}
        />
        <h1 className="anim-up">Stake your masks to earn extra rewards</h1>
        <div className="item_div2 util2">
          {array.map((elem, index) => {
            return (
              <img key={index} className="anim-left" src={item} alt="..." />
            );
          })}
        </div>
        <div className="farm_btn-div fade-in">
          <button onClick={clickHandler} className="button-opacity">
            STAKE MASKS
          </button>
          <button onClick={clickHandler}>UNSTAKE MASKS</button>
        </div>
        <p className="fade-in">
          You will receive your rewards every seven days staked
        </p>
      </div>
      <div className="farm_right anim-right">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Farm;

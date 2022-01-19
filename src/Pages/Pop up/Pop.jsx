import React, { useState, useEffect } from "react";
import "./Pop.css";
import logo from "../../Assets/logo.png";
function Pop() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);

  const clickHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={`overlay ${open ? "open-pop-ov" : ""}`}></div>
      <div className={`pop ${open ? "open-pop" : ""}`}>
        <img src={logo} alt="" />
        <h1>Minting is not live yet</h1>
        <p>You can test the website demo</p>
        <i onClick={clickHandler} className="pop-close fas fa-times"></i>
      </div>
    </>
  );
}

export default Pop;

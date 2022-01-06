import React from "react";
import logo from "../../Assets/question-logo.png";
import "./verse_index.css";
function Verse() {
  return (
    <div className="verse">
      <div className="verse_right">
        <h1>Underworld Metaverse</h1>
        <h2>Ready To Dive In?</h2>
        <p>
          The concept for the Metaverse may change as we progress through
          development, but ultimately we envision a full Metagochi Metaverse
          where you can train your Metagochi in order to have a stronger chance
          of winning Metagochi Games and earning rewards in the form of unique
          NFT eggs, $MGCHI tokens and items to be used in the game.
        </p>
        <p>
          As we expand the development of the Metagochi Metaverse we will be
          creating an augmented reality metaverse where you will be able to
          train and interact with your Metagochi in the real world..
        </p>
        <button className="join-tele">
          <i className="fab fa-telegram"></i>
          Join Our Telegram
        </button>
      </div>
      <div className="verse_left">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Verse;

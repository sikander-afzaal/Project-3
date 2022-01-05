import React from 'react'
import "./mint_index.css"
import item from "../../Assets/question-logo.png"
function Mint() {
    return (
        <div className='mint'>
            <div className="left_mint">
                <h1>Mint an Egg</h1>
                <p>Select the amount of Metagochi eggs you want to mint below & hit "Mint My Eggs" to mint.
After you mint your Metagochi eggs, you will be able to name them, and wait for the live "hatching" event! After your Metagochi egg hatches into a Metagochi creature, you will be able to train your Metagochi using our Metagochi training games to evolve to a higher level, breed Metagochi's with others, and earn rewards.</p>
        
            <p>Eggs to Mint</p>
            <div className="additon-div">
                <p className="minus">-</p>
                <p className="number">1</p>
                <p className="plus">+</p>
               <button className='mint_connect connect-wallet'>Connect Wallet</button>
            </div>
            <div className="item_div">
                <img src={item} alt="..." />
            </div>
            </div>
            <div className="right_mint">
                <div className="box">
                <h2>Want a limited Edition Twin Egg?</h2>
                <p>For a limited time only we're offering all holders with more than 15T $MGCHI tokens limted edition twin eggs.</p>
                <p>Each twin egg NFT will grant you two NFT's on hatching day.</p>
                <h2>Your Tokens:</h2>
                <p className="not_enough">You don't have enough $MGCHI for a twin egg</p>
                <button className="buy-more">Buy More</button>
                </div>
            </div>
        </div>
    )
}

export default Mint

import React from 'react'
import "./app_index.css"
import phone from "../../Assets/phone.png"
import appStore from "../../Assets/appstore.png"
import gif from "../../Assets/rotate-logo.gif"
function AppGochi() {
    return (
        <div className='app'>
            <div className="app_left">
                <img src={phone} alt="..." />
                <img src={gif} alt="..." />
            </div>
            <div className="app_right">
                <h1>App Coming Soon</h1>
                <p>Hatch, train and raise your MetaGochis directly from our MetaGochi app. Available on iPhone and Android our MetaGochi app will allow you to import your MetaGochi NFT's directly into the mobile app.</p>
                <p>Train your MetaGochi's on the go and watch your unique MetaGochi NFT play and grow. Then take your MetaGochi to the MetaVerse to earn real $MGCHI tokens or sell your well trained MetaGochis in our store.</p>
                <img src={appStore} alt="..." className="app_img" />
            </div>
        </div>
    )
}

export default AppGochi

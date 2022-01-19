import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Layout/Sidebar/Sidebar.jsx";
import Topbar from "./Layout/Top-bar/Top-bar.jsx";
import AppGochi from "./Pages/App/app_index.jsx";
import Dashboard from "./Pages/Dashboard/dashboard_index.jsx";
import Gochi from "./Pages/Gochi/gochi_index.jsx";
import Farm from "./Pages/Gochi_Farm/farm_index.jsx";
import Shop from "./Pages/Gochi_Shop/shop_index.jsx";
import Verse from "./Pages/Gochi_Verse/verse_index.jsx";
import Mint from "./Pages/Mint/mint_index.jsx";
import Pop from "./Pages/Pop up/Pop.jsx";
//react router -----------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mask, setMask] = useState(0);
  const [stake, setStaked] = useState(0);
  const [show, setShow] = useState(true);
  const mintedMask = (mintedMask) => {
    setMask(mintedMask);
  };
  const stakedMask = (staked) => {
    setStaked(staked);
  };
  const func = (variable) => {
    setShow(variable);
  };
  return (
    <div className="App">
      <Pop />
      <BrowserRouter>
        <Sidebar />
        <div className="right">
          <Topbar show={show} />
          <Routes>
            <Route path="/" element={<Dashboard func2={func} />} />
            <Route
              path="/mint"
              element={<Mint func2={func} func={mintedMask} />}
            />
            <Route
              path="/gochi"
              element={<Gochi func2={func} func={stakedMask} number={mask} />}
            />
            <Route
              path="/farm"
              element={<Farm func2={func} number={stake} />}
            />
            <Route path="/verse" element={<Verse func2={func} />} />
            <Route path="/shop" element={<Shop func2={func} />} />
            <Route path="/app" element={<AppGochi func2={func} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

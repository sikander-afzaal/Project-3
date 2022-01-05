import "./App.css";
import Sidebar from "./Layout/Sidebar/Sidebar.jsx";
import Topbar from "./Layout/Top-bar/Top-bar.jsx";
import AppGochi from "./Pages/App/app_index.jsx";
import Dashboard from "./Pages/Dashboard/dashboard_index.jsx";
import Gochi from "./Pages/Gochi/gochi_index.jsx";
import Farm from "./Pages/Gochi_Farm/farm_index.jsx";
import Shop from "./Pages/Gochi_Shop/shop_index.jsx";
import Verse from "./Pages/Gochi_Verse/verse_index.jsx";
import Mint from "./Pages/Mint/mint_index.jsx";
//react router -----------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="right">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/gochi" element={<Gochi />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/verse" element={<Verse />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/app" element={<AppGochi />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

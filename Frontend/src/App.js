import { Routes, Route } from "react-router-dom";
import "./App.css";
// import ConnectButtonContainer from "./components/ConnectButton";

import Home from "./slug/Home";
import Header from "./components/Header";
import Merchandise from "./slug/Merchandise";
import Social from "./slug/Social";
import Polls from "./slug/Polls";
import Recycle from "./slug/Recycle";
import Fun from "./slug/Fun";
import Engage from "./slug/Engage";
import Scan from "./slug/Scan";
import Modal from "./slug/Modal";
import CustomCanvas from "./slug/Canvas";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/recycle" element={<Recycle />} />
        <Route path="/live-polls" element={<Polls />} />
        <Route path="/engage-social" element={<Social />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/engage/experience" element={<CustomCanvas />} />
      </Routes>
    </div>
  );
}

export default App;

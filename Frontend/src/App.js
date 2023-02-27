import { Routes, Route, } from "react-router-dom";
import "./App.css";
// import ConnectButtonContainer from "./components/ConnectButton";
import { Box } from "@mui/material";

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

function App() {
  return (
    <div className="App">
      <Box
        className="MainApp"
      >
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
        </Routes>
      </Box>
    </div>
  );
}

export default App;

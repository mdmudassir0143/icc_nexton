import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import CustomCanvas from "./slug/Canvas";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Cheers from "./slug/Cheers";
import Dispose from "./slug/Dispose";
import Camera from "./slug/Camera";
import DustbinCamera from "./slug/DustbinCamera"
import DisposeYourself from "./slug/DisposeYourself";
import Footer from "./components/Footer";

function App() {
  const [logged, isLogged] = useState(false);
  const [isTicket, setIsticket] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Login logged={logged} setLogged={isLogged} />}
        />

        <Route path="/signup" element=<Signup /> />

        <Route
          path="/scan"
          element={
            <Scan
              isLogged={isLogged}
              setIsticket={setIsticket}
              setLogged={isLogged}
            />
          }
        />

        <Route path="/camera" element=<Camera /> />
        <Route path="/dustbincamera" element=<DustbinCamera /> />

        <Route path="/home" element={<Home logged={logged} />} />
        <Route path="disposeyourself" element={<DisposeYourself />} />
        
        {/* REWARD ROUTES */}
        <Route path="/rewards">
          <Route path="dispose" element={<Dispose />} />

          <Route
            path="polls"
            element={
              <Polls
                logged={logged}
                isTicket={isTicket}
                setIsticket={setIsticket}
              />
            }
          />
          <Route
            path="social"
            element={
              <Social
                logged={logged}
                isTicket={isTicket}
                setIsticket={setIsticket}
              />
            }
          />
        </Route>

        {/* STADIUM INTERACTIONS */}
        <Route path="/interactions">
          <Route
            path="fan-movements"
            element={<Engage lisTicket={isTicket} setIsticket={setIsticket} />}
          />
          <Route path="modal" element={<CustomCanvas />} />
          <Route path="cheers" element={<Cheers />} />
          <Route
            path="fun-activities"
            element={
              <Fun
                logged={logged}
                isTicket={isTicket}
                setIsticket={setIsticket}
              />
            }
          />
        </Route>

        {/* EXPLORE MORE */}
        <Route path="/explore">
          <Route path="merchandise" element={<Merchandise />} />
        </Route>

        {/* UNUSED */}
        <Route
          path="/recycle"
          element={
            <Recycle
              logged={logged}
              isTicket={isTicket}
              setIsticket={setIsticket}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

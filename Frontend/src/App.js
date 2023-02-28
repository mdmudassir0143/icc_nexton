import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
// import Modal from "./slug/Modal";
import CustomCanvas from "./slug/Canvas";
// import SignIn from "./slug/Signin";
import { useState, useEffect } from "react";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Cheers from "./slug/Cheers";
import Dispose from "./slug/Dispose";
import Camera from "./slug/Camera";

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
        <Route path="/home" element={<Home logged={logged} />} />
        <Route
          path="/engage"
          element={<Engage lisTicket={isTicket} setIsticket={setIsticket} />}
        />
        <Route
          path="/engage/experience"
          element={<CustomCanvas />}
        />
        <Route
          path="/fun"
          element={
            <Fun
              logged={logged}
              isTicket={isTicket}
              setIsticket={setIsticket}
            />
          }
        />
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
        <Route
          path="/live-polls"
          element={
            <Polls
              logged={logged}
              isTicket={isTicket}
              setIsticket={setIsticket}
            />
          }
        />
        <Route
          path="/engage-social"
          element={
            <Social
              logged={logged}
              isTicket={isTicket}
              setIsticket={setIsticket}
            />
          }
        />
        <Route path="/merchandise" element={<Merchandise />} />
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
        {/* <Route path="/modal" element={<Modal />} /> */}
        <Route path="/modal" element={<CustomCanvas />} />
        <Route path="/cheers" element={<Cheers />} />
        <Route path="/dispose" element={<Dispose />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </div>
  );
}

export default App;

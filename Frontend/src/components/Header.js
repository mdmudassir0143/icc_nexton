// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../assets/css/header.css";

import logo from '../assets/img/logo.png'

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="left">
        {/* <MenuIcon style={{ color: "white" }} fontSize="large" /> */}
        <Button
          onClick={() => navigate("/")}
        >
          <img 
            src={logo}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Button>
      </div>
      {/* <div className="right">
        <AccountBalanceWalletIcon style={{ color: "white" }} fontSize="large" />
        <AccountBoxIcon style={{ color: "white" }} fontSize="large" />
      </div> */}
      <div className="Button">
        <ConnectButton
          chainStatus="icon"
          showBalance={false}
          // accountStatus="avatar"
        />
      </div>
    </div>
  );
}

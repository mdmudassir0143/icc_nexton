// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <MenuIcon style={{ color: "white" }} fontSize="large" />
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

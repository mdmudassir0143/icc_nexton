import "./home.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

export default function Home() {
  return (
    <div className="container">
      <p className="welcome_msg">Welcome to ICC neXton</p>
      <div className="float_scan_ticket">
        <span className="icon">
          <QrCodeScannerIcon style={{ fontSize: "40px" }} />
        </span>
        Scan Ticket to enter neXton
      </div>
      <div className="home_banner">
        <img
          src="https://e0.pxfuel.com/wallpapers/333/748/desktop-wallpaper-pes-2017-release-date-announced-last-gen-pc-versions-20-cheaper.jpg"
          height="100%"
          width="100%"
        />
      </div>
      <p className="section_heading">Stadium interactions</p>
      <div className="controls">
        <div className="btn btn_order_food">Engage Fan movement</div>
        <div className="btn btn_live_bet">🎮</div>
      </div>
      <p className="section_heading">Earn Rewards</p>
      <div className="merchandise">
        <div className="btn">Share your social media engagement</div>
      </div>
      <div className="merchandise">
        <div className="btn">Get directions to your seat</div>
      </div>
      <div className="merchandise">
        <div className="btn">Book parking slot</div>
      </div>
      <div className="merchandise">
        <div className="btn">Book Stay near your stadium</div>
      </div>
      <p className="section_heading">Explore</p>
      <div className="controls">
        <div className="btn btn_order_food">Buy Ticket</div>
        <div className="btn btn_live_bet">Games Schedules</div>
      </div>
      <div className="merchandise">
        <div className="btn">Checkout the official merchandise</div>
      </div>
    </div>
  );
}

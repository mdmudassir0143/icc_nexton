import Home from "./slug/Home";
import "./App.css";
import Header from "./components/Header";
// import ConnectButtonContainer from "./components/ConnectButton";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ConnectButtonContainer/> */}
      <Home />
    </div>
  );
}

export default App;

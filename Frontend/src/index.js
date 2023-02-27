import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';

// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
// // import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";

// const { chains, provider } = configureChains(
//   [mainnet, polygon, optimism, arbitrum],
//   [
//     // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
//     publicProvider(),
//   ]
// );
// const { connectors } = getDefaultWallets({
//   appName: "My Wallet",
//   chains,
// });
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <WagmiConfig client={wagmiClient}>
//       <RainbowKitProvider chains={chains} modalSize="compact" >
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//       </RainbowKitProvider>
//     </WagmiConfig>
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);


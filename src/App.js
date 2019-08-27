import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import "./App.css";

import { Connectors } from 'web3-react'
import Web3Provider from 'web3-react'
import TopNav from "./components/topNav/TopNav";

import './global.scss';

const { InjectedConnector, NetworkOnlyConnector } = Connectors

const MetaMask = new InjectedConnector({ supportedNetworks: [1,2,3,4] })

const Infura = new NetworkOnlyConnector({
  providerURL: process.env.REACT_APP_INFURA_URI
})

const connectors = { MetaMask, Infura }

function App() {
  return (
    <Web3Provider
      connectors={connectors}
      libraryName={'ethers.js'|'web3.js'|null}>
    <div className="App">
      <Router>
        <TopNav />
        <Routes />
      </Router>
    </div>
     </Web3Provider>
  );
}

export default App;
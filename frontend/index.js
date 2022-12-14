// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { HelloNEAR } from "./near-interface";
import { Wallet } from "./near-wallet";

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });

const helloNEAR = new HelloNEAR({
  contractId: process.env.CONTRACT_NAME,
  walletToUse: wallet
});
// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();

  ReactDOM.render(
    <App isSignedIn={isSignedIn} helloNEAR={helloNEAR} wallet={wallet} />,
    // <h1>Hello</h1>,
    document.getElementById("root")
  );
};

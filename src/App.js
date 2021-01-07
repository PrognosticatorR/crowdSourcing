import React, { useEffect, useState } from "react";
import getWeb3 from "./getWeb3";
import "./App.css";

const App = () => {
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [contract, setContract] = useState(null);

  useEffect(() => {
    setupWeb3();
  }, []);

  const setupWeb3 = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      /*    const instance = await new web3.eth.Contract(
        WeenusTokenABI,
        contractAddress
      ); */
      window.web3 = web3;
      setAccounts(accounts);
      // setContract(instance);
      web3.eth.defaultAccount = accounts[0];
      setLoading(false);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
  return loading || !window.web3 ? (
    <div className="text-center">Loading Web3, accounts, and contract...</div>
  ) : (
    <div className="App text-center">
      {/* <Home web3={web3} contract={contract} accounts={accounts} /> */}
      <h1>Loading Completed</h1>
    </div>
  );
};

export default App;

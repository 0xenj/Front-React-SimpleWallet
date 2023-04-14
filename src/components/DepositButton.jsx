import * as React from 'react';
import { ethers } from "ethers";

function Deposit() {
  const [amount, setAmount] = React.useState('');
  const myAbi = require('../abi.json');

  const contractAddress = "0xf5c9ab149837599be6460ce01ee53148299c5ad7";
  const abi = myAbi;
  const providerEth = new ethers.providers.Web3Provider(window.ethereum);
  const signer = providerEth.getSigner();

  const handleDepositClick = async () => {

    const SimpleWallet = new ethers.Contract(contractAddress, abi, signer);
    await SimpleWallet.deposit({ value: ethers.utils.parseEther(amount) });
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter an amount"
        value={amount}
        onChange={handleAmountChange}
        className="w-36 h-8 border border-gray-400 rounded-md px-3 py-2 mb-4"
      />
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full w-36 h-8 flex items-center justify-center"
        onClick={handleDepositClick}
      >Deposit</button>
    </div>
  );
}

export default Deposit;

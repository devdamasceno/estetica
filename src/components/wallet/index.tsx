import { useState, useEffect } from 'react';
import Web3 from 'web3';
import styles from './styles.module.css';

declare let window: any;

export function Wallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum as any);
      setWeb3(web3Instance);
    } else {
      setError('MetaMask not installed. Please install MetaMask to use this feature.');
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (!web3) return;
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (err) {
      setError('Failed to connect to MetaMask.');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
  };

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}
      {!account ? (
        <button className={styles.button} onClick={connectWallet}>
          Wallet
        </button>
      ) : (
        <div className={styles.account}>
          <p>Carteira: {account}</p>
          <button className={styles.button} onClick={disconnectWallet}>
            Desconectar
          </button>
        </div>
      )}
    </div>
  );
};

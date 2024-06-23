import { ExternalProvider } from '@ethersproject/providers';

interface Window {
  ethereum?: ExternalProvider & {
    isMetaMask?: boolean;
  };
}

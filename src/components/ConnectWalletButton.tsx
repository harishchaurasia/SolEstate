"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const ConnectWalletButton = () => {
  return (
    <div className="flex justify-center mt-8">
      <WalletMultiButton />
    </div>
  );
};

export default ConnectWalletButton;

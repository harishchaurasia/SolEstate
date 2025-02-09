import Image from "next/image";
import LandingPage from "@/components/LandingPage";
import ConnectWalletButton from "@/components/ConnectWalletButton";

export default function Home() {
  return (
    <div>
      <LandingPage />;{/* <ConnectWalletButton /> */}
    </div>
  );
}

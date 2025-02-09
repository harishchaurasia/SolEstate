import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faWallet,
  faFileInvoice,
  faBuilding,
  faQuestionCircle,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

interface SidebarProps {
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ setActiveTab }: SidebarProps) => {
  const router = useRouter();
  return (
    <div className="h-screen w-64 bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white flex flex-col p-4 shadow-lg fixed">
      <h2 className="text-2xl font-bold text-center mb-10">Dashboard</h2>

      <nav className="space-y-4">
        <button
          onClick={() => setActiveTab("loan_offers")}
          className="flex items-center space-x-3 w-full p-3 rounded hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faBuilding} />
          <span>Loan Offers</span>
        </button>

        <button
          onClick={() => setActiveTab("browse_loans")}
          className="flex items-center space-x-3 w-full p-3 rounded hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faBuilding} />
          <span>Browse Loans</span>
        </button>

        <button
          onClick={() => setActiveTab("wallet")}
          className="flex items-center space-x-3 w-full p-3 rounded hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faWallet} />
          <span>Wallet</span>
        </button>

        <button
          onClick={() => setActiveTab("investment_portfolio")}
          className="flex items-center space-x-3 w-full p-3 rounded hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faBuilding} />
          <span>Investment Portfolio</span>
        </button>
        <button
          // onClick={() => setActiveTab("emi_payments")}
          onClick={() => router.push("/makepayment")}
          className="flex items-center space-x-3 w-full p-3 rounded hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faFileInvoice} />
          <span>EMI Payments</span>
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className="flex items-center space-x-3 w-full p-3 rounded hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </button>

        <button
          onClick={() => setActiveTab("support")}
          className="flex items-center space-x-3 w-full p-3 rounded hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>Support</span>
        </button>

        <button className="flex items-center space-x-3 w-full p-3 rounded hover:bg-red-700 mt-8">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-[#100c08] text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold font-San Serif">
          <Link href="/" className=" hover:text-orange-400">
            SolEstate
          </Link>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className=" hover:text-purple-300">
            Home
          </Link>
          <Link href="/signup" className="hover:text-purple-300">
            Sign Up
          </Link>
          <Link href="/signup" className="hover:text-purple-300">
            Login
          </Link>
          <Link href="/kyc" className="hover:text-purple-300">
            KYC
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

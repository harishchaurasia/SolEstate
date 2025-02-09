import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">SolEstate</h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-purple-300">
            Home
          </Link>
          <Link href="/signup" className="hover:text-purple-300">
            Sign Up
          </Link>
          <Link href="/signup" className="hover:text-purple-300">
            Login
          </Link>
          <Link href="/kyc" className="hover:text-purple-300">
            Verification
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

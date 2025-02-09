"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SignUp from "@/app/signup/page";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white flex flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-7xl font-bold text-center mb-12"
      >
        SolEstate
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-5xl font-extrabold text-center mb-2 mt-8"
      >
        Decentralized Investment Marketplace
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-gray-300 mt-4 max-w-2xl text-center mb-4"
      >
        Empowering entrepreneurs and investors worldwide through blockchain.
      </motion.p>

      <div className="mt-6 flex space-x-4">
        <Button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg">
          Get Started
        </Button>

        <Button
          className="bg-transparent border border-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-900 shadow-lg"
          onClick={() => router.push("/signup")}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;

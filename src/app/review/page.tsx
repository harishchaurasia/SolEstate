"use client";

import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

export default function Prototype() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <motion.div
        // className="text-center bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white py-20 px-6"
        className="text-center bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white py-20 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold">Thank You...</h1>
        {/* <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Empowering people worldwide to invest in real estate without
          collateral, powered by Solana Blockchain.
        </p> */}

        <p className="mt-4 text-xl text-gray-300 max-w-xl mx-auto">
          Your account is under review. We will reack out to you through email
          very soon.
        </p>
        {/* <motion.button
          className="mt-6 px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button> */}
      </motion.div>
      {/* Platform Features */}
      <motion.div className="py-16 px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          //   className="text-5xl font-extrabold text-center mb-2 mt-8"
          className="text-4xl mt-8 font-bold text-center text-gray-800 mb-8"
        >
          How it Works
        </motion.h1>

        {/* <h2 className="">How It Works</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lenders Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-indigo-900">
              For Lenders
            </h3>
            <p className="mt-2 text-gray-600">
              Set loan amounts & interest rates. Borrowers browse & apply.
            </p>
          </motion.div>

          {/* Borrowers Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-purple-800">
              For Borrowers
            </h3>
            <p className="mt-2 text-gray-600">
              Browse loan offers, choose the best one, and invest in real
              estate.
            </p>
          </motion.div>

          {/* Builders Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700">
              For Builders
            </h3>
            <p className="mt-2 text-gray-600">
              Receive funds directly from lenders, ensuring a secure
              transaction.
            </p>
          </motion.div>
        </div>
      </motion.div>
      {/* Call to Action */}
      <motion.div
        className="text-center py-20 bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">
          Join the Future of Real Estate Lending
        </h2>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
}

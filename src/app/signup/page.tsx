"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/kyc"); // Redirects to KYC page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232]">
      <div className="w-full max-w-md bg-gradient-to-br from-[#323232] via-[#b5593d] to-[#ef8508] text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="relative">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>
          )}
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-3 text-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none"
              required
            />
          </div>
          {!isLogin && (
            <>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none"
                  required
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none"
                  required
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-[#20211a] hover:bg-[#323232] rounded-md"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-black hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

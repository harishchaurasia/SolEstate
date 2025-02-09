"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-900">
      <div className="w-full max-w-md bg-blue-900 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-purple-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form className="mt-6 space-y-4">
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
                />
              </div>
            </>
          )}
          <button className="w-full p-3 bg-purple-800 hover:bg-purple-700 rounded-md">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-md flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Continue with Email
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-purple-500 hover:underline"
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

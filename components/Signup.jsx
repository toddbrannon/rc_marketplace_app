"use client";

import Image from "next/image";
import { useState } from "react";

const Signup = ({ setCurrentState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpWithEmail = (e) => {
    e.preventDefault();
    // Perform sign up with email logic
  };

  const handleSignUpWithGoogle = () => {
    // Perform sign up with Google logic
  };

  const handleSignUpWithLinkedIn = () => {
    // Perform sign up with LinkedIn logic
  };

  return (
    <div className="p-8 mx-auto max-w-screen-xl md:p-12 mb-2 mt-2 bg-gray-100 dark:bg-gray-800">
      <div className="hero-cols grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 md:p-12 mb-8 mt-16 w-full">
          <section className="section-process">
            <div className="section-container">
              <div className="process-steps-container container-medium with-padding">
                <div className="process-step-container process-step-1">
                  <div className="process-step-title-container">
                    <h1 className="process-step-title text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">
                      Sell
                    </h1>
                    <div className="process-step-title-overlay text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">
                      Sell
                    </div>
                  </div>
                </div>
                <div className="process-step-container process-step-2">
                  <div className="process-step-title-container">
                    <h1 className="process-step-title text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">
                      Buy
                    </h1>
                    <div className="process-step-title-overlay text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">
                      Buy
                    </div>
                  </div>
                </div>
                <div className="process-step-container process-step-3">
                  <div className="process-step-title-container">
                    <h1 className="process-step-title text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">
                      Connect.
                    </h1>
                    <div className="process-step-title-overlay text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">
                      Connect.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <p className="text-lg font-normal text-gray-500 dark:text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            dignissim nisl, ac consectetur dolor placerat a. In eu nulla nec orci
            vulputate varius.
          </p>

          <form onSubmit={handleSignUpWithEmail}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="inline-flex justify-center items-center w-full py-2 px-4 mb-4 text-base font-medium text-white bg-cyan-500 hover:bg-cyan-400 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Sign Up with Email
            </button>
          </form>

          <button
            onClick={handleSignUpWithGoogle}
            className="inline-flex justify-center items-center w-full py-2 px-4 mb-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Sign Up with Google
          </button>

          <button
            onClick={handleSignUpWithLinkedIn}
            className="inline-flex justify-center items-center w-full py-2 px-4 mb-4 text-base font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Sign Up with LinkedIn
          </button>
        </div>
        <div className="hero-logo p-8 md:p-12 mb-8 mt-8 w-full hidden lg:block">
          <Image
            src="/assets/images/MarketPlaceLogo.svg"
            alt="handshake hero image"
            width={96}
            height={96}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
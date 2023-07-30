"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { listingLinks } from "@constants";

import { brand } from '@constants';

const Nav = ({ setCurrentState }) => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setProviders();
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex-between fixed z-20 border-b w-nav mb-16 pt-3 pb-3 px-16 top-0 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      
      <a href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/MarketPlaceLogo.svg"
          alt="RC Marketplace Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">{brand}</p>
      </a>

      {/* Desktop Navigation - Center */}
      {/* { Sell, Buy, Find a Partner } */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="seller-path" className="nav_link">
              Sell
          </Link>
          <Link href="buyer-path" className="nav_link">
              Buy
          </Link>
          <Link href="partnership-path" className="nav_link">
              Find a Partner
          </Link>
        </div>
      </div>

      {/* Desktop Navigation - Right Side */}
      <div className="sm:flex hidden button-container">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            {listingLinks.map((link, index) => (
              <li className="mb-0" key={index} style={{ listStyleType: "none" }}>
                <Link href="#" className={link.class} onClick={() => setCurrentState && setCurrentState(link.state)}>
                  {link.label}
                </Link>
                
              </li>           
            ))}
              <li className="mb-0" style={{ listStyleType: "none" }}>
                <Link href="#" className="outline_btn">
                  Sign Out
                </Link>
              </li>  
            {/* <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button> */}
            <Link href="/profile">
              <Image 
                src="/assets/images/ProfilePH.svg" 
                alt="Profile" 
                width={37} 
                height={37} 
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-5">
            <Link href="/" className="light_btn">
              Join Now
            </Link>
            <button type="button" onClick={signIn} className="outline_btn">
              Sign In
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <button
          className="flex items-center focus:outline-none"
          onClick={handleMobileMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {mobileMenuOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            {isUserLoggedIn ? (
              <div>
                {/* Updated order of links */}
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setCurrentState && setCurrentState('viewListings')}
                >
                  View Listings
                </Link>
                <Link
                  href="create-listing"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Create Listing
                </Link>
                <Link
                  href="profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false); 
                    signOut();
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      Sign in with {provider.name}
                    </button>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav;

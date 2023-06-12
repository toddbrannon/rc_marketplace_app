"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null)

  const [ toggleDropown, settoggleDropdown ] = useState(false)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setProviders();
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/MarketPlaceLogo.svg"
          alt="RC Marketplace Logo"
          width={30}
          height={30}
          className='object-contain'
        />
        <p className="logo_text">MarketPlaceApp</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="create-listing" className="light_btn">
              Create Listing
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image 
                src="/assets/images/ProfilePH.svg" 
                alt="Profile" 
                width={45} 
                height={45} 
                className="rounded-full"
              />
            </Link>
          </div>
        ): (
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick = {() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>


      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image 
                src="/assets/images/ProfilePH.svg" 
                alt="Profile" 
                width={37} 
                height={37} 
                className="rounded-full"
                onClick={() => settoggleDropdown((prev)=> !prev)}
              />
              {toggleDropown && (
                <div className="dropdown">
                  <Link 
                    href="profile" 
                    className="dropdown_link_alt"
                    onClick={() => settoggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                    href="create-listing" 
                    className="dropdown_link_alt"
                    onClick={() => settoggleDropdown(false)}
                  >
                    Create Listing
                  </Link>
                  <button 
                    type="button"
                    onClick={()=>{settoggleDropdown(false); 
                    signOut()}}
                    className="mt-5 w-full light_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
          </div>
        ): (
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick = {() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
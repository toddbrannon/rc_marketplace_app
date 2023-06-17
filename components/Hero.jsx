'use client'

import Image from 'next/image';
import { useState } from "react";
import { howItWorks } from '@constants';

const Hero = ({ setCurrentState }) => {
  return (
    <div className="p-8 mx-auto max-w-screen-xl md:p-12 mb-2 mt-2">
            <div className="hero-cols grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="p-8 md:p-12 mb-8 mt-16 w-full">

                    {/* <section className="section-process">
                        <h1 className="process-step-title text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">Sell</h1>
                        <div className="process-step-title-overlay">Sell</div>
                        <h1 className="process-step-title text-5xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r bg-clip-text  text-transparent from-cyan-300 via-indigo-500 to-cyan-100 animate-text">Buy</h1>
                        <div className="process-step-title-overlay">Buy</div>
                        <h1 className="process-step-title cyan_gradient dark:cyan_gradient text-5xl md:text-7xl font-extrabold mb-2">Connect.</h1>
                        <div className="process-step-title-overlay">Connect.</div>
                    </section> */}

                <section class="section-process">
                  <div class="section-container">
                    <div class="process-steps-container container-medium with-padding">
                      <div class="process-step-container process-step-1">
                        <div class="process-step-title-container">
                          <h1 class="process-step-title text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">Sell</h1>
                          <div class="process-step-title-overlay text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">Sell</div>
                        </div>
                      </div>
                      <div class="process-step-container process-step-2">
                        <div class="process-step-title-container">
                        <h1 class="process-step-title text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">Buy</h1>
                        <div class="process-step-title-overlay text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">Buy</div>
                        </div>
                      </div>
                      <div class="process-step-container process-step-3">
                        <div class="process-step-title-container">
                        <h1 class="process-step-title text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">Connect.</h1>
                        <div class="process-step-title-overlay text-gray-100 dark:text-gray-100 text-5xl md:text-7xl font-extrabold mb-2">Connect.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                    
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, 
                    ac consectetur dolor placerat a. In eu nulla nec orci vulputate varius. 
                    </p>
                    {/* <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" onClick={() => setCurrentState(howItWorks.state)}>
                        {howItWorks.label}
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a> */}
                    {howItWorks.map((link, index) => (
                        <li className="mb-4 list-none" key={index}>
                          <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" onClick={() => setCurrentState(link.state)}>
                            {link.label}
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                        </li>
                    ))}
                </div>
                <div class="hero-logo p-8 md:p-12 mb-8 mt-8 w-full hidden lg:block">
                    
                    {/* <img class="w-96 h-96" src="/assets/images/BlueMinimalistHandShake.svg" alt="image description"/> */}
                    <Image
                        src="/assets/images/MarketPlaceLogo.svg"
                        alt="handshake hero image"
                        width={96}
                        height={96}
                        className='object-contain w-full h-full'
                    />

                </div>
            </div>
            
        </div>
    
    
  )
}

export default Hero
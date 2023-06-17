'use client';

import { useState } from 'react';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Landing from '@components/Landing';
import About from '@components/About';
import BrandCenter from '@components/BrandCenter';
import Blog from '@components/Blog';
import PrivacyPolicy from '@components/PrivacyPolicy';
import TermsAndConditions from '@components/TermsAndConditions';


const Home = () => {

  const [currentState, setCurrentState] = useState('initial');

  return (
    <main className="overflow-hidden">
      <Nav setCurrentState={setCurrentState} />

      {currentState === 'initial' && <Landing />}
      {currentState === 'about' && <About />}
      {currentState === 'brandCenter' && <BrandCenter />}
      {currentState === 'blog' && <Blog />}
      {currentState === 'privacyPolicy' && <PrivacyPolicy />}
      {currentState === 'termsAndConditions' && <TermsAndConditions />}      
      <Footer setCurrentState={setCurrentState} /> 
      
    </main>
    
  )
}

export default Home
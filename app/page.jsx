'use client';

import { useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth'; // Import the Firebase Authentication module if needed
import 'firebase/firestore'; // Import the Firebase Authentication module if needed

import { apiKey, authDomain, projectId } from '../firebaseConfig.js';

import Nav from '@components/Nav';
import Footer from '@components/Footer';
import Landing from '@components/Landing';
import About from '@components/About';
import BrandCenter from '@components/BrandCenter';
import Blog from '@components/Blog';
import PrivacyPolicy from '@components/PrivacyPolicy';
import TermsAndConditions from '@components/TermsAndConditions';
import HowItWorks from '@components/HowItWorks';

// Add the Firebase configuration object here
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  // ...other configuration properties
};

firebase.initializeApp(firebaseConfig);

const Home = () => {

  const [currentState, setCurrentState] = useState('initial');

  return (
    <main className="overflow-hidden">
      {/* <Nav setCurrentState={setCurrentState} /> */}

      {currentState === 'initial' && <Landing />}
      {currentState === 'about' && <About />}
      {currentState === 'brandCenter' && <BrandCenter />}
      {currentState === 'blog' && <Blog />}
      {currentState === 'privacyPolicy' && <PrivacyPolicy />}
      {currentState === 'termsAndConditions' && <TermsAndConditions />}   
      {currentState === 'howItWorks' && <HowItWorks />}     
      <Footer setCurrentState={setCurrentState} /> 
      
    </main>
    
  )
}

export default Home
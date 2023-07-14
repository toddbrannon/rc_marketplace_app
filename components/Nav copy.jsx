// Generate a new react component for a nav bar that toggles to mobile on screen sizes below 1024px
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { listingLinks } from "@constants";

import { brand } from '@constants';

const Nav = () => { 
    const isUserLoggedIn = false;

    
}

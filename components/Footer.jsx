import Image from "next/image";
import Link from "next/link";

import { brand, Copyright } from "@constants";

// import { footerLinks } from "@constants";

const Footer = () => (
  <footer className='flex flex-col text-gray-100 mt-5 border-top border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className="flex flex-col justify-start items-start gap-6">
        <Image src="/assets/images/MarketPlaceLogo.svg" alt='logo' width={50} height={50} className="object-contain"></Image>
      </div>
    </div>
  </footer>
);

export default Footer;
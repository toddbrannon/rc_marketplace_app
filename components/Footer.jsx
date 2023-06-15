import Image from "next/image";
import Link from "next/link";

import { brand, home_url, twitter_icon, linkedin_icon, facebook_icon, instagram_icon, Copyright } from "@constants";

import { footerLinks } from "@constants";

const Footer = () => (

<div className='flex flex-col text-gray-100 mt-5 border-top border-gray-100'>

<footer className="flex flex-col mt-5 bottom-0 left-0 z-20 w-screen p-4 bg-white border-top border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-dark-blue dark:border-gray-200">
  
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <Link href="/" className="flex gap-2 flex-center">
            <Image
              src="/assets/images/MarketPlaceLogo.svg"
              alt="RC Marketplace Logo"
              width={30}
              height={30}
              className='object-contain'
            />
            <p className="logo_text">{ brand }</p>
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-white">Company</h2>
                <ul className="text-gray-500 dark:text-gray-200 font-medium">
                    <li className="mb-4">
                        <a href="#" className=" hover:underline">About</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Careers</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Brand Center</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Blog</a>
                    </li>
                </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                  <ul className="text-gray-600 dark:text-gray-200 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Twitter</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-600 dark:text-gray-200 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-200">© { Copyright } <a href={ home_url } className="hover:underline">{brand}</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d={linkedin_icon} clip-rule="evenodd" /></svg>
                  <span className="sr-only">LinkedIn page</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d={facebook_icon} clip-rule="evenodd" /></svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d={instagram_icon} clip-rule="evenodd" /></svg>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d={twitter_icon} /></svg>
                  <span className="sr-only">Twitter page</span>
              </a>
          </div>
      </div>
    </div>


</footer>

</div>
);

export default Footer;
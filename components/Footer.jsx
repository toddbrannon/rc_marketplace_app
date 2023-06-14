import Image from "next/image";
import Link from "next/link";

import { brand, home_url, twitter_icon, linkedin_icon, facebook_icon, instagram_icon, Copyright } from "@constants";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className='flex flex-col text-gray-100 mt-5 border-top border-gray-100'>
    {/* <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className="flex flex-col justify-start items-start gap-6">
        <Image src="/assets/images/MarketPlaceLogo.svg" alt='logo' width={50} height={50} className="object-contain"></Image>
        <p className='text-base text-gray-200'>
            © { Copyright }. All Rights Reserved.</p>
            <div className="footer__copyrights-link">
              <Link href="/" className="text-gray-200">
                Privacy & Policy
              </Link>
              <Link href="/" className="text-gray-200">
                Terms & Condition
              </Link>
            </div>
      </div>
    </div> */}

{/* Flowbite sample : https://github.com/adrianhajdin/project_next13_car_showcase/blob/main/components/Footer.tsx */}
<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-cyan-700 dark:border-gray-200">
    
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
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
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul class="text-gray-500 dark:text-gray-200 font-medium">
                    <li class="mb-4">
                        <a href="#" class=" hover:underline">About</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Careers</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Brand Center</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Blog</a>
                    </li>
                </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                  <ul class="text-gray-600 dark:text-gray-200 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Twitter</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-600 dark:text-gray-200 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-200">© { Copyright } <a href={ home_url } class="hover:underline">{brand}</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d={linkedin_icon} clip-rule="evenodd" /></svg>
                  <span class="sr-only">LinkedIn page</span>
              </a>
              <a href="#" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d={facebook_icon} clip-rule="evenodd" /></svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d={instagram_icon} clip-rule="evenodd" /></svg>
                  <span class="sr-only">Instagram page</span>
              </a>
              <a href="#" class="text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d={twitter_icon} /></svg>
                  <span class="sr-only">Twitter page</span>
              </a>
          </div>
      </div>
    </div>


</footer>

  </footer>
);

export default Footer;
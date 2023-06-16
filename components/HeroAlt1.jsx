import Image from 'next/image';

const Hero = () => {
  return (
    
<section className="bg-inherit dark:bg-inherit">
    {/* START Entire Page Level Div */}
    <div className="py-8 px-4 lg:py-16">
        {/* START Hero Div */}
        <div className="p-8 mx-auto max-w-screen-xl md:p-12 mb-2 mt-2">
            <div className="grid grid-cols-2 gap-8">
                <div class="p-8 md:p-12 mb-8 mt-16 w-full">
                    <h1 className="text-gray-100 dark:text-gray-100 text-3xl md:text-7xl font-extrabold mb-2">Sell</h1>
                    <h1 className="text-gray-100 dark:text-gray-100 text-3xl md:text-7xl font-extrabold mb-2">Buy</h1>
                    <h1 className="cyan_gradient dark:cyan_gradient text-3xl md:text-7xl font-extrabold mb-2">Connect.</h1>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, 
                    ac consectetur dolor placerat a. In eu nulla nec orci vulputate varius. 
                    </p>
                    <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        How it works
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
                <div class="p-8 md:p-12 mb-8 mt-8 w-full">
                    
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
        {/* END Hero Div */}

        {/* START Sellers and Buyers Div */}
        <div className="grid md:grid-cols-2 gap-8 mx-auto max-w-screen-xl">
            <div className="bg-gray-50 dark:bg-dark-blue border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                {/* <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"></path>
                    </svg>
                    Design
                </a> */}
                <h2 className="cyan_gradient dark:cyan_gradient text-3xl font-extrabold mb-2">Sellers</h2>
                <p className="text-lg font-normal text-gray-200 dark:text-gray-300 mb-4">
                    List your business for sale with us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed euismod dignissim nisl, ac consectetur dolor placerat a. In eu nulla nec orci vulputate varius.
                </p>
                <a href="#" className="text-cyan-600 dark:text-cyan-500 hover:underline font-medium text-lg inline-flex items-center">Learn more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
            <div className="bg-gray-50 dark:bg-dark-blue border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                {/* <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"></path>
                    </svg>
                    Code
                </a> */}
                <h2 className="cyan_gradient dark:cyan_gradient text-3xl font-extrabold mb-2">Buyers</h2>
                  <p className="text-lg font-normal text-gray-200 dark:text-gray-300 mb-4">
                    View business sale listings here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed euismod dignissim nisl, ac consectetur dolor placerat a. In eu nulla nec orci vulputate varius.
                  </p>
                <a href="#" className="text-cyan-600 dark:text-cyan-500 hover:underline font-medium text-lg inline-flex items-center">Learn more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
        {/* End Sellers & Buyers Div */}

        {/* START Build Partnerships Div */}
        <div class="p-8 md:p-12 mb-8 mt-24 partnership-gradient w-screen">
            <div className="mx-auto my-24 max-w-screen-xl">
                <h1 class="text-blue-950 dark:text-blue-950 text-3xl md:text-7xl font-extrabold mb-2">Build Partnerships</h1>
                <p class="text-lg font-normal text-blue-950 dark:text-blue-950 mb-6">Connect with other buyers and build partnerships. Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit. Sed euismod dignissim nisl, ac consectetur dolor placerat a. In eu nulla nec orci vulputate varius.</p>
                    <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Connect Now
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
            </div>
        </div>
        {/* END Build Partnerships Div */}

    </div>
    {/* END Page Div */}

    {/* START Messaging & Boost section */}
    <div className="grid md:grid-cols-3 gap-8 mb-20 mx-auto max-w-screen-xl">
        <div className="card border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <div className="card-body">
              <h2 className="card-head cyan_gradient dark:cyan_gradient">Start a Conversation</h2>
              <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, ac consectetur 
                dolor placerat a. In eu nulla nec orci vulputate varius.</p>
              <div className="card-actions justify-end">
                <button className="light_btn">Find Out More</button>
              </div>
            </div>
        </div>
        <div className="card border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <div className="card-body">
              <h2 className="card-head cyan_gradient dark:cyan_gradient">Boost Your Listing</h2>
              <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, ac consectetur 
                dolor placerat a. In eu nulla nec orci vulputate varius.</p>
              <div className="card-actions justify-end">
                <button className="light_btn">Find Out More</button>
              </div>
            </div>
        </div>
        <div className="card border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <div className="card-body">
              <h2 className="card-head cyan_gradient dark:cyan_gradient">Partner with Others</h2>
              <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, ac consectetur 
                dolor placerat a. In eu nulla nec orci vulputate varius.</p>
              <div className="card-actions">
                <button className="light_btn">Find Out More</button>
              </div>
            </div>
        </div>
    </div>
</section>


    
    
  )
}

export default Hero
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="p-8 max-w-screen-xl md:p-12 mb-2 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div class="p-8 md:p-12 mb-8 mt-8 w-full hidden md:block">
                    
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
import Image from 'next/image';

const ListingsTopSection = () => {
  return (
    
    <div class="p-8 md:p-12 mb-8 mt-12 md:mt-18 w-screen">
            <div className="my-24 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
                <h1 className="text-blue-950 dark:text-gray-200 text-4xl md:text-7xl font-extrabold mb-2">Current Listings</h1>
                <p className="text-md md:text-xl font-normal text-blue-950 dark:text-gray-200 mb-6">This is the Listings page. Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit. Sed euismod dignissim nisl, ac consectetur dolor placerat a. In eu nulla nec orci vulputate varius.</p>
                    <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 ease-in-out focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        List Your Business or Site
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
            </div>
        </div>
    
  )
}

export default ListingsTopSection
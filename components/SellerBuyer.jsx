import Image from 'next/image';

const SellerBuyer = () => {
  return (
    
    <div className="grid md:grid-cols-2 gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
            {/* <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"></path>
                </svg>
                Design
            </a> */}
            <h2 className="text-blue-900 text-3xl font-extrabold mb-2">Sellers</h2>
            <p className="text-sm md:text-lg font-normal text-dark-blue mb-4">
                List your business for sale with us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed euismod dignissim nisl, ac consectetur dolor placerat a. In eu nulla nec orci vulputate varius.
            </p>
            <a href="#" className="text-cyan-600 dark:text-cyan-500 hover:underline font-medium text-lg inline-flex items-center">Learn more
                <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
            {/* <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"></path>
                </svg>
                Code
            </a> */}
            <h2 className="text-blue-900 text-3xl font-extrabold mb-2">Buyers</h2>
                <p className="text-sm md:text-lg font-normal text-dark-blue mb-4">
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

    
  )
}

export default SellerBuyer
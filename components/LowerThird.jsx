import image from 'next/image';

const LowerThird = () => {
  return (
    
<section className="bg-inherit dark:bg-inherit">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        
        <div className="grid md:grid-cols-1">
            <div className="bg-gray-50 dark:bg-dark-blue border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                {/* <a href="#" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"></path>
                    </svg>
                    Design
                </a> */}
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Sell your business or website</h2>
                <p className="text-lg font-normal text-gray-200 dark:text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, 
                    ac consectetur dolor placerat a. In eu nulla nec orci vulputate varius.
                </p>
                <a href="#" className="text-cyan-600 dark:text-cyan-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
        
    </div>
</section>


    
    
  )
}

export default LowerThird
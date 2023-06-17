import Image from 'next/image';

const LandingSection4 = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-20 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <div className="card border border-gray-200 rounded-lg p-8 md:p-12">
            <div className="card-body">
              <h2 className="card-head text-blue-900">Start a Conversation</h2>
              <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, ac consectetur 
                dolor placerat a. In eu nulla nec orci vulputate varius.</p>
              <div className="card-actions justify-end">
                <button className="light_btn">Find Out More</button>
              </div>
            </div>
        </div>
        <div className="card border border-gray-20 rounded-lg p-8 md:p-12">
            <div className="card-body">
              <h2 className="card-head text-blue-900">Boost Your Listing</h2>
              <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, ac consectetur 
                dolor placerat a. In eu nulla nec orci vulputate varius.</p>
              <div className="card-actions justify-end">
                <button className="light_btn">Find Out More</button>
              </div>
            </div>
        </div>
        <div className="card border border-gray-200 rounded-lg p-8 md:p-12">
            <div className="card-body">
              <h2 className="card-head text-blue-900">Partner with Others</h2>
              <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dignissim nisl, ac consectetur 
                dolor placerat a. In eu nulla nec orci vulputate varius.</p>
              <div className="card-actions">
                <button className="light_btn">Find Out More</button>
              </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default LandingSection4
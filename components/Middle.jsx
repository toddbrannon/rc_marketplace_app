import image from 'next/image';

const HowItWorks = () => {
  return (
    
    <div className="howitworks">
        <section className="w-screen flex-center flex-col">
        
            <h1 className="hero__title cyan_gradient">
              How It Works
            </h1>
              <br className="max-md:hidden" />
              <span className="text-gray-200 text-[36px]">Here's a span to add something to...</span>
              <p className="hero__subtitle">
                Middle section for the home page - maybe a section about 'how it works'.
              </p>
        </section>
    </div>
    
  )
}

export default HowItWorks
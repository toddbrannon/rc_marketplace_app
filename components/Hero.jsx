import image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
        <section className="w-full flex-center flex-col">
            <h1 className="hero__title cyan_gradient">Sell</h1>
            <h1 className="hero__title cyan_gradient">Buy</h1>
            <h1 className="hero__title cyan_gradient">Connect.</h1>
              <br className="max-md:hidden" />
              <span className="text-gray-200 text-[36px]"> Tagline for the app</span>
              <p className="hero__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
       
            
        </section>
    </div>
    
    
  )
}

export default Hero
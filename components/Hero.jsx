import image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
        <section className="w-full flex-center flex-col">
            <h1 className="hero__title cyan_gradient">
              Sell, Buy & Connect
              <br className="max-md:hidden" />
              <span className="cyan_gradient"> Tagline for the app</span>
              <p className="hero__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </h1>
        </section>
    </div>
    
  )
}

export default Hero
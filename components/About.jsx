import Image from 'next/image';
import AboutTopSection from '@components/AboutTopSection';


const About = () => {
  return (
    
<section className="bg-inherit dark:bg-inherit">
    {/* START Entire Page Level Div */}
    <div className="py-8 px-4 lg:py-16">

        {/* START AboutTopSection Div */}
          <AboutTopSection />
        {/* END AboutTopSection Div */}


    </div>
    {/* END Entire Page Level Div */}
    
</section>


    
    
  )
}

export default About
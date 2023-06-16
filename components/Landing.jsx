import Image from 'next/image';
import Hero from '@components/Hero';
import SellerBuyer from './SellerBuyer';
import BuildPartnerships from './BuildPartnerships';
import LandingSection4 from './LandingSection4';

const Landing = () => {
  return (
    
<section className="bg-inherit dark:bg-inherit">
    {/* START Entire Page Level Div */}
    <div className="py-8 px-4 lg:py-16">
      
        {/* START Hero Div */}
          <Hero />
        {/* END Hero Div */}

        {/* START Sellers and Buyers Div */}
          <SellerBuyer />
        {/* End Sellers & Buyers Div */}

        {/* START Build Partnerships Div */}
          <BuildPartnerships />
        {/* END Build Partnerships Div */}

        {/* START Messaging & Boost section */}
          <LandingSection4 /> 
        {/* END Messaging & Boost section */}

    </div>
    {/* END Entire Page Level Div */}
    
</section>


    
    
  )
}

export default Landing
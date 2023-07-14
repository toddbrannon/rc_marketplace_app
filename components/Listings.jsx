import Image from 'next/image';
import SellerBuyer from './SellerBuyer';
import ListingsTopSection from '@components/ListingsTopSection';
import ListingCard from '@components/ListingCard';


const Listings = () => {
  return (
    
<section className="bg-inherit dark:bg-inherit">
    {/* START Entire Page Level Div */}
    <div className="py-8 px-4 lg:py-16">

        {/* START ListingsTopSection Div */}
          <ListingsTopSection />
        {/* End ListingsTopSection Div */}
        
        {/* START Sellers and Buyers Div */}
          <ListingCard />
        {/* End Sellers & Buyers Div */}

    </div>
    {/* END Entire Page Level Div */}
    
</section>


    
    
  )
}

export default Listings
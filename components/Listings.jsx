import Image from 'next/image';
import { useEffect, useState } from 'react';
import ListingsTopSection from '@components/ListingsTopSection';
import ListingCard from '@components/ListingCard';


const Listings = () => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    // Fetch listings from the database here
    // You can use the fetch API, axios, or any other method of your choice
    // Assign the fetched listings to the `listings` state variable
    // Example:
    const fetchListings = async () => {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        setListings(data.listings);
      } catch (error) {
        console.error('Failed to fetch listings', error);
      }
    };

    fetchListings();
  }, []);
    
    return (
      <section className="bg-inherit dark:bg-inherit">
        <div className="py-8 px-4 lg:py-16">
          <ListingsTopSection />
          <div className="grid md:grid-cols-2 gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
            {/* <h3 className="text-blue-950 dark:text-gray-200 text-4xl md:text-4xl font-extrabold mb-2">Listing Card</h3> */}
            {listings.map((listing) => (
              <ListingCard
                key={listing._id}
                category={listing.category}
                title={listing.title}
                description={listing.description}
                askingPrice={listing.askingPrice}
                ttmGrossRevenue={listing.ttmGrossRevenue}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default Listings
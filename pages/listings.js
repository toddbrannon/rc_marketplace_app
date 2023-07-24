// pages/listings.js
import Listing from '../models/Listing';

export default function ListingsPage({ listings }) {
  return (
    <div>
      <h1>Listings</h1>
      {listings.map((listing) => (
        <div key={listing._id}>
          <h3>{listing.title}</h3>
          <p>{listing.description}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch listings from the database
  const listings = await Listing.find().exec();

  return {
    props: { listings },
  };
}

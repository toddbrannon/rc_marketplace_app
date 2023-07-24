// pages/api/listings.js
import connectDB from '../../utils/db';
import Listing from '../../models/Listing';

connectDB();

export default async function handler(req, res) {
  try {
    const listings = await Listing.find().exec();
    res.status(200).json({ listings });
  } catch (error) {
    console.error('Failed to fetch listings', error);
    res.status(500).json({ error: 'Server Error' });
  }
}

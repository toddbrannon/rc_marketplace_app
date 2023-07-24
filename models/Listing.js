// models/Listing.js
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  category: String,
  location: {
    country: String,
    state: String,
    city: String,
    postalCode: String,
    streetAddress: String,
  },
  title: String,
  description: String,
  ttmGrossRevenue: Number,
  ttmNetProfit: Number,
  dateFounded: Date,
  teamSize: Number,
  askingPrice: Number,
  askingPriceExplanation: String,
  businessModelAndPricing: String,
  techStack: String,
  productCompetitors: String,
  growthOpportunity: String,
  keyAssets: String,
  reasonForSelling: String,
  financing: Boolean,
  lastMonthGrossRevenue: Number,
  lastMonthNetProfit: Number,
  numberOfCustomers: Number,
  annualRecurringRevenue: Number,
  annualGrowthRate: Number,
  arr: Number,
  mrr: Number,
  arpa: Number,
  ltv: Number,
  customerChurn: Number,
  netMrrChurnRate: Number,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

import { useState } from 'react';
import CreateTopSection from '@components/CreateTopSection';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    category: '',
    location: {
      country: '',
      state: '',
      city: '',
      postalCode: '',
      streetAddress: '',
    },
    title: '',
    description: '',
    ttmGrossRevenue: '',
    ttmNetProfit: '',
    dateFounded: '',
    teamSize: '',
    askingPrice: '',
    askingPriceExplanation: '',
    businessModelAndPricing: '',
    techStack: '',
    productCompetitors: '',
    growthOpportunity: '',
    keyAssets: '',
    reasonForSelling: '',
    financing: false,
    lastMonthGrossRevenue: '',
    lastMonthNetProfit: '',
    numberOfCustomers: '',
    annualRecurringRevenue: '',
    annualGrowthRate: '',
    arr: '',
    mrr: '',
    arpa: '',
    ltv: '',
    customerChurn: '',
    netMrrChurnRate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to submit the form data to the server
    // For example, using fetch, axios, or any other library of your choice
    // Don't forget to handle validation and error cases as well
    console.log(formData);

    const [categories, setCategories] = useState([]);

  };

  return (
    <section className="my-8 bg-inherit dark:bg-inherit">
        <div className="py-8 px-4 lg:py-16">
          {/* <CreateTopSection /> */}
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-blue-950 dark:text-gray-200 text-4xl font-semibold mb-4">Create a New Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          >
            <option value="">Select a category</option>
            <option value="Agencies">Agencies</option>
            <option value="AI">AI</option>
            <option value="Crypto">Crypto</option>
            <option value="Digital Products">Digital Products</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Marketplace">Marketplace</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Other">Other</option>
            <option value="Physical Business">Physical Business</option>
            <option value="Saas">Saas</option>
            <option value="Shopify App">Shopify App</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Country</label>
          <input
            type="text"
            name="location.country"
            value={formData.location.country}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">State</label>
          <input
            type="text"
            name="location.state"
            value={formData.location.state}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">City</label>
          <input
            type="text"
            name="location.city"
            value={formData.location.city}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Postal Code</label>
          <input
            type="text"
            name="location.postalCode"
            value={formData.location.postalCode}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Street Address</label>
          <input
            type="text"
            name="location.streetAddress"
            value={formData.location.streetAddress}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">TTM Gross Revenue</label>
          <input
            type="text"
            name="ttmGrossRevenue"
            value={formData.ttmGrossRevenue}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">TTM Net Profit</label>
          <input
            type="text"
            name="ttmNetProfit"
            value={formData.ttmNetProfit}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Date Founded</label>
          <input
            type="text"
            name="dateFounded"
            value={formData.dateFounded}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Team Size</label>
          <input
            type="text"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Asking Price</label>
          <input
            type="text"
            name="askingPrice"
            value={formData.askingPrice}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Asking Price Explanation
          </label>
          <textarea
            name="askingPriceExplanation"
            value={formData.askingPriceExplanation}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Business Model and Pricing
          </label>
          <textarea
            name="businessModelAndPricing"
            value={formData.businessModelAndPricing}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Tech Stack</label>
          <textarea
            name="techStack"
            value={formData.techStack}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Product Competitors
          </label>
          <textarea
            name="productCompetitors"
            value={formData.productCompetitors}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Growth Opportunity</label>
          <textarea
            name="growthOpportunity"
            value={formData.growthOpportunity}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Key Assets</label>
          <textarea
            name="keyAssets"
            value={formData.keyAssets}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Reason for Selling</label>
          <textarea
            name="reasonForSelling"
            value={formData.reasonForSelling}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Financing</label>
          <input
            type="checkbox"
            name="financing"
            checked={formData.financing}
            onChange={handleInputChange}
            className="border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Last Month Gross Revenue
          </label>
          <input
            type="text"
            name="lastMonthGrossRevenue"
            value={formData.lastMonthGrossRevenue}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Last Month Net Profit
          </label>
          <input
            type="text"
            name="lastMonthNetProfit"
            value={formData.lastMonthNetProfit}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Number of Customers</label>
          <input
            type="text"
            name="numberOfCustomers"
            value={formData.numberOfCustomers}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Annual Recurring Revenue
          </label>
          <input
            type="text"
            name="annualRecurringRevenue"
            value={formData.annualRecurringRevenue}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Annual Growth Rate</label>
          <input
            type="text"
            name="annualGrowthRate"
            value={formData.annualGrowthRate}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">ARR</label>
          <input
            type="text"
            name="arr"
            value={formData.arr}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">MRR</label>
          <input
            type="text"
            name="mrr"
            value={formData.mrr}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">ARPA</label>
          <input
            type="text"
            name="arpa"
            value={formData.arpa}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">LTV</label>
          <input
            type="text"
            name="ltv"
            value={formData.ltv}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Customer Churn</label>
          <input
            type="text"
            name="customerChurn"
            value={formData.customerChurn}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Net MRR Churn Rate
          </label>
          <input
            type="text"
            name="netMrrChurnRate"
            value={formData.netMrrChurnRate}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2"
          />
        </div>


        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
    </div>
    </section>
  );
};

export default CreateListing;

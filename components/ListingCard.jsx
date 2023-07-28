import React from 'react';

const ListingCard = ({ title, category, ttmGrossRevenue,description, askingPrice }) => {
  return (

    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
      <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">{category}</div>
      <p className="mt-2 text-slate-500 text-sm mb-4">{description}</p>
      <a href="#" className="learn-more mb-10">
        More
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
      <p className="mt-2 text-slate-500 text-lg">Asking Price: {askingPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <p className="mt-2 text-slate-500 text-lg">TTM Gross Revenue: {ttmGrossRevenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      
    </div>

  );
};

export default ListingCard;

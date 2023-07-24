import React from 'react';

const ListingCard = ({ title, category, ttmGrossRevenue,description, askingPrice }) => {
  return (
    // <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
    //   <h2 className="text-blue-900 text-3xl font-extrabold mb-2">{title}</h2>
    //   <p className="text-sm md:text-lg font-normal text-dark-blue mb-4">{description}</p>
    //   <p className="text-sm md:text-lg font-normal text-dark-blue mb-4">Asking Price:</p><p className="text-sm md:text-lg font-normal text-dark-blue mb-4">{askingPrice}</p>
    //   <a href="#" className="learn-more">
    //     Learn more
    //     <svg
    //       aria-hidden="true"
    //       className="w-4 h-4 ml-2"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    //     </svg>
    //   </a>
    // </div>

    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{category}</div>
      <p className="mt-2 text-slate-500">{description}</p>
      <p className="mt-2 text-slate-500">Asking Price: {askingPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <p className="mt-2 text-slate-500">TTM Gross Revenue: {ttmGrossRevenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <a href="#" className="learn-more">
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
    </div>

  );
};

export default ListingCard;

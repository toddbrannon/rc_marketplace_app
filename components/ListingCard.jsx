import React from 'react';
import { categoryLabels } from "@constants";

const ListingCard = ({ title, category, ttmGrossRevenue, description, askingPrice }) => {
  const categoryLabel = categoryLabels.find((label) => label.category === category);

  // Check if categoryLabel is undefined
  if (!categoryLabel) {
    // You can choose to render a default label or handle the case in another way
    // For example, render "Unknown Category" with a default class
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
        <div className="mb-4">
          <span className="default-label-class">
            Unknown Category
          </span>
        </div>
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
  }

  // If categoryLabel is found, render the card with the correct category label
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
      <div className="mb-4">
        <span className={categoryLabel.class}>
          {category}
        </span>
      </div>
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

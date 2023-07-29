import React, { useState, useRef, useEffect } from 'react';
import { categoryLabels } from "@constants";

const ListingCard = ({ title, category, ttmGrossRevenue, description, askingPrice }) => {
  const categoryLabel = categoryLabels.find((label) => label.category === category);
  const defaultCategoryLabel = {
    category: 'Unknown Category',
    class: 'unknown-category-label',
  };
  const { category: labelCategory, class: labelClass } = categoryLabel || defaultCategoryLabel;
  const [expanded, setExpanded] = useState(false);
  const descriptionRef = useRef(null);
  const charactersToShow = 200; // Adjust this value based on your preference

  useEffect(() => {
    // Check if description exceeds the limit and show "Show more" link accordingly
    const descriptionElement = descriptionRef.current;
    if (descriptionElement) {
      const truncatedDescription = description.substring(0, charactersToShow);
      const hasTruncated = description !== truncatedDescription;
      setExpanded(!hasTruncated); // Set the initial expanded state based on truncation
    }
  }, [description, charactersToShow]);

  const handleToggleDescription = () => {
    setExpanded(!expanded);
  };


  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
    <div className="mb-4">
      <span className={labelClass}>
        {labelCategory}
      </span>
    </div>
    {/* Use 'truncate' class to truncate the description */}
    <p
      ref={descriptionRef}
      className={`mt-2 text-slate-500 text-sm mb-4 ${!expanded ? 'truncate' : ''}`}
    >
      {expanded ? description : description.substring(0, charactersToShow)}
    </p>
    {/* Show "Show more" link/button if the description is truncated */}
    {!expanded && description.length > charactersToShow && (
      <button
        className="show-more-link"
        onClick={handleToggleDescription}
      >
        Show more...
      </button>
    )}
    {/* Show the "Show less" link/button if expanded */}
    {expanded && description.length > charactersToShow && (
      <button
        className="show-more-link"
        onClick={handleToggleDescription}
      >
        Show less
      </button>
    )}
      
      <p className="mt-2 text-slate-500 text-lg">Asking Price: {askingPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <p className="mt-2 text-slate-500 text-lg">TTM Gross Revenue: {ttmGrossRevenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
    </div>
  );
};

export default ListingCard;

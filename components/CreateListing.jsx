import { useState } from 'react';
import { listingFields } from '../constants';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    // initialize form data with empty values for all fields
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
    ...Object.fromEntries(listingFields.map((field) => [field.name, ''])),
  });

  const [currentSection, setCurrentSection] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to submit the form data to the server
    // For example, using fetch, axios, or any other library of your choice
    // Don't forget to handle validation and error cases as well
    console.log(formData);
  };

  const handleBack = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  return (
    <section className="py-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-950 dark:text-gray-200 font-semibold tracking-wide uppercase">
            Create a new listing
          </h2>
        </div>
        <div className="mt-10 sm:mt-0">
          <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
            {currentSection === 1 && (
              <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
                <div className="pt-8">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">Listing Information</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    {listingFields.slice(0, 6).map((field) => (
                      <div key={field.name} className={`sm:col-span-${field.colSpan}`}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {field.label}
                        </label>
                        <div className="mt-1">
                          {field.type === 'text' && (
                            <input
                              type="text"
                              name={field.name}
                              id={field.name}
                              autoComplete="off"
                              value={formData[field.name]}
                              onChange={handleChange}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          )}
                          {field.type === 'textarea' && (
                            <textarea
                              name={field.name}
                              id={field.name}
                              rows={field.rows}
                              value={formData[field.name]}
                              onChange={handleChange}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          )}
                          {/* add more input types here */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-blue-850 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
            {currentSection === 2 && (
              <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
                <div className="pt-8">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">Section 2</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Section 2 description.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    {listingFields.slice(6, 12).map((field) => (
                      <div key={field.name} className={`sm:col-span-${field.colSpan}`}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          {field.label}
                        </label>
                        <div className="mt-1">
                          {field.type === 'text' && (
                            <input
                              type="text"
                              name={field.name}
                              id={field.name}
                              autoComplete="off"
                              value={formData[field.name]}
                              onChange={handleChange}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          )}
                          {field.type === 'textarea' && (
                            <textarea
                              name={field.name}
                              id={field.name}
                              rows={field.rows}
                              value={formData[field.name]}
                              onChange={handleChange}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          )}
                          {/* add more input types here */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-950 dark:text-gray-200 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-blue-850 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* add more sections */}
            {currentSection === 3 && (
              <div className="pt-5">
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-950 dark:text-gray-200 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-blue-850 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Create Listing
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateListing;
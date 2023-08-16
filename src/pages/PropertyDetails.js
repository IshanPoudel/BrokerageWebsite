import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetails = () => {
  const location = useLocation();
  const property = location.state && location.state.property;

  if (!property) {
    return <p>Property not found.</p>;
  }

  const {
    StreetAddress,
    City,
    State,
    ZipCode,
    Price,
    Photos,
    Bedroom,
    Bathroom,
    MLSListingID,
    // Add more property details here
    // For example:
    // PropertyDescription,
    // PropertyFeatures,
    // ...
  } = property;

  return (
    <div className="property-details p-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Carousel
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={clickHandler}
                  title={label}
                  className="absolute z-10 left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-3 rounded-full focus:outline-none focus:bg-opacity-60"
                >
                  &lt; {/* Left arrow */}
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={clickHandler}
                  title={label}
                  className="absolute z-10 right-4 md:right-8 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-3 rounded-full focus:outline-none focus:bg-opacity-60"
                >
                  &gt; {/* Right arrow */}
                </button>
              )
            }
          >
            {Photos.map((photo, index) => (
              <div key={index} className="w-full h-[400px] md:h-[600px]">
                <img
                  src={photo}
                  alt={`${StreetAddress} - Photo ${index + 1}`}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            ))}
          </Carousel>

          {/* Manually render and style thumbnails */}
          <div className="flex justify-center mt-4 space-x-2">
            {Photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${StreetAddress} - Thumbnail ${index + 1}`}
                className="w-16 h-12 object-cover border border-gray-300 rounded-md cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{StreetAddress}</h2>
            <p className="text-gray-600 mb-6">{`${City}, ${State} ${ZipCode}`}</p>
            <div className="border-b border-gray-300 pb-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-semibold text-gray-600">For Sale</p>
                <p className="text-lg text-gray-600">{`MLS Listing ID: ${MLSListingID}`}</p>
              </div>
              <div className="flex items-center">
                <p className="text-3xl font-semibold">{Price}</p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Property Details</h3>
              <div className="flex items-center space-x-4 mb-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg">{Bedroom} Bedrooms</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg">{Bathroom} Bathrooms</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 focus:outline-none">
              Request a Tour
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

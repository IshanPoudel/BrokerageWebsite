import React from "react";
import { useLocation } from "react-router-dom";

const PropertyDetails = () => {
  const location = useLocation();
  const property = location.state && location.state.property;

  if (!property) {
    return <p>Property not found.</p>;
  }

  const { StreetAddress, City, State, ZipCode, Price, Photos } = property;

  return (
    <div className="property-details">
      <div className="flex items-center justify-center h-80">
        <div className="w-full">
          <div className="relative h-full">
            <img
              src={Photos[0]}
              alt={StreetAddress}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">{StreetAddress}</h2>
        <p className="text-gray-600">
          {City}, {State}, {ZipCode}
        </p>
        <p className="mt-2 text-xl font-semibold">${Price}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Photos</h3>
        <div className="flex overflow-x-auto space-x-4">
          {Photos.map((photo, index) => (
            <div key={index} className="w-64 h-44">
              <img
                src={photo}
                alt={`${StreetAddress} - Photo ${index + 1}`}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Display other property details here */}
    </div>
  );
};

export default PropertyDetails;

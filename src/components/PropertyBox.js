import React from "react";
import { useNavigate } from 'react-router-dom';

const PropertyBox = ({ property }) => {
  const { StreetAddress, City, State, ZipCode, Price, Photos } = property;
  const slug = `${StreetAddress}-${City}-${State}`.toLowerCase().replace(/\s+/g, "-");
  
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handlePropertyClick = () => {
    // Navigate to the PropertyDetails route with the state object
    navigate(`/property/${slug}`, { state: { property } });
  };

  return (
    <div
      onClick={handlePropertyClick} // Call the handlePropertyClick function on click
      className="property-box shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col p-6"
    >
      <div className="relative pb-[85%] w-100">
        <img
          src={Photos[0]}
          alt={StreetAddress}
          className="object-cover absolute top-0 left-0 w-full h-full rounded-md"
        />
      </div>
      <div className="mt-6">
        <p className="text-xl font-semibold">{StreetAddress}</p>
        <p className="text-gray-600">
          {City}, {State}, {ZipCode}
        </p>
        <p className="mt-3 text-xl font-semibold">{Price}</p>
      </div>
    </div>
  );
};

export default PropertyBox;

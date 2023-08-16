import React from "react";
import PropertyBox from "../components/PropertyBox";
import { properties } from "../assets";

const Property = () => {
  const maxBoxesPerLine = 3;

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const propertyChunks = chunkArray(properties, maxBoxesPerLine);

  return (
    <div className="flex flex-wrap gap-4">
      {propertyChunks.map((chunk, rowIndex) => (
        <div key={rowIndex} className="flex w-full">
          {chunk.map((property, index) => (
            <div key={property.id} className={`w-1/3 px-2`}>
              <PropertyBox property={property} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Property;

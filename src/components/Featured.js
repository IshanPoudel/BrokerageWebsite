import React from "react";
import PropertyBox from "./PropertyBox";
import { properties } from "../assets";

const Featured = () => {
  const featuredProperties = properties.filter(prop => prop.Featured === 1);
  const maxBoxesPerLine = 3;
  const maxTotalBoxes = 6;

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const propertyChunks = chunkArray(featuredProperties.slice(0, maxTotalBoxes), maxBoxesPerLine);

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

export default Featured;

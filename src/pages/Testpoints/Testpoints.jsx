import React, { useState } from "react";
import { Link } from "react-router-dom";

const testpointData = {
  "Redmi": ["Redmi-4x", "Note10", "Note11"],
  "Samsung": ["A05S", "A12", "M31"],
  "Vivo": ["Y11", "Y20", "Y30"]
};

const TestPoints = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand === selectedBrand ? null : brand);
  };

  return (
    <section className="bg-gradient-to-r px-5 from-gray-800 via-gray-900 to-black text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Test Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Displaying phone brands */}
          {Object.keys(testpointData).map((brand, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-800 rounded-lg text-center transition transform hover:scale-105 cursor-pointer ${
                selectedBrand === brand ? "border-teal-400 border-4" : ""
              }`}
              onClick={() => handleBrandClick(brand)}
            >
              <h3 className="text-2xl font-bold">{brand}</h3>
            </div>
          ))}
        </div>

        {/* Displaying models when a brand is selected */}
        {selectedBrand && (
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6">Models for {selectedBrand}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {testpointData[selectedBrand].map((model, index) => (
                <Link
                  key={index}
                  to={`/testpoints/${model}`}
                  className="p-4 bg-gray-700 rounded-lg hover:bg-teal-500 transition text-center"
                >
                  <h4 className="text-xl font-semibold">{model}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestPoints;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TestpointData from "../../../testpoints.json";

const Testpoints = () => {
  const { brand } = useParams();
  const [models, setModels] = useState([]);

  useEffect(() => {
    const brandData = TestpointData.filter(item => item.brand.toLowerCase() === brand.toLowerCase());

    if (brandData.length > 0) {
      setModels(brandData);
    } else {
      setModels([]);
    }
  }, [brand]);

  return (
    <div className="models container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">{brand.toUpperCase()} Modellar</h2>
      
      <div className="model-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {models.length > 0 ? (
          models.map((model, index) => (
            <div className="card bg-gray-800 text-white p-6 rounded-lg shadow-md" key={index}>
              <img src={model.image} alt={model.model} className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">{model.model}</h3>
              <p>{model.about}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-xl">Modellar topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default Testpoints;

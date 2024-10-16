import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TestpointData from "../../../testpoints.json";

const PhoneDetails = () => {
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
    <div className="models container mx-auto py-8 bg-[#1F2937]">
      <h2 className="text-3xl font-bold text-center mb-6 pt-5 text-white">{brand.toUpperCase()} Testpointlari</h2>
      
      <div className="model-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 pb-7">
        {models.length > 0 ? (
          models.map((model, index) => (
            <div className="card bg-teal-800 hover:scale-105 transition text-white p-6 rounded-lg shadow-md" key={index}>
              <img src={model.image} alt={model.model} className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">{model.model}</h3>
              <p className='opacity-70'>{model.about}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-xl">Modellar topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default PhoneDetails;

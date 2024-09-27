import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Testpoints = () => {
  const { brand } = useParams();
  const [models, setModels] = useState([]);
  console.log(brand);
  console.log(models);
  
  

  useEffect(() => {
    fetch(`http://localhost:3000/testpoints`)
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        if (Array.isArray(data)) {
          const brandData = data.find(tp => tp[brand]);
          if (brandData) {
            setModels(brandData[brand]);
          } else {
            console.log(`${brand} uchun ma'lumot topilmadi`);
          }
        } else {
          console.error(data);
        }
      })
      .catch(error => console.error(error));
  }, [brand]);
  
  

  return (
    <div className="models">
      <h2>{brand.toUpperCase()} Modellar</h2>
      <div className="model-cards">
        {models.length > 0 ? (
          models.map((model, index) => (
            <div className="card" key={index}>
              <img src={model.image} alt={model.model} />
              <h3>{model.model}</h3>
              <p>{model.about}</p>
            </div>
          ))
        ) : (
          <p>Modellar topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default Testpoints;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PhoneDetails = () => {
  const { model } = useParams();
  const [phoneInfo, setPhoneInfo] = useState(null);

  useEffect(() => {
    // Fetch the phone data from the JSON file
    fetch("allData.json") // Adjust path if necessary
      .then((response) => response.json())
      .then((data) => {
        // Set the phone data based on the model from the URL
        setPhoneInfo(data[model]);
      })
      .catch((error) => console.error("Error fetching phone data:", error));
  }, [model]);

  if (!phoneInfo) {
    return <div>Ma'lumot topilmadi yoki yuklanmoqda...</div>;
  }

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">{phoneInfo.name}</h2>
        <img src={phoneInfo.image} alt={phoneInfo.name} className="mb-6" />
        <p className="text-lg mb-6">{phoneInfo.description}</p>
        <button
          className="px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded"
          onClick={() => window.history.back()}
        >
          Ortga qaytish
        </button>
      </div>
    </section>
  );
};

export default PhoneDetails;

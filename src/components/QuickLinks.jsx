import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestPointImage from "../assets/images/testpoint-img.jpg";
import FRPRemovalImage from "../assets/images/frp-img.jpg";
import DefaultImage from "../assets/images/free-service-img.svg";
import { useTranslation } from "react-i18next";

function ContactUsSection() {
  const { t } = useTranslation();
  const [hoveredImage, setHoveredImage] = useState(DefaultImage);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(DefaultImage);
  };

  return (
    <section className="bg-gradient-to-r px-5 from-gray-800 via-gray-900 to-black text-white py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 px-8">
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-teal-400 pl-4">{t("freeServices")}</h2>
          <Link to="/testpoints" className="text-lg font-medium hover:text-teal-400 transition transform hover:translate-x-2" onMouseEnter={() => handleMouseEnter(TestPointImage)} onMouseLeave={handleMouseLeave}>{t("testPoints")}</Link>

          <Link to="/frp-removal" className="text-lg font-medium hover:text-teal-400 transition transform hover:translate-x-2" onMouseEnter={() => handleMouseEnter(FRPRemovalImage)} onMouseLeave={handleMouseLeave}>{t("removeFrp")}</Link>

        </div>
        <div className="flex justify-center items-center">
          <img src={hoveredImage} alt="Service Preview" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;

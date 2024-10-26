import React from 'react';
import { FaTools, FaMicrochip, FaLock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-900 text-white px-5 py-[130px]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-[50px]">
          {t("ourService")}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative text-center p-6 bg-gray-800 rounded-lg shadow-md hover:bg-teal-500 transition">
            <FaTools className="mx-auto text-4xl mb-4 text-teal-400" />
            <h3 className="text-xl font-semibold mb-2">{t("testPoints")}</h3>
            <p className="text-gray-400">
              {t("testpointsBody")}
            </p>
            <div className="absolute inset-0 bg-teal-700 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-lg">{t("contactUsHind")}</p>
            </div>
          </div>
          <div className="relative text-center p-6 bg-gray-800 rounded-lg shadow-md hover:bg-teal-500 transition">
            <FaMicrochip className="mx-auto text-4xl mb-4 text-teal-400" />
            <h3 className="text-xl font-semibold mb-2">{t("files")}</h3>
            <p className="text-gray-400">
              {t("filesBody")}
            </p>
            <div className="absolute inset-0 bg-teal-700 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-lg">{t("contactUsHind")}</p>
            </div>
          </div>
          <div className="relative text-center p-6 bg-gray-800 rounded-lg shadow-md hover:bg-teal-500 transition">
            <FaLock className="mx-auto text-4xl mb-4 text-teal-400" />
            <h3 className="text-xl font-semibold mb-2">{t("removeFrp")}</h3>
            <p className="text-gray-400">
              {t("removefrpBody")}
            </p>
            <div className="absolute inset-0 bg-teal-700 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-lg">{t("contactUsHind")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

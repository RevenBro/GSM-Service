import React from 'react'
import { useTranslation } from 'react-i18next';
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  const { t } = useTranslation()
  return (
    <>
      <section className="bg-[#1F2937] px-5 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">{t("contact")}</h2>
            <p>{t("contactBody")}</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-teal-400 text-xl" />
                <a href='tel:+998334845656'>+998 99 484 5656</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-teal-400 text-xl" />
                <span>info@gsmkeles.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-teal-400 text-xl" />
                <span>Keles Yuli Street, 3</span>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-teal-400 hover:text-teal-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">{t("fullName")}</label>
                <input type="text" placeholder={t("name")} className="w-full p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"/>
              </div>
              <div>
                <label className="block mb-2 font-semibold">{t("email")}</label>
                <input type="email" placeholder={t("emailM")} className="w-full p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"/>
              </div>
              <div>
                <label className="block mb-2 font-semibold">{t("phoneNumber")}</label>
                <input type="tel" placeholder={t("phoneNumber")} className="w-full p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"/>
              </div>
              <div>
                <label className="block mb-2 font-semibold">{t("message")}</label>
                <textarea placeholder={t("enterMessage")} className="w-full p-4 rounded bg-gray-700 text-white h-32 focus:outline-none focus:ring-2 focus:ring-teal-400"></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-400 text-gray-900 font-semibold py-4 rounded hover:bg-teal-500 transition">{t("send")}</button>
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Contact
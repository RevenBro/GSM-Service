import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const {t} = useTranslation();
  return (
    <footer className="bg-gray-900 px-5 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="text-3xl font-bold">
            <a href="/" className="text-white">KelesGSM</a>
          </div>
          <p className="text-gray-400">{t("footerBody")}</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-teal-400 hover:text-teal-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{t("quickLinks")}</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-teal-400">{t("main")}</a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-400">{t("about")}</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">{t("services")}</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-400">{t("contact")}</a>
            </li>
            <li>
              <a href="/FAQ" className="hover:text-teal-400">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{t("keepNews")}</h3>
          <p className="text-gray-400">{t("keepNewsBody")}</p>
          <form>
            <input type="email" placeholder={t("email")} className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"/>
            <button type="button" disabled className="mt-4 w-full px-4 py-2 bg-teal-800 text-white rounded hover:bg-teal-500 hover:cursor-not-allowed focus:outline-none">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} KelesGSM. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

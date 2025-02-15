import React, { useState } from "react";
import SiteLogo from "../assets/images/favicon.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

function Header({ changeLang }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    toast("Tez kunda", {
      duration: 2500,
    });
    navigate("/login")
  };

  return (
    <header className="bg-gray-900 p-[20px] text-white shadow-md z-30">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <a href="/" className="text-white">
            <img src={SiteLogo} alt="Site Logo" width={40} height={40} className="inline-block mr-2"/>
            KelesGSM
          </a>
        </div>

        <nav className="flex items-center space-x-6 z-50">
          <ul className={`md:flex md:space-x-6 ${isMenuOpen ? "flex flex-col space-y-4" : "hidden md:flex"}`}>
            <li>
              <Link to="/" className="hover:text-teal-400">{t('main')}</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-400">{t("contact")}</Link>
            </li>
            <li>
              <Link to="/FAQ" className="hover:text-teal-400">FAQ</Link>
            </li>
          </ul>

          <button className="block md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* <div className="relative">
            <button className="flex items-center space-x-2 hover:text-teal-400 focus:outline-none" onClick={toggleDropdown}>
              <span>Til</span>
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {isDropdownOpen && (
              <select onChange={handleChangeLang} className="absolute right-0 mt-2 w-32 bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                <option value="uz" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#14b8a6]">
                  O'zbek
                </option>
                <option value="en" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#14b8a6]">
                  English
                </option>
                <option value="ru" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#14b8a6]">
                  Русский
                </option>
              </select>
            )}
          </div> */}

          {/* <div className="relative">
            <button className="flex items-center space-x-2 hover:text-teal-400 focus:outline-none" onClick={toggleDropdown}>
              <span>Til</span>
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#14b8a6]">
                    O'zbek
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#14b8a6]">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#14b8a6]">
                    Русский
                  </a>
                </li>
              </ul>
            )}
          </div> */}

<div className="relative">
  <button className="flex items-center space-x-2 hover:text-teal-400 focus:outline-none" onClick={toggleDropdown}>
    <span>{t("lang")}</span>
    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  </button>
  {isDropdownOpen && (
    <ul className="absolute right-0 mt-2 w-32 bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
      <li onClick={() => changeLang("uz")}>
        <button  className="block cursor-pointer px-4 py-2 w-full text-left hover:bg-gray-200 hover:text-[#14b8a6]">
          O'zbek
        </button>
      </li>
      <li onClick={() => changeLang("en")}>
        <a className="block cursor-pointer px-4 w-full text-left py-2 hover:bg-gray-200 hover:text-[#14b8a6]">
          English
        </a>
      </li>
      <li onClick={() => changeLang("ru")}>
        <a className="block cursor-pointer px-4 w-full text-left py-2 hover:bg-gray-200 hover:text-[#14b8a6]">
          Русский
        </a>
      </li>
    </ul>
  )}
</div>


          <div className="hidden md:block">
            <input type="text" placeholder={t("search")} className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"/>
          </div>

          <div className="hidden md:block">
            <button onClick={handleLoginClick} className="px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-500 focus:outline-none">
            {t("login")}
            </button>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-6">
          <Link to="/" className="block text-teal-400 hover:text-teal-300">{t("main")}</Link>
          <Link to="/contact" className="block text-teal-400 hover:text-teal-300">{t("contact")}</Link>
          <Link to="/FAQ" className="block text-teal-400 hover:text-teal-300">FAQ</Link>
          <input type="text" placeholder="Search..." className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"/>
          <button onClick={navigate("/login")} className="px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-500 focus:outline-none">{t("login")}</button>
        </div>
      )}
    </header>
  );
}

export default Header;

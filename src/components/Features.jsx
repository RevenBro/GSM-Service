import React from 'react';
import { FaTools, FaMicrochip, FaLock } from 'react-icons/fa';

function Services() {
  return (
    <section className="bg-gray-900 text-white px-5 py-[130px]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-[50px]">
          Bizning Xizmatlarimiz
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative text-center p-6 bg-gray-800 rounded-lg shadow-md hover:bg-teal-500 transition">
            <FaTools className="mx-auto text-4xl mb-4 text-teal-400" />
            <h3 className="text-xl font-semibold mb-2">Test Points</h3>
            <p className="text-gray-400">
              Turli telefon va laptop modellari uchun test nuqtalarini topish.
            </p>
            <div className="absolute inset-0 bg-teal-700 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-lg">Ko'proq ma'lumot uchun bog'laning</p>
            </div>
          </div>
          {/* Xizmat 2 */}
          <div className="relative text-center p-6 bg-gray-800 rounded-lg shadow-md hover:bg-teal-500 transition">
            <FaMicrochip className="mx-auto text-4xl mb-4 text-teal-400" />
            <h3 className="text-xl font-semibold mb-2">Firmware Files</h3>
            <p className="text-gray-400">
              Eng so'nggi va yangilangan firmware fayllarini yuklab olish.
            </p>
            <div className="absolute inset-0 bg-teal-700 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-lg">Ko'proq ma'lumot uchun bog'laning</p>
            </div>
          </div>
          {/* Xizmat 3 */}
          <div className="relative text-center p-6 bg-gray-800 rounded-lg shadow-md hover:bg-teal-500 transition">
            <FaLock className="mx-auto text-4xl mb-4 text-teal-400" />
            <h3 className="text-xl font-semibold mb-2">FRP Removal</h3>
            <p className="text-gray-400">
              FRP blokirovkasini oson va xavfsiz olib tashlash.
            </p>
            <div className="absolute inset-0 bg-teal-700 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-lg">Ko'proq ma'lumot uchun bog'laning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

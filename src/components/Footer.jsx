import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 px-5 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="text-3xl font-bold">
            <a href="/" className="text-white">KelesGSM</a>
          </div>
          <p className="text-gray-400">KelesGSM is your go-to platform for all things related to mobile and laptop repair. Explore our services for test points, firmware files, and FRP removal.</p>

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
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-teal-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400">Get the latest updates and offers right in your inbox.</p>
          <form>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"/>
            <button type="submit" className="mt-4 w-full px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-500 focus:outline-none">Subscribe</button>
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

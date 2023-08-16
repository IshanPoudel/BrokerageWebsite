import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-neutral-600 dark:text-neutral-200">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Social Media Links */}
          <div className="md:col-span-1">
            <h6 className="text-lg font-semibold mb-4 uppercase">Connect With Us</h6>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Mailing List Form */}
          <div className="md:col-span-2 mt-8 md:mt-0">
            <h6 className="text-lg font-semibold mb-4 uppercase">Join Our Mailing List</h6>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-52 py-2 px-4 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Subscribe
              </button>
            </form>
          </div>

          {/* Location and Contact */}
          <div className="md:col-span-1 mt-8 md:mt-0">
            <h6 className="text-lg font-semibold mb-4 uppercase">Contact Us</h6>
            <p className="text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-400 mr-2 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 0a9.923 9.923 0 00-7.064 2.936c-3.896 3.895-3.896 10.213 0 14.108a9.923 9.923 0 007.064 2.936c2.563 0 5.127-.978 7.063-2.936 3.896-3.895 3.896-10.213 0-14.108A9.923 9.923 0 0010 0zm0 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
              New York, NY 10012, US
            </p>
            <p className="text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-400 mr-2 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 0a9.923 9.923 0 00-7.064 2.936c-3.896 3.895-3.896 10.213 0 14.108a9.923 9.923 0 007.064 2.936c2.563 0 5.127-.978 7.063-2.936 3.896-3.895 3.896-10.213 0-14.108A9.923 9.923 0 0010 0zm0 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
              reliant@realestate.com
            </p>
            <p className="text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-400 mr-2 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 0a9.923 9.923 0 00-7.064 2.936c-3.896 3.895-3.896 10.213 0 14.108a9.923 9.923 0 007.064 2.936c2.563 0 5.127-.978 7.063-2.936 3.896-3.895 3.896-10.213 0-14.108A9.923 9.923 0 0010 0zm0 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
              +1 (123) 456-7890
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-neutral-300 dark:border-neutral-700 pt-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} All rights reserved</span>
          <a
            href="https://tailwind-elements.com/"
            className="text-blue-500 hover:text-blue-600 transition duration-300 font-semibold">
            Reliant Real Estate
          </a>
        </div>
      </div>
    </footer>
  );
}

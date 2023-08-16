import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoBrokerage } from '../assets';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <div className="text-3xl font-bold">
            <Link to="/">
            <img className='w-40' src={logoBrokerage} alt='BrokerageLogo' />
            </Link>
            
          </div>
        </div>
        <div className="space-x-4">
          <Link
            to="#"
            className="hover:text-gray-300 text-3xl px-3 py-2 border-2 border-transparent rounded-md transition duration-300 ease-in-out focus:outline-none focus:border-gray-300"
          >
            Buy
          </Link>
          <Link
            to="#"
            className="hover:text-gray-300 text-3xl px-3 py-2 border-2 border-transparent rounded-md transition duration-300 ease-in-out focus:outline-none focus:border-gray-300"
          >
            Sell
          </Link>
          <Link
            to="/listings"
            className="hover:text-gray-300 text-3xl px-3 py-2 border-2 border-transparent rounded-md transition duration-300 ease-in-out focus:outline-none focus:border-gray-300"
          >
            Listings
          </Link>
          <Link
            to="/agents"
            className="hover:text-gray-300 text-3xl px-3 py-2 border-2 border-transparent rounded-md transition duration-300 ease-in-out focus:outline-none focus:border-gray-300"
          >
            Agents
          </Link>

          <Link
            to="/contact"
            className="hover:text-gray-300 text-3xl px-3 py-2 border-2 border-transparent rounded-md transition duration-300 ease-in-out focus:outline-none focus:border-gray-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

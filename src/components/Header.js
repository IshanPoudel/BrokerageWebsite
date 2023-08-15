import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoBrokerage } from '../assets';



const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-lg">
          <div className="container mx-auto flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                   <img className='w-14' src={logoBrokerage} alt='BrokerageLogo' />
                </div>
            </div>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-300">Buy</a>
              <a href="#" className="hover:text-gray-300">Sell</a>
              <a href="#" className="hover:text-gray-300">Listings</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        </header>
      );
}

export default Header
import React from 'react';
import logoNav from '../assets/logo-nav.png';
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToSale = () => {
    navigate('/forsale');
  };


  return (
    <nav className="w-screen bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center text-white font-bold">
              <img
                className="h-8 w-8"
                src={logoNav}
                alt="logoNav"
              />
              <p className='ms-2'>Prathama Land</p>
            </div>
            <div className="flex items-center">
            <div className="hidden md:block">
              <div className=" text-white ml-10 flex items-baseline space-x-4">
                <a
                  onClick={navigateToHome}
                  className=" hover:text-yellow-300 border-bottom-width: 2px; px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>

                <a
                  onClick={navigateToSale}
                  className=" hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Land For Sale
                </a>

                <a
                  href="#"
                  className=" hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

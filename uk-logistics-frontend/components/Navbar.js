'use client';
import {useState} from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-lg font-semibold">
          UK Logistics
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-50 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-5">
            <div className="absolute right-[40px] top-[9px] w-[86%] flex justify-between">
              <a href="/" className="text-lg font-semibold">
                UK Logistics
              </a>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="mt-10">
              <li>
                <a
                  href="/about"
                  className="block px-3 py-2 rounded text-white hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block px-3 py-2 rounded text-white hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-3 py-2 rounded text-white hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex space-x-3">
          <a href="/about" className="px-3 py-2 hover:bg-gray-700">
            About Us
          </a>
          <a href="/services" className="px-3 py-2 hover:bg-gray-700">
            Services
          </a>
          <a href="/contact" className="px-3 py-2 hover:bg-gray-700">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

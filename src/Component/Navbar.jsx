import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">HCP Travels</span>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-500 cursor-pointer">
            Home
          </Link>
          <Link to="/activities" className="hover:text-blue-500 cursor-pointer">
            Activity
          </Link>
          <Link to="/flights" className="hover:text-blue-500 cursor-pointer">
            Flights
          </Link>
          <Link to="/hotels" className="hover:text-blue-500 cursor-pointer">
            Hotels
          </Link>
          <Link to="/about-us" className="hover:text-blue-500 cursor-pointer">
            About
          </Link>
          <Link to="/service" className="hover:text-blue-500 cursor-pointer">
            Service
          </Link>
          <Link to="/blog" className="hover:text-blue-500 cursor-pointer">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-blue-500 cursor-pointer">
            Contact
          </Link>
          {/* <li className="hover:text-blue-500 cursor-pointer">Activity</li>
          <li className="hover:text-blue-500 cursor-pointer">Flights</li>
          <li className="hover:text-blue-500 cursor-pointer">Hotels</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Service</li>
          <li className="hover:text-blue-500 cursor-pointer">Blog</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li> */}
          <button className="w-20 h-10 bg-blue-700 rounded-lg text-white">
            Call Now
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

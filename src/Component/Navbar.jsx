// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//         <span className="text-xl font-bold text-blue-600">HCP Travels</span>
//         <ul className="flex gap-6 text-gray-700 font-medium">
//           <Link to="/" className="hover:text-blue-500 cursor-pointer">
//             Home
//           </Link>
//           <Link to="/activities" className="hover:text-blue-500 cursor-pointer">
//             Activity
//           </Link>
//           <Link to="/flights" className="hover:text-blue-500 cursor-pointer">
//             Flights
//           </Link>
//           <Link to="/hotels" className="hover:text-blue-500 cursor-pointer">
//             Hotels
//           </Link>
//           <Link to="/about-us" className="hover:text-blue-500 cursor-pointer">
//             About
//           </Link>
//           <Link to="/service" className="hover:text-blue-500 cursor-pointer">
//             Service
//           </Link>
//           <Link to="/blog" className="hover:text-blue-500 cursor-pointer">
//             Blog
//           </Link>
//           <Link to="/contact" className="hover:text-blue-500 cursor-pointer">
//             Contact
//           </Link>
//           {/* <li className="hover:text-blue-500 cursor-pointer">Activity</li>
//           <li className="hover:text-blue-500 cursor-pointer">Flights</li>
//           <li className="hover:text-blue-500 cursor-pointer">Hotels</li>
//           <li className="hover:text-blue-500 cursor-pointer">About</li>
//           <li className="hover:text-blue-500 cursor-pointer">Service</li>
//           <li className="hover:text-blue-500 cursor-pointer">Blog</li>
//           <li className="hover:text-blue-500 cursor-pointer">Contact</li> */}
//           <button className="w-20 h-10 bg-blue-700 rounded-lg text-white">
//             Call Now
//           </button>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-lg"
    >
      <nav className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          HCP Travels
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-4 text-gray-800 font-medium items-center">
          <Link
            to="/"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/activities"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Activity
          </Link>
          <Link
            to="/flights"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Flights
          </Link>
          <Link
            to="/hotels"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Hotels
          </Link>
          <Link
            to="/about-us"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/service"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Service
          </Link>
          <Link
            to="/blog"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Contact
          </Link>
          <button className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            Call Now
          </button>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-3 text-gray-800 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/activities" onClick={() => setMenuOpen(false)}>
              Activity
            </Link>
            <Link to="/flights" onClick={() => setMenuOpen(false)}>
              Flights
            </Link>
            <Link to="/hotels" onClick={() => setMenuOpen(false)}>
              Hotels
            </Link>
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/service" onClick={() => setMenuOpen(false)}>
              Service
            </Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <button className="w-full py-2 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-md">
              Call Now
            </button>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;

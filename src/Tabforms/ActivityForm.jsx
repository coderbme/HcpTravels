import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

export default function ActivityForm() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-black px-4 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Toggle Button for Mobile */}
        <div className="flex justify-end md:hidden mb-4">
          <button
            className="flex items-center gap-2 text-white bg-gray-800 px-4 py-2 rounded-md"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <FiFilter className="text-lg" />
            Filters
          </button>
        </div>

        {/* Search Bar */}
        <div
          className={`bg-white rounded-md shadow overflow-hidden w-full flex-col md:flex-row flex items-stretch md:items-center transition-all duration-300 ${
            showFilters ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r flex-1">
            <FaMapMarkerAlt className="text-gray-500" />
            <input
              type="text"
              placeholder="I want to go to"
              className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-500"
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r flex-1">
            <FaCalendarAlt className="text-gray-500" />
            <input
              type="date"
              className="outline-none w-full bg-transparent text-gray-700"
            />
          </div>

          {/* Guests */}
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r flex-1">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              placeholder="1 Guest (s)"
              className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-500"
            />
          </div>

          {/* Search Button */}
          <div className="px-4 py-3">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium w-full md:w-auto px-6 py-3 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// components/HotelSearchForm.jsx
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function HotelForm() {
  return (
    <div className="bg-[#f9f6f2] flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-full flex items-center px-4 py-3 gap-3 w-full max-w-4xl">
        {/* Location Input */}
        <div className="flex items-center gap-2 border-r pr-4 flex-1">
          <FaMapMarkerAlt className="text-gray-500" />
          <input
            type="text"
            placeholder="New York, NY, United States"
            className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* Date Picker */}
        <div className="flex items-center gap-2 border-r pr-4 flex-1">
          <FaCalendarAlt className="text-gray-500" />
          <input
            type="text"
            placeholder="25 May, 2025 - 30 May, 2025"
            className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* Guest Info */}
        <div className="flex items-center gap-2 border-r pr-4 flex-1">
          <FaUser className="text-gray-500" />
          <input
            type="text"
            placeholder="1 Room, 2 Guests"
            className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* Search Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
          Search
        </button>
      </div>
    </div>
  );
}

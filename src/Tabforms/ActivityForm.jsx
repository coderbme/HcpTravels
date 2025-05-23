import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function ActivityForm() {
  return (
    <div className="bg-black px-4 py-6">
      <div className="bg-white rounded-md shadow overflow-hidden flex items-center w-full max-w-5xl mx-auto">
        {/* Location */}
        <div className="flex items-center gap-2 px-4 py-3 border-r flex-1">
          <FaMapMarkerAlt className="text-gray-500" />
          <input
            type="text"
            placeholder="I want to go to"
            className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-500"
          />
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 px-4 py-3 border-r flex-1">
          <FaCalendarAlt className="text-gray-500" />
          <input
            type="date"
            className="outline-none w-full bg-transparent text-gray-700"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 px-4 py-3 border-r flex-1">
          <FaUser className="text-gray-500" />
          <input
            type="text"
            placeholder="1 Guest (s)"
            className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-500"
          />
        </div>

        {/* Search Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3">
          Search
        </button>
      </div>
    </div>
  );
}

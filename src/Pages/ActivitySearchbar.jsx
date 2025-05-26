import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ActivitySearchbar() {
  return (
    <div className="bg-[#f0f2f5] py-5 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white border-2 border-[#2A5286] rounded-xl shadow-xl max-w-6xl w-full px-4 py-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Location */}
          <div className="relative border rounded-md border-[#2A5286] bg-[#E8E0D5]">
            <FaMapMarkerAlt className="absolute top-3.5 left-4 text-[#2A5286] text-lg" />
            <input
              type="text"
              placeholder="Hyderabad"
              className="w-full pl-10 pr-4 py-3 rounded-md bg-transparent text-gray-900 placeholder:text-gray-600 outline-none"
            />
          </div>

          {/* Date */}
          <div className="relative border rounded-md border-[#2A5286] bg-[#E8E0D5]">
            <FaCalendarAlt className="absolute top-3.5 left-4 text-[#2A5286] text-lg" />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-3 rounded-md bg-transparent text-gray-900 placeholder:text-gray-600 outline-none"
            />
          </div>

          {/* Guests */}
          <div className="relative border rounded-md border-[#2A5286] bg-[#E8E0D5]">
            <FaUser className="absolute top-3.5 left-4 text-[#2A5286] text-lg" />
            <input
              type="text"
              placeholder="2 adults • 1 room"
              className="w-full pl-10 pr-4 py-3 rounded-md bg-transparent text-gray-900 placeholder:text-gray-600 outline-none"
            />
          </div>

          {/* Search Button */}
          <div>
            <button className="w-full h-full py-3 rounded-md bg-gradient-to-r from-[#2A5286] to-[#1d3b63] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

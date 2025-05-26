import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ActivitySearchbar({ location: initialLocation, startDate:initialStartDate, guests:initialGuests}) {

    const [location, setLocation] = useState(initialLocation || '');
    const [startDate, setStartDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0];   // format YYYY-MM-DD
    });
    const [guests, setGuests] = useState(initialGuests || 1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search:', { location, startDate, guests });

         if (!location.trim()) {
            alert("Please enter a location.");
            return;
        }
        
        if (!startDate) {
            alert("Please select a valid date.");
            return;
        }

        const queryParams = new URLSearchParams({
            location,
            date: startDate,
            guests,
        }).toString();

        navigate(`/activities?${queryParams}`)
    };
    
  return (
    <div className="bg-[#f0f2f5] py-5 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white border-2 border-[#2A5286] rounded-xl shadow-xl max-w-6xl w-full px-4 py-4"
      >
       <form onSubmit={handleSubmit}> 
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {/* Location */}
            <div className="relative border rounded-md border-[#2A5286] bg-[#E8E0D5]">
                <FaMapMarkerAlt className="absolute top-3.5 left-4 text-[#2A5286] text-lg pointer-events-none" />
                <input
                    type="text"
                    placeholder="I want to go..."
                    className="w-full pl-10 pr-4 py-3 rounded-md bg-transparent text-gray-900 placeholder:text-gray-600 outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            {/* Date */}
            <div className="relative border rounded-md border-[#2A5286] bg-[#E8E0D5]">
                <FaCalendarAlt className="absolute top-3.5 left-4 text-[#2A5286] text-lg pointer-events-none" />
                <input
                    type="Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-md bg-transparent text-gray-900 placeholder:text-gray-600 outline-none"
                />
            </div>

            {/* Guests */}
            <div className="relative border rounded-md border-[#2A5286] bg-[#E8E0D5]">
                <FaUser className="absolute top-3.5 left-4 text-[#2A5286] text-lg pointer-events-none" />
                <input
                    type="number"
                    min="1"
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-md bg-transparent text-gray-900 placeholder:text-gray-600 outline-none"
                />
            </div>

            {/* Search Button */}
            <div>
                <button
                type="submit" 
                className="w-full h-full py-3 rounded-md bg-gradient-to-r from-[#2A5286] to-[#1d3b63] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                Search
                </button>

            </div>
            </div>
        </form>
      </motion.div>
    </div>
  );
}

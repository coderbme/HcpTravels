import { useState } from "react";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";

export default function FlightForm() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="bg-black px-4 py-6">
      {/* Trip Type Toggle */}
      <div className="flex gap-4 mb-4 text-white">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="trip"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
            className="accent-blue-500"
          />
          ONE WAY
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="trip"
            value="round"
            checked={tripType === "round"}
            onChange={() => setTripType("round")}
            className="accent-blue-500"
          />
          ROUND TRIP
        </label>
      </div>

      {/* Search Form */}
      <div className="flex bg-white rounded-md shadow overflow-hidden">
        {/* From */}
        <div className="flex items-center px-4 py-2 gap-2 border-r w-full">
          <FaPlaneDeparture className="text-gray-500" />
          <input
            type="text"
            placeholder="Delhi, India"
            className="outline-none w-full bg-transparent text-gray-700"
          />
        </div>

        {/* Switch Icon */}
        <div className="flex justify-center items-center px-3 border-r">
          <FaExchangeAlt className="text-black text-xl" />
        </div>

        {/* To */}
        <div className="flex items-center px-4 py-2 gap-2 border-r w-full">
          <FaPlaneArrival className="text-gray-500" />
          <input
            type="text"
            placeholder="New York, United States"
            className="outline-none w-full bg-transparent text-gray-700"
          />
        </div>

        {/* Departure Date */}
        <div className="flex items-center px-4 py-2 gap-2 border-r w-full">
          <FaCalendarAlt className="text-gray-500" />
          <input
            type="date"
            className="outline-none w-full bg-transparent text-gray-700"
          />
        </div>

        {/* Return Date */}
        <div className="flex items-center px-4 py-2 gap-2 border-r w-full">
          <FaCalendarAlt className="text-gray-500" />
          <input
            type="date"
            className="outline-none w-full bg-transparent text-gray-700"
            disabled={tripType === "oneway"}
          />
        </div>

        {/* Passengers */}
        <div className="flex items-center px-4 py-2 gap-2 border-r w-full">
          <FaUserFriends className="text-gray-500" />
          <input
            type="number"
            min="1"
            defaultValue={1}
            className="outline-none w-full bg-transparent text-gray-700"
          />
        </div>

        {/* Search Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 text-sm font-medium">
          Search
        </button>
      </div>
    </div>
  );
}

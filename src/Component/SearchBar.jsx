import { useState } from "react";
import {
  FaPlane,
  FaHotel,
  FaSuitcaseRolling,
  FaShuttleVan,
  FaCar,
  FaBus,
} from "react-icons/fa";

import Activity from "../Tabforms/ActivityForm";
import HotelForm from "../Tabforms/HotelForm";
import FlightsForm from "../Tabforms/FlightForm";

export default function TravelSearch() {
  const [activeTab, setActiveTab] = useState("activity");

  const tabs = [
    { key: "flights", label: "Flights", icon: <FaPlane /> },
    { key: "hotels", label: "Hotels", icon: <FaHotel /> },
    {
      key: "hotelsflights",
      label: "Hotels+Flights",
      icon: <FaSuitcaseRolling />,
    },
    { key: "activity", label: "Activity", icon: <FaSuitcaseRolling /> },
    { key: "transfers", label: "Transfers", icon: <FaShuttleVan /> },
    { key: "cars", label: "Cars", icon: <FaCar /> },
    { key: "bus", label: "Bus", icon: <FaBus /> },
  ];

  const tabComponents = {
    activity: Activity,
    hotels: HotelForm,
    flights: FlightsForm,
    // Add more components as needed
  };

  return (
    <div className="bg-gray-700 p-4">
      {/* Tabs */}
      <div className="flex bg-gray-800 rounded-t overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-black text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-black text-white p-4 rounded-b">
        {(() => {
          const ComponentToRender = tabComponents[activeTab];
          return ComponentToRender ? (
            <ComponentToRender />
          ) : (
            <div className="text-center text-gray-400 py-10">
              <p className="text-lg">
                Search form for{" "}
                <strong>{tabs.find((t) => t.key === activeTab)?.label}</strong>{" "}
                will appear here.
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

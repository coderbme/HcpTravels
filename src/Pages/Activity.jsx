import React, { useEffect, useState } from "react";
import axios from "axios";

import FilterSidebar from "./FilterSidebar";
import ActivitySearchbar from "./ActivitySearchbar";

const truncateText = (text, maxLength = 200) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const ActivityCard = ({ title, description, location, code, price, image }) => (
  <div className="w-full">
    <div className="bg-white/10 shadow-xl rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 hover:translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {truncateText(description)}
        </p>
        <p className="text-sm text-gray-500 font-medium">
          📍 {location} | 🎫 Code: {code}
        </p>
        <p className="text-lg font-bold text-indigo-600">₹{price}</p>
      </div>
    </div>
  </div>
);

const Activity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("https://activities-api-w8vb.onrender.com/api/activities")
      .then((res) => setActivities(res.data))
      .catch((err) => console.error("Error fetching activities:", err));
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row"
      style={{
        backgroundImage: "url('/historical-bg.jpg')",
        backgroundColor: "#f78a1f",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#FFECAE]">
        <FilterSidebar />
      </div>

      <div className="flex-1">
        <div className="bg-[#f78a1f]">
          <ActivitySearchbar />
        </div>
        <div className="bg-gray-100/70 px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((item) => (
              <ActivityCard key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;

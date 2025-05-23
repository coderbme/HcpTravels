import React from "react";
import ActivityForm from "../Tabforms/ActivityForm";
import FilterSidebar from "./FilterSidebar";

const activities = [
  {
    id: 1,
    title: "VISIT TO THE LAKE DISTRICT OF UTTARAKHAND NAINITAL TOUR",
    duration: "2 Nights/3 Days",
    code: "NDH19",
    origin: "Delhi",
    destination: "Nainital",
    departure: "Every Thursday",
    price: "₹6990",
    image: "mountains.jpg",
  },
  {
    id: 2,
    title: "MAGICAL GOA ESCAPE",
    duration: "3 Nights/4 Days",
    code: "GOA22",
    origin: "Mumbai",
    destination: "Goa",
    departure: "Every Friday",
    price: "₹8990",
    image: "mountains2.jpg",
  },
  {
    id: 3,
    title: "BEAUTY OF HIMACHAL",
    duration: "6 Nights/7 Days",
    code: "WBR89",
    origin: "Bhopal",
    destination: "Delhi/Shimla/Manali/Chandigrah",
    departure: "Daily(Except Saturday)",
    price: "₹33300",
    image: "mount.jpg",
  },
  {
    id: 3,
    title: "BEAUTY OF HIMACHAL",
    duration: "6 Nights/7 Days",
    code: "WBR89",
    origin: "Bhopal",
    destination: "Delhi/Shimla/Manali/Chandigrah",
    departure: "Daily(Except Saturday)",
    price: "₹83300",
    image: "mount4.jpg",
  },
  {
    id: 3,
    title: "BEAUTY OF HIMACHAL",
    duration: "6 Nights/7 Days",
    code: "WBR89",
    origin: "Bhopal",
    destination: "Delhi/Shimla/Manali/Chandigrah",
    departure: "Daily(Except Saturday)",
    price: "₹63300",
    image: "mount3.jpg",
  },
  {
    id: 3,
    title: "BEAUTY OF HIMACHAL",
    duration: "6 Nights/7 Days",
    code: "WBR89",
    origin: "Bhopal",
    destination: "Delhi/Shimla/Manali/Chandigrah",
    departure: "Daily(Except Saturday)",
    price: "₹13300",
    image: "mount2.jpg",
  },
];

const ActivityCard = ({
  title,
  duration,
  origin,
  destination,
  departure,
  price,
  image,
}) => (
  <div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md">
      <img src={`/${image}`} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {duration} | Origin: {origin} | Code: {departure}
        </p>
        <p className="text-sm text-gray-700">Destination: {destination}</p>
        <p className="text-lg font-semibold text-blue-600 mt-3">{price}</p>
      </div>
    </div>
  </div>
);

const Activity = () => {
  return (
    <div className="flex">
      <FilterSidebar />

      <div>
        <ActivityForm />
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {activities.map((item) => (
              <ActivityCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;

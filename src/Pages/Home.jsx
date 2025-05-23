import React from "react";
import SearchBar from "../Component/SearchBar";

const Home = () => {
  return (
    <div>
      <div
        className="relative h-[80vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url(mount.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Find the best tours, vacation packages, and travel experiences
            worldwide.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold text-lg">
            Explore Packages
          </button>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Home;

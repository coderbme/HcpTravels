export default function FilterSidebar() {
  return (
    <aside className="w-full md:w-64 bg-white shadow-lg rounded-lg p-6 text-sm space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">Filter by:</h2>

      {/* Tickets Available */}
      <div>
        <p className="font-medium text-gray-700 mb-2">Tickets available</p>
        <div className="flex gap-3">
          <button className="bg-blue-100 text-blue-800 font-semibold py-1 px-3 rounded-full hover:bg-blue-200">
            Today
          </button>
          <button className="bg-blue-100 text-blue-800 font-semibold py-1 px-3 rounded-full hover:bg-blue-200">
            Tomorrow
          </button>
        </div>
      </div>

      {/* Category */}
      <div>
        <p className="font-medium text-gray-700 mb-2">Category</p>
        {["Tours", "Museums, arts & culture", "Services & rentals"].map(
          (item, i) => (
            <label
              key={i}
              className="flex items-center gap-2 text-gray-600 mb-1"
            >
              <input type="checkbox" className="accent-blue-500" />
              {item}
            </label>
          )
        )}
      </div>

      {/* Results With */}
      <div>
        <p className="font-medium text-gray-700 mb-2">Show results with</p>
        {["Free cancellation", "Skip the line"].map((item, i) => (
          <label key={i} className="flex items-center gap-2 text-gray-600 mb-1">
            <input type="checkbox" className="accent-green-500" />
            {item}
          </label>
        ))}
      </div>

      {/* Review Score */}
      <div>
        <p className="font-medium text-gray-700 mb-2">Review Score</p>
        {["4.5 and up", "4 and up", "3.5 and up", "3 and up"].map((item, i) => (
          <label key={i} className="flex items-center gap-2 text-gray-600 mb-1">
            <input type="checkbox" className="accent-yellow-400" />
            {item}
          </label>
        ))}
      </div>

      {/* Time of Day */}
      <div>
        <p className="font-medium text-gray-700 mb-2">Time of day</p>
        {[
          "Morning (before 12 PM)",
          "Afternoon (after 12 PM)",
          "Evening & Night (after 6 PM)",
        ].map((item, i) => (
          <label key={i} className="flex items-center gap-2 text-gray-600 mb-1">
            <input type="checkbox" className="accent-purple-500" />
            {item}
          </label>
        ))}
      </div>

      {/* Languages */}
      <div>
        <p className="font-medium text-gray-700 mb-2">Languages</p>
        {["English", "Spanish", "French", "German"].map((lang, i) => (
          <label key={i} className="flex items-center gap-2 text-gray-600 mb-1">
            <input type="checkbox" className="accent-indigo-500" />
            {lang}
          </label>
        ))}
      </div>

      {/* Clear Filters */}
      <button className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium py-2 rounded-md mt-4">
        Clear Filters
      </button>
    </aside>
  );
}

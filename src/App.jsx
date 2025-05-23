import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import SearchBar from "./Component/SearchBar";
// import HeroSection from "./Component/heroSection";
import Home from "./Pages/Home";
import Activity from "./Pages/Activity";
import Flights from "./Pages/Flights";
import Hotels from "./Pages/Hotels";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activity />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* <HeroSection /> 
      <div className="p-3">
        <SearchBar />
      </div> */}
    </div>
  );
}

export default App;

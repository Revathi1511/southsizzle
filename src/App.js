import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Restaurant from './screens/restaurant';
import CardComponent from './components/card';
import About from './screens/about';
import Contact from './screens/contact';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dosa from './screens/dosa'; // Import the Dosa component
import Idli from './screens/idli'; // Import the Idli component

// Import the region-specific components
import Chennai from './regions/Chennai';
import Kerala from './regions/Kerala';
import Karnataka from './regions/Karnataka';
import Andhra from './regions/Andhra'

function App() {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const regionNames = ['Chennai', 'Kerala', 'Karnataka', 'Andhra'];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/region/chennai" element={<Chennai />} />
        <Route path="/region/kerala" element={<Kerala />} />
        <Route path="/region/karnataka" element={<Karnataka />} />
        <Route path="/region/andhra" element={<Andhra />} />

        {/* Add routes for favorite foods */}
        <Route path="/food/dosa" element={<Dosa />} />
        <Route path="/food/idli" element={<Idli />} />
        {/* Add more routes for other favorite foods as needed */}
      </Routes>

      <div className="row">
        <div className="col-md-10">
          <CardComponent
            foodName="Navigate from here"
            regionNames={regionNames}
            onRegionChange={handleRegionChange}
          />
        </div>
      </div>
    </Router>
  );
}


export default App;



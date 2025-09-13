
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Preloader from './components/Preloader';
import LandingPage from './components/LandingPage';
import CitySelection from './components/CitySelection';
import EventDetails from './components/EventDetails';


import './App.css';
import './components/styles.css';

function App() {
  const [isPreloading, setIsPreloading] = useState(true);
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloading(false);
    }, 9000);
        
    return () => clearTimeout(timer);
  }, []);
    
  return (
    <Router>
      <div>
        {isPreloading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/city-selection" element={<CitySelection />} />
            <Route path="/eventdetails/:city" element={<EventDetails />} />
           
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
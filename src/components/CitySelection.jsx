import React from "react";
import { useNavigate } from "react-router-dom";

const cities = [
  { name: "Hyderabad", image: "hyderabad.webp" },
  { name: "Mumbai", image: "mumbai.webp" },
  { name: "Delhi", image: "delhi.webp" },
  { name: "Bengaluru", image: "bengaluru.webp" },
  { name: "Ahmedabad", image: "ahmedabadh.webp" },
  { name: "Chandigarh", image: "chandigarh.webp" },
  { name: "Chennai", image: "chennai.webp" },
  { name: "Pune", image: "pune.webp" },
  { name: "Kolkata", image: "kolkata.webp" },
];

const CitySelection = ({ onSelect }) => {
  const navigate = useNavigate();

  const handleCityClick = (cityName) => {
    if (onSelect) {
      onSelect(cityName);
    }
    navigate(`/eventdetails/${cityName}`);
  };

  return (
    <div className="text-center p-5 bg-gradient-to-br from-pink-200 to-pink-100 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl mb-8 text-white font-bold drop-shadow-lg">Select Your City</h2>
      <div className="grid grid-cols-3 gap-4 justify-center items-center max-w-2xl mx-auto">
        {cities.map((city, index) => (
          <div
            key={index}
            className={`
              bg-green-200 p-4 rounded-xl text-center cursor-pointer
              transition-all duration-300 ease-in-out
              border-2 border-transparent
              hover:scale-105 hover:border-black
              w-32 h-36
              ${city.name === 'Bengaluru' ? 'border-2 border-black' : ''}
            `}
            onClick={() => handleCityClick(city.name)}
          >
            <img 
              src={city.image} 
              alt={city.name}
              className="w-16 h-16 object-cover rounded mx-auto mb-3 transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <span className="block text-sm font-bold text-black leading-tight">
              {city.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitySelection;
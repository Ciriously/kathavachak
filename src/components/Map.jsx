import React from 'react';
import GlobeMap from "../assets/globe.svg"; // Renamed the import to avoid conflict

const MapComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold font-poppins text-[#03014C] text-center mb-44">"Bridging Culture, Connecting Minds: KathaVachak - Uniting The World Through Shared Stories".</h1>
      <div>
        <img src={GlobeMap} alt="Map" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default MapComponent;

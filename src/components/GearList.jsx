import React from 'react';

const GearList = ({ gear }) => {
  return (
    <div className="my-8 p-6 bg-gray-800 rounded-lg shadow-lg">
      {/* Title */}
      <h2 className="text-3xl font-orbitron font-bold text-teal-400 mb-6 text-center">
        Gear You’ll Need
      </h2>

      {/* Gear Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Starter Kit */}
        <div className="p-4 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 transition-all duration-300">
          <h3 className="text-xl font-orbitron font-medium text-teal-300 mb-2">Starter Kit</h3>
          <p className="text-base font-poppins text-gray-400 leading-relaxed">{gear.starterKit}</p>
        </div>

        {/* Optional */}
        <div className="p-4 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 transition-all duration-300">
          <h3 className="text-xl font-orbitron font-medium text-teal-300 mb-2">Optional</h3>
          <p className="text-base font-poppins text-gray-400 leading-relaxed">{gear.optional}</p>
        </div>

        {/* Supplies */}
        <div className="p-4 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 transition-all duration-300">
          <h3 className="text-xl font-orbitron font-medium text-teal-300 mb-2">Supplies</h3>
          <p className="text-base font-poppins text-gray-400 leading-relaxed">{gear.supplies}</p>
        </div>
      </div>
    </div>
  );
};

export default GearList;
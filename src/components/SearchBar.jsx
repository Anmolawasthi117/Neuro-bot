import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full max-w-lg mx-auto mb-10 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-70 blur-md"></div>
      <div className="relative flex items-center">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Arduino, sensors, or projects..."
          className="w-full p-4 pl-12 text-lg font-poppins text-gray-100 bg-gray-800 border border-gray-700 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700"
        />
      </div>
    </div>
  );
};

export default SearchBar;
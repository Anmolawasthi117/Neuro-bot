import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="p-4 bg-gray-700 rounded-md shadow-md hover:bg-gray-600 hover:shadow-lg transition-all duration-300">
      <h4 className="text-lg font-orbitron font-medium text-gray-200 mb-2">{title}</h4>
      <p className="text-base font-poppins text-gray-400">{description}</p>
    </div>
  );
};

export default ProjectCard;
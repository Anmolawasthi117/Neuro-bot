import React from 'react';

const ProjectSCard = ({ title, description, iframeSrc }) => {
  return (
    <div className="my-10 p-8 bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-500/20">
      <h2 className="text-3xl font-orbitron font-bold text-blue-400 mb-3 tracking-tight">
        {title}
      </h2>
      <p className="text-lg font-poppins text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="relative">
        <iframe
          src={iframeSrc}
          title={title}
          className="w-full h-[650px] rounded-lg border-2 border-gray-600"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
        <div className="absolute top-4 left-4 bg-blue-500 text-white font-poppins text-sm py-1 px-3 rounded-full shadow-md">
          Simulate & Code
        </div>
      </div>
    </div>
  );
};

export default ProjectSCard;
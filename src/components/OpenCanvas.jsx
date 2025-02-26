import React from 'react';

const OpenCanvas = ({ title, description, iframeSrc }) => {
  return (
    <div className="my-10 p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-2xl border border-teal-500/30">
      <h2 className="text-4xl font-orbitron font-bold text-teal-400 mb-4 tracking-wide">
        {title}
      </h2>
      <p className="text-lg font-poppins text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="relative">
        <iframe
          src={iframeSrc}
          title={title}
          className="w-full h-[700px] rounded-lg border-2 border-gray-600"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
        <div className="absolute bottom-4 right-4 bg-teal-500 text-white font-poppins text-sm py-1 px-3 rounded-full shadow-md">
          Start Building!
        </div>
      </div>
    </div>
  );
};

export default OpenCanvas;
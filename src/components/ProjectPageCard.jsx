import React from 'react';

const ProjectPageCard = ({ title, description, image, tech, status }) => {
  // Function to determine if the URL is a video
  const isVideo = (url) => {
    return url && /\.(mp4|webm|ogg)$/i.test(url);
  };

  // Render media based on image value
  const renderMedia = () => {
    if (!image) {
      return (
        <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-white text-sm font-vt323 animate-pulse">
          No Media Available
        </div>
      );
    } else if (isVideo(image)) {
      return (
        <video
          className="w-full h-40 object-cover rounded"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={image} type="video/mp4" />
          Your browser does not support video.
        </video>
      );
    } else {
      return (
        <div
          className="w-full h-40 bg-cover bg-center rounded animate-pulse"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      );
    }
  };

  return (
    <div className="relative bg-gray-900 border-4 border-cyan-400 rounded-lg p-4 w-full max-w-sm mx-auto shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] transition-all duration-300">
      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none"></div>

      {/* Project Media */}
      {renderMedia()}

      {/* Title */}
      <h3 className="mt-4 text-2xl md:text-3xl text-white font-vt323 animate-flicker text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm md:text-base text-gray-300 font-vt323 text-center">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {tech.map((item, index) => (
          <span key={index} className="px-2 py-1 bg-green-500 text-black text-xs md:text-sm font-vt323 rounded">
            {item}
          </span>
        ))}
      </div>

      {/* Status */}
      <p className="mt-2 text-sm md:text-base text-pink-400 font-vt323 text-center">
        Status: {status}
      </p>
    </div>
  );
};

export default ProjectPageCard;
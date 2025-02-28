import React from 'react';

const FirstSec = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden font-vt323">
      {/* Background with Grid and Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]">
        
        {/* Flickering Title (Original Positioning) */}
        <h1 className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-6xl md:text-8xl text-white animate-flicker text-center whitespace-nowrap">
         NeuroBots
        </h1>

        {/* Marquee Scroll */}
        <div className="absolute top-[65%] w-full overflow-hidden whitespace-nowrap">
          <span className="inline-block text-xl md:text-2xl text-cyan-400 animate-marquee">
            Build… Code… Compete… Join Us… Explore Robotics… Power Up…
          </span>
        </div>

        {/* Side Panels */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50 animate-pulse"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50 animate-pulse"></div>

        {/* Enhanced Drifting Bolts */}
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 bg-green-400 animate-drift" style={{ left: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-3 h-3 bg-cyan-400 animate-drift" style={{ left: '25%', animationDelay: '1.5s' }}></div>
          <div className="absolute w-2 h-2 bg-pink-400 animate-drift" style={{ left: '40%', animationDelay: '0.8s' }}></div>
          <div className="absolute w-3 h-3 bg-white animate-drift" style={{ left: '60%', animationDelay: '2s' }}></div>
          <div className="absolute w-2 h-2 bg-green-400 animate-drift" style={{ left: '75%', animationDelay: '1s' }}></div>
          <div className="absolute w-3 h-3 bg-cyan-400 animate-drift" style={{ left: '90%', animationDelay: '0.5s' }}></div>
        </div>

        {/* Blinking Scroll Prompt */}
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl text-white animate-blink">
          {'>>> Scroll to Begin >>>'}
        </div>
      </div>
    </section>
  );
};

export default FirstSec;
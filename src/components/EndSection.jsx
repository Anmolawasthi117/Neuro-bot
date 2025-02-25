import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EndSection = () => {
    const tickerText = "Akash: Design Daddy // Prakhar: Club Boss // Aman: Co-King // Jaspreet: Core Goat // Arpit: Hype Wingman // Anmol: Chaos Captain // Sinku: Teach Titan // Pranav: Core Commander // ";
  const holoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const tickerVariants = {
    animate: {
      x: ['100%', '-100%'],
      transition: {
        x: { repeat: Infinity, duration: 20, ease: 'linear' },
      },
    },
  };

  return (
    <section className="relative bg-[var(--rf-primary)] py-12 px-4 md:px-8 overflow-hidden">
      {/* CRT Static Overlay */}
      <div className="absolute inset-0 bg-[var(--rf-link)]/5 animate-flicker" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-vt323 text-[var(--rf-accent)] mb-6 md:mb-8 tracking-wider"
          variants={holoVariants}
          initial="initial"
          animate="animate"
          style={{ textShadow: '0 0 10px var(--rf-link)' }}
        >
          Transmission Live
        </motion.h2>

        {/* Ticker */}
        <div className="overflow-hidden">
          <motion.div
            className="text-lg font-vt323 text-[var(--rf-link)] whitespace-nowrap"
            variants={tickerVariants}
            animate="animate"
          >
            {tickerText.repeat(2)}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 text-center">
          
            <motion.button
              className=" transition-none bg-[var(--rf-accent)] text-[var(--rf-primary)] font-vt323 py-2 px-6 rounded-full border-2 border-[var(--rf-link)] text-xl shadow-[0_0_10px_var(--rf-accent)]"
              // initial={{ scale: 1 }}
              whileHover={{  boxShadow: '0 0 20px var(--rf-link), 0 0 30px var(--rf-link)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/join-us">Join the Crew</Link>
              
            </motion.button>
         
        </div>
      </div>
    </section>
  );
};

export default EndSection;
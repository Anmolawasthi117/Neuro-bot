import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Section2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const whatWeDo = [
    { title: 'Launch Events', desc: 'Fest ops go hard—vibes maxed.' },
    { title: 'Code Skills', desc: 'Droppin’ tech—crew levels up.' },
    { title: 'Forge Bots', desc: 'Bot builds—straight grind.' },
    { title: 'Hack Inspo', desc: 'Sparks fly—big brain szn.' },
  ];

  const highlights = [
    { title: 'GyanUtsav Conquered', desc: 'Fest slayed—top tier W.' },
    { title: 'SpyderBot Deployed', desc: '1 month—bot’s a beast.' },
    { title: '40+ Bots Online', desc: 'Fleet stacked—game over.' },
  ];

  const holoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const revealVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.02, 1], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } },
  };

  return (
    <section className="relative bg-[var(--rf-primary)] py-12 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--rf-link)]/10 to-[var(--rf-primary)] animate-pulse" />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-vt323 text-[var(--rf-accent)] mb-8 md:mb-12 tracking-wider text-center"
          variants={holoVariants}
          initial="initial"
          animate="animate"
          style={{ textShadow: '0 0 10px var(--rf-link)' }}
        >
          NuroBots: Command Hub Live
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron text-[var(--rf-link)] mb-4" style={{ textShadow: '0 0 5px var(--rf-accent)' }}>
              Commands
            </h3>
            <div className="hidden md:block">
              {whatWeDo.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 bg-[var(--rf-secondary)]/80 rounded-lg border border-[var(--rf-link)]/30 hover:border-[var(--rf-accent)]/50 transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ boxShadow: '0 2px 10px rgba(0, 255, 255, 0.2)' }}
                >
                  <h4 className="text-xl font-orbitron text-[var(--rf-link)]" style={{ textShadow: '0 0 3px var(--rf-accent)' }}>
                    {item.title}
                  </h4>
                  <motion.p
                    className="text-[var(--rf-text)] mt-2 font-roboto text-base"
                    variants={revealVariants}
                    initial="initial"
                    animate={hoveredIndex === index ? 'animate' : 'initial'}
                  >
                    {item.desc}
                  </motion.p>
                </div>
              ))}
            </div>
            <div className="block md:hidden space-y-4">
              {whatWeDo.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-[var(--rf-secondary)]/80 rounded-lg border border-[var(--rf-link)]/30"
                  style={{ boxShadow: '0 2px 10px rgba(0, 255, 255, 0.2)' }}
                >
                  <h4 className="text-xl font-orbitron text-[var(--rf-link)]" style={{ textShadow: '0 0 3px var(--rf-accent)' }}>
                    {item.title}
                  </h4>
                  <p className="text-[var(--rf-text)] mt-2 font-roboto text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron text-[var(--rf-link)] mb-4" style={{ textShadow: '0 0 5px var(--rf-accent)' }}>
              Status
            </h3>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="p-4 bg-[var(--rf-secondary)]/80 rounded-lg border border-[var(--rf-accent)]/30"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                style={{ boxShadow: '0 2px 10px rgba(255, 111, 97, 0.2)' }}
              >
                <h4 className="text-xl font-orbitron text-[var(--rf-accent)]" style={{ textShadow: '0 0 3px var(--rf-link)' }}>
                  {highlight.title}
                </h4>
                <p className="text-[var(--rf-text)] font-roboto text-base">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
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

export default Section2;
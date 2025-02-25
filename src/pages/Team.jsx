import React from 'react';
import { motion } from 'framer-motion';
import CrewCard from '../components/CrewCard';
import crewData from '../utils/crewData.json';

const Team = () => {
  const holoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative bg-[var(--rf-primary)] min-h-screen py-12 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--rf-link)]/5 animate-flicker" />
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-vt323 text-[var(--rf-accent)] mb-8 md:mb-12 tracking-wider text-center"
          variants={holoVariants}
          initial="initial"
          animate="animate"
          style={{ textShadow: '0 0 10px var(--rf-link)' }}
        >
          Crew Terminal: Core Squad
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {crewData.map((member, index) => (
            <CrewCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
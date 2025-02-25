import React from 'react';
import { motion } from 'framer-motion';

const CrewCard = ({ name, role, bio, image }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, borderColor: 'var(--rf-accent)', transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="p-4 bg-[var(--rf-secondary)]/80 rounded-lg border border-[var(--rf-link)]/30 flex flex-col items-center text-center"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      animate="animate"
      style={{ boxShadow: '0 2px 10px rgba(0, 255, 255, 0.2)' }}
    >
      {/* External 8-bit Bot Image */}
      <img
        src={image}
        alt={`${name}'s Bot`}
        className="w-20 h-20 mb-2"
        style={{ filter: 'drop-shadow(0 0 5px var(--rf-link))' }}
        onError={(e) => (e.target.src = 'https://opengameart.org/sites/default/files/robot-idle.gif')} // Fallback
      />
      <h3 className="text-xl font-orbitron text-[var(--rf-link)]" style={{ textShadow: '0 0 3px var(--rf-accent)' }}>
        {name}: {role}
      </h3>
      <motion.p
        className="text-[var(--rf-text)] mt-2 font-roboto text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
      >
        {bio}
      </motion.p>
    </motion.div>
  );
};

export default CrewCard;
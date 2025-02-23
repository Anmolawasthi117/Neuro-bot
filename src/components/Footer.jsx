import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

const Footer = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000); // Reset after 3s
  };
  // Easter egg animation variants
  const robotVariants = {
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: [0, 30, 60, 30, 0],
      opacity: 1,
      transition: { duration: 2.5, ease: 'easeInOut' },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.5 } },
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[var(--rf-primary)] text-[var(--rf-text)] py-2 px-4 border-t-2 border-[var(--rf-link)] z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright */}
        <p className="text-sm opacity-70">© 2025 Nurobot</p>

        {/* Easter Egg Robot */}
        <motion.div
          className="relative cursor-pointer"
          onClick={handleEasterEgg}
          onMouseEnter={handleEasterEgg}
          whileHover={{ scale: 1.1 }}
        >
          <FaRobot className="text-[var(--rf-link)] text-xl" />
          {showEasterEgg && (
            <>
              <motion.div
                className="absolute bottom-4 right-0"
                variants={robotVariants}
                initial="hidden"
                animate="visible"
              >
                <FaRobot className="text-[var(--rf-accent)] text-xl" />
              </motion.div>
              <motion.span
                className="absolute bottom-8 right-0 text-[var(--rf-accent)] font-[Orbitron] text-xs whitespace-nowrap"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
              >
                
                Made for the bots by the bots!!!
              </motion.span>
            </>
          )}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
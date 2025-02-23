import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUsers, FaBook, FaProjectDiagram, FaUserPlus, FaRobot, FaPlug, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [theme, setTheme] = useState('dark');
  const [isDraggable, setIsDraggable] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHome />, distance: 80, size: 40 },
    { to: '/team', label: 'Team', icon: <FaUsers />, distance: 100, size: 36 },
    { to: '/educational', label: 'Educational', icon: <FaBook />, distance: 120, size: 32 },
    { to: '/projects', label: 'Projects', icon: <FaProjectDiagram />, distance: 140, size: 38 },
    { to: '/join-us', label: 'Join Us', icon: <FaUserPlus />, distance: 160, size: 34 },
    { to: '/simulator', label: 'Simulator', icon: <FaRobot />, distance: 180, size: 42 },
    { to: '/portal', label: 'Portal', icon: <FaPlug />, distance: 200, size: 36 },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = (e) => {
    e.stopPropagation();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleDraggable = (e) => {
    e.stopPropagation();
    setIsDraggable(!isDraggable);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (to) => {
    console.log(`Navigating to: ${to}`);
    setActiveLink(to);
    setIsOpen(false);
  };

  const isMobile = windowWidth <= 768;

  // Variants for desktop orbit (unchanged)
  const orbVariants = {
    closed: { scale: 1 },
    open: { scale: 1.1 },
    dragging: { scale: 1.15, boxShadow: '0 0 25px var(--rf-accent)' },
  };

  const nodeVariants = {
    closed: { opacity: 0, scale: 0, x: 0, y: 0 },
    open: (i) => ({
      opacity: 1,
      scale: 1,
      x: Math.cos((i * 2 * Math.PI) / navLinks.length) * navLinks[i].distance,
      y: Math.sin((i * 2 * Math.PI) / navLinks.length) * navLinks[i].distance,
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    }),
    hover: { scale: 1.15, boxShadow: '0 0 15px var(--rf-accent)', rotate: 10 },
  };

  const orbitVariants = {
    closed: { opacity: 0 },
    open: { opacity: 0.5, transition: { duration: 0.3 } },
  };

  const dragConstraints = {
    left: 220,
    right: windowWidth - 240,
    top: 20,
    bottom: window.innerHeight - 240,
  };

  // Variants for mobile hamburger menu
  const mobileMenuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const initialX = windowWidth / 4; // Right of center for desktop

  return (
    <>
      {isMobile ? (
        // Mobile: Simple Hamburger Menu
        <div className="fixed top-4 right-4 z-50">
          <motion.button
            className="w-12 h-12 bg-[var(--rf-accent)] rounded-full flex items-center justify-center border-2 border-[var(--rf-link)]"
            onClick={toggleMenu}
            onTouchStart={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes className="text-[var(--rf-primary)] text-2xl" /> : <FaBars className="text-[var(--rf-primary)] text-2xl" />}
          </motion.button>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-[var(--rf-primary)] shadow-lg z-40 p-4"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex justify-between items-center mb-4">
                <motion.button
                  className="w-10 h-10 bg-[var(--rf-secondary)] rounded-full flex items-center justify-center"
                  onClick={toggleTheme}
                  onTouchStart={toggleTheme}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {theme === 'dark' ? <FaSun className="text-[var(--rf-text)]" /> : <FaMoon className="text-[var(--rf-text)]" />}
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-[var(--rf-secondary)] rounded-full flex items-center justify-center"
                  onClick={toggleMenu}
                  onTouchStart={toggleMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes className="text-[var(--rf-text)]" />
                </motion.button>
              </div>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 text-[var(--rf-text)] p-2 rounded-md ${
                          isActive ? 'bg-[var(--rf-accent)] text-[var(--rf-primary)]' : 'hover:bg-[var(--rf-link)]/20'
                        } transition-all duration-200`
                      }
                      onClick={() => handleNavigate(link.to)}
                      onTouchStart={() => handleNavigate(link.to)}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="text-base font-[Orbitron]">{link.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      ) : (
        // Desktop/Tablet: Orbiting Navbar (unchanged from your provided code)
        <motion.div
          className="absolute z-50"
          style={{ top: '20px', left: '50%', x: initialX }}
          drag={isDraggable}
          dragConstraints={dragConstraints}
          dragElastic={0.2}
          dragMomentum={false}
          initial={{ x: initialX }}
          onDoubleClick={toggleDraggable}
        >
          {/* Central Orb (Sun) */}
          <motion.div
            className="relative w-16 h-16 bg-[var(--rf-accent)] rounded-full flex items-center justify-center border-4 border-[var(--rf-link)] cursor-pointer overflow-hidden z-20"
            variants={orbVariants}
            initial="closed"
            animate={isDraggable ? 'dragging' : isOpen ? 'open' : 'closed'}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-[var(--rf-link)] opacity-20 rounded-full animate-pulse" />
            <motion.div
              className="text-[var(--rf-primary)] text-2xl z-30"
              onClick={toggleTheme}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.div>
          </motion.div>

          {/* Orbiting Nodes (Planets) */}
          {isOpen && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  className="absolute"
                  custom={i}
                  variants={nodeVariants}
                  initial="closed"
                  animate="open"
                  whileHover="hover"
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center justify-center rounded-full bg-[var(--rf-secondary)] border-2 ${
                        isActive ? 'border-[var(--rf-accent)] bg-[var(--rf-accent)]/80' : 'border-[var(--rf-link)]'
                      } shadow-md hover:bg-[var(--rf-link)]/20 transition-all duration-200 z-40`
                    }
                    style={{ width: `${link.size}px`, height: `${link.size}px` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(link.to);
                    }}
                  >
                    <motion.div
                      className={`text-[var(--rf-link)] ${activeLink === link.to ? 'text-[var(--rf-primary)]' : ''}`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {link.icon}
                    </motion.div>
                  </NavLink>
                  <motion.span
                    className="absolute text-[var(--rf-text)] font-[Orbitron] text-xs whitespace-nowrap z-40"
                    style={{ transform: 'translate(-50%, 20px)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  >
                    {link.label}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Orbital Paths (Solar System Rings) */}
          {isOpen && (
            <motion.svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              width="440"
              height="440"
              variants={orbitVariants}
              initial="closed"
              animate="open"
            >
              {navLinks.map((link, i) => (
                <motion.circle
                  key={i}
                  cx="220"
                  cy="220"
                  r={link.distance}
                  stroke="var(--rf-link)"
                  strokeWidth="0.5"
                  fill="none"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </motion.svg>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
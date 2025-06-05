import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const navList = [
  { id: 1, data: "Accueil", path: "/" }, 
  { id: 2, data: "Services", path: "/service" }, 
  { id: 3, data: "Compétences", path: "/skills" }, 
  { id: 4, data: "Educations", path: "/education" }, 
  { id: 5, data: "Expérience", path: "/experience" }, 
  { id: 6, data: "Contact", path: "/contact" }, 
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className='fixed w-full max-w-[100vw] overflow-x-hidden flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 z-50 bg-gray-900 backdrop-blur-sm'
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='text-2xl sm:text-3xl font-extrabold text-red-500 transition duration-300'
      >
        <NavLink to="/">TOBIE</NavLink>
      </motion.div>
      
      {/* Desktop Navigation */}
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className='hidden md:flex'
      >
        {navList.map((item) => (
          <motion.div 
            key={item.id}
            variants={navItemVariants}
            className='relative ml-4 lg:ml-8'
          >
            <NavLink 
              to={item.path}
              className={({ isActive }) => 
                `text-base lg:text-lg font-medium ${isActive ? 'text-red-500' : 'text-white hover:text-red-300'} transition duration-300`
              }
            >
              {item.data}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </NavLink>
          </motion.div>
        ))}
      </motion.nav>
      
      {/* Mobile menu button */}
      <motion.button 
        className='md:hidden text-white focus:outline-none'
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='md:hidden fixed top-20 left-0 right-0 bg-gray-900 bg-opacity-95 p-4 shadow-lg'
          >
            <nav className='flex flex-col space-y-4'>
              {navList.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <NavLink 
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      `block text-lg font-medium py-2 px-4 rounded-lg ${isActive ? 'bg-red-500 text-white' : 'text-white hover:bg-gray-800'}`
                    }
                  >
                    {item.data}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
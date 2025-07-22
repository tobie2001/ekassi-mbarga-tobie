import React, { useEffect, useState } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: {
        duration: 0.3
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed w-full max-w-[100vw] overflow-x-hidden flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 py-4 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700/30' 
          : 'bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      {/* Logo avec effet de gradient */}
      <motion.div 
        whileHover={{ scale: 1.05, rotateX: 5 }}
        whileTap={{ scale: 0.95 }}
        className='relative'
      >
        <NavLink 
          to="/"
          className='text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent hover:from-red-400 hover:via-pink-400 hover:to-red-500 transition-all duration-300'
          style={{ 
            textShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
            filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.2))'
          }}
        >
          TOBIE
        </NavLink>
        <motion.div 
          className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg blur-sm opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Desktop Navigation avec design moderne */}
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className='hidden md:flex bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-700/50'
      >
        {navList.map((item) => (
          <motion.div 
            key={item.id}
            variants={navItemVariants}
            className='relative mx-2 lg:mx-4'
            whileHover={{ y: -2 }}
          >
            <NavLink 
              to={item.path}
              className={({ isActive }) => 
                `relative text-sm lg:text-base font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-gradient-to-r from-red-500 to-pink-600 shadow-lg shadow-red-500/25' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`
              }
            >
              <span className="relative z-10">{item.data}</span>
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="activeDesktopNav"
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </NavLink>
          </motion.div>
        ))}
      </motion.nav>
      
      {/* Mobile menu button avec design amélioré */}
      <motion.button 
        className='md:hidden relative p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white focus:outline-none'
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        whileHover={{ 
          scale: 1.1,
          backgroundColor: 'rgba(31, 41, 55, 0.8)'
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.div>
        
        {/* Effet de brillance au survol */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
      
      {/* Mobile Navigation Menu avec design moderne */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40'
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu coulissant */}
            <motion.div 
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='md:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 shadow-2xl border-l border-gray-700/50'
            >
              {/* Header du menu mobile */}
              <div className='flex justify-between items-center p-6 border-b border-gray-700/50'>
                <motion.h2 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className='text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent'
                >
                  Menu
                </motion.h2>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes size={18} />
                </motion.button>
              </div>
              
              {/* Navigation items */}
              <nav className='flex flex-col p-6 space-y-2'>
                {navList.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={mobileItemVariants}
                    custom={index}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <NavLink 
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => 
                        `group flex items-center text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg shadow-red-500/25' 
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:shadow-md'
                        }`
                      }
                    >
                      <span className="relative z-10">{item.data}</span>
                      
                      {/* Effet de brillance */}
                      <motion.div 
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Indicateur pour l'item actif */}
                      {location.pathname === item.path && (
                        <motion.div 
                          layoutId="activeMobileNav"
                          className="absolute inset-0 bg-gradient-to-r from-blue-950-500 to-blue-900-600 rounded-xl"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              
              {/* Footer du menu avec effet décoratif */}
              <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-500/10 to-transparent pointer-events-none' />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
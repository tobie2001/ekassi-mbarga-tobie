import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FaBars, FaTimes, FaHome, FaCogs, FaBrain, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const navList = [
  {
    id: 1,
    data: "Accueil",
    path: "/",
    icon: FaHome,
    description: "Page d'accueil"
  },
  {
    id: 2,
    data: "Services",
    path: "/service",
    icon: FaCogs,
    description: "Mes services"
  },
  {
    id: 3,
    data: "Compétences",
    path: "/skills",
    icon: FaBrain,
    description: "Mes compétences"
  },
  {
    id: 4,
    data: "Education",
    path: "/education",
    icon: FaGraduationCap,
    description: "Mon parcours"
  },
  {
    id: 5,
    data: "Expérience",
    path: "/experience",
    icon: FaBriefcase,
    description: "Mon expérience"
  },
  {
    id: 6,
    data: "Contact",
    path: "/contact",
    icon: FaEnvelope,
    description: "Me contacter"
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  // Détection de la préférence de réduction des animations
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Gestion du scroll avec cache automatique
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Effet de flou et ombre au scroll
          setScrolled(currentScrollY > 50);

          // Cache l'en-tête lors du défilement vers le bas
          if (headerRef.current) {
            const headerHeight = headerRef.current.offsetHeight;
            const scrollDelta = currentScrollY - lastScrollY.current;

            if (currentScrollY > headerHeight * 2 && scrollDelta > 10 && !isMobileMenuOpen) {
              headerRef.current.style.transform = `translateY(-100%)`;
              isHidden.current = true;
            } else if (scrollDelta < -10 || currentScrollY < headerHeight) {
              headerRef.current.style.transform = `translateY(0)`;
              isHidden.current = false;
            }

            lastScrollY.current = currentScrollY;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Gestion du menu mobile
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  // Gestion du scroll lock avec amélioration
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  // Navigation rapide au clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Échap pour fermer le menu
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }

      // Navigation au clavier
      if (e.key === 'Tab' && isMobileMenuOpen) {
        const focusableElements = headerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Animations conditionnelles
  const getAnimationProps = (baseProps) => {
    if (isReducedMotion) {
      return { ...baseProps, transition: { duration: 0 } };
    }
    return baseProps;
  };

  const navVariants = getAnimationProps({
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  });

  const mobileMenuVariants = getAnimationProps({
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.2
      }
    }
  });

  // Rendu conditionnel des icônes
  const NavIcon = ({ icon: Icon, isActive }) => (
    <span className="relative z-[108]">
      <Icon
        className={`text-lg mr-2 transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400'}`}
      />
    </span>
  );

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={getAnimationProps({
        type: "spring",
        stiffness: 120,
        damping: 20
      })}
      className={`fixed w-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 py-3 z-[100] transition-all duration-300 ${scrolled
        ? 'bg-gray-900/98 backdrop-blur-lg shadow-2xl border-b border-gray-700/30 py-2'
        : 'bg-gray-900/95 backdrop-blur-md py-3'
        }`}
      style={{
        willChange: 'transform, background-color',
        transition: 'transform 0.3s ease, background-color 0.3s ease, padding 0.3s ease'
      }}
    >
      {/* Logo avec feedback tactile amélioré */}
      <motion.div
        whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
        whileTap={!isReducedMotion ? { scale: 0.95 } : {}}
        className='relative z-[110]'
      >
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className='text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent hover:from-red-400 hover:via-pink-400 hover:to-red-500 transition-all duration-300 relative group'
          aria-label="Retour à l'accueil"
        >
          <span className="relative z-10 text-white">TOBIE</span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-pink-500/10 to-red-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
        </NavLink>
      </motion.div>

      {/* Desktop Navigation avec tooltips */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className='hidden md:flex bg-gray-800/40 backdrop-blur-md rounded-full px-6 py-2 border border-gray-700/50 shadow-lg z-[105]'
        aria-label="Navigation principale"
      >
        {navList.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div
              key={`desktop-${item.id}`}
              variants={navItemVariants}
              className='relative mx-2 lg:mx-3'
              whileHover={!isReducedMotion ? { y: -2 } : {}}
              onMouseEnter={() => setActiveHover(item.id)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <NavLink
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive: linkIsActive }) =>
                  `relative text-sm lg:text-base font-semibold px-4 py-2.5 rounded-full transition-all duration-300 z-[106] flex items-center group ${linkIsActive
                    ? 'text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                  }`
                }
                aria-current={isActive ? 'page' : undefined}
                title={item.description}
              >
                <NavIcon icon={item.icon} isActive={isActive} />
                <span className="relative z-[107]">{item.data}</span>

                {/* Indicateur d'état actif */}
                {isActive && (
                  <motion.div
                    layoutId="activeDesktopIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-full z-[106]"
                    transition={getAnimationProps({
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    })}
                  />
                )}

                {/* Tooltip au survol */}
                {activeHover === item.id && !isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-[200]"
                  >
                    {item.description}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                  </motion.div>
                )}
              </NavLink>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Mobile menu button amélioré */}
      <motion.button
        className='md:hidden relative p-3 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 text-white focus:outline-none z-[110] focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900'
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        whileHover={!isReducedMotion ? { scale: 1.1 } : {}}
        whileTap={!isReducedMotion ? { scale: 0.9 } : {}}
      >
        <motion.div
          animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={getAnimationProps({ duration: 0.3 })}
        >
          {isMobileMenuOpen ? (
            <FaTimes size={20} aria-hidden="true" />
          ) : (
            <FaBars size={20} aria-hidden="true" />
          )}
        </motion.div>

        {/* Indicateur de notification optionnel */}
        {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" /> */}
      </motion.button>

      {/* Mobile Navigation Menu avec améliorations */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Overlay avec fermeture au clic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]'
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu coulissant */}
            <motion.div
              id="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className='md:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gray-900/98 backdrop-blur-lg z-[95] shadow-2xl border-l border-gray-700/50 flex flex-col'
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
            >
              {/* Header du menu mobile */}
              <div className='flex justify-between items-center p-6 border-b border-gray-700/50 shrink-0'>
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className='text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent'
                >
                  Navigation
                </motion.h2>
                <motion.button
                  onClick={closeMobileMenu}
                  className='p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500'
                  whileHover={!isReducedMotion ? { scale: 1.1 } : {}}
                  whileTap={!isReducedMotion ? { scale: 0.9 } : {}}
                  aria-label="Fermer le menu"
                >
                  <FaTimes size={18} aria-hidden="true" />
                </motion.button>
              </div>

              {/* Navigation items avec scroll si nécessaire */}
              <nav className='flex-1 overflow-y-auto p-6 space-y-1'>
                {navList.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={`mobile-${item.id}`}
                      variants={getAnimationProps({
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                            delay: index * 0.05
                          }
                        }
                      })}
                      whileHover={!isReducedMotion ? { x: 10 } : {}}
                      whileTap={!isReducedMotion ? { scale: 0.98 } : {}}
                    >
                      <NavLink
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={({ isActive: linkIsActive }) =>
                          `group relative flex items-center text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 z-[96] ${linkIsActive
                            ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20 text-white shadow-lg'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
                          }`
                        }
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <NavIcon icon={item.icon} isActive={isActive} />
                        <div className="flex-1">
                          <span className="relative z-[97] block">{item.data}</span>
                          <span className="text-xs text-gray-400 mt-1 block">
                            {item.description}
                          </span>
                        </div>

                        {isActive && (
                          <motion.div
                            layoutId="activeMobileIndicator"
                            className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full ml-2"
                            transition={getAnimationProps({
                              type: "spring",
                              stiffness: 300,
                              damping: 30
                            })}
                          />
                        )}

                        {/* Flèche indicatrice */}
                        <motion.div
                          className="ml-2 text-gray-400 group-hover:text-white transition-colors"
                          animate={!isReducedMotion ? { x: [0, 5, 0] } : {}}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.div>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer du menu mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='shrink-0 p-6 border-t border-gray-700/50'
              >
                <div className='text-center'>
                  <p className='text-sm text-gray-500 mb-2'>
                    Portfolio • {new Date().getFullYear()}
                  </p>
                  <p className='text-xs text-gray-600'>
                    Appuyez sur Échap pour fermer
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Variants pour les animations
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
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

export default Header;
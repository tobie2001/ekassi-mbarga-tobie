import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FaBars, FaTimes, FaHome, FaCogs, FaBrain, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const navList = [
  { id: 1, data: "Accueil", path: "/", icon: FaHome, description: "Page d'accueil" },
  { id: 2, data: "Services", path: "/service", icon: FaCogs, description: "Mes services" },
  { id: 3, data: "Compétences", path: "/skills", icon: FaBrain, description: "Mes compétences" },
  { id: 4, data: "Education", path: "/education", icon: FaGraduationCap, description: "Mon parcours" },
  { id: 5, data: "Expérience", path: "/experience", icon: FaBriefcase, description: "Mon expérience" },
  { id: 6, data: "Contact", path: "/contact", icon: FaEnvelope, description: "Me contacter" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(currentScrollY > 50);
          
          if (headerRef.current && !isMobileMenuOpen) {
            const headerHeight = headerRef.current.offsetHeight;
            const scrollDelta = currentScrollY - lastScrollY.current;
            
            if (currentScrollY > headerHeight * 2 && scrollDelta > 10) {
              headerRef.current.style.transform = `translateY(-100%)`;
            } else if (scrollDelta < -10 || currentScrollY < headerHeight) {
              headerRef.current.style.transform = `translateY(0)`;
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

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const getAnimationProps = (baseProps) => {
    if (isReducedMotion) {
      return { ...baseProps, transition: { duration: 0 } };
    }
    return baseProps;
  };

  const navVariants = getAnimationProps({
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  });

  const mobileMenuVariants = getAnimationProps({
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 300, staggerChildren: 0.05, delayChildren: 0.1 }
    },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.2 } }
  });

  const NavIcon = ({ icon: Icon, isActive }) => (
    <Icon className={`text-xl transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`} />
  );

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/98 backdrop-blur-md shadow-2xl border-b border-white/10' 
            : 'bg-gray-900/95 backdrop-blur-sm'
        }`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <NavLink
              to="/"
              className="relative z-[105] flex items-center group"
              aria-label="Retour à l'accueil"
            >
              <motion.div
                className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                TOBIE
              </motion.div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" aria-label="Navigation principale">
              {navList.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setActiveHover(item.id)}
                    onMouseLeave={() => setActiveHover(null)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive: linkIsActive }) =>
                        `relative text-sm lg:text-base font-semibold px-4 py-2.5 rounded-full transition-all duration-300 z-[106] flex items-center group ${
                          linkIsActive
                            ? 'text-white shadow-lg'
                            : 'text-gray-300 hover:text-white'
                        }`
                      }
                      aria-current={isActive ? 'page' : undefined}
                      title={item.description}
                    >
                      {item.data}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </NavLink>

                    {activeHover === item.id && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none z-[107] shadow-xl"
                      >
                        {item.description}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="lg:hidden relative z-[105] w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 active:scale-95"
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="text-2xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="text-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[98] lg:hidden"
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.nav
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-[99] lg:hidden overflow-hidden shadow-2xl"
              aria-label="Navigation mobile"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 z-10">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
                  <FaBars className="text-blue-400" />
                  Navigation
                </h2>
              </div>

              {/* Navigation Items */}
              <div className="overflow-y-auto h-[calc(100vh-180px)] px-4 py-6 space-y-2">
                {navList.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.id}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { type: "spring", damping: 20, stiffness: 300 }
                        }
                      }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={({ isActive: linkIsActive }) =>
                          `group relative flex items-center text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 ${
                            linkIsActive
                              ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white shadow-xl border border-blue-500/30'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/70 border border-transparent'
                          }`
                        }
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4">
                            <div className={`p-2.5 rounded-lg transition-all ${
                              isActive 
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                                : 'bg-gray-800/50 group-hover:bg-gray-700/70'
                            }`}>
                              <NavIcon icon={item.icon} isActive={isActive} />
                            </div>
                            <div>
                              <div className="font-semibold">{item.data}</div>
                              <div className="text-xs text-gray-400 mt-0.5">{item.description}</div>
                            </div>
                          </div>
                          
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-blue-400 rounded-full"
                            />
                          )}

                          <motion.span
                            className={`text-xl transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
                            animate={{ x: isActive ? [0, 5, 0] : 0 }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            →
                          </motion.span>
                        </div>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
                <p className="text-sm text-gray-400 text-center mb-1">
                  Portfolio • {new Date().getFullYear()}
                </p>
                <p className="text-xs text-gray-500 text-center">
                  Appuyez sur Échap pour fermer
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
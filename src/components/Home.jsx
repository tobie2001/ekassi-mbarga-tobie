import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroImage from "../assets/tobie.png";
import { FaGithub, FaLinkedin, FaYoutube, FaFileDownload, FaWhatsapp, FaFacebook, FaRocket, FaCode, FaPalette } from "react-icons/fa";
import { HiOutlineMail, HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/tobie1996?tab=repositories", name: "GitHub", color: "#333" },
    { icon: <FaLinkedin />, url: "https://cm.linkedin.com/in/tobie-mbarga-mbarga-43b58726a", name: "LinkedIn", color: "#0077B5" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@TBWINV444", name: "YouTube", color: "#FF0000" },
    { icon: <FaWhatsapp />, url: "https://wa.me/237696926972?text=Bonjour%20je%20souhaite%20plus%20d'informations%20sur%20vos%20services", name: "WhatsApp", color: "#25D366" },
    { icon: <HiOutlineMail />, url: "mailto:tobiemba@gmail.com", name: "Email", color: "#EA4335" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/ekassi.mbarga/", name: "Facebook", color: "#1877F2" }
  ];

  const skills = [
    { icon: <FaCode />, text: "Full-Stack", color: "#60A5FA" },
    { icon: <FaPalette />, text: "Design", color: "#F472B6" },
    { icon: <FaRocket />, text: "Innovation", color: "#34D399" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const particleVariants = {
    animate: (i) => ({
      y: [0, -100, 0],
      x: [0, Math.random() * 100 - 50, 0],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeOut"
      }
    })
  };

  const createOrbitingElements = () => {
    const elements = [];
    const count = 8;
    const radius = window.innerWidth < 768 ? 160 : 300;

    for (let i = 0; i < count; i++) {
      const angle = (i * 360) / count;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);

      elements.push(
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.8, 0.3],
            backgroundColor: i % 2 === 0 ? "#EF4444" : "#3B82F6",
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3
          }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-blue-500 shadow-lg" />
        </motion.div>
      );
    }
    return elements;
  };

  const createFloatingParticles = () => {
    const particles = [];
    for (let i = 0; i < 6; i++) {
      particles.push(
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          animate="animate"
          custom={i}
        />
      );
    }
    return particles;
  };

  const handleDownloadCV = () => {
    const cvUrl = '/documents/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Tobie_Mbarga.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Curseur personnalisé et effet de suivi */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-red-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {createFloatingParticles()}
      </div>

      {/* Grille de fond animée */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)] bg-[length:60px_60px]" />
      </div>

      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12"
        id="home"
      >
        {/* Section Image avec effets avancés */}
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 mt-24 md:mt-16 relative"
        >
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto">
            {/* Halo lumineux */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-full blur-xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Éléments orbitaux */}
            <motion.div 
              className="absolute inset-0 w-full h-full"
              variants={orbitVariants}
              animate="animate"
            >
              {createOrbitingElements()}
            </motion.div>
            
            {/* Image principale avec effets glassmorphism */}
            <motion.div
              className="relative z-10 w-full h-full rounded-full overflow-hidden"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full border border-white/30" />
              <motion.img
                src={HeroImage}
                alt="MBARGA EKASSI TOBIE"
                className="w-full h-full object-cover rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>

            {/* Anneaux décoratifs */}
            <motion.div 
              className="absolute inset-0 border-2 border-gradient-to-r from-red-500 to-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-0 border-2 border-gradient-to-l from-purple-500 to-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Section Texte améliorée */}
        <motion.div 
          variants={containerVariants}
          className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-4 mt-16"
        >
          {/* Badges de compétences */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-2 mb-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                style={{ color: skill.color }}
              >
                {skill.icon}
                <span className="text-white">{skill.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white leading-tight"
          >
           
            <motion.span 
              className="bg-gradient-to-r from-red-400 via-purple-500 to-blue-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              MBARGA EKASSI TOBIE
            </motion.span>
          </motion.h1>

          <motion.h3 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300 flex items-center justify-center md:justify-start gap-2"
          >
            <HiSparkles className="text-yellow-400 animate-pulse" />
          
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              Développeur Web Full-Stack
            </motion.span>
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0 backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10"
          >
            Expert en développement web et design numérique, je m'épanouis dans la création de solutions digitales innovantes.
            Mon expertise s'étend du développement Full-Stack à la conception graphique, en passant par la création d'applications
            web, mobiles et bureautiques. Je combine une approche technique rigoureuse avec une sensibilité artistique pour
            concevoir des expériences utilisateur exceptionnelles et des interfaces modernes.
          </motion.p>

          {/* Icônes sociales améliorées */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mb-6 md:mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xl sm:text-2xl text-gray-300 transition-all duration-300"
                whileHover={{ 
                  y: -5, 
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
                title={social.name}
              >
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${social.color}, transparent)`
                  }}
                />
                <span className="relative z-10">{social.icon}</span>
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  {social.name}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Boutons d'action modernisés */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <Link to="/contact">
              <motion.div
                className="relative overflow-hidden px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white font-medium rounded-xl text-base sm:text-lg transition-all duration-300 text-center flex-1 sm:flex-none group cursor-pointer"
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">Me contacter</span>
              </motion.div>
            </Link>
            
            <Link to="/experience">
              <motion.div
                className="relative overflow-hidden px-6 py-2 sm:px-8 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl text-base sm:text-lg transition-all duration-300 text-center flex-1 sm:flex-none group cursor-pointer"
                whileHover={{ 
                  y: -3, 
                  backgroundColor: "rgba(255,255,255,0.2)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
                <span className="relative z-10">Voir mes projets</span>
              </motion.div>
            </Link>
            
            <motion.button
              onClick={handleDownloadCV}
              className="relative overflow-hidden px-6 py-2 sm:px-8 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-none group"
              whileHover={{ 
                y: -3, 
                backgroundColor: "rgba(255,255,255,0.2)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaFileDownload className="text-lg" />
              </motion.div>
              <span className="relative z-10">Télécharger CV</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
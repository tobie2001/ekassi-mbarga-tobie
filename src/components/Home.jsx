import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/main.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaFileDownload, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/tobie1996?tab=repositories", name: "GitHub" },
    { icon: <FaLinkedin />, url: "https://cm.linkedin.com/in/tobie-mbarga-mbarga-43b58726a", name: "LinkedIn" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@TBWINV444", name: "YouTube" },
    { icon: <FaWhatsapp />, url: "https://wa.me/237696926972?text=Bonjour%20je%20souhaite%20plus%20d'informations%20sur%20vos%20services", name: "Whatsapp" },
    { icon: <HiOutlineMail />, url: "mailto:tobiemba@gmail.com", name: "Email" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/ekassi.mbarga/", name: "Facebook" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const circleVariants = {
    animate: (i) => ({
      opacity: [0.6, 1, 0.6],
      scale: [0.8, 1.2, 0.8],
      backgroundColor: ["#3B82F6", "#EF4444", "#3B82F6"],
      transition: {
        duration: 3 + Math.random() * 3,
        repeat: Infinity,
        delay: i * 0.2
      }
    })
  };

  const createCircles = () => {
    const circles = [];
    const count = 10; // Nombre de cercles
    const radius = window.innerWidth < 768 ? 140 : 270; // Rayon adaptatif

    for (let i = 0; i < count; i++) {
      const angle = (i * 360) / count;
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);

      circles.push(
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
          variants={circleVariants}
          animate="animate"
          custom={i}
        />
      );
    }

    return circles;
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
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen mt-4 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-900 w-full py-8 md:py-12"
      id="home"
    >
      {/* Section Image avec cercles tournants */}
      <motion.div 
        variants={itemVariants}
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 mt-16 md:mt-0 relative"
      >
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
          {/* Conteneur des cercles tournants */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            variants={orbitVariants}
            animate="animate"
          >
            {createCircles()}
          </motion.div>
          
          {/* Image principale */}
          <motion.img
            src={HeroImage}
            alt="MBARGA EKASSI TOBIE"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative z-10 rounded-full w-full h-full object-cover border-4 border-red-500 shadow-xl md:shadow-2xl"
          />
          
          {/* Effet hover sur l'image */}
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-transparent hover:border-red-500 hover:animate-pulse z-20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </div>
      </motion.div>

      {/* Section Texte */}
      <motion.div 
        variants={containerVariants}
        className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-0"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white leading-tight"
        >
          Salut, je suis <span className="text-red-500 text-sm sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">MBARGA EKASSI TOBIE</span>
        </motion.h1>

        <motion.h3 
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300"
        >
          <span className="mr-2">Je suis</span>
          <TypeAnimation
            sequence={[
              "Développeur Web Full-Stack", 1000,
              "Spécialiste Frontend & Backend", 1000,
              "Designer Graphique Créatif", 1000,
              "Développeur Web, Mobiles & Bureautiques", 1000,
            ]}
            speed={50}
            deletionSpeed={70}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="inline-block gradient-text text-lg sm:text-xl md:text-2xl lg:text-3xl"
          />
        </motion.h3>

        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-400 leading-relaxed max-w-2xl mx-auto md:mx-0"
        >
          Expert en développement web et design numérique, je m'épanouis dans la création de solutions digitales innovantes.
          Mon expertise s'étend du développement Full-Stack à la conception graphique, en passant par la création d'applications
          web, mobiles et bureautiques. Je combine une approche technique rigoureuse avec une sensibilité artistique pour
          concevoir des expériences utilisateur exceptionnelles et des interfaces modernes.
        </motion.p>

        {/* Icônes sociales */}
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
              whileHover={{ y: -5, scale: 1.1, color: "#EF4444" }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl text-gray-400 hover:text-red-500 transition-colors"
              aria-label={social.name}
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Boutons d'action */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
        >
          <Link to="contact">
            <motion.div
              whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(239, 68, 68, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-red-500 text-white font-medium rounded-lg text-base sm:text-lg hover:bg-red-600 transition-colors text-center flex-1 sm:flex-none"
            >
              Me contacter
            </motion.div>
          </Link>
          
          <Link to="/experience">
            <motion.div
              whileHover={{ y: -3, backgroundColor: "#1F2937" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:px-8 sm:py-3 border border-gray-600 text-white font-medium rounded-lg text-base sm:text-lg hover:bg-gray-800 transition-colors text-center flex-1 sm:flex-none"
            >
              Voir mes projets
            </motion.div>
          </Link>
          
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ y: -3, backgroundColor: "#374151" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-gray-700 text-white font-medium rounded-lg text-base sm:text-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-none"
          >
            <FaFileDownload className="text-lg" /> <span>Télécharger CV</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
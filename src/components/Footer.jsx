import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/votreprofil", name: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/votreprofil", name: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/votreprofil", name: "Twitter" },
    { icon: <FaEnvelope />, url: "mailto:votre@email.com", name: "Email" }
  ];

  const footerLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Sitemap", path: "/sitemap" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-red-500">TOBIE</h3>
            <p className="text-gray-400 mb-4">
              Développeur passionné créant des solutions numériques innovantes 
              avec une touche artistique.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#EF4444" }}
                  className="text-2xl text-gray-400 hover:text-red-500 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-400 hover:text-red-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-400 hover:text-red-500 transition-colors">Compétences</Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-400 hover:text-red-500 transition-colors">Expérience</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Yaounde, Cameroun</p>
              <a href="mailto:tobiemba@gmail.com" className="hover:text-red-500 transition-colors">
               tobiemba@gmail.com
              </a>
              <p>+237 6 96 92 69 72</p>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-gray-400 mr-2">Réalisé</span>
            <FaHeart className="text-red-500 mx-1" />
            <span className="text-gray-400 ml-2">par TOBIE © {currentYear}</span>
          </div>
          
          <div className="flex space-x-6">
            {footerLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path}
                className="text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
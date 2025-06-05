import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPalette, FaServer, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      title: "Développement Web",
      icon: <FaCode className="text-4xl mb-4 text-red-500" />,
      description: "Création de sites web modernes, réactifs et performants avec les dernières technologies (React, Next.js, Node.js).",
      features: [
        "Sites vitrine & e-commerce",
        "Applications web sur mesure",
        "Optimisation SEO",
        "Intégration API"
      ]
    },
    {
      title: "Développement Mobile",
      icon: <FaMobileAlt className="text-4xl mb-4 text-red-500" />,
      description: "Applications mobiles cross-platform natives et performantes pour iOS et Android.",
      features: [
        "React Native applications",
        "UI/UX optimisée mobile",
        "Intégration de paiement",
        "Notifications push"
      ]
    },
    {
      title: "Infographie & Design",
      icon: <FaPalette className="text-4xl mb-4 text-red-500" />,
      description: "Conceptions visuelles percutantes pour renforcer votre identité de marque.",
      features: [
        "Adobe Premiere Pro",
        "Maquettes FigmaX",
        "Adobe Photoshop",
        "Illustrations vectorielles"
      ]
    },
    {
      title: "Solutions Backend",
      icon: <FaServer className="text-4xl mb-4 text-red-500" />,
      description: "Architecture robuste et sécurisée pour vos applications complexes.",
      features: [
        "API REST",
        "Bases de données",
        "Authentification sécurisée"
      ]
    },
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Mes <span className="text-red-500">Services</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-xl text-gray-600">
            Des solutions sur mesure pour transformer vos idées en réalité digitale
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Prêt à concrétiser votre projet ?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Discutons de la meilleure façon de répondre à vos besoins spécifiques et de créer une solution qui dépasse vos attentes.
          </p>
          <Link to="/contact" className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Contactez-moi
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Service;
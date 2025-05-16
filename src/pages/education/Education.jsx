import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaAward, FaBook, FaLanguage, FaNetworkWired, FaGoogle, FaFileAlt, FaMicrosoft } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';

const Education = () => {
  const educationData = [
    {
      degree: "Licence de Technologie",
      institution: "Institut Universitaire de Technologie de Ngaoundéré",
      period: "2022 - 2023",
      description: " la conception, le développement, la maintenance et la gestion de logiciels de manière structurée et méthodique",
      highlights: [
        "Assez Bien (12.5/20)",
        "Projet de fin d'études : Plateforme de gestion des patients avec notifications",
        "Cours avancés en développement web"
      ],
      icon: <FaGraduationCap className="text-3xl text-red-500" />
    },
    {
      degree: "diplôme universitaire de technologie (DUT)",
      institution: "Institut Universitaire de Technologie de Ngaoundéré",
      period: "2020 - 2022",
      description: "Fondamentaux en algorithmique, structures de données et génie logiciel.",
      highlights: [
        "Assez bien (12.8/20)",
        "Gestion des bugs et amélioration continue",
        "Projet : Développement d'une application de gestion  du personnel"
      ],
      icon: <FaUniversity className="text-3xl text-red-500" />
    },
    {
      degree: "Baccalauréat Scientifique",
      institution: "Lycée Classique et Moderne de Ntui",
      period: "2017 - 2018",
      description: "Option Sciences Mathématiques et Physiques, spécialité Mathématiques.",
      highlights: [
        "Passable (11,2/20)",
        "Projet ISN : Pas de projets",
      ],
      icon: <FaBook className="text-3xl text-red-500" />
    }
    
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
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
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
            Mon <span className="text-red-500">Parcours Académique</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-xl text-gray-600">
            Une formation solide et diversifiée pour des compétences pointues
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="mb-6">
                  {edu.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <h4 className="text-xl text-red-500 mb-4">{edu.institution}</h4>
                <p className="text-gray-500 mb-4">{edu.period}</p>
                <p className="text-gray-700 mb-6">{edu.description}</p>
                
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <h5 className="font-semibold text-gray-900 mb-3">Points marquants :</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {edu.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          
          </motion.div>


          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Compétences Académiques</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Recherche scientifique",
                "Analyse de données",
                "Rédaction technique",
                "Présentations académiques",
                "Gestion de projet",
                "Méthodologies UML",
                "Analyse statistique"
              ].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
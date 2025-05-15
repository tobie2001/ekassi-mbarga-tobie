import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaMedal, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';


const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const professionalExperiences = [
    {
      role: "Développeur Full Stack",
      company: "RAMA CENTRE MEDICAL",
      period: "2025 - Présent",
      description: [
        "Conception et développement d'applications web et mobiles avec React, React Native et Node.js",
        "Optimisation des performances réduisant les temps de chargement de 40%",
        "Mise en place de solutions CI/CD améliorant la productivité de l'équipe",
        "Application de suivi medical"
      ],
      tags: ["React", "Node.js", "AWS", "GraphQL"],
      image: "/images/rama.png",
      projectUrl: "https://rama-center.vercel.app/"
    },
    {
      role: "Développeur Frontend",
      company: "POS",
      period: "2023 - 2024",
      description: [
        "Développement d'interfaces utilisateur complexes avec React et TypeScript",
        "Collaboration avec les designers pour implémenter des maquettes Figma",
        "Migration réussie de legacy jQuery vers React sur 15+ projets",
        "Point de vente application de gestion de vente"
      ],
      tags: ["React", "TypeScript", "Redux", "Jest"],
      image: "/images/Post.png",
      projectUrl: "#"
    },
    {
      role: "Développeur FullStack",
      company: "MacTob",
      period: "2025",
      description: [
        "Développement d'interfaces utilisateur complexes avec React et ",
        "Collaboration avec les designers pour implémenter des maquettes Figma",
        "Migration réussie de legacy jQuery vers React sur 15+ projets",
        "Formation des nouveaux développeurs aux bonnes pratiques frontend"
      ],
      tags: ["React", "TypeScript", "Redux", "Jest"],
      image: "/images/macTob.png",
      projectUrl: "https://mactob-store.vercel.app/"
    },
    {
      role: "Développeur Frontend et backend",
      company: "MK-TShop",
      period: "2024",
      description: [
        "Développement d'interfaces utilisateur complexes avec React et node js",
        "Collaboration avec les designers pour implémenter des maquettes Figma",
        "Migration réussie de legacy jQuery vers React sur 15+ projets",
        "Site de ventede telephone et machine"
      ],
      tags: ["React", "TypeScript", "Redux", "Jest"],
      image: "/images/mkShop.png",
      projectUrl: "https://mk-tshop.vercel.app/"
    },
    {
      role: "Stagiaire Développeur",
      company: "CNADI Yaounde",
      period: "2023",
      description: [
        "Developpement d une application de gestion de patients avec notiffications",
        "Implementation avec node js pour l envoi rapide des sms et email",
        "Optimisation SEO basique et accessibilité",
        "Application de gestion hospitalier"
      ],
      tags: ["Bootstrap", "Node js", "JavaScript", "Postgres"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      projectUrl: "#"
    }
  ];



  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2022"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2021"
    },
    {
      name: "React Native Expert",
      issuer: "React Training Institute",
      year: "2020"
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

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
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
            Mon <span className="text-red-500">Expérience</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-xl text-gray-600">
            Un parcours professionnel riche et diversifié dans le développement digital
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <FaBriefcase className="text-3xl text-red-500 mr-4" />
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900">
              Expérience Professionnelle
            </motion.h3>
          </motion.div>

          <div className="space-y-8">
            {professionalExperiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-10 pb-8 border-l-2 border-red-500"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <img 
                        src={exp.image} 
                        alt={exp.company} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                        <div className="text-gray-500">{exp.period}</div>
                      </div>
                      <h5 className="text-lg font-semibold text-red-500 mb-4">{exp.company}</h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <button
                          onClick={() => openModal(exp)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
                        >
                          Voir détails
                        </button>
                        {exp.projectUrl && (
                          <a
                            href={exp.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                          >
                            <FaExternalLinkAlt />
                            Voir le projet
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
     

        {/* Certifications Section */}
       

        {/* Modal */}
        {isModalOpen && selectedExperience && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedExperience.role}</h3>
                    <h4 className="text-xl text-red-500">{selectedExperience.company}</h4>
                    <p className="text-gray-500">{selectedExperience.period}</p>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                <img 
                  src={selectedExperience.image} 
                  alt={selectedExperience.company} 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                  {selectedExperience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedExperience.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedExperience.projectUrl && (
                  <a
                    href={selectedExperience.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors gap-2"
                  >
                    <FaExternalLinkAlt />
                    Voir le projet en ligne
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Experience;
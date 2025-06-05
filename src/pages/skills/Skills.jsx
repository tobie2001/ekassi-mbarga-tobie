import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaMobile, FaServer, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiAdobephotoshop, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-4xl text-blue-500" />,
      color: "bg-blue-500",
      skills: [
        { name: "React/Next.js", level: 65 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 65 },
        { name: "Framer Motion", level: 60 }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      color: "bg-green-500",
      skills: [
        { name: "Node.js/Express", level: 59 },
        { name: "FASTAPI", level: 50 },
        { name: "REST API", level: 60 },
        { name: "Authentication", level: 70 }
      ]
    },
    {
      title: "Mobile",
      icon: <FaMobile className="text-4xl text-purple-500" />,
      color: "bg-purple-500",
      skills: [
        { name: "React Native", level: 50 },
        { name: "Firebase", level: 50 },
        { name: "Mobile UI", level: 60 }
      ]
    },
    {
      title: "Design",
      icon: <FaFigma className="text-4xl text-pink-500" />,
      color: "bg-pink-500",
      skills: [
        { name: "Adobe animate", level: 40 },
        { name: "Figma", level: 55 },
        { name: "Photoshop", level: 70 },
        { name: "Adobe Pemiere", level: 85 }
      ]
    },
    {
      title: "Base de données",
      icon: <FaDatabase className="text-4xl text-orange-500" />,
      color: "bg-orange-500",
      skills: [
        { name: "MongoDB", level: 60 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firestore", level: 60 },
        { name: "MySQL", level: 75 }
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
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
            Mes <span className="text-blue-500">Compétences</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-xl text-gray-600">
            Un éventail complet de technologies maîtrisées pour des solutions digitales performantes
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{category.title}</h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={progressVariants}
                          custom={skill.level}
                          style={{ width: `${skill.level}%` }}
                          className={`h-2.5 rounded-full ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Autres Compétences</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Git/GitHub", "Jest/Cypress", "Webpack/Vite", "Sass/Less", 
              "Three.js", "WebGL", "PWA", "i18n", "Agile/Scrum", "Jira/Trello",
              "Web Accessibility", "Performance Optimization", "Technical Writing"
            ].map((skill, index) => {
              const colors = [
                "bg-blue-100 hover:bg-blue-200 text-blue-800",
                "bg-green-100 hover:bg-green-200 text-green-800",
                "bg-purple-100 hover:bg-purple-200 text-purple-800",
                "bg-pink-100 hover:bg-pink-200 text-pink-800",
                "bg-orange-100 hover:bg-orange-200 text-orange-800",
                "bg-red-100 hover:bg-red-200 text-red-800",
                "bg-yellow-100 hover:bg-yellow-200 text-yellow-800",
                "bg-indigo-100 hover:bg-indigo-200 text-indigo-800",
                "bg-teal-100 hover:bg-teal-200 text-teal-800",
              ];
              const colorClass = colors[index % colors.length];
              return (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${colorClass}`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
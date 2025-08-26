import React, { useState } from 'react';
import { Briefcase, ExternalLink, X, MapPin, Clock, Code, Rocket, Eye, Sparkles } from 'lucide-react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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
      projectUrl: "https://rama-center.vercel.app/",
      location: "Yaoundé, Cameroun",
      status: "En cours",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      role: "Développeur Full Stack",
      company: "topShop",
      period: "2025",
      description: [
        "Création d'une plateforme e-commerce moderne et responsive.",
        "Développement du frontend avec React et Tailwind CSS pour une expérience utilisateur fluide.",
        "Mise en place du backend avec MongoDB pour la gestion des produits et des utilisateurs.",
        "Déploiement sur Vercel pour une accessibilité optimale."
      ],
      tags: ["React", "Tailwind CSS", "MongoDB"],
      image: "/images/topshop.png",
      projectUrl: "https://top-shop-rho.vercel.app/",
      location: "Remote",
      status: "Terminé",
      gradient: "from-yellow-500 to-orange-600"
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
      projectUrl: "#",
      location: "Remote",
      status: "Terminé",
      gradient: "from-green-500 to-teal-600"
    },
    {
      role: "Développeur FullStack",
      company: "MacTob",
      period: "2025",
      description: [
        "Développement d'interfaces utilisateur complexes avec React",
        "Collaboration avec les designers pour implémenter des maquettes Figma",
        "Migration réussie de legacy jQuery vers React sur 15+ projets",
        "Formation des nouveaux développeurs aux bonnes pratiques frontend"
      ],
      tags: ["React", "TypeScript", "Redux", "Jest"],
      image: "/images/macTob.png",
      projectUrl: "https://mactob.vercel.app/",
      location: "Yaoundé, Cameroun",
      status: "Terminé",
      gradient: "from-orange-500 to-red-600"
    },
    {
      role: "Développeur Frontend et backend",
      company: "MK-TShop",
      period: "2024",
      description: [
        "Développement d'interfaces utilisateur complexes avec React et node js",
        "Collaboration avec les designers pour implémenter des maquettes Figma",
        "Migration réussie de legacy jQuery vers React sur 15+ projets",
        "Site de vente de telephone et machine"
      ],
      tags: ["React", "TypeScript", "Redux", "Jest"],
      image: "/images/mkShop.png",
      projectUrl: "https://mk-tshop.vercel.app/",
      location: "Yaoundé, Cameroun",
      status: "Terminé",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      role: "Développeur Full Stack",
      company: "CrecheImmo",
      period: "2024 - Présent",
      description: [
        "Spécialiste en Investissement locatif & services pour les crèches",
        "Développement du site vitrine et des outils internes avec Next.js et Framer Motion",
        "Mise en place d'une interface utilisateur moderne et responsive",
        "Intégration de contenus dynamiques et animations avancées pour une expérience utilisateur optimale",
        "Collaboration avec l'équipe pour la gestion des offres immobilières et des services de rénovation"
      ],
      tags: ["Next.js", "Framer Motion", "React", "UI/UX"],
      image: "crecheimmo.jpg",
      projectUrl: "https://www.crecheimmo.com/",
      location: "France",
      status: "En cours",
      gradient: "from-indigo-500 to-blue-600"
  },
    {
      role: "Stagiaire Développeur",
      company: "CNADI Yaounde",
      period: "2023",
      description: [
        "Développement d'une application de gestion de patients avec notifications",
        "Implémentation avec Node.js pour l'envoi rapide des SMS et email",
        "Optimisation SEO basique et accessibilité",
        "Application de gestion hospitalier"
      ],
      tags: ["Bootstrap", "Node.js", "JavaScript", "Postgres"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      projectUrl: "#",
      location: "Yaoundé, Cameroun",
      status: "Terminé",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      role: "Développeur Full Stack",
      company: "Générateur de CV",
      period: "2025",
      description: [
        "Développement d'un générateur de CV interactif et moderne.",
        "Utilisation de React pour le frontend et Node.js pour le backend.",
        "Intégration de Tailwind CSS pour une interface responsive et élégante.",
        "Permet la création, la personnalisation et le téléchargement de CV en ligne.",
        "Déploiement sur Vercel pour une accessibilité mondiale."
      ],
      tags: ["React", "Node.js", "Tailwind CSS"],
      image: "/images/cvbuilder.png",
      projectUrl: "https://cv-website-tau.vercel.app/",
      location: "Remote",
      status: "Terminé",
  gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-lg mb-6">
            <Briefcase className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6">
            Mon Parcours
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une expertise technique polyvalente forgée à travers des projets innovants 
            et des défis technologiques stimulants
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
            {professionalExperiences.map((exp, index) => (
            <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden w-full max-w-full mx-auto
                  ${hoveredCard === index ? 'scale-105' : ''}
                  ${typeof window !== 'undefined' && window.innerWidth < 640 ? '' : 'hover:shadow-2xl hover:-translate-y-2'}`}
                style={{ maxWidth: '100%' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Status badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  exp.status === 'En cours' 
                    ? 'bg-green-100 text-green-700 border-2 border-green-200' 
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
                }`}>
                  {exp.status === 'En cours' && <div className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>}
                  {exp.status}
                </span>
              </div>

              <div className="relative z-10 p-3 sm:p-6">
                {/* Company Image with overlay effect */}
                <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6 group">
                  <img 
                    src={exp.image} 
                    alt={exp.company} 
                    className="w-full h-32 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-20 mix-blend-overlay`}></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                      {exp.company}
                    </h4>
                  </div>

                  {/* Meta information */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-red-500" />
                      {exp.location}
                    </div>
                      </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                            {tag}
                          </span>
                        ))}
                    {exp.tags.length > 3 && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        +{exp.tags.length - 3}
                      </span>
                    )}
                      </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                        <button
                          onClick={() => openModal(exp)}
                      className={`flex-1 py-3 px-4 bg-gradient-to-r ${exp.gradient} text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center`}
                        >
                      <Eye className="w-4 h-4 mr-2" />
                      Détails
                        </button>
                    {exp.projectUrl && exp.projectUrl !== "#" && (
                          <a
                            href={exp.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        className="py-3 px-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                          >
                        <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg">
            <Rocket className="w-6 h-6 text-blue-600 mr-3" />
            <span className="text-lg font-semibold text-gray-800">
              Prêt pour de nouveaux défis technologiques
            </span>
          </div>
        </div>

        {/* Enhanced Modal */}
        {isModalOpen && selectedExperience && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-[999] animate-fadeIn mt-48">
            <div className="bg-white rounded-2xl w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[95vh] overflow-hidden shadow-2xl animate-slideUp mx-2">
              {/* Modal Header */}
              <div className={`relative p-4 sm:p-6 bg-gradient-to-r ${selectedExperience.gradient} text-white`}>
                <button 
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all z-[1000] bg-black/30 backdrop-blur"
                  style={{ pointerEvents: 'auto' }}
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="pr-8 sm:pr-12">
                  <h3 className="text-2xl font-bold mb-2">{selectedExperience.role}</h3>
                  <h4 className="text-xl font-semibold opacity-90 mb-2">{selectedExperience.company}</h4>
                  <div className="flex items-center gap-4 text-sm opacity-80">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedExperience.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedExperience.location}
                    </span>
                  </div>
                </div>
                </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
                <img 
                  src={selectedExperience.image} 
                  alt={selectedExperience.company} 
                  className="w-full h-40 sm:h-64 object-cover rounded-xl mb-4 sm:mb-6 shadow-lg"
                />

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Missions principales</h5>
                    <ul className="list-none space-y-3">
                  {selectedExperience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-2 h-2 bg-gradient-to-r ${selectedExperience.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                  ))}
                </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies utilisées</h5>
                    <div className="flex flex-wrap gap-2">
                  {selectedExperience.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className={`px-4 py-2 bg-gradient-to-r ${selectedExperience.gradient} text-white rounded-full text-sm font-medium shadow-md`}
                        >
                      {tag}
                    </span>
                  ))}
                    </div>
                </div>

                  {selectedExperience.projectUrl && selectedExperience.projectUrl !== "#" && (
                    <div className="pt-4 border-t border-gray-200">
                  <a
                    href={selectedExperience.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${selectedExperience.gradient} text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                  >
                        <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet en ligne
                  </a>
                    </div>
                )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Experience;
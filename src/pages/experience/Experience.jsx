import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, ExternalLink, MapPin, Clock, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

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
      company: "BISAF CAMEROUN",
      period: "2024 - Présent",
      description: [
        "Développement d'une application d'aide à la santé pour l'ONG BISAF Cameroun.",
        "Mise en place d'une plateforme web moderne pour la gestion et le suivi des bénéficiaires.",
        "Intégration d'outils de communication et de reporting pour les équipes terrain.",
        "Optimisation de l'expérience utilisateur avec Tailwind CSS."
      ],
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/images/bisaf.jpg",
      projectUrl: "https://www.bisafcameroun.org/",
      location: "Cameroun",
      status: "En cours",
      gradient: "from-teal-500 to-green-600"
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


  const handleCardClick = (exp) => {
    navigate(`/experience/${encodeURIComponent(exp.company)}`, {
      state: { experience: exp },
    });
  };

  return (
    <>
      <Helmet>
        <title>Expériences & Projets | Ekassi Mbarga Tobie</title>
        <meta name="description" content="Découvrez les expériences professionnelles et projets réalisés par Ekassi Mbarga Tobie : développement web, mobile, e-commerce, applications, consulting, UI/UX, et plus encore." />
        <meta name="keywords" content="expérience, projets, portfolio, développement web, développement mobile, React, Node.js, freelance, Ekassi Mbarga Tobie, consulting, UI/UX, applications, e-commerce, Next.js, Tailwind CSS" />
        <meta property="og:title" content="Expériences & Projets | Ekassi Mbarga Tobie" />
        <meta property="og:description" content="Parcours professionnel, réalisations et projets innovants d'Ekassi Mbarga Tobie dans le développement web, mobile et consulting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ekassi-mbarga-tobie.vercel.app/experience" />
        <meta property="og:image" content="https://ekassi-mbarga-tobie.vercel.app/images/experience-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expériences & Projets | Ekassi Mbarga Tobie" />
        <meta name="twitter:description" content="Découvrez les projets et expériences d'Ekassi Mbarga Tobie : web, mobile, consulting, UI/UX, e-commerce, applications." />
        <meta name="twitter:image" content="https://ekassi-mbarga-tobie.vercel.app/images/experience-cover.jpg" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Floating Particles - Hidden on mobile for performance */}
          <div className="hidden md:block">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20 pt-16 sm:pt-20 lg:pt-24">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 animate-gradient">
              Mes Projets
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Une expertise technique polyvalente forgée à travers des projets innovants
              et des défis technologiques stimulants
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
            {professionalExperiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 overflow-hidden w-full max-w-full mx-auto
                ${hoveredCard === index ? 'scale-105' : ''}
                ${typeof window !== 'undefined' && window.innerWidth < 640 ? '' : 'hover:shadow-blue-500/20 hover:shadow-2xl hover:-translate-y-2'}`}
                style={{ maxWidth: '100%' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(exp)}
                role="button"
                tabIndex={0}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xl border ${
                    exp.status === 'En cours'
                    ? 'bg-green-500/20 text-green-300 border-green-500/30'
                    : 'bg-gray-500/20 text-gray-300 border-gray-500/30'
                    }`}>
                    {exp.status === 'En cours' && <div className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>}
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
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                        {exp.company}
                      </h4>
                    </div>
                    {/* Meta information */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-blue-400" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-red-400" />
                        {exp.location}
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                      {exp.tags.length > 3 && (
                        <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium">
                          +{exp.tags.length - 3}
                        </span>
                      )}
                    </div>
                    {/* Project link */}
                    {exp.projectUrl && exp.projectUrl !== "#" && (
                      <a
                        href={exp.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-semibold hover:border-white/40 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mt-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
              <Rocket className="w-6 h-6 text-blue-400 mr-3" />
              <span className="text-lg font-semibold text-white">
                Prêt pour de nouveaux défis technologiques
              </span>
            </div>
          </div>


        </div>

        <style>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

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
    </>
  );
};

export default Experience;
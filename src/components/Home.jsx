import React, { useState, useEffect } from "react";
import HeroImage from "../assets/tobie.png";
import { FaGithub, FaLinkedin, FaYoutube, FaFileDownload, FaWhatsapp, FaFacebook, FaCode, FaPalette, FaRocket, FaArrowRight, FaPlay } from "react-icons/fa";
import { HiOutlineMail, HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
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
    { icon: <FaCode />, text: "Full-Stack Development", color: "#3B82F6", description: "Applications web complètes" },
    { icon: <FaPalette />, text: "UI/UX Design", color: "#8B5CF6", description: "Expériences utilisateur" },
    { icon: <FaRocket />, text: "Innovation & Strategy", color: "#10B981", description: "Solutions créatives" }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95 },
    { name: 'Node.js', category: 'Backend', level: 90 },
    { name: 'Python', category: 'Backend', level: 85 },
    { name: 'PHP', category: 'Backend', level: 88 },
    { name: 'MySQL', category: 'Database', level: 82 },
    { name: 'MongoDB', category: 'Database', level: 80 },
    { name: 'JavaScript', category: 'Frontend', level: 98 },
    { name: 'TypeScript', category: 'Frontend', level: 85 },
    { name: 'Laravel', category: 'Framework', level: 87 },
    { name: 'Express', category: 'Framework', level: 90 },
    { name: 'Tailwind', category: 'Styling', level: 95 },
    { name: 'Bootstrap', category: 'Styling', level: 90 }
  ];

  const stats = [
    { value: "30+", label: "Projets Complétés", icon: "🚀" },
    { value: "3+", label: "Années d'Expérience", icon: "⭐" },
    { value: "30+", label: "Clients Satisfaits", icon: "😊" },
    { value: "24/7", label: "Support Disponible", icon: "💬" }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
            {/* Profile Image - First on mobile, second on desktop */}
            <div className="order-1 lg:order-2 mt-8 sm:mt-12 lg:mt-0 lg:col-span-5 mb-8 lg:mb-0">
              <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl transform rotate-6 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-6 animate-pulse delay-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl transform rotate-3 animate-pulse delay-700"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-3xl shadow-2xl border border-white/20">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={HeroImage}
                      alt="MBARGA EKASSI TOBIE"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-xl border border-white/20 animate-float">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Années d'expérience</div>
                </div>

                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-xl border border-white/20 animate-float delay-500">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projets réalisés</div>
                </div>

                {/* Additional floating element */}
                <div className="absolute top-1/2 -right-4 sm:-right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg animate-bounce">
                  <HiSparkles className="text-white text-lg sm:text-xl" />
                </div>
              </div>
            </div>

            {/* Content - Second on mobile, first on desktop */}
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="max-w-3xl">
                {/* Status Badge */}
                <div className={`inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <HiSparkles className="mr-1" />
                  Disponible pour de nouveaux projets
                </div>

                {/* Main Heading */}
                <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                    <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                      MBARGA EKASSI
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                      TOBIE
                    </span>
                  </h1>
                </div>

                {/* Subtitle */}
                <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium mb-4 sm:mb-6 leading-relaxed">
                    <span className="text-blue-600 font-semibold">Développeur Web Full-Stack</span>
                    <span className="text-gray-500"> & </span>
                    <span className="text-purple-600 font-semibold">Designer</span>
                  </h2>
                </div>

                {/* Description */}
                <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                    Expert en développement web et design numérique, je crée des 
                    <span className="text-blue-600 font-semibold"> solutions digitales innovantes</span> qui allient 
                    technique rigoureuse et esthétique moderne pour des expériences utilisateur exceptionnelles.
                  </p>
                </div>

                {/* Skills */}
                <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-200/50 hover:border-blue-300/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                            <span style={{ color: skill.color }} className="text-lg">{skill.icon}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-800 text-sm sm:text-base">{skill.text}</div>
                            <div className="text-xs sm:text-sm text-gray-500 mt-1">{skill.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <Link to="/contact">
                      <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        Me contacter
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    
                    <Link to="/experience">
                      <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <FaPlay className="text-blue-600" />
                        Voir mes projets
                      </button>
                    </Link>
                    
                    <button
                      onClick={handleDownloadCV}
                      className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-2 border-green-200 hover:border-green-400 text-green-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaFileDownload className="group-hover:animate-bounce" />
                      Télécharger CV
                    </button>
                  </div>
                </div>

                {/* Social Links */}
                <div className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-white rounded-xl border border-gray-200/50 hover:border-transparent shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        style={{ '--hover-color': social.color }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = social.color;
                          e.target.style.borderColor = social.color;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '';
                          e.target.style.borderColor = '';
                        }}
                        aria-label={social.name}
                        title={social.name}
                      >
                        <span className="text-lg sm:text-xl">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white/50 backdrop-blur-sm border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200/50 hover:border-blue-300/50 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 sm:mb-6">
              Technologies & Outils
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une expertise technique diversifiée pour répondre à tous vos besoins de développement
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl text-center border border-gray-200/50 hover:border-blue-300/50 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="text-sm sm:text-base font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-500 mb-3">{tech.category}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-700 group-hover:from-blue-600 group-hover:to-purple-600" 
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">{tech.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Collaborons ensemble pour créer quelque chose d'extraordinaire qui fera la différence pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link to="/contact">
              <button className="group w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Commencer un projet
                <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
            <Link to="/experience">
              <button className="group w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                <FaPlay className="group-hover:text-blue-400 transition-colors" />
                Découvrir mes réalisations
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float.delay-500 {
          animation-delay: 0.5s;
        }
        
        @media (max-width: 640px) {
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
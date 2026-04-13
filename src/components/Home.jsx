import React, { useState, useEffect } from "react";
import HeroImage from "../assets/tobie.png";
import { 
  FaGithub, FaLinkedin, FaYoutube, FaFileDownload, FaWhatsapp, FaFacebook, 
  FaCode, FaPalette, FaRocket, FaPlay, FaSmile, FaComments, 
  FaCheckCircle, FaReact, FaNodeJs, FaPython, FaDatabase, FaLeaf, 
  FaJsSquare, FaBootstrap, FaMobileAlt, FaDownload, FaEnvelope, 
  FaUser, FaProjectDiagram, FaBriefcase, FaTools, FaCloud, FaServer,
  FaShieldAlt, FaStar, FaHeart, FaGlobe,
  FaCss3Alt, FaHtml5, FaGitAlt, FaDocker, FaAws, FaMicrosoft
} from "react-icons/fa";
import { 
  SiMysql, SiTypescript, SiExpress, SiTailwindcss, SiN8N, 
  SiDjango, SiRedis, SiPostgresql, SiFirebase, SiTauri
} from "react-icons/si";
import { 
  HiOutlineMail, HiSparkles
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Auto-rotate skills
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % 3);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
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
    { icon: <FaCode />, text: "Full-Stack Development", color: "#3B82F6", description: "Applications web complètes", gradient: "from-blue-500 to-cyan-500" },
    { icon: <FaPalette />, text: "UI/UX Design", color: "#8B5CF6", description: "Expériences utilisateur", gradient: "from-purple-500 to-pink-500" },
    { icon: <FaRocket />, text: "Innovation & Strategy", color: "#10B981", description: "Solutions créatives", gradient: "from-green-500 to-emerald-500" }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95, icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js', category: 'Backend', level: 90, icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Python', category: 'Backend', level: 85, icon: <FaPython className="text-yellow-400" /> },
    { name: 'MySQL', category: 'Database', level: 82, icon: <SiMysql className="text-blue-500" /> },
    { name: 'MongoDB', category: 'Database', level: 80, icon: <FaLeaf className="text-green-700" /> },
    { name: 'JavaScript', category: 'Frontend', level: 98, icon: <FaJsSquare className="text-yellow-300" /> },
    { name: 'TypeScript', category: 'Frontend', level: 85, icon: <SiTypescript className="text-blue-400" /> },
    { name: 'Express', category: 'Framework', level: 90, icon: <SiExpress className="text-gray-300" /> },
    { name: 'Tailwind', category: 'Styling', level: 95, icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'n8n', category: 'Automation', level: 90, icon: <SiN8N className="text-orange-500" /> },
    { name: 'React Native', category: 'Mobile', level: 85, icon: <FaMobileAlt className="text-blue-400" /> },
    { name: 'Django', category: 'Backend', level: 80, icon: <SiDjango className="text-green-900" /> },
    { name: 'Redis', category: 'Database', level: 75, icon: <SiRedis className="text-red-500" /> },
    { name: 'PostgreSQL', category: 'Database', level: 80, icon: <SiPostgresql className="text-blue-700" /> },
    { name: 'Firebase', category: 'Cloud', level: 75, icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Tauri.js', category: 'Desktop', level: 85, icon: <SiTauri className="text-purple-400" /> }
  ];

  const stats = [
    { value: "30+", label: "Projets Complétés", icon: <FaRocket />, gradient: "from-blue-500 to-cyan-500" },
    { value: "3+", label: "Années d'Expérience", icon: <HiSparkles />, gradient: "from-purple-500 to-pink-500" },
    { value: "30+", label: "Clients Satisfaits", icon: <FaSmile />, gradient: "from-green-500 to-emerald-500" },
    { value: "24/7", label: "Support Disponible", icon: <FaComments />, gradient: "from-orange-500 to-red-500" }
  ];

  const features = [
    "Design responsive & moderne",
    "Performance optimisée",
    "Code propre & maintenable",
    "Support & maintenance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Particles - Hidden on mobile for performance */}
        <div className="hidden md:block">
          {[...Array(20)].map((_, i) => (
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

        {/* Mouse Follower - Desktop only */}
        <div
          className="hidden lg:block absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center lg:items-start">

            {/* Image - First on mobile, Second on desktop */}
            <div className="lg:col-span-5 lg:order-2 z-10 relative">
              <div className="relative max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-20 lg:mt-8 z-0 md:z-0">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-[2rem] sm:rounded-[3rem] blur-2xl sm:blur-3xl animate-pulse"></div>

                {/* Main Image Container */}
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <div className="relative aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-2 sm:border-4 border-white/20 backdrop-blur-xl shadow-2xl">
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 animate-spin-slow"></div>
                    <div className="absolute inset-0.5 sm:inset-1 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                      <img
                        src={HeroImage}
                        alt="MBARGA EKASSI TOBIE"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Cards - Adjusted for mobile */}
                <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-gradient-to-br from-blue-500/90 to-purple-500/90 backdrop-blur-xl p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 animate-float">
                  <div className="text-xl sm:text-3xl font-bold text-white">3+</div>
                  <div className="text-xs sm:text-sm text-white/80">Années</div>
                </div>

                <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-gradient-to-br from-green-500/90 to-emerald-500/90 backdrop-blur-xl p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 animate-float delay-500">
                  <div className="text-xl sm:text-3xl font-bold text-white">50+</div>
                  <div className="text-xs sm:text-sm text-white/80">Projets</div>
                </div>

                <div className="absolute top-1/2 -right-4 sm:-right-8 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 sm:p-4 rounded-full shadow-2xl animate-bounce">
                  <HiSparkles className="text-white text-lg sm:text-2xl" />
                </div>
              </div>
            </div>

            {/* Content - Second on mobile, First on desktop */}
            <div className="lg:col-span-7 lg:order-1 z-10">
              <div className="max-w-3xl mx-auto lg:mx-0">
                {/* Status Badge */}
                <div className={`inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 text-green-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 absolute"></div>
                  <HiSparkles className="mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Disponible pour de nouveaux projets</span>
                  <span className="xs:hidden">Disponible</span>
                </div>

                {/* Main Heading with Glitch Effect */}
                <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-center lg:text-left">
                    <span className="block text-white/90 mb-1 sm:mb-2">
                      MBARGA EKASSI
                    </span>
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                      TOBIE
                    </span>
                  </h1>
                </div>

                {/* Animated Subtitle */}
                <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 h-16 sm:h-20 relative text-center lg:text-left">
                    <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                      <span className="text-blue-400 font-bold mr-2 sm:mr-3">Développeur</span>
                      <div className="relative overflow-hidden h-10 sm:h-12">
                        {['Full-Stack', 'React', 'Node.js'].map((text, i) => (
                          <span
                            key={i}
                            className={`absolute left-0 top-0 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold transition-all duration-500 ${activeSkill === i ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                              }`}
                          >
                            {text}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
                    Je transforme vos idées en
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> expériences digitales exceptionnelles</span>,
                    en combinant design moderne et performance technique.
                  </p>
                </div>

                {/* Features List - Grid on mobile, 2 columns */}
                <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-300 justify-start text-left"
                      >
                        <FaCheckCircle className="text-green-400 flex-shrink-0 text-sm sm:text-base" />
                        <span className="text-xs sm:text-sm lg:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Stack on mobile */}
                <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <button className="group relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                          Démarrer un projet
                          <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      </button>
                    </Link>

                    <Link to="/experience" className="w-full sm:w-auto">
                      <button className="group w-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-xl backdrop-blur-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                        <FaPlay className="group-hover:text-blue-400 transition-colors" />
                        Voir mes projets
                      </button>
                    </Link>

                    <Link to="/gallerie" className="w-full sm:w-auto">
                      <button className="group w-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500/30 hover:border-purple-500/60 text-white font-bold rounded-xl backdrop-blur-xl hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                        <FaPalette className="group-hover:text-purple-400 transition-colors" />
                        <span className="hidden xs:inline">Voir la Gallerie</span>
                        <span className="xs:hidden">Gallerie</span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Social Links - Better spacing on mobile */}
                <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-3 sm:p-4 bg-white/5 backdrop-blur-xl border border-white/10 text-gray-300 hover:text-white rounded-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        aria-label={social.name}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: `linear-gradient(135deg, ${social.color}40, ${social.color}20)` }}
                        ></div>
                        <span className="relative text-base sm:text-xl">{social.icon}</span>
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
      <section className="relative py-12 sm:py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative bg-white/5 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-white/30 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative">
                    <div className={`text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.icon}
                    </div>
                    <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Expertises
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400">
              Des compétences polyvalentes pour vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-white/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative text-center md:text-left">
                  <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{skill.text}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Stack Technique
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400">
              Technologies maîtrisées pour des solutions performantes
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-xl p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/30 text-center transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="text-2xl sm:text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm sm:text-base text-white font-bold mb-1">{tech.name}</div>
                  <div className="text-xs text-gray-400 mb-2 sm:mb-3">{tech.category}</div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-1 sm:h-1.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>

            <div className="relative text-center">
              <HiSparkles className="text-4xl sm:text-5xl text-yellow-400 mx-auto mb-4 sm:mb-6 animate-bounce" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Prêt à concrétiser votre vision ?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Collaborons pour créer quelque chose d'extraordinaire qui propulsera votre entreprise vers de nouveaux sommets.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="group w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                      Démarrer maintenant
                      <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </Link>

                <a
                  href="/documents/cv.pdf"
                  download
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/60 text-white font-bold rounded-xl backdrop-blur-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FaFileDownload className="group-hover:animate-bounce" />
                  <span className="hidden xs:inline">Télécharger CV</span>
                  <span className="xs:hidden">CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        
        .animate-float.delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Home;

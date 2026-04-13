import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Palette, 
  Database, 
  Globe,
  Star,
  TrendingUp,
  Award,
  Zap,
  Brain,
  Target
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillsCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "Création d'interfaces utilisateur modernes et réactives",
      skills: [
        { name: "React/Next.js", level: 65, trending: true },
        { name: "TypeScript", level: 70, trending: true },
        { name: "Tailwind CSS", level: 65, trending: false },
        { name: "Framer Motion", level: 60, trending: true }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-green-50 to-emerald-50",
      description: "Développement d'architectures serveur robustes",
      skills: [
        { name: "Node.js/Express", level: 59, trending: true },
        { name: "FastAPI", level: 50, trending: true },
        { name: "REST API", level: 60, trending: false },
        { name: "Authentication", level: 70, trending: false }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50",
      description: "Applications mobiles cross-platform performantes",
      skills: [
        { name: "React Native", level: 50, trending: true },
        { name: "Firebase", level: 50, trending: false },
        { name: "Mobile UI/UX", level: 60, trending: false }
      ]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-orange-500 to-red-400",
      bgGradient: "from-orange-50 to-red-50",
      description: "Création visuelle et expérience utilisateur",
      skills: [
        { name: "Adobe Animate", level: 40, trending: false },
        { name: "Figma", level: 55, trending: true },
        { name: "Photoshop", level: 70, trending: false },
        { name: "Adobe Premiere", level: 85, trending: false }
      ]
    },
    {
      title: "Bases de données",
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: "from-indigo-500 to-purple-400",
      bgGradient: "from-indigo-50 to-purple-50",
      description: "Gestion et optimisation des données",
      skills: [
        { name: "MongoDB", level: 60, trending: true },
        { name: "PostgreSQL", level: 75, trending: false },
        { name: "Firestore", level: 60, trending: true },
        { name: "MySQL", level: 75, trending: false }
      ]
    }
  ];

  const additionalSkills = [
    { name: "Git/GitHub", category: "DevOps", level: "Expert" },
    { name: "Jest/Cypress", category: "Testing", level: "Avancé" },
    { name: "Webpack/Vite", category: "Build Tools", level: "Avancé" },
    { name: "Three.js", category: "3D/WebGL", level: "Intermédiaire" },
    { name: "PWA", category: "Web Tech", level: "Avancé" },
    { name: "Agile/Scrum", category: "Méthodologie", level: "Expert" },
    { name: "Performance Optimization", category: "Optimisation", level: "Avancé" },
    { name: "Web Accessibility", category: "Accessibilité", level: "Avancé" },
    { name: "Technical Writing", category: "Communication", level: "Avancé" }
  ];

  const stats = [
    { number: "3+", label: "Années d'expérience", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "6+", label: "Technologies maîtrisées", icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "95%", label: "Taux de réussite projet", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = entry.target.dataset.category;
            if (categoryIndex && !animatedSkills[categoryIndex]) {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [categoryIndex]: true
                }));
              }, parseInt(categoryIndex) * 200);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-category]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [animatedSkills]);

  const getSkillLevelColor = (level) => {
    if (level >= 70) return "from-green-500 to-emerald-400";
    if (level >= 60) return "from-blue-500 to-cyan-400";
    if (level >= 50) return "from-yellow-500 to-orange-400";
    return "from-gray-400 to-gray-500";
  };

  const getSkillLevelLabel = (level) => {
    if (level >= 70) return "Expert";
    if (level >= 60) return "Avancé";
    if (level >= 50) return "Intermédiaire";
    return "Débutant";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] lg:w-[500px] h-[200px] sm:h-[300px] lg:h-[500px] bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] lg:w-[500px] h-[200px] sm:h-[300px] lg:h-[500px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[150px] sm:w-[200px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[300px] bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>

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
        {/* Header Section Enhanced */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 pt-8 sm:pt-12 lg:pt-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 sm:mb-6 shadow-2xl">
            <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 sm:mb-6 animate-gradient">
            Mes Compétences
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed px-4 sm:px-0">
            Un éventail complet de technologies maîtrisées pour créer des solutions digitales
            performantes et innovantes
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6 sm:mt-8"></div>
        </div>

        {/* Stats Section - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl shadow-2xl mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Categories Navigation - Scrollable on mobile */}
        <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 overflow-x-auto pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {skillsCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex-shrink-0 flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-xl whitespace-nowrap ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl border border-white/20`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 shadow-lg border border-white/10 hover:border-white/30'
              }`}
            >
              <div className={`mr-2 sm:mr-3 ${activeCategory === index ? 'text-white' : 'text-gray-400'}`}>
                {category.icon}
              </div>
              <span className="text-sm sm:text-base">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div
            className={`bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-2xl border border-white/20`}
            data-category={activeCategory}
          >
            <div className="text-center mb-6 sm:mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${skillsCategories[activeCategory].gradient} rounded-xl sm:rounded-2xl shadow-2xl mb-3 sm:mb-4 text-white`}>
                {skillsCategories[activeCategory].icon}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                {skillsCategories[activeCategory].title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 px-2 sm:px-0">
                {skillsCategories[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {skillsCategories[activeCategory].skills.map((skill, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white flex flex-wrap items-center gap-2">
                        {skill.name}
                        {skill.trending && (
                          <div className="inline-flex px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs rounded-full items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            <span className="hidden xs:inline">Trending</span>
                          </div>
                        )}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1">
                        {getSkillLevelLabel(skill.level)}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-white">{skill.level}%</div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              starIndex < Math.round(skill.level / 20)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out ${
                          animatedSkills[activeCategory] ? 'animate-pulse' : ''
                        }`}
                        style={{
                          width: animatedSkills[activeCategory] ? `${skill.level}%` : '0%',
                          transition: 'width 1.5s ease-in-out'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid Overview - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                index === activeCategory ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              <div className={`bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40`}>
                <div className="text-center mb-3 sm:mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${category.gradient} rounded-xl shadow-2xl mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">{category.description}</p>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <div className="flex items-center">
                        <div className={`w-10 sm:w-12 h-1.5 sm:h-2 bg-gradient-to-r ${getSkillLevelColor(skill.level)} rounded-full mr-2`}></div>
                        <span className="text-gray-400 font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section Enhanced */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden border border-white/20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-full opacity-30"></div>

          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl shadow-2xl mb-3 sm:mb-4 text-white">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2 sm:mb-4">
                Compétences Complémentaires
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                Outils et technologies additionnels que je maîtrise pour des projets complets
              </p>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {additionalSkills.map((skill, index) => {
                const gradients = [
                  "from-blue-500 to-cyan-400",
                  "from-green-500 to-emerald-400",
                  "from-purple-500 to-pink-400",
                  "from-orange-500 to-red-400",
                  "from-indigo-500 to-purple-400",
                  "from-rose-500 to-pink-400",
                  "from-yellow-500 to-orange-400",
                  "from-teal-500 to-cyan-400",
                  "from-violet-500 to-purple-400"
                ];
                const gradient = gradients[index % gradients.length];
                
                return (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-white/20 hover:border-white/40"
                  >
                    <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-2 mb-2">
                      <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </h4>
                      <div className={`px-2 py-0.5 sm:py-1 bg-gradient-to-r ${gradient} text-white text-xs rounded-full font-semibold inline-block w-fit`}>
                        {skill.level}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">{skill.category}</p>
                    <div className="flex">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-1 ${
                            skill.level === "Expert" || (skill.level === "Avancé" && i < 2) || (skill.level === "Intermédiaire" && i < 1)
                              ? `bg-gradient-to-r ${gradient}`
                              : 'bg-gray-400'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Skills;

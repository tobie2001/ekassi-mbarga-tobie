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

  const skillsCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-8 h-8" />,
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
      icon: <Server className="w-8 h-8" />,
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
      icon: <Smartphone className="w-8 h-8" />,
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
      icon: <Palette className="w-8 h-8" />,
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
      icon: <Database className="w-8 h-8" />,
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
    { number: "5+", label: "Années d'expérience", icon: <Award className="w-6 h-6" /> },
    { number: "20+", label: "Technologies maîtrisées", icon: <Brain className="w-6 h-6" /> },
    { number: "95%", label: "Taux de réussite projet", icon: <Target className="w-6 h-6" /> }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section Enhanced */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Mes Compétences
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed mb-8">
            Un éventail complet de technologies maîtrisées pour créer des solutions digitales 
            performantes et innovantes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <div className={`mr-3 ${activeCategory === index ? 'text-white' : ''}`}>
                {category.icon}
              </div>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="mb-20">
          <div 
            className={`bg-gradient-to-br ${skillsCategories[activeCategory].bgGradient} rounded-3xl p-8 lg:p-12 shadow-xl`}
            data-category={activeCategory}
          >
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${skillsCategories[activeCategory].gradient} rounded-2xl shadow-lg mb-4 text-white`}>
                {skillsCategories[activeCategory].icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {skillsCategories[activeCategory].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {skillsCategories[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillsCategories[activeCategory].skills.map((skill, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 flex items-center">
                        {skill.name}
                        {skill.trending && (
                          <div className="ml-2 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs rounded-full flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </div>
                        )}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {getSkillLevelLabel(skill.level)}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{skill.level}%</div>
                      <div className="flex">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 ${
                              starIndex < Math.round(skill.level / 20)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
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
                    <div className="absolute right-0 -top-8">
                      <div className={`w-2 h-2 bg-gradient-to-r ${getSkillLevelColor(skill.level)} rounded-full animate-ping`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                index === activeCategory ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              <div className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-opacity-50`}>
                <div className="text-center mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <div className="flex items-center">
                        <div className={`w-12 h-2 bg-gradient-to-r ${getSkillLevelColor(skill.level)} rounded-full mr-2`}></div>
                        <span className="text-gray-500 font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section Enhanced */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-gradient-to-tr from-indigo-100 to-cyan-100 rounded-full opacity-30"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg mb-4 text-white">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
                Compétences Complémentaires
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Outils et technologies additionnels que je maîtrise pour des projets complets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {skill.name}
                      </h4>
                      <div className={`px-2 py-1 bg-gradient-to-r ${gradient} text-white text-xs rounded-full font-semibold`}>
                        {skill.level}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{skill.category}</p>
                    <div className="flex">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mr-1 ${
                            skill.level === "Expert" || (skill.level === "Avancé" && i < 2) || (skill.level === "Intermédiaire" && i < 1)
                              ? `bg-gradient-to-r ${gradient}`
                              : 'bg-gray-300'
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
    </div>
  );
};

export default Skills;
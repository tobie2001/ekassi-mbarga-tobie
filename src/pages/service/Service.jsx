import React, { useState } from 'react';
import { Code, Smartphone, Palette, Server, TrendingUp, Lightbulb, Check, ArrowRight, Zap, Star, Globe, Shield } from 'lucide-react';

const Service = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Développement Web",
      icon: <Code className="w-8 h-8" />,
      description: "Création de sites web modernes, réactifs et performants avec les dernières technologies de pointe.",
      features: [
        "Sites vitrine & e-commerce",
        "Applications web sur mesure",
        "Optimisation SEO avancée",
        "Intégration API complète"
      ],
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
      borderGradient: "from-blue-200 to-cyan-200",
      price: "À partir de 1500€",
      popular: false
    },
    {
      title: "Développement Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Applications mobiles cross-platform natives et performantes pour iOS et Android avec UX exceptionnelle.",
      features: [
        "React Native applications",
        "UI/UX optimisée mobile",
        "Intégration de paiement",
        "Notifications push intelligentes"
      ],
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50",
      borderGradient: "from-purple-200 to-pink-200",
      price: "À partir de 2500€",
      popular: true
    },
    {
      title: "Infographie & Design",
      icon: <Palette className="w-8 h-8" />,
      description: "Conceptions visuelles percutantes et créatives pour renforcer votre identité de marque unique.",
      features: [
        "Adobe Creative Suite",
        "Maquettes Figma professionnelles",
        "Branding & identité visuelle",
        "Illustrations vectorielles custom"
      ],
      gradient: "from-orange-500 to-red-400",
      bgGradient: "from-orange-50 to-red-50",
      borderGradient: "from-orange-200 to-red-200",
      price: "À partir de 800€",
      popular: false
    },
    {
      title: "Solutions Backend",
      icon: <Server className="w-8 h-8" />,
      description: "Architecture robuste, scalable et sécurisée pour vos applications les plus complexes.",
      features: [
        "API REST & GraphQL",
        "Bases de données optimisées",
        "Authentification multi-niveaux",
        "Infrastructure cloud"
      ],
      gradient: "from-emerald-500 to-teal-400",
      bgGradient: "from-emerald-50 to-teal-50",
      borderGradient: "from-emerald-200 to-teal-200",
      price: "À partir de 2000€",
      popular: false
    },
    {
      title: "Consulting Tech",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Accompagnement stratégique pour optimiser vos processus digitaux et accélérer votre croissance.",
      features: [
        "Audit technique complet",
        "Stratégie digitale personnalisée",
        "Formation équipes",
        "Accompagnement projet"
      ],
      gradient: "from-indigo-500 to-purple-400",
      bgGradient: "from-indigo-50 to-purple-50",
      borderGradient: "from-indigo-200 to-purple-200",
      price: "À partir de 150€/h",
      popular: false
    },
    {
      title: "Analytics & Data",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Solutions d'analyse de données et de business intelligence pour des décisions éclairées.",
      features: [
        "Tableaux de bord interactifs",
        "Analyse prédictive",
        "Reporting automatisé",
        "Intégration multi-sources"
      ],
      gradient: "from-rose-500 to-pink-400",
      bgGradient: "from-rose-50 to-pink-50",
      borderGradient: "from-rose-200 to-pink-200",
      price: "À partir de 1800€",
      popular: false
    }
  ];

  const stats = [
    { number: "50+", label: "Projets réalisés", icon: <Star className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction client", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support technique", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section Enhanced */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Mes Services
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed mb-8">
            Des solutions sur mesure pour transformer vos idées en réalité digitale 
            avec une expertise technique de pointe
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Disponible maintenant
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Livraison rapide
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              Support inclus
            </div>
          </div>
        </div>

        {/* Services Grid Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Populaire
                  </div>
                </div>
              )}

              {/* Main Card */}
              <div className={`relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-opacity-50 hover:border-gradient-to-r ${service.borderGradient} overflow-hidden`}>
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} 
                     style={{ padding: '2px' }}>
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon and Header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg mb-4 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start group/item">
                        <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-200`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center group/btn`}>
                    <span className="mr-2">Découvrir</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Floating Particles Effect */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full animate-bounce opacity-60`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + (i % 2) * 80}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '2s'
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
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

        {/* Enhanced CTA Section */}
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-90"></div>
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 right-8 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à concrétiser votre projet ?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Discutons de la meilleure façon de répondre à vos besoins spécifiques et de créer 
              une solution qui dépasse vos attentes les plus audacieuses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center group">
                <span className="mr-2">Contactez-moi</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center group">
                <span className="mr-2">Voir mes projets</span>
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Garantie satisfaction
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Livraison rapide
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Support premium
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
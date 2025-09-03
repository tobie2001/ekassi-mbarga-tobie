import React from 'react';
import { GraduationCap, University, Award, Book, Trophy, Code, Users, Lightbulb } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Licence de Technologie",
      institution: "Institut Universitaire de Technologie de Ngaoundéré",
      period: "2022 - 2023",
      description: "La conception, le développement, la maintenance et la gestion de logiciels de manière structurée et méthodique",
      highlights: [
        "Assez Bien (12.5/20)",
        "Projet de fin d'études : Plateforme de gestion des patients avec notifications",
        "Cours avancés en développement web"
      ],
      icon: <GraduationCap className="text-4xl text-emerald-500" />,
      gradient: "from-emerald-400 to-cyan-400"
    },
    {
      degree: "Diplôme Universitaire de Technologie (DUT)",
      institution: "Institut Universitaire de Technologie de Ngaoundéré",
      period: "2020 - 2022",
      description: "Fondamentaux en algorithmique, structures de données et génie logiciel.",
      highlights: [
        "Assez bien (12.8/20)",
        "Gestion des bugs et amélioration continue",
        "Projet : Développement d'une application de gestion du personnel"
      ],
      icon: <University className="text-4xl text-blue-500" />,
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      degree: "Baccalauréat Scientifique",
      institution: "Lycée Classique et Moderne de Ntui",
      period: "2017 - 2018",
      description: "Option Sciences Mathématiques et Physiques, spécialité Mathématiques.",
      highlights: [
        "Passable (11,2/20)",
        "Formation solide en sciences fondamentales",
        "Base mathématique pour l'informatique"
      ],
      icon: <Book className="text-4xl text-purple-500" />,
      gradient: "from-purple-400 to-pink-400"
    }
  ];

  const skills = [
    { name: "Recherche scientifique", icon: <Lightbulb className="w-5 h-5" />, color: "text-yellow-500" },
    { name: "Analyse de données", icon: <Trophy className="w-5 h-5" />, color: "text-green-500" },
    { name: "Rédaction technique", icon: <Book className="w-5 h-5" />, color: "text-blue-500" },
    { name: "Présentations académiques", icon: <Users className="w-5 h-5" />, color: "text-purple-500" },
    { name: "Gestion de projet", icon: <Award className="w-5 h-5" />, color: "text-red-500" },
    { name: "Méthodologies UML", icon: <Code className="w-5 h-5" />, color: "text-indigo-500" },
    { name: "Analyse statistique", icon: <Trophy className="w-5 h-5" />, color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section avec animation améliorée */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Mon Parcours Académique
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Une formation solide et diversifiée pour développer des compétences techniques pointues 
            et une expertise en développement logiciel
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline de formation avec design moderne */}
        <div className="mb-24">
          <div className="relative">
            {/* Ligne de timeline */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Point sur la timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-400 rounded-full shadow-lg z-10 hidden lg:block"></div>
                  
                  {/* Carte d'éducation */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                      {/* Gradient de fond */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient}`}></div>
                      
                      <div className="p-8">
                        {/* En-tête avec icône */}
                        <div className="flex items-center mb-6">
                          <div className={`p-3 bg-gradient-to-br ${edu.gradient} rounded-xl shadow-lg mr-4`}>
                            <div className="text-white">
                              {edu.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                              {edu.period}
                            </div>
                          </div>
                        </div>

                        {/* Contenu principal */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <h4 className={`text-lg font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-4`}>
                          {edu.institution}
                        </h4>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {edu.description}
                        </p>
                        
                        {/* Points saillants */}
                        <div className="border-t border-gray-100 pt-6">
                          <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-yellow-500" />
                            Points marquants
                          </h5>
                          <div className="space-y-3">
                            {edu.highlights.map((item, i) => (
                              <div key={i} className="flex items-start">
                                <div className={`w-2 h-2 bg-gradient-to-r ${edu.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section des compétences académiques */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          {/* Motif de fond décoratif */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-gradient-to-tr from-indigo-100 to-cyan-100 rounded-full opacity-30"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
                Compétences Académiques
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Compétences transversales développées au cours de ma formation universitaire
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg bg-white shadow-sm mr-4 group-hover:shadow-md transition-shadow ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section statistiques */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "3", label: "Diplômes obtenus", icon: <GraduationCap className="w-8 h-8" />, color: "from-green-400 to-emerald-400" },
            { number: "6+", label: "Années d'études", icon: <Book className="w-8 h-8" />, color: "from-blue-400 to-cyan-400" },
            { number: "7+", label: "Compétences clés", icon: <Trophy className="w-8 h-8" />, color: "from-purple-400 to-pink-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg mb-4 text-white`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
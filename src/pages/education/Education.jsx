import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>Parcours académique | Ekassi Mbarga Tobie</title>
        <meta name="description" content="Découvrez le parcours académique de Ekassi Mbarga Tobie : Licence, DUT, Baccalauréat, compétences en recherche scientifique, analyse de données, rédaction technique et gestion de projet." />
        <meta name="keywords" content="éducation, diplôme, université, compétences, recherche, analyse, rédaction, gestion de projet, Ekassi Mbarga Tobie" />
      </Helmet>
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
            </p>
          </div>
          {/* ...le reste de votre composant... */}
        </div>
      </div>
    </>
  );
};

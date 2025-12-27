import { useLocation, Link } from "react-router-dom";

const ExperienceDetail = () => {
  const location = useLocation();
  const experience = location.state?.experience;

  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Aucune expérience sélectionnée</h2>
          <Link to="/experience" className="text-blue-400 underline hover:text-blue-300 transition-colors">Retour à la liste des expériences</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-3xl mx-auto py-20 px-4 relative z-10">
        <Link to="/experience" className="text-blue-400 underline hover:text-blue-300 transition-colors mb-6 inline-block">← Retour</Link>
        <div className={`rounded-2xl shadow-2xl p-8 lg:p-10 bg-gradient-to-r ${experience.gradient} text-white backdrop-blur-xl border border-white/20`}>
          <div className="flex flex-col md:flex-row items-center mb-6">
            <img src={experience.image} alt={experience.company} className="w-32 h-32 object-cover rounded-full mr-0 md:mr-8 mb-4 md:mb-0 border-4 border-white/30 shadow-2xl" />
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">{experience.role}</h2>
              <h3 className="text-xl font-semibold text-white/90">{experience.company}</h3>
              <p className="text-sm mt-1 text-white/70">{experience.period} | {experience.location}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-xs font-semibold border border-white/30">{experience.status}</span>
            </div>
          </div>
          <ul className="mb-6 space-y-3">
            {experience.description.map((desc, idx) => (
              <li key={idx} className="flex items-start text-white/90">
                <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            {experience.tags.map((tag, idx) => (
              <span key={idx} className="bg-white/20 backdrop-blur-xl border border-white/30 px-3 py-1 rounded-full text-sm font-medium text-white">{tag}</span>
            ))}
          </div>
          {experience.projectUrl && experience.projectUrl !== "#" && (
            <a href={experience.projectUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-white/20 backdrop-blur-xl border border-white/30 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
              Voir le projet
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;

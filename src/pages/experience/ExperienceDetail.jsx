import { useLocation, Link } from "react-router-dom";

const ExperienceDetail = () => {
  const location = useLocation();
  const experience = location.state?.experience;

  if (!experience) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Aucune expérience sélectionnée</h2>
        <Link to="/experience" className="text-blue-500 underline">Retour à la liste des expériences</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <Link to="/experience" className="text-blue-500 underline mb-6 inline-block">← Retour</Link>
      <div className={`rounded-lg shadow-lg p-8 bg-gradient-to-r ${experience.gradient} text-white`}>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img src={experience.image} alt={experience.company} className="w-32 h-32 object-cover rounded-full mr-0 md:mr-8 mb-4 md:mb-0 border-4 border-white" />
          <div>
            <h2 className="text-3xl font-bold mb-2">{experience.role}</h2>
            <h3 className="text-xl font-semibold">{experience.company}</h3>
            <p className="text-sm mt-1">{experience.period} | {experience.location}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-semibold border border-white">{experience.status}</span>
          </div>
        </div>
        <ul className="mb-4 list-disc pl-5">
          {experience.description.map((desc, idx) => (
            <li key={idx} className="mb-2">{desc}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.tags.map((tag, idx) => (
            <span key={idx} className="bg-white bg-opacity-30 px-2 py-1 rounded text-xs font-medium">{tag}</span>
          ))}
        </div>
        {experience.projectUrl && experience.projectUrl !== "#" && (
          <a href={experience.projectUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-white text-blue-700 font-bold px-6 py-2 rounded shadow hover:bg-blue-100 transition">Voir le projet</a>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetail;

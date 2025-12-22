import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Commence la disparition progressive
      setIsVisible(false);

      // Désactive complètement après la fin de la transition
      const hideTimer = setTimeout(() => {
        setLoading(false);
      }, 300); // Doit correspondre à la durée de la transition

      return () => clearTimeout(hideTimer);
    }, 2000); // Durée du loader (2 secondes)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Background futuriste cyberpunk */}
          <div className="absolute inset-0 bg-gray-900">
            {/* Grid animé cyberpunk */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30 animate-grid"></div>
            
            {/* Effets de lumière néon */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
            
            {/* Points de données flottants */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: '0 0 15px 3px rgba(34, 211, 238, 0.4)',
                    opacity: 0.7
                  }}
                />
              ))}
            </div>
            
            {/* Lignes de code qui glissent */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide"
                  style={{
                    top: `${(i * 12) + 5}%`,
                    animationDelay: `${i * 0.5}s`,
                    width: '120%'
                  }}
                />
              ))}
            </div>
            
            {/* Effet de lueur centrale */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Conteneur relatif pour positionner l'image et le cercle */}
          <div className="relative h-40 w-40">
            {/* Cercle qui tourne avec effet néon */}
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-cyan-500 border-r-purple-500 shadow-[0_0_30px_rgba(34,211,238,0.5)]"></div>
            
            {/* Second cercle tournant en sens inverse */}
            <div className="absolute inset-2 animate-spin rounded-full border-4 border-transparent border-b-pink-500 border-l-blue-500 animate-spin-reverse shadow-[0_0_20px_rgba(236,72,153,0.4)]"></div>
            
            {/* Image fixe au centre avec effet holographique */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Effet de lueur derrière l'image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                
                {/* Image avec effet de reflection */}
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src="/images/tobie.png"
                    alt="Loading"
                    className={`h-32 w-32 rounded-full object-cover border-4 border-gray-800 shadow-2xl transition-all duration-500 ${
                      isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
                    style={{
                      boxShadow: '0 0 40px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)'
                    }}
                  />
                  
                  {/* Reflet futuriste */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30"></div>
                </div>
              </div>
            </div>
            
            {/* Points orbitaux */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-orbit"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 60}deg) translateX(70px) rotate(-${i * 60}deg)`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Texte de chargement futuriste */}
          <div className={`absolute bottom-1/4 w-full text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-glow">
              CHARGEMENT...
            </span>
            <div className="mt-4 flex justify-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.7)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Styles d'animation CSS */}
      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(70px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
        }
        
        @keyframes grid {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes text-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .animate-slide {
          animation: slide 3s linear infinite;
        }
        
        .animate-orbit {
          animation: orbit 3s linear infinite;
        }
        
        .animate-grid {
          animation: grid 10s linear infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .animate-spin-reverse {
          animation: spin 2s linear infinite reverse;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Loader;
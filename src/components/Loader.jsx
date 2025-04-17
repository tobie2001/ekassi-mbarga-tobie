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
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Conteneur relatif pour positionner l'image et le cercle */}
          <div className="relative h-32 w-32">
            {/* Cercle qui tourne */}
            <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-b-4 border-blue-500"></div>
            
            {/* Image fixe au centre */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/tobie.jpg" 
                alt="Loading" 
                className="h-24 w-24 rounded-full object-cover transition-transform duration-300 ${
                  isVisible ? 'scale-100' : 'scale-90'
                }"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
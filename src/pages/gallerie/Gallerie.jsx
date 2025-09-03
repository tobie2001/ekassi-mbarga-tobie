import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Camera, ArrowLeft, ArrowRight } from 'lucide-react';

const Gallerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Images locales originales
  const photos = [
    { src: '/src/assets/gallerie/img1.jpg', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 1' },
    { src: '/src/assets/gallerie/img2.png', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 2' },
    { src: '/src/assets/gallerie/img3.jpg', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 3' },
    { src: '/src/assets/gallerie/img3.png', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 3b' },
    { src: '/src/assets/gallerie/img4.png', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 4' },
    { src: '/src/assets/gallerie/img5.jpg', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 5' },
    { src: '/src/assets/gallerie/img6.png', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 6' },
    { src: '/src/assets/gallerie/img7.JPG', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 7' },
    { src: '/src/assets/gallerie/img8.png', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 8' },
    { src: '/src/assets/gallerie/img9.JPG', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 9' },
    { src: '/src/assets/gallerie/img10.JPG', auteur: 'Mbarga Ekassi Tobie', titre: 'Photo 10' },
  ];

  const openModal = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % photos.length 
      : currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    
    setCurrentIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Camera className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Portfolio Personnel</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-white mb-6 tracking-tight">
            MBARGA EKASSI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Tobie
            </span>
          </h1>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Une collection de moments authentiques et de perspectives uniques
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Grid Layout */}
          {isMobile ? (
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-gray-800"
                  onClick={() => openModal(photo, index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.titre}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium text-sm mb-1">{photo.titre}</h3>
                    <p className="text-white/70 text-xs">{index + 1}/{photos.length}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop Horizontal Scroll */
            <>
              <div className="text-center mb-8">
                <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Faites défiler horizontalement
                  <ArrowRight className="w-4 h-4" />
                </p>
              </div>
              
              <div className="relative">
                <div className="overflow-x-auto scrollbar-hide pb-8">
                  <div className="flex space-x-8" style={{ width: 'max-content' }}>
                    {photos.map((photo, index) => (
                      <div
                        key={index}
                        className="group relative flex-shrink-0 cursor-pointer"
                        onClick={() => openModal(photo, index)}
                      >
                        <div className="relative w-80 h-96 overflow-hidden rounded-3xl bg-gray-800 shadow-2xl">
                          <img
                            src={photo.src}
                            alt={photo.titre}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                            loading="lazy"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Zoom Icon */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
                              <ZoomIn className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          
                          {/* Photo Info */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                              <h3 className="text-white font-medium text-lg mb-2">{photo.titre}</h3>
                              <div className="flex justify-between items-center">
                                <span className="text-white/70 text-sm">{photo.auteur}</span>
                                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                                  {index + 1}/{photos.length}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gradient Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-thin text-white mb-6">
              Découvrez mes photos personnelles
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Chaque image témoigne d'un moment de vie authentique et personnel. 
              Une collection soigneusement sélectionnée qui raconte des histoires uniques 
              à travers mon objectif.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-white/5 px-4 py-2 rounded-full">Photographie Artistique</span>
              <span className="bg-white/5 px-4 py-2 rounded-full">Moments Authentiques</span>
              <span className="bg-white/5 px-4 py-2 rounded-full">Vision Personnelle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="flex flex-col items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.titre}
                className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info */}
              <div className="mt-6 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-white text-xl font-medium mb-2">{selectedImage.titre}</h3>
                <p className="text-gray-300 mb-3">Photo de {selectedImage.auteur}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <span>{currentIndex + 1} / {photos.length}</span>
                  <div className="w-px h-4 bg-gray-600"></div>
                  <span>Utilisez ← → pour naviguer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Gallerie;
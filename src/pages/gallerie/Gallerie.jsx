import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Camera, ArrowLeft, ArrowRight, Heart, Share2, Download } from 'lucide-react';

const Gallerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [likedImages, setLikedImages] = useState(new Set());

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

  const toggleLike = (index) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
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
      {/* Hero Section Améliorée */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50m-25 0a25 25 0 1 1 50 0a25 25 0 1 1 -50 0'/%3E%3Cpath d='M50 0v20M50 80v20M0 50h20M80 50h20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 hover:scale-105 transition-transform duration-300">
            <Camera className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-200">Portfolio Artistique</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight leading-tight">
            MBARGA EKASSI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-light">
              Tobie
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Une odyssée visuelle à travers des moments<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
              authentiques et perspectives uniques
            </span>
          </p>
          
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>{photos.length} Photos</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>Collection Personnelle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Instructions de navigation améliorées */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Collection <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Exclusive</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
              {isMobile 
                ? "Balayez horizontalement pour découvrir chaque création" 
                : "Explorez ma galerie en faisant défiler horizontalement"
              }
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <ArrowLeft className="w-4 h-4 animate-pulse" />
              <span>Naviguez</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>
          
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-8">
              <div className="flex space-x-6 md:space-x-8" style={{ width: 'max-content' }}>
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="group relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition-all duration-500"
                    onClick={() => openModal(photo, index)}
                  >
                    <div className={`relative ${isMobile ? 'w-64 h-80' : 'w-80 h-96'} overflow-hidden rounded-3xl bg-gray-800 shadow-2xl ring-1 ring-white/10 hover:ring-white/20 hover:shadow-3xl transition-all duration-500`}>
                      <img
                        src={photo.src}
                        alt={photo.titre}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay Enhanced */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                      
                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(index);
                          }}
                          className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110 ${
                            likedImages.has(index) 
                              ? 'bg-red-500/30 text-red-400' 
                              : 'bg-white/10 text-white hover:bg-white/20'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedImages.has(index) ? 'fill-current' : ''}`} />
                        </button>
                        <div className="bg-white/10 backdrop-blur-md rounded-full p-2">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      {/* Enhanced Photo Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
                          <h3 className="text-white font-semibold text-lg mb-2">{photo.titre}</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm font-medium">{photo.auteur}</span>
                            <div className="flex items-center gap-2">
                              {likedImages.has(index) && (
                                <div className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                  <Heart className="w-3 h-3 fill-current" />
                                </div>
                              )}
                              <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white text-xs px-3 py-1 rounded-full border border-white/10">
                                {index + 1}/{photos.length}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Numéro de photo élégant */}
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
                          #{String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {photos.map((_, index) => (
                <div 
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300 hover:bg-white/40"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Info Section */}
      <div className="relative py-24">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-16 shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                Découvrez mon <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold">
                  univers photographique
                </span>
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                Chaque cliché capture l'essence d'un instant unique, reflétant ma vision artistique 
                et ma passion pour l'authenticité. Une collection personnelle qui dévoile 
                des moments précieux et des perspectives inédites.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {[
                  { label: 'Photographie Artistique', color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30' },
                  { label: 'Moments Authentiques', color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30' },
                  { label: 'Vision Personnelle', color: 'from-pink-500/20 to-pink-600/20 border-pink-500/30' }
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className={`bg-gradient-to-r ${tag.color} border px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform duration-200`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-7xl max-h-full">
            {/* Enhanced Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 hover:rotate-90 border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Enhanced Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 border border-white/20"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110 border border-white/20"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.titre}
                  className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(currentIndex);
                    }}
                    className={`p-3 rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110 ${
                      likedImages.has(currentIndex) 
                        ? 'bg-red-500/30 text-red-400' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    } border border-white/20`}
                  >
                    <Heart className={`w-5 h-5 ${likedImages.has(currentIndex) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 border border-white/20">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Enhanced Image Info */}
              <div className="mt-8 max-w-2xl">
                <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-white text-2xl font-semibold mb-3">{selectedImage.titre}</h3>
                  <p className="text-gray-300 text-lg mb-4">Photographié par {selectedImage.auteur}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="bg-white/10 px-4 py-2 rounded-full">
                        {currentIndex + 1} / {photos.length}
                      </span>
                      {likedImages.has(currentIndex) && (
                        <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full flex items-center gap-2">
                          <Heart className="w-4 h-4 fill-current" />
                          Aimée
                        </span>
                      )}
                    </div>
                    <span className="hidden md:block">Utilisez ← → pour naviguer</span>
                  </div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Gallerie;
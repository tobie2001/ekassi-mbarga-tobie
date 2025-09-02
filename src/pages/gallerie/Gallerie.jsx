
import React, { useState } from 'react';
import { X } from 'lucide-react';
// Importation des images locales
import img1 from '../../assets/gallerie/img1.jpg';
import img2 from '../../assets/gallerie/img2.png';
import img3 from '../../assets/gallerie/img3.jpg';
import img3b from '../../assets/gallerie/img3.png';
import img4 from '../../assets/gallerie/img4.png';
import img5 from '../../assets/gallerie/img5.jpg';
import img6 from '../../assets/gallerie/img6.png';
import img7 from '../../assets/gallerie/img7.JPG';
import img8 from '../../assets/gallerie/img8.png';
import img9 from '../../assets/gallerie/img9.JPG';
import img10 from '../../assets/gallerie/img10.JPG';

const Gallerie = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Utilisation des images locales avec métadonnée auteur
  const photos = [
    { src: img1, auteur: 'Mbarga Ekassi Tobie' },
    { src: img2, auteur: 'Mbarga Ekassi Tobie' },
    { src: img3, auteur: 'Mbarga Ekassi Tobie' },
    { src: img3b, auteur: 'Mbarga Ekassi Tobie' },
    { src: img4, auteur: 'Mbarga Ekassi Tobie' },
    { src: img5, auteur: 'Mbarga Ekassi Tobie' },
    { src: img6, auteur: 'Mbarga Ekassi Tobie' },
    { src: img7, auteur: 'Mbarga Ekassi Tobie' },
    { src: img8, auteur: 'Mbarga Ekassi Tobie' },
    { src: img9, auteur: 'Mbarga Ekassi Tobie' },
    { src: img10, auteur: 'Mbarga Ekassi Tobie' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-full px-8 py-16 text-center">
          <h1 className="text-5xl font-light text-white mb-4">MBARGA EKASSI Tobie</h1>
          <div className="w-32 h-px bg-white mx-auto opacity-50"></div>
        </div>
      </div>

      {/* Instructions de scroll */}
      <div className="text-center py-8">
        <p className="text-gray-400 text-sm">← Faites défiler horizontalement →</p>
      </div>

      {/* Gallery Horizontal */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide pb-8">
          <div className="flex space-x-6 px-8" style={{ width: 'max-content' }}>
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="relative w-80 h-96 overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={photo.src}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Overlay subtle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Numéro de la photo */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1}
                  </div>
                  {/* Auteur */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.auteur}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient fade sur les bords */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      </div>

      {/* Section info */}
      <div className="text-center py-16 px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-light text-white mb-6">Découvrez mes photos personnelles</h2>
          <p className="text-gray-400 leading-relaxed">
             Chaque image témoigne d'un moment de vie authentique et personnel.
          </p>
        </div>
      </div>

      {/* Modal pour voir l'image en grand */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.src}
              alt="Photo agrandie"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-white text-center mt-4 text-lg font-light">Photo de {selectedImage.auteur}</div>
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
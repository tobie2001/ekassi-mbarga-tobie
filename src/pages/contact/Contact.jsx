import React, { useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async () => {
    setIsSubmitting(true);
    // Simulate email sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "8,863 Rue Repos du chef, Yaoundé, Cameroun",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+237 6 96 92 69 72",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "tobiemba@mail.com",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Particles - Hidden on mobile for performance */}
        <div className="hidden md:block">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20 pt-16 sm:pt-20 lg:pt-24 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6 shadow-2xl">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Contactez-
            </span>
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              moi
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Prêt à transformer vos idées en réalité ? Discutons de votre projet et créons quelque chose d'extraordinaire ensemble.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Envoyons un message</h2>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-semibold text-gray-300 mb-3">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl focus:bg-white/10 focus:ring-4 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 placeholder-gray-400 text-white"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div className="group">
                    <label className="flex items-center text-sm font-semibold text-gray-300 mb-3">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl focus:bg-white/10 focus:ring-4 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 placeholder-gray-400 text-white"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-300 mb-3">
                    <MessageSquare className="w-4 h-4 mr-2 text-gray-400" />
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl focus:bg-white/10 focus:ring-4 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 placeholder-gray-400 text-white"
                    placeholder="De quoi souhaitez-vous parler ?"
                  />
                </div>
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-300 mb-3">
                    <MessageSquare className="w-4 h-4 mr-2 text-gray-400" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl focus:bg-white/10 focus:ring-4 focus:ring-red-500/20 focus:border-red-400 transition-all duration-200 placeholder-gray-400 resize-none text-white"
                    placeholder="Décrivez votre projet, vos besoins ou toute question que vous avez..."
                  ></textarea>
                </div>
                <button
                  onClick={sendEmail}
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-2xl hover:from-red-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-3"></div>
                        Envoi en cours...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-3" />
                        Message envoyé !
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                        Envoyer le message
                      </>
                    )}
                  </span>
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                </button>
              </div>
            </div>
          </div>
          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Coordonnées</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="group flex items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-200">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Availability Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Disponibilité</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Je suis disponible pour des missions freelance et des opportunités de collaboration passionnantes.
                </p>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="font-semibold text-white">Actuellement disponible</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    <span className="font-medium">Heures :</span> Lundi - Vendredi, 9h - 18h WAT
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    <span className="font-medium">Réponse :</span> Sous 24 heures garanties
                  </p>
                </div>
              </div>
            </div>
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl border border-white/20">
              <h3 className="text-xl font-bold mb-3">Projet urgent ?</h3>
              <p className="text-red-100 text-sm mb-4 leading-relaxed">
                Pour les projets prioritaires ou les discussions immédiates, n'hésitez pas à m'appeler directement.
              </p>
              <a
                href="tel:+237696926972"
                className="inline-flex items-center text-white font-semibold hover:text-red-100 transition-colors duration-200 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl hover:bg-white/20"
              >
                <Phone className="w-4 h-4 mr-2" />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
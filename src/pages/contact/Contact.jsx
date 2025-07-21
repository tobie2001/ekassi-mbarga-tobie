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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6 shadow-lg">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Contactez-
            </span>
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              moi
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Prêt à transformer vos idées en réalité ? Discutons de votre projet et créons quelque chose d'extraordinaire ensemble.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Envoyons un message</h2>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-200 placeholder-gray-400"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div className="group">
                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-200 placeholder-gray-400"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="De quoi souhaitez-vous parler ?"
                  />
                </div>
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
                    <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all duration-200 placeholder-gray-400 resize-none"
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
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Coordonnées</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="group flex items-start p-4 rounded-2xl hover:bg-gray-50/50 transition-all duration-200">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Availability Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Disponibilité</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Je suis disponible pour des missions freelance et des opportunités de collaboration passionnantes.
                </p>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/40">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="font-semibold text-gray-900">Actuellement disponible</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Heures :</span> Lundi - Vendredi, 9h - 18h WAT
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Réponse :</span> Sous 24 heures garanties
                  </p>
                </div>
              </div>
            </div>
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Projet urgent ?</h3>
              <p className="text-red-100 text-sm mb-4 leading-relaxed">
                Pour les projets prioritaires ou les discussions immédiates, n'hésitez pas à m'appeler directement.
              </p>
              <a
                href="tel:+237696926972"
                className="inline-flex items-center text-white font-semibold hover:text-red-100 transition-colors duration-200"
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
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yourServiceID', 
      'template_yourTemplateID', 
      form.current, 
      'yourPublicKey'
    )
    .then((result) => {
      alert('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Contactez-<span className="text-red-500">moi</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-xl text-gray-600">
            Discutons de votre projet ou opportunité de collaboration
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez un message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresse</h4>
                    <p className="text-gray-600">8,863 Rue Repos du chef, Yaounde, Cameroun</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">+237 6 96 92 69 72</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">tobiemba@mail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Disponibilité</h3>
              <p className="text-gray-600 mb-4">
                Je suis disponible pour des missions freelance ou des opportunités de collaboration.
                Réponse garantie sous 24 heures.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700">
                  <span className="font-semibold">Heures de travail :</span> Lundi - Vendredi, 9h - 18h
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-plum mb-4">
            Get in Touch
          </h1>
          <p className="text-plum/80 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-plum mb-8">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-rosegold" />
                  <span className="text-plum/80">Hyderabad</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-rosegold" />
                  <span className="text-plum/80">+91-7028641556</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-rosegold" />
                  <span className="text-plum/80">manasvi.g.agrawal@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
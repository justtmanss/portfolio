import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendEmail } from '../../utils/emailUtils';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const success = await sendEmail(formData);
    
    setStatus(success ? 'success' : 'error');
    if (success) {
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-plum font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-lavender/50 focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 outline-none transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-plum font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-lavender/50 focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 outline-none transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-plum font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-lavender/50 focus:border-rosegold focus:ring-2 focus:ring-rosegold/20 outline-none transition-colors resize-none"
          required
        />
      </div>
      <motion.button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-rosegold text-ivory py-3 rounded-lg hover:bg-rosegold/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
        <Send size={18} />
      </motion.button>
      
      {status === 'success' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-600 text-center"
        >
          Message sent successfully!
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 text-center"
        >
          Failed to send message. Please try again.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'shehan8998@gmail.com',
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '0762388479',
      href: 'tel:0762388479'
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Matara, Sri Lanka',
    }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-950 border-t border-slate-900 shadow-xl">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] mb-4">Contact Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-cyan-400/50 transition-colors">
                <div className="text-sm text-gray-500">Email</div>
                <a href="mailto:shehan8998@gmail.com" className="font-medium text-cyan-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.4)] hover:text-cyan-300">shehan8998@gmail.com</a>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-cyan-400/50 transition-colors">
                <div className="text-sm text-gray-500">Phone</div>
                <a href="tel:0762388479" className="font-medium text-cyan-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.4)] hover:text-cyan-300">0762388479</a>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-cyan-400/50 transition-colors">
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium text-gray-300">Matara, Sri Lanka</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 hover:border-cyan-400/50 transition-colors">
                <div className="text-sm text-gray-500">Availability</div>
                <div className="font-medium text-gray-300">Open for opportunities • Remote / Relocate</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="floating-field">
                  <input placeholder=" " type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`${errors.name ? 'border-red-500' : ''}`} />
                  <label htmlFor="name">Name *</label>
                  {errors.name && <p className="text-red-400 text-sm mt-1 font-medium">{errors.name}</p>}
                </div>

                <div className="floating-field">
                  <input placeholder=" " type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`${errors.email ? 'border-red-500' : ''}`} />
                  <label htmlFor="email">Email *</label>
                  {errors.email && <p className="text-red-400 text-sm mt-1 font-medium">{errors.email}</p>}
                </div>
              </div>

              <div className="floating-field">
                <input placeholder=" " type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`${errors.subject ? 'border-red-500' : ''}`} />
                <label htmlFor="subject">Subject *</label>
                {errors.subject && <p className="text-red-400 text-sm mt-1 font-medium">{errors.subject}</p>}
              </div>

              <div className="floating-field">
                <textarea placeholder=" " id="message" name="message" rows="6" value={formData.message} onChange={handleChange} className={`${errors.message ? 'border-red-500' : ''}`} />
                <label htmlFor="message">Message *</label>
                {errors.message && <p className="text-red-400 text-sm mt-1 font-medium">{errors.message}</p>}
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting} className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-xl shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,1)] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

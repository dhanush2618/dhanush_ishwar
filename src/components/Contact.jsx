import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'dhanushishwar0@gmail.com',
      link: 'mailto:dhanushishwar0@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 6379595506',
      link: 'tel:+916379595506'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Chennai, India',
      link: null
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com'
    }
  ];

  return (
  <section id="contact" className="relative py-20 bg-site-bg overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(71, 85, 105) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Let's Collaborate
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
          <p className="text-secondary mt-6 text-lg">
            Have a project in mind? Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="card-dark p-4 rounded-xl border border-[rgba(255,255,255,0.06)] hover:border-accent-purple hover:shadow-lg transition-all duration-300"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <span className="text-3xl mr-4">{info.icon}</span>
                      <div>
                        <p className="text-sm text-secondary">{info.label}</p>
                        <p className="font-semibold text-primary hover:text-accent-purple transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">{info.icon}</span>
                      <div>
                        <p className="text-sm text-secondary">{info.label}</p>
                        <p className="font-semibold text-primary">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-dark p-6 rounded-xl border border-gray-700"
            >
              <h4 className="font-semibold text-white mb-4">Address</h4>
              <p className="text-gray-300">
                8/12 Kesava Iyer Street, Park Town<br />
                Chennai, Tamil Nadu 600003<br />
                India
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="card-dark p-8 rounded-xl border border-[rgba(255,255,255,0.06)]">
              <div className="mb-6">
                <label htmlFor="name" className="block text-primary font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.06)] bg-site-surface text-primary focus:border-accent-purple focus:ring-2 focus:ring-[rgba(154,77,255,0.2)] outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-primary font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.06)] bg-site-surface text-primary focus:border-accent-purple focus:ring-2 focus:ring-[rgba(154,77,255,0.2)] outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-primary font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.06)] bg-site-surface text-primary focus:border-accent-purple focus:ring-2 focus:ring-[rgba(154,77,255,0.2)] outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-btn text-primary font-semibold rounded-xl hover:brightness-110 hover:shadow-xl transition-all duration-300"
              >
                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating Collaboration Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto mt-16 px-4"
      >
        <div className="card-dark p-8 rounded-xl border border-[rgba(255,255,255,0.06)] text-center hover:shadow-lg transition-all duration-300">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Open to Opportunities
          </h3>
          <p className="text-primary mb-6">
            I'm currently looking for research opportunities, internships, and collaborations in AI/ML. 
            Let's create innovative solutions together!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="mailto:dhanushishwar0@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-btn text-primary font-semibold rounded-lg hover:brightness-110 hover:shadow-xl transition-all duration-300"
            >
              Email Me
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 card-dark border border-[rgba(255,255,255,0.06)] font-semibold text-primary rounded-lg hover:border-accent-purple hover:shadow-lg transition-all duration-300"
            >
              Download Resume
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-16 px-4">
        <p className="text-secondary">
          © 2025 Dhanush Ishwar. Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;

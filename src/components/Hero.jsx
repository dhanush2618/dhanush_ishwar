import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-site-bg">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(71, 85, 105) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-accent-purple rounded-full blur-2xl opacity-20"></div>
              <img 
                src={profileImage} 
                alt="Dhanush Ishwar" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-accent-purple shadow-2xl shadow-accent-purple/30"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Dhanush Ishwar
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-secondary mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            AI/ML Engineer & Researcher
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Building intelligent systems that make a difference
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-btn text-primary rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="px-8 py-4 card-dark border border-[rgba(255,255,255,0.06)] rounded-lg font-semibold text-primary
                       hover:border-accent-purple transition-all duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

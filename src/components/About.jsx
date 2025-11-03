import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Deep Learning',
    'GANs',
    'Transfer Learning',
    'Python',
    'TensorFlow',
    'PyTorch',
    'React',
    'Tailwind CSS',
    'Big Data Analysis',
    'Information Retrieval',
    'Web Development',
    'Cloud Computing',
    'AI Ethics',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="about" className="py-20 bg-site-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-dark p-8 rounded-xl border border-[rgba(255,255,255,0.06)]">
              <p className="text-lg text-primary leading-relaxed mb-6">
                I'm an AI/ML engineering student passionate about creating intelligent systems that solve real-world problems. 
                With expertise in <span className="font-semibold text-accent-purple">machine learning</span>, 
                <span className="font-semibold text-accent-purple"> computer vision</span>, and 
                <span className="font-semibold text-accent-purple"> natural language processing</span>, 
                I focus on building innovative solutions.
              </p>
              <p className="text-lg text-primary leading-relaxed mb-6">
                My research work spans <span className="font-semibold text-accent-purple">Generative Adversarial Networks</span>, 
                malware detection, privacy-preserved systems, educational AI frameworks, and AI governance. I've published multiple papers in IEEE conferences 
                and authored book chapters on quantum cryptography, AI ethics, and Healthcare 5.0.
              </p>
              <p className="text-lg text-primary leading-relaxed">
                Beyond academics, I've gained practical experience through internships at 
                <span className="font-semibold text-primary"> Hyundai Motors India</span> and 
                <span className="font-semibold text-primary"> NIT Silchar</span>, 
                working on cloud-based AI tools, medical imaging, and GAN-based synthetic data generation.
              </p>
            </div>
          </motion.div>

          {/* Right: Skills Cloud */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(14, 165, 233, 0.2)',
                    borderColor: 'rgba(14, 165, 233, 0.5)'
                  }}
                  className="px-5 py-3 card-dark rounded-lg text-primary font-medium border border-[rgba(255,255,255,0.06)]
                           cursor-pointer transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

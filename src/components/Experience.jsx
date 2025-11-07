import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'National Institute of Technology, Silchar',
      role: 'Research Intern',
      location: 'Silchar, India',
      duration: '15 Jun 2025 – 15 Jul 2025',
      description: [
        'Researched Generative Adversarial Networks (GANs) for synthesizing medical images of rare conditions.',
        'Evaluated augmentation strategies to mitigate limited dataset issues in clinical imaging.',
        'Outlined quality checks and bias considerations for using synthetic data in diagnostic AI.'
      ],
      tags: ['GANs', 'Medical Imaging', 'Data Augmentation'],
      color: 'accent-purple'
    },
    {
      company: 'Hyundai Motors India Ltd.',
      role: 'Intern',
      location: 'Chennai, India',
      duration: '01 Feb 2024 – 05 Feb 2024',
      description: [
        'Observed cloud tooling used in manufacturing operations and data capture workflows.',
        'Mapped AI/ML opportunities: predictive maintenance, quality inspection, and process optimization.',
        'Documented data handling constraints and integration points for future AIML pilots.'
      ],
      tags: ['Cloud Tools', 'Automotive', 'AIML Use‑Cases'],
      color: 'accent-cyan'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-site-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[rgba(255,255,255,0.04)]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
            >
              {/* Timeline Dot */}
              <div className={`hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${exp.color} border-4 border-[rgba(0,0,0,0.5)] z-10`}></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`card-dark p-6 rounded-xl border border-[rgba(255,255,255,0.06)] ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
              >
                <div className={`inline-block px-4 py-1 rounded-lg text-white font-semibold text-sm mb-4 bg-${exp.color}`}>
                  {exp.duration}
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-primary mb-1">{exp.company}</h4>
                <p className="text-sm text-secondary mb-4">{exp.location}</p>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-primary">{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-[11px] rounded-md bg-[rgba(255,255,255,0.06)] text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

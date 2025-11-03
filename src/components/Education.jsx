import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = {
    degree: 'Bachelor of Technology',
    major: 'Artificial Intelligence and Machine Learning',
    institution: 'Rajalakshmi Engineering College',
    location: 'Chennai, India',
    duration: ' Nov 2022 – Present',
    grade: '7.96 / 10.0 CGPA (until 6th semester)',
    website: 'https://www.rajalakshmi.org/',
    highlights: [
      'Focus on Machine Learning, Computer Vision, and Natural Language Processing',
      'Published multiple research papers in IEEE conferences and book chapters',
      'Active participant in technical competitions and hackathons',
      'Strong foundation in AI/ML algorithms, Big Data Analysis, and Web Development'
    ]
  };

  const languages = [
    { name: 'Tamil', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Fluent', proficiency: 95 }
  ];

  return (
    <section id="education" className="py-20 bg-site-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="card-dark rounded-xl p-8 h-full border border-[rgba(255,255,255,0.06)] hover:border-accent-purple hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-2">
                    {education.major}
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-block px-4 py-2 bg-accent-purple text-primary font-bold rounded-lg">
                    {education.grade}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-primary mb-1">
                  {education.institution}
                </h4>
                <p className="text-primary">{education.location}</p>
                <p className="text-secondary text-sm mt-1">{education.duration}</p>
                <a 
                  href={education.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-purple hover:brightness-110 text-sm underline mt-2 inline-block"
                >
                  Visit Website →
                </a>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.04)] pt-6">
                <h5 className="font-semibold text-primary mb-4">Key Highlights</h5>
                <ul className="space-y-3">
                  {education.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-primary">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <div className="card-dark rounded-xl p-8 h-full border border-[rgba(255,255,255,0.06)] hover:border-accent-purple hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-bold text-primary mb-6">
                Languages
              </h4>
              
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-primary">
                        {lang.name}
                      </span>
                      <span className="text-sm text-secondary">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full bg-[rgba(255,255,255,0.03)] rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-accent-purple rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Personal Info */}
              <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.06)]">
                <h5 className="font-semibold text-primary mb-4">Personal Info</h5>
                <div className="space-y-2 text-sm text-primary">
                  <p><strong>Date of Birth:</strong> Nov 26, 2003</p>
                  <p><strong>Place of Birth:</strong> Chennai, India</p>
                  <p><strong>Nationality:</strong> Indian</p>
                  <p><strong>Passport:</strong> T6994330</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

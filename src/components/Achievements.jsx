import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const publications = [
    {
      title: 'Automated Resume Evaluation and Skill Roadmap Generation using NLP Techniques',
      type: 'IEEE Conference Paper',
      venue: 'Presented, Yet to Publish',
      status: 'Presented',
      description: 'Built an AI-driven job matcher with resume analysis, grammar check, and generative AI scoring',
    },
    {
      title: 'Efficient Malware Detection Using Transfer Learning and GAN-Based Data Augmentation',
      type: 'IEEE Conference Paper',
      venue: '2025 3rd International Conference on AI and ML (AIMLA)',
      status: 'Published',
      description: 'Proposed a hybrid malware detection strategy using GANs and transfer learning to improve accuracy and resilience',
    },
    {
      title: 'Enhancing Education Infrastructure through Machine Learning',
      type: 'IEEE Conference Paper',
      venue: '2025 International Conference on Frontier Technologies and Solutions (ICFTS)',
      status: 'Published',
      description: 'AI-driven system to classify schools using UDISE PLUS data with Isolation Forest and LightGBM algorithms',
    },
    {
      title: 'Hybrid Design for Privacy Preserved Image Representation',
      type: 'IEEE Conference Paper',
      venue: '2025 11th International Conference on Communication and Signal Processing (ICCSP)',
      status: 'Published',
      description: 'Developed a system for secure photo storage in the cloud using hybrid encryption algorithms',
    },
    {
      title: 'Face Recognition Based Attendance System – A Deep Dive',
      type: 'IEEE Conference Paper',
      venue: '2025 3rd International Conference on Sustainable Computing (ICSCDS)',
      status: 'Published',
      description: 'Facial recognition system using LBPH and Haar-Cascade classifier for automated attendance',
    },
    {
      title: 'Serve Surplus: Smart Food Redistribution Platform',
      type: 'IEEE Conference Paper',
      venue: '3rd IEEE ICSCDS 2025 Conference',
      status: 'Published',
      description: 'Mobile application connecting food donors and recipients to combat urban food waste',
    },
    {
      title: 'Quantum Key Distribution (QKD) in AV Security',
      type: 'Book Chapter',
      venue: 'Nova Publishers',
      status: 'Accepted',
      description: 'In-depth study of QKD theory and applications in autonomous vehicle network security',
    },
    {
      title: 'Human Centricity in AI Governance',
      type: 'Book Chapter',
      venue: 'Publisher TBD',
      status: 'Accepted',
      description: 'Lifecycle-based AI governance framework integrating human-centric principles with global standards',
    },
    {
      title: 'Introduction to Healthcare 5.0',
      type: 'Book Chapter',
      venue: 'Bentham Science Publishers',
      status: 'Accepted',
      description: 'Explored Healthcare 5.0, highlighting AI, IoT, and robotics for smarter, preventive, patient-centered care',
    }
  ];

  const awards = [
    {
      title: '� 1st Prize - Paper Presentation',
      venue: 'Adhiyamaan College of Engineering',
      date: '04 Apr 2025',
      description: 'AI in Education poster and project presentation'
    },
    {
      title: '� 2nd Place - Project & Poster Presentation',
      venue: 'VEL TECH',
      date: '27 Feb 2025',
      prize: '₹2,000',
      description: 'AI in Education research presentation'
    }
  ];

  return (
  <section id="achievements" className="py-20 bg-site-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Publications & Research
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
          <p className="text-secondary mt-6 text-lg">
            Contributing to AI/ML research through IEEE publications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-dark rounded-xl p-6 border border-[rgba(255,255,255,0.06)] hover:border-accent-purple hover:shadow-lg transition-all duration-300"
            >
                <div className="inline-block px-3 py-1 rounded-lg bg-accent-purple text-primary text-xs font-semibold mb-3">
                {pub.status}
              </div>
              
                <h3 className="text-xl font-bold text-primary mb-2">
                {pub.title}
              </h3>
              
                <p className="text-sm text-primary font-semibold mb-2">
                {pub.type}
              </p>
              
                <p className="text-sm text-secondary mb-3 italic">
                {pub.venue}
              </p>
              
                <p className="text-primary text-sm">
                {pub.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Awards & Recognition
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="card-dark rounded-xl p-6 text-center border border-[rgba(255,255,255,0.06)] hover:border-accent-purple hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{award.title.split(' ')[0]}</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {award.title.split(' ').slice(1).join(' ')}
              </h3>
              <p className="text-primary font-semibold mb-2">{award.venue}</p>
              <p className="text-secondary text-sm mb-2">{award.date}</p>
              {award.prize && (
                <div className="inline-block px-4 py-2 bg-accent-purple text-primary font-bold rounded-lg mb-2">
                  {award.prize}
                </div>
              )}
              <p className="text-primary text-sm">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

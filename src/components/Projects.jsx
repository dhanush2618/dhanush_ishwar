import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'GAN-Based Synthetic Data Augmentation',
      category: 'Medical Imaging',
      duration: '01 Jun 2025 – 15 Aug 2025',
      description: 'Addressed the scarcity of annotated datasets for rare diseases by generating synthetic medical images using GANs. Collected and preprocessed MRI datasets, standardizing them for deep learning workflows',
      tech: ['GANs', 'Deep Learning', 'Medical Imaging', 'Python', 'TensorFlow'],
    },
    {
      title: 'ML-Based Stroke Prediction Model',
      category: 'Healthcare AI',
      duration: '06 Mar 2025 – 05 Jul 2025',
      description: 'Developed a machine learning system to predict the likelihood of stroke and support early prevention. Utilized dataset with demographic, health, and lifestyle features including age, hypertension, BMI, and smoking status',
      tech: ['Machine Learning', 'Healthcare', 'Python', 'Scikit-learn'],
    },
    {
      title: 'Semantic-Aware Book Recommendation Framework',
      category: 'NLP & AI',
      duration: '02 Jan 2025 – 05 Mar 2025',
      description: 'Designed a Semantic Book Recommendation System using AI to provide context-aware and personalized suggestions. Applied NLP techniques to extract semantic features from book descriptions, summaries, and keywords',
      tech: ['NLP', 'Embeddings', 'Recommendation Systems', 'Python', 'AI'],
    },
    {
      title: 'Multi-Channel Sentiment Analysis',
      category: 'Natural Language Processing',
      duration: '05 Jun 2024 – 07 Aug 2024',
      description: 'Built a machine learning model to classify IMDB movie reviews as positive or negative. Performed data preprocessing, text cleaning, and feature extraction using TF-IDF and word embeddings',
      tech: ['LSTM', 'NLP', 'Deep Learning', 'TensorFlow', 'Sentiment Analysis'],
    },
    {
      title: 'Customer Churn Prediction',
      category: 'Business Intelligence',
      duration: '12 Apr 2024 – 07 Jun 2024',
      description: 'Developed a machine learning model to predict customer churn using historical data. Performed data preprocessing, feature engineering, and exploratory data analysis to identify key retention factors',
      tech: ['XGBoost', 'Random Forest', 'SHAP', 'Machine Learning'],
    }
  ];

  return (
  <section id="projects" className="py-20 bg-site-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
          <p className="text-secondary mt-6 text-lg">
            Innovative AI/ML solutions addressing real-world challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="card-dark rounded-xl p-6 h-full flex flex-col border border-[rgba(255,255,255,0.06)] hover:border-accent-purple hover:shadow-lg transition-all duration-300">
                {/* Category Badge */}
                <div className="inline-block self-start px-4 py-1 rounded-lg bg-accent-purple text-primary font-semibold text-xs mb-4">
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent-purple transition-all duration-300">
                  {project.title}
                </h3>

                {/* Duration */}
                <p className="text-sm text-secondary mb-4">{project.duration}</p>

                {/* Description */}
                <p className="text-primary mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-site-surface text-primary text-xs rounded-lg border border-[rgba(255,255,255,0.04)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

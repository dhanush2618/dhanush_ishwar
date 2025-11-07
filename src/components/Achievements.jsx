import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  // Visual-first publication cards (book chapters moved to separate page)
  const publications = [
    {
      title: 'Automated Resume Evaluation and Skill Roadmap Generation',
      venue: 'Presented (IEEE)',
      year: '2025',
      status: 'Presented',
      link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar',
      image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Efficient Malware Detection with TL + GAN Augmentation',
      venue: 'AIMLA 2025',
      year: '2025',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'ML for Education Infrastructure (UDISE+)',
      venue: 'ICFTS 2025',
      year: '2025',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Privacy-Preserved Image Representation (Hybrid)',
      venue: 'ICCSP 2025',
      year: '2025',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Face Recognition Attendance – Deep Dive',
      venue: 'ICSCDS 2025',
      year: '2025',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar',
      image: 'https://images.unsplash.com/photo-1555231954-032fb9d29f89?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Serve Surplus: Smart Food Redistribution',
      venue: 'ICSCDS 2025',
      year: '2025',
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=dhanush%20ishwar',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const awards = [
    {
      title: '1st Prize - Paper Presentation',
      venue: 'Adhiyamaan College of Engineering',
      date: '04 Apr 2025',
      description: 'AI in Education poster and project presentation',
    },
    {
      title: '2nd Place - Project & Poster Presentation',
      venue: 'VEL TECH',
      date: '27 Feb 2025',
      prize: '₹2,000',
      description: 'AI in Education research presentation',
    },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {publications.map((pub, index) => (
            <motion.a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-xl overflow-hidden bg-site-surface/80 border border-[rgba(255,255,255,0.06)] hover:border-accent-purple focus:outline-none focus:ring-2 focus:ring-[rgba(154,77,255,0.35)] transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <motion.img
                  src={pub.image}
                  alt={pub.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-site-surface/90 via-site-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-accent-purple text-primary shadow-sm">
                    {pub.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm md:text-base font-semibold text-primary leading-snug line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-[12px] text-secondary mt-2">
                  {pub.venue} • {pub.year}
                </p>
                <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[11px] text-accent-cyan">View paper</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-cyan">
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
                    <path d="M5 5h5V3H3v7h2V5z" />
                  </svg>
                </div>
              </div>
            </motion.a>
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
              <h3 className="text-xl font-bold text-primary mb-2">
                {award.title}
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

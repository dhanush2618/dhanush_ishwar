import React from 'react';
import { motion } from 'framer-motion';

const chapters = [
  {
    title: 'Quantum Key Distribution (QKD) in AV Security',
    status: 'Accepted',
    publisher: 'Nova Publishers',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Human Centricity in AI Governance',
    status: 'Accepted',
    publisher: 'Publisher TBD',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Introduction to Healthcare 5.0',
    status: 'Accepted',
    publisher: 'Bentham Science Publishers',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
];

const BookChapters = () => {
  return (
    <section className="py-24 bg-site-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Book Chapters</h1>
          <p className="text-secondary max-w-2xl mx-auto">Select accepted and in-progress academic book chapter contributions.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-xl overflow-hidden bg-site-surface/70 border border-[rgba(255,255,255,0.05)] hover:border-accent-purple focus:ring-2 focus:ring-[rgba(154,77,255,0.35)] focus:outline-none transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-site-surface/90 via-site-surface/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-semibold bg-accent-purple text-white shadow">
                  {c.status}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm md:text-base font-semibold text-primary line-clamp-2 leading-snug">{c.title}</h3>
                <p className="text-[11px] text-secondary mt-2">{c.publisher} • {c.year}</p>
                <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[11px] text-accent-cyan">View</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-cyan"><path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"/><path d="M5 5h5V3H3v7h2V5z"/></svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookChapters;

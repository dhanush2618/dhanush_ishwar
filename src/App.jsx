import React from 'react';
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import BookChapters from './components/BookChapters';

const Home = () => (
  <>
    <Hero />
    {/* Reordered: Education earlier on the page */}
    <Education />
    <About />
    <Experience />
    <Projects />
    <Achievements />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Glowing background layer */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(closest-side, rgba(154,77,255,0.35), transparent)'}}></div>
        <div className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-20" style={{background:'radial-gradient(closest-side, rgba(0,240,255,0.25), transparent)'}}></div>
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-15" style={{background:'radial-gradient(closest-side, rgba(154,77,255,0.25), transparent)'}}></div>
      </div>

      {/* Simple top nav */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-site-bg/60 border-b border-[rgba(255,255,255,0.06)]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold text-primary">Dhanush • Portfolio</Link>
          <div className="flex items-center gap-4 text-sm">
            <NavLink to="/" className={({isActive})=>`px-3 py-1 rounded-md ${isActive?'bg-accent-purple text-white':'text-secondary hover:text-primary'}`}>Home</NavLink>
            <NavLink to="/book-chapters" className={({isActive})=>`px-3 py-1 rounded-md ${isActive?'bg-accent-purple text-white':'text-secondary hover:text-primary'}`}>Book Chapters</NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/book-chapters" element={<BookChapters/>} />
      </Routes>
    </div>
  );
}

export default App;

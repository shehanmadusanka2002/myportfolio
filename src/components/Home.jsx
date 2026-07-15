import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const TYPING = ['Spring Boot', 'React', 'Node.js', 'AWS', 'Microservices', 'Cloud'];

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const full = TYPING[wordIndex];
    if (typing) {
      timeout = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), 80);
      if (display === full) setTyping(false);
    } else {
      timeout = setTimeout(() => setDisplay(full.slice(0, display.length - 1)), 50);
      if (display === '') {
        setTyping(true);
        setWordIndex((i) => (i + 1) % TYPING.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [display, typing, wordIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding" style={{background: 'linear-gradient(180deg,#f8fbff, #eef2ff)'}}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Headline */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
            <div className="mb-4 text-sm text-primary font-medium">Hi, I build delightful software</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-dark mb-4">
              I'm <span className="block text-5xl sm:text-6xl text-primary">Shehan Madhusanka</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              Full Stack Software Engineer — designing scalable enterprise applications using Spring Boot, React, Node.js, and Cloud-native architectures.
            </p>

            <div className="flex items-center gap-3 text-lg mb-6">
              <div className="text-sm text-gray-500">Currently:</div>
              <div className="px-3 py-1 rounded-full bg-white/60 dark:bg-black/50 glass-card text-sm font-medium">{display}<span className="blinking-cursor">|</span></div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <a href="/Shehan_Madhusanka_CV.pdf" className="btn-primary" target="_blank" rel="noreferrer"><FiDownload className="inline mr-2" />Download CV</a>
              <a href="#projects" className="btn-outline">View Projects</a>
              <a href="https://github.com/shehanmadusanka2002" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-lg shadow hover:scale-105 transition"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/shehan-madhusanka-952523305/" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-lg shadow hover:scale-105 transition"><FiLinkedin /></a>
              <a href="mailto:youremail@example.com" className="p-3 bg-white rounded-lg shadow hover:scale-105 transition"><FiMail /></a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -6 }} className="glass-card px-6 py-4 w-40">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="glass-card px-6 py-4 w-48">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-gray-500">Technologies</div>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="glass-card px-6 py-4 w-56">
                <div className="text-2xl font-bold">• • • • •</div>
                <div className="text-sm text-gray-500">GitHub Contributions</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 flex justify-center">
            <div className="relative p-6">
              <div className="rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-2xl">
                <div className="rounded-full overflow-hidden w-72 h-72 sm:w-80 sm:h-80 bg-white">
                  <img src="profile.jpg" alt="Shehan" className="object-cover w-full h-full" />
                </div>
              </div>

              {/* floating icons */}
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-6 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg text-white">JS</motion.div>
              <motion.div animate={{ x: [-6, 6, -6] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-6 -bottom-6 w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg text-white">DB</motion.div>

              {/* subtle background blobs */}
              <div className="absolute -inset-6 -z-10">
                <svg viewBox="0 0 600 600" className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="g1" x1="0%" x2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(300,300)">
                    <circle r="200" fill="url(#g1)" />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;

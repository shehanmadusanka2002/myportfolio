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
    <section id="home" className="min-h-screen flex items-center section-padding bg-slate-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Headline */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
            <div className="mb-4 text-sm text-cyan-400 font-medium uppercase tracking-wider drop-shadow-[0_0_4px_rgba(34,211,238,0.4)]">Hi, I build delightful software</div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4 tracking-tight drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">
              I'm <span className="block text-4xl sm:text-6xl text-cyan-400 font-black mt-1 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">Shehan Madhusanka</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 mb-6 max-w-2xl leading-relaxed">
              Full Stack Software Engineer — designing scalable enterprise applications using Spring Boot, React, Node.js, and Cloud-native architectures.
            </p>

            <div className="flex items-center gap-3 text-lg mb-6">
              <div className="text-sm text-gray-500">Currently:</div>
              <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-gray-300 text-sm font-medium shadow-[0_0_8px_rgba(34,211,238,0.1)]">{display}<span className="blinking-cursor">|</span></div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <a href="/Shehan_Madhusanka_CV.pdf" className="bg-cyan-400 text-black font-semibold py-3 px-6 rounded-xl shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,1)] hover:-translate-y-0.5" target="_blank" rel="noreferrer"><FiDownload className="inline mr-2" />Download CV</a>
              <a href="#projects" className="border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5">View Projects</a>
              <a href="https://github.com/shehanmadusanka2002" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 text-cyan-400 rounded-lg shadow-[0_0_8px_rgba(34,211,238,0.1)] hover:border-cyan-400/50 hover:shadow-[0_0_12px_rgba(34,211,238,0.5)] hover:scale-105 transition"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/shehan-madhusanka-952523305/" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 text-cyan-400 rounded-lg shadow-[0_0_8px_rgba(34,211,238,0.1)] hover:border-cyan-400/50 hover:shadow-[0_0_12px_rgba(34,211,238,0.5)] hover:scale-105 transition"><FiLinkedin /></a>
              <a href="mailto:youremail@example.com" className="p-3 bg-slate-900 border border-slate-800 text-cyan-400 rounded-lg shadow-[0_0_8px_rgba(34,211,238,0.1)] hover:border-cyan-400/50 hover:shadow-[0_0_12px_rgba(34,211,238,0.5)] hover:scale-105 transition"><FiMail /></a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -6 }} className="bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all px-4 sm:px-6 py-4 flex-1 min-w-[140px] sm:w-40 text-white">
                <div className="text-xl sm:text-2xl font-bold">12+</div>
                <div className="text-xs sm:text-sm text-gray-500">Projects</div>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all px-4 sm:px-6 py-4 flex-1 min-w-[140px] sm:w-48 text-white">
                <div className="text-xl sm:text-2xl font-bold">25+</div>
                <div className="text-xs sm:text-sm text-gray-500">Technologies</div>
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all px-4 sm:px-6 py-4 w-full sm:w-auto flex-1 min-w-[200px] text-white">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-[0.2em]">• • • • •</div>
                <div className="text-xs sm:text-sm text-gray-500">GitHub Contributions</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 flex justify-center mt-10 lg:mt-0">
            <div className="relative p-2 sm:p-6">
              <div className="rounded-full p-1 bg-cyan-400/10 border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <div className="rounded-full overflow-hidden w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-slate-900">
                  <img src="profile.jpg" alt="Shehan" className="object-cover w-full h-full" />
                </div>
              </div>

              {/* floating icons */}
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-6 w-10 h-10 rounded-lg bg-slate-900 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] text-sm font-bold">JS</motion.div>
              <motion.div animate={{ x: [-6, 6, -6] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-6 -bottom-6 w-12 h-12 rounded-lg bg-slate-900 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] text-sm font-bold">DB</motion.div>

              {/* subtle background blobs */}
              <div className="absolute -inset-6 -z-10">
                <svg viewBox="0 0 600 600" className="w-full h-full opacity-20">
                  <defs>
                    <linearGradient id="g1" x1="0%" x2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#0891b2" />
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

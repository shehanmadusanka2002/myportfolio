import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [dark, setDark] = useState(() => !!document.documentElement.classList.contains('dark'));
  const navRef = useRef(null);

  // smooth scroll handler
  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(name);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map(i => document.querySelector(i.href));
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (!s) continue;
        if (s.offsetTop <= mid) {
          setActive(NAV_ITEMS[i].name);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('prefers-dark', dark ? '1' : '0'); } catch (e) {}
  }, [dark]);

  const toggleDark = () => setDark(d => !d);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-6 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'glass-navbar shadow-2xl py-2' : 'glass-navbar py-4'
      }`}
      ref={navRef}
    >
      <div className="w-[92%] max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05, rotate: [0, 6, -6, 0] }} className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-primary to-secondary shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white/90 dark:bg-black/60 flex items-center justify-center font-extrabold text-primary">SM</div>
            </motion.div>
            <div className="hidden md:block">
              <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold">Shehan Madhusanka</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Full Stack Software Engineer</div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end text-sm">
          {NAV_ITEMS.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.name)}
              className={`relative text-sm font-medium transition-colors px-1 py-1 ${active === item.name ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
            >
              {item.name}
              {active === item.name && (
                <motion.span layoutId="underline" className="absolute left-0 -bottom-2 h-0.5 w-full bg-gradient-to-r from-[#3B82F6] via-indigo-600 to-cyan-400 rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg bg-white/70 dark:bg-black/50 shadow-sm hover:scale-105 transition-transform ml-6"
          >
            {dark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-600" />}
          </button>

          <div className="hidden">
            <button onClick={() => setIsOpen(true)} className="p-2 rounded-lg bg-white/70 dark:bg-black/50 shadow-sm">
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden mt-4 px-4 pb-4"
          >
            <div className="bg-white/95 dark:bg-[#07102a]/95 rounded-xl shadow-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Navigation</div>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <FiX />
                </button>
              </div>
              <div className="flex flex-col">
                {NAV_ITEMS.map(item => (
                  <a key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href, item.name)} className="py-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-black/30 flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${active===item.name ? 'bg-primary' : 'bg-gray-300'}`} />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

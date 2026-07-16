import React from 'react';
import { FiGithub, FiLinkedin, FiChevronUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="section-padding bg-white dark:bg-deep-navy">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary shadow-sm border border-primary/30 flex items-center justify-center text-white font-bold">SM</div>
              <div>
                <div className="font-bold text-main-text dark:text-soft-bg">Shehan Madhusanka</div>
                <div className="text-sm text-muted-text">Full Stack Software Engineer</div>
              </div>
            </div>
            <p className="text-sm text-body-text">Building scalable enterprise applications and delightful user experiences.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-main-text dark:text-soft-bg">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-body-text">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-main-text dark:text-soft-bg">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="https://github.com/shehanmadusanka2002" target="_blank" rel="noreferrer" className="p-2 rounded bg-white dark:bg-slate-800 shadow-sm border border-border hover:scale-105 text-body-text hover:text-primary"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/shehan-madhusanka-952523305/" target="_blank" rel="noreferrer" className="p-2 rounded bg-white dark:bg-slate-800 shadow-sm border border-border hover:scale-105 text-body-text hover:text-primary"><FiLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 flex items-center justify-between">
          <div className="text-sm text-body-text">© {currentYear} Shehan Madhusanka • Built with care.</div>
          <button onClick={scrollTop} className="flex items-center gap-2 px-3 py-2 bg-primary hover:bg-dark-blue text-white rounded-lg shadow-sm transition-colors">
            <FiChevronUp /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

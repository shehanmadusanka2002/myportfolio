import React from 'react';
import { FiGithub, FiLinkedin, FiFacebook, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              Full-stack developer passionate about creating amazing web experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shehanmadusanka2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shehan-madhusanka-952523305/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://web.facebook.com/shehan.madushanka.171211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Shehan Madushanka. Made with</span>
            <FiHeart className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

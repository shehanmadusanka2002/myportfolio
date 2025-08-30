import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out transform animate-slide-down ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-110 cursor-pointer">
            Shehan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 transition-transform duration-300 group-hover:scale-100 -z-10"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <FiMenu 
                  size={24} 
                  className={`absolute transition-all duration-300 transform ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <FiX 
                  size={24} 
                  className={`absolute transition-all duration-300 transform ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl mt-2 py-4 mx-2 border border-gray-200/20">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-300 font-medium relative group"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  animation: isOpen ? `slideInLeft 0.3s ease-out ${index * 50}ms both` : 'none'
                }}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Mobile item background animation */}
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        /* Smooth backdrop blur transition */
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }

        /* Enhanced hover effects */
        @media (hover: hover) {
          .group:hover {
            transform: translateY(-1px);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
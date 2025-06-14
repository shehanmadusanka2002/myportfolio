import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiDownload, FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            >
              I'm{' '}
              <span className="text-primary">Shehan Madusanka</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Full-Stack Developer passionate about creating amazing web experiences
              with React, Spring Boot, and modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-4"
            >
              <a
                href="https://github.com/shehanmadusanka2002"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FiGithub className="text-xl text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/shehan-madhusanka-952523305/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FiLinkedin className="text-xl text-blue-600" />
              </a>
              <a
                href="https://web.facebook.com/shehan.madushanka.171211"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <FiFacebook className="text-xl text-blue-600" />
              </a>
              
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            {/* Floating background elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-96 h-96 rounded-full border-2 border-primary/20 absolute"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1.1, 1, 1.1]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-[420px] h-[420px] rounded-full border border-accent/30 absolute"
              />
            </div>

            {/* Main profile container */}
            <div className="relative z-10">
              {/* Gradient background */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 blur-sm"
              />
              
              {/* Double border effect */}
              <div className="relative w-80 h-80 rounded-full p-1 bg-gradient-to-tr from-primary via-accent to-secondary">
                <div className="w-full h-full rounded-full p-2 bg-white">
                  <motion.div
                    whileHover={{ 
                      scale: 1.08, 
                      y: -15,
                      rotateY: 10
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      damping: 20
                    }}
                    className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 shadow-2xl"
                  >
                    {/* Profile Image */}
                    <img
                      src="profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Transparent overlay with modern effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-primary/20"></div>
                    
                    {/* Shine effect */}
                    <motion.div
                      animate={{ 
                        x: [-100, 400],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                      className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 rounded-full"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating particles */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  x: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 w-4 h-4 bg-accent rounded-full opacity-60"
              />
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  x: [5, -5, 5]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-3 h-3 bg-primary rounded-full opacity-50"
              />
              <motion.div
                animate={{ 
                  y: [-8, 8, -8],
                  x: [3, -3, 3]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/4 -left-8 w-2 h-2 bg-secondary rounded-full opacity-40"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const technologies = ['all', 'React', 'Spring Boot', 'Node.js', 'MongoDB', 'MySQL'];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { 
      y: 50,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="section-padding bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            animate={{ 
              backgroundImage: [
                "linear-gradient(45deg, #4f46e5, #4f46e5)",
                "linear-gradient(45deg, #4f46e5, #06b6d4)",
                "linear-gradient(45deg, #06b6d4, #4f46e5)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={projectVariants}
          >
            Here are some of my recent projects that showcase my skills in full-stack development,
            user interface design, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
          variants={containerVariants}
        >
          {technologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setFilter(tech)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`px-3 py-2 sm:px-4 text-sm sm:text-base rounded-full transition-all duration-300 ${
                filter === tech
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              {tech === 'all' ? 'All Projects' : tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
            variants={containerVariants}
            key={filter}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover="hover"
                custom={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiGithub className="text-xl text-gray-700" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FiExternalLink className="text-xl text-gray-700" />
                    </motion.a>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-4 sm:p-6"
                  variants={containerVariants}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold text-gray-900 mb-2"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 mb-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div className="mb-4">
                    <motion.h4 
                      className="text-sm sm:text-base font-medium text-gray-900 mb-2"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Key Features:
                    </motion.h4>
                    <motion.ul 
                      className="text-xs sm:text-sm text-gray-600 space-y-1"
                      variants={containerVariants}
                    >
                      {project.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.span 
                            className="text-primary mr-2"
                            animate={{ 
                              scale: [1, 1.2, 1],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            •
                          </motion.span>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-wrap gap-1 sm:gap-2"
                    variants={containerVariants}
                  >
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#3b82f6",
                          color: "white"
                        }}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;

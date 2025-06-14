import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiSmartphone } from 'react-icons/fi';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const skills = [
    {
      category: 'Frontend',
      icon: <FiCode />,
      technologies: ['React', 'NextJs', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      icon: <FiServer />,
      technologies: ['Spring Boot', 'Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication']
    },
    {
      category: 'Database',
      icon: <FiDatabase />,
      technologies: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Tools & Others',
      icon: <FiSmartphone />,
      technologies: ['Git', 'Docker', 'AWS', 'Postman', 'Figma', 'VS Code']
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="section-padding bg-white relative overflow-hidden"
      style={{ opacity }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundImage: [
            "radial-gradient(circle at 20% 20%, #4f46e5 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, #4f46e5 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, #4f46e5 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #4f46e5 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, #4f46e5 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
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
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            I'm a passionate full-stack developer with experience in building scalable web applications.
            I love creating user-friendly interfaces and robust backend systems.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 px-4 sm:px-0"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Journey
            </motion.h3>
            <motion.div 
              className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base"
              variants={containerVariants}
            >
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I'm currently pursuing my diploma in Information Technology, where I've developed
                a strong foundation in software development principles and modern web technologies.
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                My experience includes building full-stack applications with React and Spring Boot,
                implementing user authentication systems, and creating responsive user interfaces
                that provide excellent user experiences.
              </motion.p>
              <motion.p
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I'm passionate about clean code, user-centered design, and continuously learning
                new technologies to stay current with industry trends.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Education & Goals
            </motion.h3>
            <motion.div 
              className="bg-gray-50 p-4 sm:p-6 rounded-lg"
              whileHover={{ 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <motion.h4 
                  className="text-sm sm:text-base font-semibold text-gray-900"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Diploma in Information Technology
                </motion.h4>
                <motion.p 
                  className="text-xs sm:text-sm text-gray-600"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Institute of Technology University of Moratuwa • 2022-2024
                </motion.p>
              </motion.div>
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <motion.h4 
                  className="text-sm sm:text-base font-semibold text-gray-900"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Career Aspirations
                </motion.h4>
                <motion.p 
                  className="text-xs sm:text-sm text-gray-600"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Seeking internship opportunities to apply my skills in real-world projects
                  and contribute to innovative software solutions.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
        >
          <motion.h3 
            className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center px-4 sm:px-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Technical Skills
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={skillCardVariants}
                whileHover="hover"
                custom={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg relative overflow-hidden group"
              >
                {/* Background gradient animation */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-primary via-accent to-secondary"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="text-primary text-2xl mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  {skill.icon}
                </motion.div>
                <motion.h4 
                  className="text-sm sm:text-base font-semibold text-gray-900 mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.category}
                </motion.h4>
                <motion.div 
                  className="flex flex-wrap gap-1 sm:gap-2"
                  variants={containerVariants}
                >
                  {skill.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={itemVariants}
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
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

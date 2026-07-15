import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import StatCard from './ui/StatCard';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold">About Me</motion.h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="prose max-w-none text-gray-700">
            <p>
              A dedicated Full Stack Developer passionate about building scalable enterprise software using Spring Boot, React, Node.js, AWS, Docker, CI/CD, and Microservices.
            </p>
            <p>
              I focus on creating maintainable systems, clear APIs, and delightful user interfaces that solve real business problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 mt-2">
            <StatCard value="12+" label="Projects" />
            <StatCard value="25+" label="Technologies" />
            <StatCard value="100%" label="Dedication" />
          </div>
        </div>

        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <div className="text-sm text-gray-600">
              <div className="font-medium">Institute of Technology, University of Moratuwa</div>
              <div>NDT - Information Technology</div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold mb-2">Career Goal</h3>
            <div className="text-sm text-gray-600">To design and build enterprise-grade software systems with a focus on scalability, security and clean architecture.</div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold mb-2">Current Status</h3>
            <div className="text-sm text-gray-600">Open for opportunities • Available for remote and relocation</div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default About;

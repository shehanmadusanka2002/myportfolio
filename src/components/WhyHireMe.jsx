import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ITEMS = [
  'Problem Solving', 'Clean Code', 'Communication', 'Team Work', 'Leadership', 'Responsive Design', 'Enterprise Architecture', 'Fast Learner'
];

const WhyHireMe = () => {
  const ref = useRef(null);

  return (
    <section id="why" className="section-padding bg-soft-bg dark:bg-deep-navy" ref={ref}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">Why Hire Me</p>
          <h2 className="text-3xl font-bold mt-2 text-main-text dark:text-soft-bg">What I bring to the team</h2>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((it, idx) => (
            <motion.div 
              layout 
              key={it} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-10px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }} 
              className="glass-card relative group p-6 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-active-border motion-reduce:transform-none motion-reduce:transition-none overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-2/3 transition-all duration-300 ease-out rounded-full opacity-0 group-hover:opacity-100" />
              
              <div className="text-xl font-semibold mb-2 text-main-text dark:text-soft-bg transition-colors duration-300 ease-out group-hover:text-primary">{it}</div>
              <div className="text-sm text-body-text transition-colors duration-300">Professional strength focused on delivering measurable business outcomes.</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;

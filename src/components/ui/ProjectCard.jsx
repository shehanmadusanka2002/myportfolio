import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, subtitle, image, badges = [], features = [], links = {} }) => {
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs text-primary font-medium mb-1">Featured</div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{subtitle}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {badges.map((b, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-gray-100 dark:bg-black/30 rounded-full">{b}</span>
              ))}
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
              {features.map((f, i) => <li key={i}>• {f}</li>)}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            {links.github && <a href={links.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>}
            {links.demo && <a href={links.demo} target="_blank" rel="noreferrer" className="btn-primary">Live Demo</a>}
            {links.caseStudy && <a href={links.caseStudy} className="btn-outline">Case Study</a>}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

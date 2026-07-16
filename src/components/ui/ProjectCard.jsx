import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, subtitle, image, badges = [], features = [], links = {} }) => {
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden border border-border">
      <div className="grid md:grid-cols-2">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs text-primary font-medium mb-1">Featured</div>
            <h3 className="text-2xl font-bold mb-2 text-main-text dark:text-soft-bg tracking-tight">{title}</h3>
            <p className="text-body-text dark:text-slate-300 mb-4 leading-relaxed">{subtitle}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {badges.map((b, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-medium bg-hero-bg text-primary dark:bg-slate-700 dark:text-soft-bg rounded-full border border-primary/10 dark:border-slate-600">{b}</span>
              ))}
            </div>
            <ul className="text-sm text-body-text dark:text-slate-300 space-y-1 mb-4">
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

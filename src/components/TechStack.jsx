import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './ui/SkillCard';

const categories = [
  { title: 'Frontend', percent: 92, logos: ['React','Next.js','Tailwind','Bootstrap','JavaScript','HTML','CSS'] },
  { title: 'Backend', percent: 90, logos: ['Java','Spring Boot','Node.js','NestJS','REST','JWT'] },
  { title: 'Database', percent: 88, logos: ['MySQL','PostgreSQL','MongoDB','Redis','Firebase'] },
  { title: 'Cloud', percent: 82, logos: ['AWS EC2','S3','Lambda'] },
  { title: 'DevOps', percent: 80, logos: ['Docker','Kubernetes','GitHub Actions','Git'] },
  { title: 'Tools', percent: 86, logos: ['VS Code','IntelliJ','Postman','Linux'] },
];

const TechStack = () => {
  return (
    <section id="tech" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">Tech Stack</p>
          <h2 className="text-3xl font-bold mt-2">Core technologies & tools</h2>
          <p className="text-gray-600 mt-2">Organized by capability: Frontend, Backend, Database, Cloud, DevOps, and Tools.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(c => (
            <SkillCard key={c.title} title={c.title} percent={c.percent} logos={c.logos} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

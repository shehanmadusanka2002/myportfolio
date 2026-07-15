import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Nexora ERP Ecosystem',
      subtitle: 'Enterprise ERP for Finance, HR, Inventory and more — microservices architecture.',
      image: '/erp.png',
      badges: ['Spring Boot','Next.js','PostgreSQL','MySQL','Docker','AWS'],
      features: ['Finance', 'HR', 'Inventory', 'Double-entry Accounting', 'Role Management', 'Cross-module synchronization'],
      links: { github: '#', caseStudy: '#' }
    },
    {
      title: 'LapGalaxy',
      subtitle: 'Full Stack E-Commerce platform with admin dashboard and customer portal.',
      image: '/lapgalaxy.jpg',
      badges: ['React','Spring Boot','MySQL','Docker','AWS','JWT'],
      features: ['Shopping cart','Admin dashboard','Payments','Order management'],
      links: { github: '#', demo: '#' }
    },
    {
      title: 'AquaLink',
      subtitle: 'Marketplace for fish sellers and buyers with real-time features.',
      image: '/aqualink.png',
      badges: ['Spring Boot','React','MySQL','Socket.io'],
      features: ['Authentication','Delivery System','Real-time updates'],
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Advanced POS',
      subtitle: 'Real-time POS system with ESC/POS integration and TCP socket billing.',
      image: '/pos.png',
      badges: ['React','Spring Boot','ESC/POS','TCP Socket','JWT'],
      features: ['Real-time billing','Inventory','Receipt printing'],
      links: { github: '#', demo: '#' }
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">Featured Projects</p>
          <h2 className="text-3xl font-bold mt-2">Selected Work</h2>
          <p className="text-gray-600 mt-2">Projects that demonstrate architecture, scale and product thinking.</p>
        </div>

        <div className="grid gap-10">
          <div className="p-1">
            <ProjectCard {...projects[0]} />
          </div>

          <div className="grid gap-8">
            <div className="p-1">
              <ProjectCard {...projects[1]} />
            </div>
            <div className="p-1">
              <ProjectCard {...projects[2]} />
            </div>
          </div>

          <div className="p-1">
            <ProjectCard {...projects[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiCloud, FiGitPullRequest, FiLayers } from 'react-icons/fi';

const items = [
  { title: 'Responsive Web Development', icon: FiCode, desc: 'Pixel-perfect frontend using React and Tailwind.' },
  { title: 'Backend Development', icon: FiServer, desc: 'Robust APIs and microservices with Spring Boot and Node.' },
  { title: 'REST API Development', icon: FiLayers, desc: 'Designing secure and consistent REST interfaces.' },
  { title: 'Database Design', icon: FiDatabase, desc: 'Relational and NoSQL schema design for scale.' },
  { title: 'Cloud Deployment', icon: FiCloud, desc: 'AWS deployments, S3, EC2, Lambda and scalable infra.' },
  { title: 'Enterprise Software', icon: FiGitPullRequest, desc: 'Built for teams: CI/CD, testing, and observability.' },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white dark:bg-deep-navy">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">Services</p>
          <h2 className="text-3xl font-bold mt-2 text-main-text dark:text-soft-bg">What I do</h2>
          <p className="text-body-text mt-2">From frontend experiences to backend systems and cloud deployments — focused on delivery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={it.title} layout whileHover={{ y: -8, scale: 1.01 }} transition={{ type: 'spring', stiffness: 260 }} className="service-card p-6">
              <div className="service-icon mb-4">
                <it.icon size={20} aria-hidden />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-main-text dark:text-soft-bg">{it.title}</h3>
              <p className="text-sm text-body-text">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

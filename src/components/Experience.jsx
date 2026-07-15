import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2022 - 2024', title: 'NDT - Information Technology', detail: 'Institute of Technology, University of Moratuwa' },
  { year: 'Projects', title: 'Nexora ERP, LapGalaxy, AquaLink, Advanced POS', detail: 'Built full-stack systems with Spring Boot, React, and cloud deployments.' },
  { year: 'Internship', title: 'Software Engineering Intern', detail: 'Contributed to backend microservices and CI/CD pipelines.' },
  { year: 'Learning', title: 'Currently', detail: 'Deepening cloud-native patterns, observability, and scalable architecture.' },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">Timeline</p>
          <h2 className="text-3xl font-bold mt-2">Journey & Experience</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -ml-px top-0 bottom-0 w-px bg-gradient-to-b from-primary to-transparent opacity-30" />
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-6">
                <div className="w-1/2 pr-6 text-right hidden md:block">
                  <div className="text-sm text-gray-500 font-medium">{item.year}</div>
                </div>
                <div className="z-10">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-md" />
                </div>
                <div className="flex-1 pl-4 md:pl-6">
                  <div className="text-sm text-gray-500 md:hidden">{item.year}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

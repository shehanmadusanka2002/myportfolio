import React from 'react';
import { motion } from 'framer-motion';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const timeline = [
  { year: '2022 - 2024', title: 'NDT - Information Technology', detail: 'Institute of Technology, University of Moratuwa' },
  { year: 'Projects', title: 'Nexora ERP, LapGalaxy, AquaLink, Advanced POS', detail: 'Built full-stack systems with Spring Boot, React, and cloud deployments.' },
  { year: 'Internship', title: 'Software Engineering Intern', detail: 'Contributed to backend microservices and CI/CD pipelines.' },
  { year: 'Learning', title: 'Currently', detail: 'Deepening cloud-native patterns, observability, and scalable architecture.' },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding pt-24 bg-slate-950 shadow-xl border-t border-slate-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider">Timeline</p>
          <h2 className="text-3xl font-bold mt-2 text-white">Journey & Experience</h2>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: 3D Robot Scene */}
          <div className="hidden lg:block w-full">
            <div className="w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] relative overflow-hidden rounded-2xl">
              <div className="flex flex-col h-full relative z-10">
                <div className="flex-1 relative w-full">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative w-full">
            {/* We align the timeline line to the left for better spacing in a column */}
            <div className="absolute left-[20px] md:left-1/2 -ml-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent opacity-50 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4 md:gap-6 relative z-10">
                  <div className="w-[120px] md:w-1/2 pr-0 md:pr-6 text-left md:text-right flex-shrink-0">
                    <div className="text-sm text-gray-400 font-medium">{item.year}</div>
                  </div>
                  <div className="absolute left-[12px] md:static md:left-auto mt-1 md:mt-0">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-black shadow-[0_0_12px_rgba(34,211,238,1)]" />
                  </div>
                  <div className="flex-1 pl-[40px] md:pl-6">
                    <h3 className="text-lg font-semibold text-cyan-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.4)]">{item.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

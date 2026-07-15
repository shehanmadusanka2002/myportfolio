import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ITEMS = [
  'Problem Solving', 'Clean Code', 'Communication', 'Team Work', 'Leadership', 'Responsive Design', 'Enterprise Architecture', 'Fast Learner'
];

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const WhyHireMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-120px' });
  const [items, setItems] = useState(ITEMS);

  useEffect(() => {
    let timer = null;
    if (inView) {
      // start shuffling periodically while in view (faster so changes are noticeable)
      timer = setInterval(() => {
        setItems(prev => shuffleArray(prev));
      }, 1000);
    } else {
      // restore original order when out of view
      setItems(ITEMS);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [inView]);

  return (
    <section id="why" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm text-primary font-semibold uppercase tracking-wider">Why Hire Me</p>
          <h2 className="text-3xl font-bold mt-2">What I bring to the team</h2>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div layout key={it} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.02, duration: 0.45, ease: 'easeOut' }} className="glass-card p-6 text-center">
              <div className="text-xl font-semibold mb-2">{it}</div>
              <div className="text-sm text-gray-600">Professional strength focused on delivering measurable business outcomes.</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;

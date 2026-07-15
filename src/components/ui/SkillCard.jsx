import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillCard = ({ title, percent = 80, logos = [], className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 900;
    const from = 0;
    const to = Number(percent || 0);
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayPercent(Math.round(from + (to - from) * progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, percent]);

  return (
    <motion.div ref={ref} whileHover={{ scale: 1.03 }} className={"bg-white/60 dark:bg-[#07102a]/60 rounded-2xl p-5 shadow-lg border border-white/10 " + className}>
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-sm text-gray-500">{displayPercent}%</div>
      </div>
      <div className="h-2 bg-white/30 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percent}%` : 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        {logos.map((l, i) => (
          typeof l === 'string' && (l.startsWith('http') || l.startsWith('/')) ? (
            <img key={i} src={l} alt={l} className="w-8 h-8 object-contain rounded-md bg-white/30 p-1" />
          ) : (
            <div key={i} className="px-2 py-1 rounded-md bg-white/20 text-xs text-gray-700 dark:text-gray-200">{l}</div>
          )
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;

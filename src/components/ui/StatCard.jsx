import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const StatCard = ({ value, label, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const raw = String(value || '0');
    const match = raw.match(/(\d+)/);
    const to = match ? Number(match[1]) : 0;
    const suffix = raw.replace(match ? match[1] : '', '').trim();

    if (!inView) return;

    let start = null;
    const duration = 800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.round(to * progress);
      setDisplay(String(current) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className={"glass-card flex flex-col items-center sm:items-start gap-1 p-2 sm:p-4 text-center sm:text-left " + className}>
      <div className="text-xl sm:text-3xl font-extrabold text-main-text dark:text-soft-bg">{display}</div>
      <div className="text-xs sm:text-sm text-muted-text w-full break-words">{label}</div>
    </div>
  );
};

export default StatCard;

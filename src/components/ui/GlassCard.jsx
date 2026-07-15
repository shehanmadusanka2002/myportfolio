import React from 'react';

const GlassCard = ({ children, className = '', ...props }) => {
  return (
    <div className={"glass-card p-6 rounded-2xl " + className} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;

// src/components/common/Card.jsx
import React from 'react';

const Card = ({ children, variant = 'default', className = '' }) => {
  const baseStyle = 'p-6 rounded-lg shadow-md';
  const variants = {
    default: 'bg-white text-black',
    dark: 'bg-darkNavy text-white',
  };

  return (
    <div className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;

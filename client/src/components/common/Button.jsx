import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'medium', className = '' }) => {
  const base = 'font-bold rounded transition-all duration-200 focus:outline-none';

  const variants = {
    primary: 'bg-gold text-navy hover:bg-yellow-500',
    secondary: 'bg-navy text-gold border border-gold hover:bg-gold hover:text-navy',
  };

  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

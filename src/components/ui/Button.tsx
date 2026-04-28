import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = "px-6 py-3 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-orange text-white hover:bg-orange-light",
    outline: "bg-transparent border-2 border-orange text-orange hover:bg-orange hover:text-white"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

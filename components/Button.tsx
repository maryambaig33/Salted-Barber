import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-salt-900 focus:ring-bronze-500 disabled:opacity-50 disabled:cursor-not-allowed font-sans uppercase tracking-wider";
  
  const variants = {
    primary: "border-transparent text-white bg-bronze-600 hover:bg-bronze-500 shadow-lg shadow-bronze-900/50",
    outline: "border-bronze-600 text-bronze-500 hover:bg-bronze-600 hover:text-white",
    ghost: "border-transparent text-salt-300 hover:text-white hover:bg-salt-800"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
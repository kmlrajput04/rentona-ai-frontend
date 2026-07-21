'use client';

import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props }, ref) => {
    // Base Tailwind utility classes
    const baseClasses = 'inline-flex items-center justify-center font-sans font-medium rounded-xl cursor-pointer transition-all duration-200 outline-none border border-transparent disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none';
    
    // Variant maps
    const variantClasses = {
      primary: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-slate-50 font-medium shadow-md shadow-indigo-500/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40 active:translate-y-0',
      secondary: 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750 hover:text-slate-50',
      ghost: 'bg-transparent text-slate-400 hover:bg-slate-300/8 hover:text-slate-100',
    };

    // Size maps
    const sizeClasses = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {isLoading && (
          <span className="w-4 h-4 border-2 border-white/30 rounded-full border-t-white animate-spin mr-2" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

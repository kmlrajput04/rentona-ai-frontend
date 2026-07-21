'use client';

import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, helperText, errorText, type = 'text', ...props }, ref) => {
    const isError = !!errorText;
    
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="font-sans text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          type={type}
          className={`w-full px-4 py-3 bg-slate-950/80 border rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none transition-all focus:ring-4 ${
            isError 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' 
              : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/15'
          } ${className}`}
          {...props}
        />
        
        {errorText && <span className="text-[11px] text-red-400 font-medium">{errorText}</span>}
        {!errorText && helperText && <span className="text-[11px] text-slate-500">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

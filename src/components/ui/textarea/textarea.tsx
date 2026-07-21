'use client';

import React, { forwardRef } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  maxCharacters?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, helperText, errorText, maxCharacters, value, ...props }, ref) => {
    const isError = !!errorText;
    const charCount = typeof value === 'string' ? value.length : 0;

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="font-sans text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          value={value}
          className={`w-full px-4 py-3 bg-slate-950/80 border rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none transition-all focus:ring-4 resize-y min-h-[100px] ${
            isError
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15'
              : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/15'
          } ${className}`}
          {...props}
        />

        <div className="flex items-center justify-between">
          <div>
            {errorText && <span className="text-[11px] text-red-400 font-medium">{errorText}</span>}
            {!errorText && helperText && <span className="text-[11px] text-slate-500">{helperText}</span>}
          </div>
          {maxCharacters && (
            <span className={`text-[11px] ${charCount > maxCharacters ? 'text-red-400' : 'text-slate-500'}`}>
              {charCount}/{maxCharacters}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;

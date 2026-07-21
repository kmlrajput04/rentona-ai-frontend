'use client';

import React, { forwardRef } from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked = false, onChange, label, disabled = false, size = 'md', className = '' }, ref) => {
    const sizeMap = {
      sm: { track: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
      md: { track: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' },
      lg: { track: 'w-14 h-7', thumb: 'w-6 h-6', translate: 'translate-x-7' },
    };

    const s = sizeMap[size];

    return (
      <label className={`inline-flex items-center gap-3 ${disabled ? 'opacity-55 cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => !disabled && onChange?.(!checked)}
          className={`relative inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 ${s.track} ${
            checked ? 'bg-indigo-600' : 'bg-slate-700'
          }`}
        >
          <span
            className={`inline-block rounded-full bg-white shadow-sm transition-transform duration-200 ${s.thumb} ${
              checked ? s.translate : 'translate-x-0.5'
            }`}
          />
        </button>
        {label && <span className="text-sm text-slate-300 select-none">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;

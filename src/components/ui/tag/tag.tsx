'use client';

import React from 'react';

export interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  color?: 'indigo' | 'purple' | 'emerald' | 'amber' | 'sky' | 'slate';
  className?: string;
}

const colorClasses: Record<NonNullable<TagProps['color']>, string> = {
  indigo: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
  purple: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  emerald: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  amber: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
  sky: 'bg-sky-500/15 text-sky-300 border-sky-500/25',
  slate: 'bg-slate-800 text-slate-300 border-slate-700',
};

export default function Tag({ children, onRemove, color = 'slate', className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${colorClasses[color]} ${className}`}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 hover:text-white transition-colors focus:outline-none"
          aria-label="Remove tag"
        >
          ✕
        </button>
      )}
    </span>
  );
}

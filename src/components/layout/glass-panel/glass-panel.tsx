'use client';

import React from 'react';

/**
 * Glass Panel — Luxury glassmorphism container
 * A reusable premium glass panel matching the Rentora design system.
 */

export interface GlassPanelProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'subtle';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const paddingClasses: Record<NonNullable<GlassPanelProps['padding']>, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantClasses: Record<NonNullable<GlassPanelProps['variant']>, string> = {
  default: 'glass-card',
  elevated: 'glass-card shadow-xl shadow-black/20',
  subtle: 'bg-slate-900/40 backdrop-blur-lg border border-white/5 rounded-2xl',
};

export default function GlassPanel({
  children,
  variant = 'default',
  hoverable = false,
  padding = 'md',
  className = '',
}: GlassPanelProps) {
  return (
    <div className={`${variantClasses[variant]} ${paddingClasses[padding]} ${hoverable ? 'glass-card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
}

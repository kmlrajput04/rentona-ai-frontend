'use client';

import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}

const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

const statusColors: Record<NonNullable<AvatarProps['status']>, string> = {
  online: 'bg-emerald-400',
  offline: 'bg-slate-500',
  away: 'bg-amber-400',
  busy: 'bg-red-400',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function Avatar({ src, alt, name, size = 'md', status, className = '' }: AvatarProps) {
  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className={`rounded-full object-cover border border-white/10 ${sizeClasses[size]}`}
        />
      ) : (
        <div
          className={`rounded-full flex items-center justify-center font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 ${sizeClasses[size]}`}
        >
          {name ? getInitials(name) : '?'}
        </div>
      )}
      {status && (
        <span
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900 ${statusColors[status]}`}
        />
      )}
    </div>
  );
}

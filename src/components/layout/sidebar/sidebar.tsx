'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Dashboard Sidebar Navigation Component
 * Reusable sidebar that powers the dashboard layout.
 */

export interface SidebarLink {
  name: string;
  path: string;
  icon: string;
  badge?: number;
}

export interface SidebarProps {
  links: SidebarLink[];
  isOpen: boolean;
  onClose: () => void;
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function Sidebar({ links, isOpen, onClose, logo, footer, className = '' }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-72 border-r backdrop-blur-md transition-transform duration-300 ease-in-out bg-[#0f172a]/90 border-slate-800 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Logo Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
          {logo || (
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                RENTORA AI
              </span>
            </Link>
          )}
          <button
            onClick={onClose}
            className="md:hidden text-lg p-1 hover:bg-slate-800/50 rounded text-slate-400"
          >
            ✕
          </button>
        </div>

        {/* Nav List */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="flex-1">{link.name}</span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="px-2 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-400 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {footer && (
          <div className="p-4 border-t border-slate-800/60">
            {footer}
          </div>
        )}
      </div>
    </aside>
  );
}

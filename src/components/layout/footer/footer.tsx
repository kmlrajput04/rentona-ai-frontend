'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Public Page Footer
 * Premium flat layout with clean design, core links, and a beautiful floating Scroll-To-Top button.
 */
export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#030712] py-16 text-slate-500 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <span className="font-black text-white text-lg tracking-tight">RENTORA AI</span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span>© 2026. All rights reserved. Built with visual perfection.</span>
        </div>

        <div className="flex items-center gap-8 font-medium">
          <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="/security" className="hover:text-slate-300 transition-colors">Platform Security</Link>
        </div>
      </div>

      {/* Floating Scroll to Top Arrow */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-white/10 text-white shadow-2xl hover:border-indigo-400/40 hover:scale-110 hover:shadow-indigo-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
          </svg>
        </button>
      )}
    </footer>
  );
}



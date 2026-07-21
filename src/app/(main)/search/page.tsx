'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SearchDiscoveryPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard/user', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
      </svg>
    )},
    { name: 'Search Homes', path: '/search', active: true, icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )},
    { name: 'Bookings', path: '/dashboard/user/bookings', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )},
    { name: 'Messages', path: '/dashboard/user/chat', badge: 2, icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )},
    { name: 'Saved', path: '/dashboard/user/saved', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )},
    { name: 'Applications', path: '/dashboard/user/applications', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )},
    { name: 'Payments', path: '/dashboard/user/payments', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )},
    { name: 'AI Assistant', path: '/dashboard/user/assistant', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )},
    { name: 'Relocation', path: '/dashboard/user/relocation', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )},
    { name: 'Community', path: '/dashboard/user/community', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )},
    { name: 'Refer & Earn', path: '/dashboard/user/refer', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm-2 4h4M5 20h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
      </svg>
    )},
    { name: 'Settings', path: '/dashboard/user/settings', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
  ];

  const homes = [
    {
      id: 'home-1',
      title: 'Maple House',
      location: 'Toronto, Near Campus',
      beds: '1 Bed',
      baths: '1 Bath',
      area: '550 sqft',
      price: '$1,650',
      rating: '4.8',
      reviews: '128',
      tags: ['Near University', 'Furnished'],
      featured: true,
      liked: true,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'home-2',
      title: 'UrbanNest Toronto',
      location: 'Downtown Toronto',
      beds: 'Studio',
      baths: '1 Bath',
      area: '450 sqft',
      price: '$1,450',
      rating: '4.6',
      reviews: '96',
      tags: ['Downtown', 'Gym', 'Elevator'],
      featured: false,
      liked: true,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'home-3',
      title: 'Yorkville Suites',
      location: 'Yorkville, Toronto',
      beds: '1 Bed',
      baths: '1 Bath',
      area: '600 sqft',
      price: '$2,100',
      rating: '4.7',
      reviews: '78',
      tags: ['Luxury', 'Rooftop', 'Pet Friendly'],
      featured: false,
      liked: false,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'home-4',
      title: 'The College View',
      location: 'Near University of Toronto',
      beds: '2 Bed',
      baths: '1 Bath',
      area: '750 sqft',
      price: '$1,900',
      rating: '4.5',
      reviews: '64',
      tags: ['Student Friendly', 'Study Area'],
      featured: false,
      liked: false,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#080d17] text-slate-200 selection:bg-indigo-500/30 selection:text-white">
      
      {/* 1. Left Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-[260px] border-r border-[#162032] bg-[#0b1220]/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Logo Header */}
            <div className="flex items-center justify-between px-6 h-20">
              <span onClick={() => router.push('/')} className="flex items-center gap-2.5 group cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-black text-xl italic tracking-tighter">R</span>
                </div>
                <span className="text-lg font-black tracking-tight text-white group-hover:opacity-90 transition-opacity">
                  Rentora AI
                </span>
              </span>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-lg p-1.5 hover:bg-white/5 rounded-lg text-slate-400 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Nav List */}
            <nav className="px-4.5 py-4 space-y-1 max-h-[calc(100vh-290px)] overflow-y-auto custom-scrollbar">
              {navLinks.map((link) => (
                <span
                  key={link.path}
                  onClick={() => router.push(link.path)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-semibold cursor-pointer transition-all duration-200 ${
                    link.active
                      ? 'bg-gradient-to-r from-indigo-500/15 to-purple-500/10 border border-indigo-500/25 text-white shadow-inner shadow-white/5'
                      : 'text-slate-400 border border-transparent hover:bg-white/[0.03] hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`transition-colors duration-200 ${link.active ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </div>
                  {link.badge && (
                    <span className="w-5 h-5 rounded-full bg-indigo-600/90 text-white flex items-center justify-center text-[10px] font-black border border-indigo-400/20">
                      {link.badge}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          </div>

          {/* Bottom Card Holder (Sidebar AI Assistant Beta Card + User profile) */}
          <div className="p-4 space-y-4 border-t border-[#162032] bg-[#080d17]/60">
            {/* AI Assistant Beta Sidebar Card exactly matching USER 2.png */}
            <div className="p-4 bg-[#0d172a] border border-indigo-500/20 rounded-2xl relative overflow-hidden shadow-inner">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-start gap-3.5 mb-3.5">
                {/* Glowing target AI orb */}
                <div className="relative w-8 h-8 rounded-full flex items-center justify-center bg-[#070b13] border border-indigo-500/30 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 animate-spin opacity-80" />
                  <div className="absolute inset-[2px] rounded-full bg-[#070b13] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_#6366f1]" />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-white">AI Assistant</span>
                    <span className="text-[8px] font-extrabold uppercase bg-purple-500/20 border border-purple-500/30 px-1.5 py-0.5 rounded text-purple-300 leading-none">
                      Beta
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-semibold leading-tight">
                    Need help finding your perfect home?
                  </p>
                </div>
              </div>

              <button className="w-full text-center py-2 text-[10px] font-bold text-slate-300 hover:text-white border border-indigo-500/35 hover:border-indigo-400 bg-indigo-500/5 hover:bg-indigo-500/10 rounded-xl transition-all duration-300 shadow-md shadow-indigo-600/5">
                Ask AI
              </button>
            </div>

            {/* Profile Footer */}
            <div className="flex items-center justify-between gap-3 p-2 bg-[#0d172a] border border-[#162032] rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center font-bold">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" 
                    alt="Alex Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[13px] font-black text-white truncate max-w-[110px]">
                    Alex Johnson
                  </div>
                  <div className="text-[10px] text-indigo-400/80 font-bold uppercase tracking-wider">
                    Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 md:pl-[260px] pb-10">
        
        {/* Header directly matching USER 2.png */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-8 pt-8 pb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Search Homes</h1>
            <p className="text-xs text-slate-400 font-semibold mt-1">Find your perfect home with AI-powered search</p>
          </div>

          <div className="flex items-center gap-4.5">
            {/* Save Search button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-[#1d273a] hover:bg-slate-900 bg-[#0c1322] text-xs font-bold rounded-xl text-slate-300 hover:text-white transition-all duration-300">
              <svg className="w-3.5 h-3.5 text-red-500 fill-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Save Search
            </button>

            {/* Notification Badge */}
            <div className="relative cursor-pointer p-2 hover:bg-white/[0.04] rounded-xl transition-colors">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-4.5 h-4.5 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-black border-2 border-[#070b13]">
                3
              </span>
            </div>

            {/* Profile Selector */}
            <div className="flex items-center gap-3 px-3 py-1.5 bg-[#0c1322] border border-[#1d273a] rounded-xl cursor-pointer hover:bg-white/[0.02] transition-all">
              <div className="w-7 h-7 rounded-lg overflow-hidden border border-slate-700/80 bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" 
                  alt="Alex Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left leading-tight hidden sm:block">
                <div className="text-[11px] font-black text-white">Alex Johnson</div>
                <div className="text-[9px] text-slate-500 font-bold">Student</div>
              </div>
              <span className="text-slate-500 text-[10px]">▼</span>
            </div>
          </div>
        </header>

        {/* Global Search and Filters Panel */}
        <div className="px-8 mb-6 space-y-4">
          {/* Row 1: Search Input & Map View button */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by city, neighborhood, university, or property name..."
                className="w-full pl-11 pr-4 py-3.5 text-[12px] font-semibold border border-[#1d273a] bg-[#0c1322]/80 rounded-2xl focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/20 text-slate-200 placeholder-slate-500 transition-all duration-300"
              />
              <span className="absolute left-4 top-[15px] text-slate-500">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>

            <button className="flex items-center gap-2 px-5 py-3.5 border border-[#1d273a] hover:bg-slate-900 bg-[#0c1322]/40 text-xs font-bold rounded-2xl text-indigo-400 hover:text-indigo-300 transition-all shrink-0">
              <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Map View
            </button>
          </div>

          {/* Row 2: Five columns filters + Solid purple Search button */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {/* Filter 1 */}
            <div className="flex items-center justify-between px-4.5 py-2.5 border border-[#1d273a] bg-[#0c1322]/80 rounded-2xl cursor-pointer hover:bg-white/[0.02]">
              <div className="flex items-center gap-2.5 min-w-0">
                <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-left leading-tight min-w-0">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Location</span>
                  <span className="text-xs font-black text-white truncate block">Toronto, Canada</span>
                </div>
              </div>
              <span className="text-slate-500 text-[9px] ml-2">▼</span>
            </div>

            {/* Filter 2 */}
            <div className="flex items-center justify-between px-4.5 py-2.5 border border-[#1d273a] bg-[#0c1322]/80 rounded-2xl cursor-pointer hover:bg-white/[0.02]">
              <div className="flex items-center gap-2.5 min-w-0">
                <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="text-left leading-tight min-w-0">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Move-in Date</span>
                  <span className="text-xs font-black text-white truncate block">Jun 1 - Aug 31</span>
                </div>
              </div>
              <span className="text-slate-500 text-[9px] ml-2">▼</span>
            </div>

            {/* Filter 3 */}
            <div className="flex items-center justify-between px-4.5 py-2.5 border border-[#1d273a] bg-[#0c1322]/80 rounded-2xl cursor-pointer hover:bg-white/[0.02]">
              <div className="flex items-center gap-2.5 min-w-0">
                <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left leading-tight min-w-0">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Price Range</span>
                  <span className="text-xs font-black text-white truncate block">$700 - $2,500+</span>
                </div>
              </div>
              <span className="text-slate-500 text-[9px] ml-2">▼</span>
            </div>

            {/* Filter 4 */}
            <div className="flex items-center justify-between px-4.5 py-2.5 border border-[#1d273a] bg-[#0c1322]/80 rounded-2xl cursor-pointer hover:bg-white/[0.02]">
              <div className="flex items-center gap-2.5 min-w-0">
                <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="text-left leading-tight min-w-0">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Property Type</span>
                  <span className="text-xs font-black text-white truncate block">All Types</span>
                </div>
              </div>
              <span className="text-slate-500 text-[9px] ml-2">▼</span>
            </div>

            {/* Filter 5 (Badge: 2) */}
            <div className="flex items-center justify-between px-4.5 py-2.5 border border-[#1d273a] bg-[#0c1322]/80 rounded-2xl cursor-pointer hover:bg-white/[0.02]">
              <div className="flex items-center gap-2.5 min-w-0">
                <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <div className="text-left leading-tight min-w-0">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Filters</span>
                  <span className="text-xs font-black text-white flex items-center gap-1.5 truncate">
                    Filters 
                    <span className="px-1.5 py-0.5 rounded-full bg-indigo-600 text-[8px] font-black text-white">2</span>
                  </span>
                </div>
              </div>
              <span className="text-slate-500 text-[9px] ml-2">▼</span>
            </div>

            {/* Solid Purple Search button */}
            <button className="w-full py-3.5 bg-[#6366f1] hover:bg-[#5a5ddf] text-xs font-black text-white rounded-2xl transition-all shadow-lg shadow-indigo-600/10 shrink-0">
              Search
            </button>
          </div>
        </div>

        {/* Split Column Panel */}
        <div className="px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Listings */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center pb-2">
              <span className="text-xs font-black text-slate-400">1,248+ homes found</span>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="font-semibold text-slate-500">Sort by:</span>
                <select className="bg-transparent border-none text-slate-300 font-bold focus:outline-none cursor-pointer">
                  <option className="bg-[#0b1220] text-slate-200">Recommended</option>
                  <option className="bg-[#0b1220] text-slate-200">Price: Low to High</option>
                  <option className="bg-[#0b1220] text-slate-200">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* List */}
            <div className="space-y-4">
              {homes.map((h) => (
                <div key={h.id} className="relative glass-card border border-[#1e2d45] bg-[#0b1220]/60 hover:border-indigo-500/35 p-4.5 rounded-2xl flex gap-5 hover:scale-[1.01] transition-all duration-300">
                  {/* Left image */}
                  <div className="w-36 sm:w-44 h-28 rounded-xl overflow-hidden shrink-0 relative border border-[#1e2d45]/30">
                    <img src={h.image} alt={h.title} className="w-full h-full object-cover" />
                    {h.featured && (
                      <span className="absolute top-2.5 left-2.5 text-[8px] font-black uppercase bg-[#6366f1] text-white px-2 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                    <button className="absolute bottom-2.5 right-2.5 p-1 rounded bg-[#070b13]/60 hover:bg-[#070b13]/85 text-slate-300 hover:text-red-400 transition-colors backdrop-blur">
                      <svg className={`w-3.5 h-3.5 ${h.liked ? 'fill-red-500 text-red-500' : 'text-slate-300'}`} fill={h.liked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Right info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start mb-1 gap-2">
                        <h3 className="text-sm font-black text-white flex items-center gap-1.5 truncate">
                          {h.title}
                          <span className="w-4 h-4 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-[8px] font-black border border-blue-500/20 shrink-0" title="Verified">✓</span>
                        </h3>
                        
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold shrink-0">
                          <span className="text-amber-400 text-xs">★</span> {h.rating} <span className="text-slate-600 font-medium">({h.reviews})</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-500 font-semibold flex items-center gap-1.5 mb-2.5">
                        <svg className="w-3.5 h-3.5 text-indigo-400/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {h.location}
                      </p>

                      {/* Specs Row */}
                      <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold mb-3 flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          {h.beds}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          {h.baths}
                        </span>
                        <span className="text-slate-700">•</span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                          </svg>
                          {h.area}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-[#1e2d45]/40 pt-2.5 mt-1.5">
                      {/* Tags */}
                      <div className="flex gap-1.5 flex-wrap">
                        {h.tags.map((t, idx) => (
                          <span key={idx} className="px-2 py-0.5 text-[8.5px] font-black uppercase bg-[#090f1e] text-indigo-400 border border-[#1e2d45] rounded">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-black text-white">{h.price}</span>
                        <span className="text-[9px] text-slate-500 font-medium"> /month</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 pt-6">
              <button className="w-8 h-8 rounded-lg border border-[#1e2d45] flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 transition-colors">◀</button>
              <button className="w-8 h-8 rounded-full bg-[#6366f1] text-white flex items-center justify-center text-xs font-black">1</button>
              <button className="w-8 h-8 rounded-lg text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold">2</button>
              <button className="w-8 h-8 rounded-lg text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold">3</button>
              <button className="w-8 h-8 rounded-lg text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold">4</button>
              <button className="w-8 h-8 rounded-lg text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold">5</button>
              <span className="text-slate-600 text-xs font-bold">..</span>
              <button className="w-8 h-8 rounded-lg text-slate-400 hover:text-white flex items-center justify-center text-xs font-bold">32</button>
              <button className="w-8 h-8 rounded-lg border border-[#1e2d45] flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 transition-colors">▶</button>
            </div>
          </div>

          {/* Right Column: The Map */}
          <div className="lg:col-span-5 h-[580px] lg:h-auto rounded-3xl overflow-hidden border border-[#1e2d45] bg-[#0b1220]/60 relative shadow-2xl flex flex-col justify-between">
            {/* Stylized custom SVG map layer */}
            <div className="absolute inset-0 bg-[#080d17] overflow-hidden pointer-events-none">
              <svg className="w-full h-full opacity-75" viewBox="0 0 400 500" fill="none">
                {/* Detailed street grid lines matching mockup */}
                <path d="M-10 80 L420 80" stroke="#172237" strokeWidth="1.5" />
                <path d="M-10 150 L420 170" stroke="#172237" strokeWidth="2.5" />
                <path d="M-10 240 L420 280" stroke="#172237" strokeWidth="2" />
                <path d="M-10 330 L420 320" stroke="#172237" strokeWidth="1.5" />
                <path d="M-10 390 L420 370" stroke="#172237" strokeWidth="3.5" />
                
                <path d="M40 -10 L40 520" stroke="#172237" strokeWidth="1.5" />
                <path d="M100 -10 L120 520" stroke="#172237" strokeWidth="2.5" />
                <path d="M180 -10 L190 520" stroke="#172237" strokeWidth="1.5" />
                <path d="M250 -10 L270 520" stroke="#172237" strokeWidth="3" />
                <path d="M340 -10 L310 520" stroke="#172237" strokeWidth="1.5" />
                
                {/* Lake/Water area in bottom right corner */}
                <path d="M280 440 C340 430, 380 460, 420 440 L420 520 L280 520 Z" fill="#1e293b" opacity="0.25" />
                
                {/* Neighborhood text labels */}
                <text x="270" y="55" fill="#2d3f5a" fontSize="10" fontWeight="900" letterSpacing="1">YORKVILLE</text>
                <text x="30" y="130" fill="#2d3f5a" fontSize="10" fontWeight="900" letterSpacing="1">THE ANNEX</text>
                <text x="220" y="240" fill="#2d3f5a" fontSize="9" fontWeight="900" letterSpacing="1">UNIVERSITY DISTRICT</text>
                <text x="310" y="290" fill="#2d3f5a" fontSize="10" fontWeight="900" letterSpacing="1">CORKTOWN</text>
                <text x="200" y="350" fill="#2d3f5a" fontSize="10" fontWeight="900" letterSpacing="1">DOWNTOWN TORONTO</text>
                <text x="250" y="450" fill="#475569" fontSize="18" fontWeight="900" letterSpacing="2">Toronto</text>
              </svg>
            </div>

            {/* Interactive Pricing Markers floating on map */}
            <div className="absolute inset-0 z-10">
              {/* Map pin 1 */}
              <div className="absolute top-[80px] left-[260px] bg-[#6366f1] border border-white/20 text-white font-extrabold text-[10px] px-2 py-1 rounded shadow-lg cursor-pointer">
                $1,650
              </div>

              {/* Map pin 2 */}
              <div className="absolute top-[170px] left-[290px] bg-[#0c1322] border border-[#1d273a] text-slate-300 font-extrabold text-[10px] px-2 py-1 rounded shadow-lg cursor-pointer hover:bg-[#6366f1] hover:text-white transition-all">
                $2,300
              </div>

              {/* Map pin 3 */}
              <div className="absolute top-[220px] left-[320px] bg-[#0c1322] border border-[#1d273a] text-slate-300 font-extrabold text-[10px] px-2 py-1 rounded shadow-lg cursor-pointer hover:bg-[#6366f1] hover:text-white transition-all">
                $2,250
              </div>

              {/* Map pin 4 */}
              <div className="absolute top-[280px] left-[270px] bg-[#0c1322] border border-[#1d273a] text-slate-300 font-extrabold text-[10px] px-2 py-1 rounded shadow-lg cursor-pointer hover:bg-[#6366f1] hover:text-white transition-all">
                $2,100
              </div>

              {/* Map pin 5 */}
              <div className="absolute top-[300px] left-[30px] bg-[#0c1322] border border-[#1d273a] text-slate-300 font-extrabold text-[10px] px-2 py-1 rounded shadow-lg cursor-pointer hover:bg-[#6366f1] hover:text-white transition-all">
                $2,350
              </div>

              {/* Group Pin (12) */}
              <div className="absolute top-[260px] left-[180px] w-9 h-9 rounded-full bg-indigo-950/80 border-2 border-indigo-500 text-indigo-300 flex items-center justify-center text-xs font-black shadow-lg shadow-indigo-500/25 animate-pulse">
                12
              </div>

              {/* Heart marker */}
              <div className="absolute top-[120px] left-[80px] w-8 h-8 rounded-full bg-indigo-950/85 border border-red-500/50 flex items-center justify-center shadow-lg">
                <span className="text-red-500 text-xs">❤️</span>
              </div>
            </div>

            {/* GPS & Zoom Map Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <button className="w-8 h-8 rounded-lg bg-[#0b1220] border border-[#1d273a] hover:bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold shadow-lg transition-colors">
                🧭
              </button>
              <button className="w-8 h-8 rounded-lg bg-[#0b1220] border border-[#1d273a] hover:bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold shadow-lg transition-colors">
                ＋
              </button>
              <button className="w-8 h-8 rounded-lg bg-[#0b1220] border border-[#1d273a] hover:bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold shadow-lg transition-colors">
                －
              </button>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 right-4 z-20 bg-[#0b1220]/95 border border-[#1e2d45] p-3 rounded-xl text-[9px] font-black flex items-center gap-3 backdrop-blur shadow-xl">
              <span className="text-slate-500 uppercase tracking-wider block">Map Legend</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Low</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-slate-300">Medium</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="text-slate-300">High</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Highlights Cards */}
        <div className="px-8 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="glass-card p-5 rounded-2xl border border-[#1d273a] bg-[#0c1322]/40 flex items-center justify-between shadow-lg shadow-black/10">
            <div className="space-y-1 pr-3">
              <h3 className="text-xs font-black text-white">AI Match Score</h3>
              <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                We calculate how well a home matches your preferences
              </p>
            </div>
            
            {/* Circular Percentage progress indicator (96%) */}
            <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-slate-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-indigo-500" strokeDasharray="96, 100" strokeWidth="3.2" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <span className="absolute text-[10px] font-black text-indigo-400">96%</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-5 rounded-2xl border border-[#1d273a] bg-[#0c1322]/40 flex items-center gap-4.5 shadow-lg shadow-black/10">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="space-y-0.5 min-w-0">
              <h3 className="text-xs font-black text-white">Verified Properties</h3>
              <p className="text-[10px] text-slate-500 font-semibold leading-relaxed truncate">
                All properties are verified for your peace of mind
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-5 rounded-2xl border border-[#1d273a] bg-[#0c1322]/40 flex items-center gap-4.5 shadow-lg shadow-black/10">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-0.5 min-w-0">
              <h3 className="text-xs font-black text-white">Save Time</h3>
              <p className="text-[10px] text-slate-500 font-semibold leading-relaxed truncate">
                Let AI find the perfect home for you
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-5 rounded-2xl border border-[#1d273a] bg-[#0c1322]/40 flex items-center gap-4.5 shadow-lg shadow-black/10">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/25 flex items-center justify-center text-pink-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div className="space-y-0.5 min-w-0">
              <h3 className="text-xs font-black text-white">Smart Alerts</h3>
              <p className="text-[10px] text-slate-500 font-semibold leading-relaxed truncate">
                Get notified about new listings instantly
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

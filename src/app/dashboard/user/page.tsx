'use client';

import React from 'react';
import Link from 'next/link';

export default function UserDashboardOverview() {
  const recommendations = [
    {
      id: 'rec-1',
      title: 'UrbanNest Toronto',
      type: '1BHK • Downtown',
      price: '$1,650',
      match: '98% Match',
      liked: true,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'rec-2',
      title: 'Maple House',
      type: 'Private Room • Near Campus',
      price: '$850',
      match: '95% Match',
      liked: false,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'rec-3',
      title: 'Yorkville Suites',
      type: 'Studio • Yorkville',
      price: '$2,100',
      match: '92% Match',
      liked: true,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=80',
    },
  ];

  const activities = [
    {
      id: 'act-1',
      title: 'Booking Confirmed',
      desc: 'UrbanNest Toronto',
      time: '2h ago',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'act-2',
      title: 'Payment Successful',
      desc: '$1,650 paid',
      time: '5h ago',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'act-3',
      title: 'New Message',
      desc: 'From Sarah (Landlord)',
      time: '1d ago',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 relative z-10 text-slate-100 pb-20">
      
      {/* 1. Header Banner */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5 tracking-tight">
          Good morning, Alex <span className="animate-wave origin-[70%_70%] inline-block">👋</span>
        </h1>
        <p className="text-[13px] text-slate-400 font-medium">
          Here's what's happening in your housing journey today.
        </p>
      </div>

      {/* 2. Top Stats Grid (4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Metric 1 */}
        <div className="glass-card p-5 rounded-2xl border border-[#1e293b]/50 bg-[#090d16]/30 flex items-center justify-between shadow-lg shadow-black/10">
          <div className="space-y-1">
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Upcoming Move-In</span>
            <span className="text-3xl font-black text-white block">15</span>
            <span className="text-[11px] text-slate-400 font-semibold block">Days left</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="glass-card p-5 rounded-2xl border border-[#1e293b]/50 bg-[#090d16]/30 flex items-center justify-between shadow-lg shadow-black/10">
          <div className="space-y-1">
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Active Bookings</span>
            <span className="text-3xl font-black text-white block">2</span>
            <Link href="/dashboard/user/bookings" className="text-[11px] text-indigo-400/80 hover:text-indigo-300 font-bold block transition-colors">
              View details
            </Link>
          </div>
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="glass-card p-5 rounded-2xl border border-[#1e293b]/50 bg-[#090d16]/30 flex items-center justify-between shadow-lg shadow-black/10">
          <div className="space-y-1">
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Total Payments</span>
            <span className="text-3xl font-black text-white block">$2,450</span>
            <span className="text-[11px] text-slate-400 font-semibold block">This month</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="glass-card p-5 rounded-2xl border border-[#1e293b]/50 bg-[#090d16]/30 flex items-center justify-between shadow-lg shadow-black/10">
          <div className="space-y-1">
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">AI Matches</span>
            <span className="text-3xl font-black text-white block">12</span>
            <span className="text-[11px] text-slate-400 font-semibold block">New matches</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.248.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.178 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.772-.562-.373-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Middle Section (AI Recommended & Your Journey) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Card: AI Recommended */}
        <div className="lg:col-span-8 glass-card border border-[#1e293b]/50 bg-[#090d16]/30 p-6 rounded-2xl flex flex-col justify-between shadow-lg shadow-black/10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-slate-100">AI Recommended for You</h2>
            <Link href="/search" className="text-xs font-bold text-slate-400 hover:text-slate-200 border border-[#1e293b] px-3.5 py-1.5 rounded-xl bg-[#090d16]/40 hover:bg-[#151c2c]/40 transition-colors">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5">
            {recommendations.map((rec) => (
              <div key={rec.id} className="group relative rounded-2xl overflow-hidden border border-[#1e293b]/30 bg-[#070b13]/60 hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
                <div className="relative h-32 w-full overflow-hidden">
                  <img 
                    src={rec.image} 
                    alt={rec.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 text-[9px] font-black uppercase bg-[#090d16]/80 text-indigo-300 border border-indigo-400/20 px-2 py-0.5 rounded-full backdrop-blur">
                    {rec.match}
                  </span>
                </div>
                
                <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="text-xs font-black text-white truncate">{rec.title}</h3>
                    <p className="text-[10px] text-slate-500 font-semibold">{rec.type}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-1.5 border-t border-[#1e293b]/30">
                    <div>
                      <span className="text-xs font-black text-white">{rec.price}</span>
                      <span className="text-[9px] text-slate-500 font-medium">/month</span>
                    </div>
                    
                    <button className="text-slate-400 hover:text-red-400 transition-colors p-1 rounded-lg">
                      <svg 
                        className={`w-4 h-4 ${rec.liked ? 'fill-red-500 text-red-500' : 'text-slate-500'}`} 
                        fill={rec.liked ? 'currentColor' : 'none'} 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Your Journey */}
        <div className="lg:col-span-4 glass-card border border-[#1e293b]/50 bg-[#090d16]/30 p-6 rounded-2xl flex flex-col justify-between shadow-lg shadow-black/10">
          <h2 className="text-[14px] font-bold uppercase tracking-wider text-slate-100 mb-5">Your Journey</h2>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            {/* Step 1 */}
            <div className="flex items-start gap-3.5 relative">
              <div className="absolute left-[9px] top-[22px] bottom-[-22px] w-[2px] bg-emerald-500/30" />
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center z-10">
                <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-slate-300">Complete Profile</span>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3.5 relative">
              <div className="absolute left-[9px] top-[22px] bottom-[-22px] w-[2px] bg-emerald-500/30" />
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center z-10">
                <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-slate-300">Verify Identity</span>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3.5 relative">
              <div className="absolute left-[9px] top-[22px] bottom-[-22px] w-[2px] bg-indigo-500/30" />
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center z-10">
                <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-slate-300">Find a Place</span>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3.5 relative">
              <div className="absolute left-[9px] top-[22px] bottom-[-22px] w-[2px] bg-[#1e293b]/80" />
              <div className="w-5 h-5 rounded-full bg-indigo-500/10 border-2 border-indigo-500 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className="text-[12px] font-black text-white">Book & Pay</span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full bg-transparent border-2 border-[#1e293b] flex items-center justify-center z-10" />
              <div className="flex-1 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-slate-600">Move In</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Grid (Recent Activity, Payment Overview, Relocation Checklist) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Recent Activity */}
        <div className="glass-card border border-[#1e293b]/50 bg-[#090d16]/30 p-6 rounded-2xl flex flex-col justify-between shadow-lg shadow-black/10">
          <h2 className="text-[14px] font-bold uppercase tracking-wider text-slate-100 mb-5">Recent Activity</h2>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            {activities.map((act) => (
              <div key={act.id} className="flex items-center gap-3.5">
                {act.icon}
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <div>
                    <h4 className="text-xs font-black text-white truncate">{act.title}</h4>
                    <p className="text-[10px] text-slate-500 font-semibold truncate">{act.desc}</p>
                  </div>
                  <span className="text-[10px] text-slate-600 font-bold shrink-0">{act.time}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full text-center mt-5 text-[11px] font-black border border-[#1e293b] py-2 rounded-xl hover:bg-white/[0.03] text-slate-300 hover:text-white transition-colors">
            View all
          </button>
        </div>

        {/* Payment Overview Chart */}
        <div className="glass-card border border-[#1e293b]/50 bg-[#090d16]/30 p-6 rounded-2xl flex flex-col justify-between shadow-lg shadow-black/10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-slate-100">Payment Overview</h2>
            <select className="text-[11px] bg-[#090d16]/60 border border-[#1e293b]/80 rounded-xl px-2.5 py-1 text-slate-400 font-bold focus:outline-none cursor-pointer">
              <option className="bg-[#090d16] text-slate-200">This Month</option>
              <option className="bg-[#090d16] text-slate-200">Last Month</option>
            </select>
          </div>

          <div className="space-y-0.5 mb-3">
            <span className="text-2xl font-black text-white">$2,450.00</span>
            <span className="text-[10px] text-emerald-400 font-bold block">+12% vs last month</span>
          </div>

          {/* Pure SVG Premium Line Chart */}
          <div className="w-full h-32 relative">
            <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3,3" />
              <line x1="0" y1="60" x2="300" y2="60" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3,3" />
              <line x1="0" y1="90" x2="300" y2="90" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3,3" />
              
              {/* Gradient Fill under path */}
              <path 
                d="M 0 110 C 50 110, 50 90, 100 90 C 150 90, 150 80, 200 70 C 250 60, 250 20, 300 20 L 300 120 L 0 120 Z" 
                fill="url(#purpleGlow)" 
              />
              
              {/* Smooth Curved Line */}
              <path 
                d="M 0 110 C 50 110, 50 90, 100 90 C 150 90, 150 80, 200 70 C 250 60, 250 20, 300 20" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                className="drop-shadow-[0_4px_12px_rgba(168,85,247,0.45)]"
              />
              
              {/* Dots on line */}
              <circle cx="100" cy="90" r="4" fill="#a855f7" stroke="#070b13" strokeWidth="1.5" />
              <circle cx="200" cy="70" r="4" fill="#a855f7" stroke="#070b13" strokeWidth="1.5" />
              <circle cx="300" cy="20" r="5" fill="#a855f7" stroke="#070b13" strokeWidth="1.5" className="animate-pulse" />
            </svg>
            
            {/* X-axis labels */}
            <div className="flex justify-between items-center text-[8px] font-bold text-slate-600 mt-2 px-1">
              <span>Apr 1</span>
              <span>Apr 10</span>
              <span>Apr 20</span>
              <span>Apr 30</span>
            </div>
          </div>
        </div>

        {/* Relocation Checklist */}
        <div className="glass-card border border-[#1e293b]/50 bg-[#090d16]/30 p-6 rounded-2xl flex flex-col justify-between shadow-lg shadow-black/10">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-slate-100">Relocation Checklist</h2>
            <Link href="/dashboard/user/relocation" className="text-[10px] font-bold text-slate-400 hover:text-slate-200">
              View all
            </Link>
          </div>

          <div className="space-y-1 mb-4">
            <span className="text-[11px] text-slate-500 font-bold block">3 of 7 completed</span>
            <div className="w-full h-1.5 bg-[#0d1424] rounded-full overflow-hidden border border-[#1e293b]/30">
              <div className="w-[43%] h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            </div>
          </div>

          <div className="space-y-3.5 flex-1 flex flex-col justify-center">
            {/* Checklist Item 1 */}
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-slate-300">Airport Pickup</span>
            </div>

            {/* Checklist Item 2 */}
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-slate-300">SIM Card</span>
            </div>

            {/* Checklist Item 3 */}
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-500 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>
              <span className="text-xs font-black text-white">Bank Account</span>
            </div>

            {/* Checklist Item 4 */}
            <div className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-transparent border border-[#1e293b] flex items-center justify-center shrink-0" />
              <span className="text-xs font-semibold text-slate-600">Health Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

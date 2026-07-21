import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/footer/footer';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-indigo-600/10 top-[-200px] left-[50%] -translate-x-[50%]" />
      <div className="glow-orb w-[400px] h-[400px] bg-purple-600/10 top-[20%] right-[-100px]" />
      <div className="glow-orb w-[500px] h-[500px] bg-pink-600/5 bottom-[10%] left-[-200px]" />

      {/* 1. Nav Header */}
      <header className="w-full border-b border-white/5 backdrop-blur-md sticky top-0 z-50 bg-[#030712]/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight hover:opacity-90 transition-opacity">
              RENTORA AI
            </span>
            <span className="text-[10px] uppercase bg-indigo-500/15 border border-indigo-500/25 px-2.5 py-0.5 rounded-full text-indigo-300 font-bold tracking-wider">
              AI Native
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-300">
            <Link href="/features" className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300">Features</Link>
            <Link href="/pricing" className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300">Pricing</Link>
            <Link href="/about" className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300">About Story</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300">Insights</Link>
            <Link href="/help" className="hover:text-indigo-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-400 hover:after:w-full after:transition-all after:duration-300">Help Hub</Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link href="/register" className="btn-premium btn-premium-hover px-5 py-2.5 text-sm">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="w-full pt-28 pb-20 relative overflow-hidden flex flex-col items-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50" />
        
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 border border-white/10 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 shadow-inner shadow-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
            <span className="text-[11px] text-slate-300 font-bold tracking-wider uppercase">
              Relocation & Housing Ecosystem is Live
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black max-w-4xl tracking-tight text-white mb-6 leading-[1.1] text-glow-indigo">
            The Intelligent Way to <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-size-200">
              Relocate & Settle Globally
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-normal">
            Rentora AI is not just a listing website. It is an AI-powered hub facilitating seamless housing discovery, visa support, local compliance, and community settlement for students and professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
            <Link href="/search" className="btn-premium btn-premium-hover px-8 py-4 text-base shadow-lg">
              Find Premium Housing
            </Link>
            <Link href="/onboarding" className="border border-white/10 bg-white/5 backdrop-blur-sm text-slate-200 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300">
              Start Relocation Wizard
            </Link>
          </div>
        </div>

        {/* Dynamic Platform Interactive Mockup (The Wow Factor) */}
        <div className="w-full max-w-5xl mx-auto px-6 relative z-10">
          <div className="w-full rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-2xl shadow-indigo-500/5 backdrop-blur-md">
            <div className="w-full h-auto rounded-xl border border-white/5 bg-[#080d1a] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* Sidebar Mockup */}
              <div className="w-full md:w-64 border-r border-white/5 bg-[#040812]/90 p-5 flex flex-col gap-6 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-8 rounded bg-indigo-500/10 border border-indigo-500/20 px-3 flex items-center text-xs text-indigo-300 font-semibold">🔍 Smart Matching</div>
                  <div className="h-8 rounded px-3 flex items-center text-xs text-slate-400 hover:text-slate-300">✈️ Visa Checklist</div>
                  <div className="h-8 rounded px-3 flex items-center text-xs text-slate-400 hover:text-slate-300">🏡 Property Search</div>
                  <div className="h-8 rounded px-3 flex items-center text-xs text-slate-400 hover:text-slate-300">💬 Community Circles</div>
                </div>
              </div>

              {/* Display Content Mockup */}
              <div className="flex-1 p-6 md:p-8 flex flex-col gap-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div>
                    <h4 className="text-sm font-bold text-white">AI Relocation Companion</h4>
                    <p className="text-[11px] text-slate-400">Personalized for International Students & Professionals</p>
                  </div>
                  <span className="text-[11px] bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-md text-emerald-400 font-semibold">Active Session</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mock Checklist Card */}
                  <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex flex-col gap-3">
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-wide">Visa & Compliance Checklist</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-slate-300">Biometrics Appt. Scheduled</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-slate-300">University Offer Confirmed</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      <span className="text-slate-400">Local Bank Account Setup (In Progress)</span>
                    </div>
                  </div>

                  {/* Mock Recommended Property Card */}
                  <div className="bg-slate-900/40 border border-white/5 p-4 rounded-xl flex flex-col gap-2 relative">
                    <span className="absolute top-3 right-3 text-xs bg-indigo-500 px-2 py-0.5 rounded text-white font-bold">98% Match</span>
                    <span className="text-xs font-bold text-pink-300 uppercase tracking-wide">AI Recommendation</span>
                    <h5 className="text-xs font-bold text-slate-200 mt-1">Luxe Student Studio Near University</h5>
                    <p className="text-[11px] text-slate-400">London, UK • £240 / week</p>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
                      <div className="w-[98%] h-full bg-gradient-to-r from-indigo-500 to-pink-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Ecosystem Grid */}
      <section className="w-full py-28 bg-[#040812] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400">
              The Platform Modules
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-5 text-white tracking-tight leading-tight">
              An All-in-One Settlement Ecosystem
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Decoupled modules designed to cover the entire relocation lifecycle from application submission to community discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Intelligent Search */}
            <div className="glass-card glass-card-hover flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-xl text-indigo-400 font-bold shadow-lg shadow-indigo-500/5 shrink-0">
                🔍
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Intelligent Search</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Interactive Mapbox discovery, spatial clustering filters, commute polygons, and real-time housing matching tailored to your campus or office.
                </p>
              </div>
            </div>

            {/* Card 2: Relocation checklists */}
            <div className="glass-card glass-card-hover flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-xl text-purple-400 font-bold shadow-lg shadow-purple-500/5 shrink-0">
                ✈️
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Relocation Engine</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Step-by-step visa guide checklists, local service bookings, tax compliance guides, and dynamic document vaults for smooth pre-arrival planning.
                </p>
              </div>
            </div>

            {/* Card 3: Community marketplace */}
            <div className="glass-card glass-card-hover flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/25 flex items-center justify-center text-xl text-pink-400 font-bold shadow-lg shadow-pink-500/5 shrink-0">
                🤝
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Settlement Circles</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Connect with roommates matching your lifestyle, join university circles, browse localized marketplace deals, and sign up for local events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}


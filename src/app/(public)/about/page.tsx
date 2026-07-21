import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

export default function AboutStoryPage() {
  const values = [
    { title: 'Radical Transparency', desc: 'No hidden broker fees, automated legal leases, and verified property histories backed by secure data vaults.' },
    { title: 'Intelligent Settlement', desc: 'Leveraging AI-powered commute matching, relocation checklists, and automated roommate matching.' },
    { title: 'Global Inclusivity', desc: 'Empowering domestic and international students, immigrants, and families to settle down smoothly.' },
  ];

  const milestones = [
    { year: '2026', title: 'Platform Launch', desc: 'Establishing initial settlement portals and Mapbox property search connections in top university cities.' },
    { year: '2027', title: 'Relocation AI Integration', desc: 'Deploying deep visa planning assistance and direct border checklist automations.' },
    { year: '2028', title: 'Global Multi-Region expansion', desc: 'Opening active housing portals in 50+ countries supporting unified localized currencies and legal forms.' },
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 flex flex-col relative overflow-x-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-indigo-600/10 top-[-200px] left-[50%] -translate-x-[50%]" />
      <div className="glow-orb w-[400px] h-[400px] bg-purple-600/5 top-[30%] right-[-100px]" />
      <div className="glow-orb w-[500px] h-[500px] bg-pink-600/5 bottom-[10%] left-[-200px]" />

      {/* Unified Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-purple-500/25 bg-purple-500/5 px-3 py-1 rounded-full mb-6">
            <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Our Mission</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Building the Future of <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Global Human Relocation
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            We believe that moving to a new country or city shouldn&apos;t feel like a bureaucratic hurdle. Rentora AI is a unified, trust-first platform helping you find a home, align visas, coordinate settle services, and discover community circles.
          </p>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-[#040812]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400">
              Core Ideals
            </span>
            <h2 className="text-3xl font-black text-white mt-4">Our Core Commitments</h2>
            <p className="text-slate-400 mt-2">The values guiding Rentora AI as a future multi-billion dollar platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="glass-card glass-card-hover flex flex-col gap-4">
                <span className="text-indigo-400 text-3xl font-black">0{i + 1}</span>
                <h3 className="text-xl font-bold text-white">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-widest bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-purple-400">
              Strategy
            </span>
            <h2 className="text-3xl font-black text-white mt-4">Platform Evolution Roadmap</h2>
            <p className="text-slate-400 mt-2">Our strategic direction toward establishing a seamless global settlement ecosystem.</p>
          </div>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="glass-card glass-card-hover flex flex-col md:flex-row gap-6 items-start p-6 md:p-8">
                <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent shrink-0">
                  {m.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}



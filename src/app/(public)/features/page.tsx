import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

export default function FeaturesPage() {
  const categories = [
    {
      title: 'Housing Discovery',
      icon: '🏠',
      desc: 'Interactive spatial searching and safe document compliance overlays.',
      details: [
        'Commute Polygon Overlay map visual tools',
        'Spatial cluster map points and dynamic ratings',
        'Antivirus legal lease signing integration',
        'Real-time landlord verification checkers',
      ],
      cta: 'Explore Discovery',
      link: '/search',
      popular: true,
    },
    {
      title: 'Relocation Engine',
      icon: '✈️',
      desc: 'Step-by-step visa checklist planners and bank/SIM setups.',
      details: [
        'Dynamic visa checklist generator engine',
        'Antivirus document scanning & vault security',
        'Local partner booking SIM/Banking systems',
        'Moving logistic partner voucher networks',
      ],
      cta: 'Start Relocating',
      link: '/onboarding',
    },
    {
      title: 'Settlement Circles',
      icon: '🤝',
      desc: 'Roommate compatibility matching and safe localized campus circle networks.',
      details: [
        'Lifestyle Roommate matching algorithms',
        'Furniture marketplace buy/sell boards',
        'Campus circle group networking forums',
        'Local meetups event calendars',
      ],
      cta: 'Join Circles',
      link: '/register',
    }
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
      <section className="pt-24 pb-16 text-center relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 border border-indigo-500/25 bg-indigo-500/5 px-3 py-1 rounded-full mb-6">
            <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">Engineered Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight text-glow-indigo">
            The Technology Built for <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-size-200">Seamless Relocation</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Rentora AI decouples complex immigration and renting flows into intuitive settlement checkpoints, verified listings, and secure networks.
          </p>
        </div>
      </section>

      {/* Pricing-Style Feature Cards Grid */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((c, i) => (
            <div 
              key={i} 
              className={`glass-card glass-card-hover flex flex-col justify-between relative p-6 md:p-8 ${
                c.popular ? 'border-indigo-500/40 ring-1 ring-indigo-500/30 bg-slate-950/40 shadow-[0_0_50px_rgba(99,102,241,0.05)]' : ''
              }`}
            >
              {c.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-[10px] uppercase px-4 py-1.5 rounded-full tracking-widest shadow-md">
                  Core Module
                </span>
              )}

              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-2xl shadow-lg shrink-0">
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{c.title}</h3>
                </div>

                <p className="text-sm text-slate-400 mb-6 leading-relaxed min-h-[40px]">
                  {c.desc}
                </p>
                
                <hr className="border-white/5 mb-6" />

                {/* Bullet Points */}
                <ul className="space-y-4 mb-8 text-sm">
                  {c.details.map((d, di) => (
                    <li key={di} className="flex items-start gap-2.5 text-slate-300">
                      <span className="text-indigo-400 mt-1">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link 
                href={c.link} 
                className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  c.popular 
                    ? 'btn-premium btn-premium-hover text-white shadow-lg'
                    : 'border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 text-slate-300 hover:text-white'
                }`}
              >
                {c.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}



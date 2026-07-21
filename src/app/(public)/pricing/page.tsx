import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

export default function PricingPage() {
  const plans = [
    {
      name: 'Essential Tenant',
      price: '$0',
      period: 'forever',
      desc: 'Perfect for local searchers needing reliable, secure property discovery.',
      features: ['Mapbox Property search', 'Standard verified applications', 'Real-time landlord chat', 'Basic pre-arrival checklist'],
      cta: 'Search Properties',
      link: '/search',
    },
    {
      name: 'Global Settlement Pass',
      price: '$49',
      period: 'one-time pass',
      desc: 'Our flagship premium package for domestic and international relocators.',
      features: ['AI university commute matching', 'Automated visa checklist planning', 'Antivirus secure document vault', 'Roommate matching forum access', 'Verified partner transport vouchers'],
      cta: 'Relocate Seamlessly',
      link: '/onboarding',
      popular: true,
    },
    {
      name: 'SaaS Property Provider',
      price: '$29',
      period: 'per month',
      desc: 'Enterprise dashboard tools for landlords, developers, and builders.',
      features: ['Unified listing multi-calendar', 'Automated tenant screen checker', 'Lease dynamic agreement generation', 'Online rent invoices & receipts', 'Analytics metrics panel feed'],
      cta: 'List Property Now',
      link: '/register?role=provider',
    },
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
          <div className="inline-flex items-center gap-2 border border-pink-500/25 bg-pink-500/5 px-3 py-1 rounded-full mb-6">
            <span className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">Simple Pricing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Predictable & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Transparent Pricing</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            No hidden administration or broker fees. Choose the tier matching your journey, whether you are relocating or managing lists of properties.
          </p>
        </div>
      </section>

      {/* Plan Cards Grid */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`glass-card glass-card-hover flex flex-col justify-between relative p-6 md:p-8 ${
                p.popular ? 'border-indigo-500/40 ring-1 ring-indigo-500/30 bg-slate-950/40 shadow-[0_0_50px_rgba(99,102,241,0.05)]' : ''
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-[10px] uppercase px-4 py-1.5 rounded-full tracking-widest shadow-md">
                  Most Popular Pass
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-extrabold text-white">{p.price}</span>
                  <span className="text-sm text-slate-500">/{p.period}</span>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed min-h-[40px]">{p.desc}</p>
                
                <hr className="border-white/5 mb-6" />

                <ul className="space-y-4 mb-8 text-sm">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-slate-300">
                      <span className="text-indigo-400">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={p.link} 
                className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  p.popular 
                    ? 'btn-premium btn-premium-hover text-white shadow-lg'
                    : 'border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 text-slate-300 hover:text-white'
                }`}
              >
                {p.cta}
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


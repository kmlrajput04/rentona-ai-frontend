'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

const channels = [
  {
    icon: '💬',
    color: 'indigo',
    title: 'Live Support Chat',
    desc: 'Talk to our AI-powered support agents and human specialists in real-time.',
    action: 'Open Chat',
    href: '#chat',
  },
  {
    icon: '📧',
    color: 'purple',
    title: 'Email Us',
    desc: 'Send detailed enquiries to our team. We respond within 24 hours.',
    action: 'hello@rentora.ai',
    href: 'mailto:hello@rentora.ai',
  },
  {
    icon: '📞',
    color: 'pink',
    title: 'Schedule a Call',
    desc: 'Book a 30-minute discovery call with our enterprise or partnerships team.',
    action: 'Book a Slot',
    href: '#schedule',
  },
];

const offices = [
  { city: 'London', address: '1 Canada Square, Canary Wharf, E14 5AB', flag: '🇬🇧' },
  { city: 'Dubai', address: 'Level 22, DIFC Gate Tower, Dubai, UAE', flag: '🇦🇪' },
  { city: 'Singapore', address: '1 Raffles Place, Tower 2, Singapore 048616', flag: '🇸🇬' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Unified Header */}
      <Header />


      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(99,102,241,0.15)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium tracking-wide uppercase">Response time under 2 hours</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
            We&apos;d Love to{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Whether you&apos;re a prospective tenant, a property provider, an institutional partner, or a developer — our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((c) => (
            <div
              key={c.title}
              className="glass-card glass-card-hover flex flex-col gap-4 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-${c.color}-500/10 border border-${c.color}-500/20 flex items-center justify-center text-2xl`}>
                {c.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
              <Link
                href={c.href}
                className={`mt-auto inline-flex items-center gap-2 text-sm font-medium text-${c.color}-400 hover:text-${c.color}-300 transition-colors`}
              >
                {c.action} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Offices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
            <p className="text-slate-400 text-sm mb-8">Fill in the form and our team will get back to you within one business day.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thank you for reaching out. A member of our team will reply to <strong className="text-white">{form.email}</strong> shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none"
                  >
                    <option value="">Select a topic...</option>
                    <option value="support">General Support</option>
                    <option value="enterprise">Enterprise Partnership</option>
                    <option value="provider">Provider Onboarding</option>
                    <option value="press">Press & Media</option>
                    <option value="technical">Technical / API</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-premium btn-premium-hover w-full py-3.5 font-semibold tracking-wide"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right column: offices + info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Global Offices</h2>
              <div className="flex flex-col gap-4">
                {offices.map((o) => (
                  <div key={o.city} className="glass-card flex items-start gap-4">
                    <span className="text-3xl mt-0.5">{o.flag}</span>
                    <div>
                      <p className="font-semibold text-white">{o.city}</p>
                      <p className="text-slate-400 text-sm mt-0.5">{o.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card border border-indigo-500/20 bg-indigo-950/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏢</span>
                <h3 className="font-semibold text-white text-lg">Enterprise Partnerships</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Looking to integrate Rentora AI into your university, corporate relocation, or institutional housing programme? Our enterprise team can design a bespoke integration plan.
              </p>
              <a href="mailto:enterprise@rentora.ai" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                enterprise@rentora.ai →
              </a>
            </div>

            <div className="glass-card border border-purple-500/20 bg-purple-950/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📰</span>
                <h3 className="font-semibold text-white text-lg">Press & Media</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                For media enquiries, interview requests, or press kit access, contact our communications team directly.
              </p>
              <a href="mailto:press@rentora.ai" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                press@rentora.ai →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Global Footer */}
      <Footer />
    </main>
  );
}


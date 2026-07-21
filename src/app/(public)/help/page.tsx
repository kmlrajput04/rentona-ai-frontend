import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

export const metadata: Metadata = {
  title: 'Help Centre — Rentora AI Support Hub',
  description:
    'Find answers, guides, video tutorials, and direct support for all Rentora AI features including housing search, visa compliance, lease signing, and relocation tools.',
};

const categories = [
  {
    icon: '🔍',
    color: 'indigo',
    title: 'Property Search & Discovery',
    count: 18,
    articles: [
      'How to use commute zone filters on the map',
      'Setting up saved search alerts',
      'Understanding AI property match scores',
      'Filtering by pet-friendly and furnished listings',
    ],
  },
  {
    icon: '✈️',
    color: 'purple',
    title: 'Relocation & Visa Compliance',
    count: 24,
    articles: [
      'Generating your personalised visa checklist',
      'Uploading and managing compliance documents',
      'Setting compliance deadline reminders',
      'Connecting with a relocation advisor',
    ],
  },
  {
    icon: '📄',
    color: 'pink',
    title: 'Lease Signing & Payments',
    count: 15,
    articles: [
      'How to digitally sign your lease agreement',
      'Understanding the escrow payment system',
      'Setting up recurring rent payments',
      'Requesting a payment receipt or invoice',
    ],
  },
  {
    icon: '🤝',
    color: 'emerald',
    title: 'Settlement Circles & Community',
    count: 12,
    articles: [
      'Joining your university settlement circle',
      'Finding verified roommates near your property',
      'Posting to the local marketplace',
      'Reporting inappropriate community content',
    ],
  },
  {
    icon: '👤',
    color: 'orange',
    title: 'Account & Profile',
    count: 20,
    articles: [
      'Updating your identity verification documents',
      'Changing your notification preferences',
      'Connecting social accounts for roommate matching',
      'Deleting or deactivating your account',
    ],
  },
  {
    icon: '🏢',
    color: 'cyan',
    title: 'Provider & Landlord Tools',
    count: 16,
    articles: [
      'Creating and publishing your first listing',
      'Managing booking requests and screening',
      'Setting up automated lease generation',
      'Accessing your payout and finance dashboard',
    ],
  },
];

const popularArticles = [
  { title: 'How to complete identity verification (KYC)', category: 'Account & Profile', time: '3 min' },
  { title: 'Understanding the Rentora AI lease agreement template', category: 'Lease Signing', time: '5 min' },
  { title: 'What happens to my deposit if the listing is cancelled?', category: 'Payments', time: '4 min' },
  { title: 'How does the AI match score work?', category: 'Property Search', time: '4 min' },
  { title: 'Can I rent without a UK credit history?', category: 'Relocation', time: '6 min' },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Unified Header */}
      <Header />


      {/* Hero Search */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            How can we{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              help you?
            </span>
          </h1>
          <p className="text-slate-400 mb-8 text-lg font-light">
            Search our knowledge base of {categories.reduce((a, c) => a + c.count, 0)}+ articles, guides, and tutorials.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 text-lg">
              🔍
            </div>
            <input
              type="search"
              placeholder="Search for articles, guides, or topics..."
              className="w-full bg-slate-900/80 border border-white/15 rounded-2xl pl-12 pr-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all text-base shadow-xl shadow-black/30"
            />
            <button className="absolute inset-y-0 right-2 my-2 btn-premium px-5 text-sm rounded-xl font-semibold">
              Search
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-2 justify-center mt-5">
            {['Lease signing', 'KYC verification', 'Visa checklist', 'Payment setup', 'Roommate matching'].map((q) => (
              <button
                key={q}
                className="px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-400 text-xs font-medium hover:border-indigo-500/40 hover:text-white transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-xl px-6 py-4 flex items-center gap-4 border border-emerald-500/20 bg-emerald-950/10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <div className="flex-1">
              <span className="text-emerald-400 font-semibold text-sm">All systems operational</span>
              <span className="text-slate-400 text-sm ml-2">— Platform uptime 99.97% this month</span>
            </div>
            <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">View status page →</a>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="glass-card glass-card-hover flex flex-col gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-${cat.color}-500/10 border border-${cat.color}-500/20 flex items-center justify-center text-xl`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{cat.title}</h3>
                    <p className={`text-xs text-${cat.color}-400`}>{cat.count} articles</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {cat.articles.map((a) => (
                    <li key={a}>
                      <a href="#" className="text-sm text-slate-400 hover:text-indigo-300 transition-colors flex items-center gap-2">
                        <span className="text-slate-600">›</span>
                        {a}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="#" className={`text-xs font-medium text-${cat.color}-400 hover:text-${cat.color}-300 transition-colors mt-auto`}>
                  View all {cat.count} articles →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Most Read Articles</h2>
          <div className="glass-panel rounded-2xl overflow-hidden">
            {popularArticles.map((article, i) => (
              <a
                key={article.title}
                href="#"
                className={`flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-all ${i < popularArticles.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <span className="text-slate-600 font-mono text-sm w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium hover:text-indigo-300 transition-colors">{article.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{article.category}</p>
                </div>
                <span className="text-slate-600 text-xs flex-shrink-0">{article.time} read</span>
                <span className="text-slate-600 text-sm">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Can&apos;t Find Your Answer?</h2>
            <p className="text-slate-400">Our support team is available 24/7 to help with any questions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="glass-card text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl">💬</div>
              <h3 className="font-semibold text-white">Live Chat</h3>
              <p className="text-slate-400 text-sm">AI-powered instant support with human escalation.</p>
              <button className="btn-premium w-full py-2.5 text-sm font-semibold mt-auto">Start Chat</button>
            </div>
            <div className="glass-card text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">📧</div>
              <h3 className="font-semibold text-white">Email Support</h3>
              <p className="text-slate-400 text-sm">Detailed responses within 4 business hours.</p>
              <a href="mailto:support@rentora.ai" className="border border-white/15 bg-white/5 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all w-full text-center mt-auto">
                Send Email
              </a>
            </div>
            <div className="glass-card text-center flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xl">📅</div>
              <h3 className="font-semibold text-white">Book a Call</h3>
              <p className="text-slate-400 text-sm">30-min support call with a platform specialist.</p>
              <Link href="/contact" className="border border-white/15 bg-white/5 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all w-full text-center mt-auto">
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}


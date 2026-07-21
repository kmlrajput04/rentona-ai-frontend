import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';

export const metadata: Metadata = {
  title: 'Rentora AI Insights — Housing, Relocation & AI Industry Blog',
  description:
    'Explore expert insights on AI-powered housing, international relocation, visa compliance, settlement strategies, and PropTech trends from the Rentora AI team.',
};

const categories = ['All', 'Relocation', 'Housing Market', 'AI & PropTech', 'Visa & Compliance', 'Community', 'Product Updates'];

const featuredPost = {
  slug: 'ai-powered-relocation-2026',
  category: 'AI & PropTech',
  title: 'How AI Is Rewriting the Rules of Global Relocation in 2026',
  excerpt:
    'From intelligent commute polygon matching to automated visa checklist generation, artificial intelligence is fundamentally transforming how students and professionals find their next home abroad.',
  author: 'Kamal Hassan',
  authorRole: 'CTO, Rentora AI',
  date: 'May 28, 2026',
  readTime: '8 min read',
  gradient: 'from-indigo-500/20 to-purple-500/20',
};

const posts = [
  {
    slug: 'renting-as-international-student-uk',
    category: 'Relocation',
    title: 'The Ultimate Guide to Renting as an International Student in the UK',
    excerpt: 'Navigating the UK rental market without a credit history or UK guarantor can feel impossible. Here is how Rentora AI removes every barrier.',
    date: 'May 22, 2026',
    readTime: '6 min read',
    color: 'indigo',
  },
  {
    slug: 'dubai-rental-trends-2026',
    category: 'Housing Market',
    title: 'Dubai Rental Market Trends Every Expat Needs to Know in 2026',
    excerpt: "DIFC, JLT, and Business Bay are seeing unprecedented demand. Here's the data-driven breakdown of where to rent and what to pay.",
    date: 'May 15, 2026',
    readTime: '5 min read',
    color: 'purple',
  },
  {
    slug: 'digital-lease-signing-explained',
    category: 'Product Updates',
    title: 'Introducing Digital Lease Signing: Fully Binding, Zero Paper',
    excerpt: 'Our new DocuFlow integration brings cryptographically signed lease agreements directly inside the Rentora AI dashboard.',
    date: 'May 10, 2026',
    readTime: '4 min read',
    color: 'pink',
  },
  {
    slug: 'uk-visa-tier-4-checklist',
    category: 'Visa & Compliance',
    title: 'UK Tier-4 Student Visa: The 2026 Compliance Checklist',
    excerpt: 'Everything you need to submit the perfect Tier-4 application — documents, biometrics, timelines, and the common traps to avoid.',
    date: 'May 5, 2026',
    readTime: '7 min read',
    color: 'emerald',
  },
  {
    slug: 'settlement-circles-launch',
    category: 'Community',
    title: 'Settlement Circles: Finding Your Tribe When You Move Abroad',
    excerpt: 'Our newest feature connects you to verified communities, roommate matches, and local marketplaces from day one of your arrival.',
    date: 'April 28, 2026',
    readTime: '5 min read',
    color: 'orange',
  },
  {
    slug: 'mapbox-commute-zones',
    category: 'AI & PropTech',
    title: 'Spatial Commute Zones: The Technology Behind Our Map Search',
    excerpt: "We use Mapbox isochrone APIs and custom polygon rendering to show you exactly which neighbourhoods are within your commute threshold.",
    date: 'April 20, 2026',
    readTime: '6 min read',
    color: 'cyan',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Unified Header */}
      <Header />


      {/* Hero */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.12)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Rentora{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg font-light">
            Expert perspectives on AI-powered housing, relocation intelligence, and the future of global settlement.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-slate-900/60 border border-white/10 text-slate-400 hover:border-indigo-500/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${featuredPost.gradient} p-8 md:p-12 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:shadow-xl group-hover:shadow-indigo-500/10`}>
              <div className="absolute inset-0 bg-[#020617]/70 backdrop-blur-sm rounded-2xl" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Featured — {featuredPost.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-indigo-100 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-sm font-bold text-indigo-300">
                      {featuredPost.author.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{featuredPost.author}</p>
                      <p className="text-slate-500 text-xs">{featuredPost.authorRole}</p>
                    </div>
                    <span className="ml-auto text-slate-500 text-xs">{featuredPost.date} · {featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-full max-w-sm aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                    <span className="text-6xl">🤖</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Latest Articles</h2>
            <span className="text-slate-500 text-sm">{posts.length} articles</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="glass-card glass-card-hover h-full flex flex-col gap-4 group-hover:border-indigo-500/30 transition-all duration-300">
                  <div className={`w-full aspect-video rounded-lg bg-gradient-to-br from-${post.color}-500/10 to-${post.color}-900/10 border border-${post.color}-500/10 flex items-center justify-center`}>
                    <span className={`text-xs font-semibold uppercase tracking-wider text-${post.color}-400`}>{post.category}</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <span className={`text-xs font-semibold uppercase tracking-wider text-${post.color}-400`}>{post.category}</span>
                    <h3 className="text-base font-semibold text-white leading-snug group-hover:text-indigo-200 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-slate-500 text-xs">{post.date}</span>
                    <span className="text-slate-500 text-xs">{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <button className="border border-white/15 bg-white/5 backdrop-blur-md text-white font-medium px-8 py-3 rounded-xl hover:bg-white/10 hover:border-white/25 transition-all text-sm">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Stay Ahead of the Curve</h2>
          <p className="text-slate-400 mb-8">Get weekly insights on housing, relocation, and AI trends delivered directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
            <button className="btn-premium px-6 py-3 text-sm font-semibold whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-slate-600 text-xs mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}


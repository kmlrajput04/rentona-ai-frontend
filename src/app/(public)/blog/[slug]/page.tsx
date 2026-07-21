import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return {
    title: `${title} — Rentora AI Insights`,
    description: `Read the full article on ${title} from the Rentora AI insights blog.`,
  };
}

const relatedPosts = [
  { slug: 'dubai-rental-trends-2026', title: 'Dubai Rental Market Trends Every Expat Needs to Know in 2026', category: 'Housing Market' },
  { slug: 'settlement-circles-launch', title: 'Settlement Circles: Finding Your Tribe When You Move Abroad', category: 'Community' },
  { slug: 'mapbox-commute-zones', title: 'Spatial Commute Zones: The Technology Behind Our Map Search', category: 'AI & PropTech' },
];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Nav */}
      <header className="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-[#020617]/85">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            RENTORA AI
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
            <Link href="/features" className="hover:text-indigo-400 transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-indigo-400 transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-indigo-400 transition-colors">About</Link>
            <Link href="/blog" className="text-indigo-400">Insights</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm hover:text-white transition-colors text-slate-300">Sign In</Link>
            <Link href="/register" className="btn-premium text-sm px-5 py-2.5">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-xs">{title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            AI & PropTech
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            {title}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            From intelligent commute polygon matching to automated visa checklist generation, artificial intelligence is fundamentally transforming how students and professionals find their next home abroad.
          </p>

          {/* Author + Meta */}
          <div className="flex items-center gap-4 py-5 border-y border-white/8">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-300">
              KH
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Kamal Hassan</p>
              <p className="text-slate-500 text-xs">CTO, Rentora AI</p>
            </div>
            <div className="text-right text-xs text-slate-500">
              <p>May 28, 2026</p>
              <p>8 min read</p>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <button className="w-8 h-8 rounded-lg bg-slate-900/60 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all text-sm" title="Share">
                🔗
              </button>
              <button className="w-8 h-8 rounded-lg bg-slate-900/60 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all text-sm" title="Bookmark">
                🔖
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-white/10 flex items-center justify-center mb-10 overflow-hidden">
          <div className="text-center">
            <span className="text-6xl block mb-2">🤖</span>
            <span className="text-slate-500 text-sm">AI-Powered Relocation</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              The year 2026 has brought a fundamental shift in how people approach international relocation. No longer is moving to a new country a chaotic, paper-heavy ordeal. AI-powered platforms like Rentora AI are orchestrating every element of the journey — from the moment a visa is approved to the first night in a new home.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The End of the Blind Search</h2>
            <p>
              Traditional property portals present an overwhelming wall of listings with no context. Rentora AI&apos;s spatial search engine changes this entirely. By leveraging Mapbox isochrone APIs, we render commute polygons that show users exactly which neighbourhoods fall within their acceptable travel time to a university campus, corporate office, or hospital.
            </p>
            <p>
              The result is a curated, spatially intelligent shortlist that eliminates 80% of irrelevant properties before the user even reads a description.
            </p>

            <div className="glass-card border-l-4 border-indigo-500 rounded-none rounded-r-xl my-8">
              <p className="text-indigo-200 font-medium italic">
                &ldquo;With commute zone filtering, our average user reduces time-to-shortlist from 4 hours to under 20 minutes.&rdquo;
              </p>
              <p className="text-slate-500 text-sm mt-2">— Internal Rentora AI Platform Metrics, Q1 2026</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Automated Visa Compliance</h2>
            <p>
              One of the most anxiety-inducing aspects of relocation is navigating immigration requirements. Our AI compliance engine reads the specific visa conditions of over 40 visa types across 18 countries and generates a personalised checklist — complete with deadlines, document templates, and embassy contact details.
            </p>
            <p>
              Users receive proactive reminders 30, 14, and 7 days before each deadline. When a compliance requirement is fulfilled, the system automatically updates the relocation progress tracker in the dashboard.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Settlement Circle Effect</h2>
            <p>
              Finding housing is only the beginning. The real challenge of relocation is building a life — finding your community, accessing local services, and adapting to a new culture. Rentora AI&apos;s Settlement Circles feature connects new arrivals with verified communities based on their university, workplace, nationality, and interests.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">What Comes Next</h2>
            <p>
              The roadmap for 2026 includes predictive rental pricing models trained on macroeconomic data, multimodal property search via voice and image, and AI-generated lease summaries that flag unusual clauses before signing.
            </p>
            <p>
              The future of global housing is not just digital — it is intelligent. And Rentora AI is building it.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/8">
          {['AI', 'PropTech', 'Relocation', 'Housing', 'Visa Compliance', '2026 Trends'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-slate-900/60 border border-white/10 text-slate-400 text-xs font-medium hover:border-indigo-500/40 hover:text-white cursor-pointer transition-all">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="glass-card mt-8 flex items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-300 text-xl flex-shrink-0">
            KH
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Kamal Hassan</p>
            <p className="text-slate-500 text-xs mb-2">CTO & Co-Founder, Rentora AI</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kamal leads the technical strategy and AI engineering at Rentora AI. With a background in applied machine learning and PropTech, he is passionate about making global relocation accessible and intelligent for everyone.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Related Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="glass-card glass-card-hover h-full flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">{post.category}</span>
                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-indigo-200 transition-colors line-clamp-3">{post.title}</h3>
                  <span className="text-xs text-indigo-400 mt-auto group-hover:text-indigo-300 transition-colors">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
          ← Back to All Insights
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-10 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bold text-white">RENTORA AI</span>
          <span>© 2026 Rentora Technologies Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

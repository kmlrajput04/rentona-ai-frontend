'use client';

import React, { useState } from 'react';
import { useUIStore } from '@/store/use-ui-store';

export default function UserCommunityPage() {
  const { addToast } = useUIStore();
  const [activeTab, setActiveTab] = useState<'all' | 'roommates' | 'marketplace' | 'events'>('all');
  const [newPostContent, setNewPostContent] = useState('');

  const posts = [
    {
      id: 1,
      author: 'David Chen',
      role: 'Student at Northeastern',
      category: 'roommates',
      title: 'Looking for a flatmate in Symphony Road Fenway area!',
      content: 'Quiet, clean, loves cooking, and respects studying hours. Compatability interest: Gym, Gaming, Cooking. PM me if interested!',
      likes: 12,
      comments: 3,
      date: '3 hours ago',
    },
    {
      id: 2,
      author: 'Emily Watson',
      role: 'Professional at Pfizer',
      category: 'marketplace',
      title: 'Premium study desk and chair set for sale ($80)',
      content: 'Excellent condition Ikea study desk and adjustable workspace chair. Available for pickup next weekend. Escrow deposit accepted!',
      likes: 5,
      comments: 1,
      date: '1 day ago',
    },
    {
      id: 3,
      author: 'Marcus Aurelius',
      role: 'Campus Organizer',
      category: 'events',
      title: 'International Student Meetup 2026',
      content: 'Join us at the Fenway Commons park for coffee, pastries, and networking. A great way to meet fellow relocators!',
      likes: 24,
      comments: 8,
      date: '2 days ago',
    },
  ];

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent) return;
    
    addToast({ type: 'success', message: 'Publishing community update post...' });
    setNewPostContent('');
  };

  const filteredPosts = activeTab === 'all' ? posts : posts.filter((p) => p.category === activeTab);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Community Settlement</h1>
        <p className="text-sm text-slate-400 font-light">Connect with fellow relocators, match roommates, trade furniture, and discover local student circles.</p>
      </div>

      {/* Tabs selectors */}
      <div className="flex gap-2 border-b border-white/5 pb-4 overflow-x-auto">
        {(['all', 'roommates', 'marketplace', 'events'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-all ${
              activeTab === tab 
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 border border-white/5 text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab === 'all' ? '🌐 Feed Stream' : tab === 'roommates' ? '👥 Roommate Finder' : tab === 'marketplace' ? '🏷️ Marketplace' : '📅 Local Events'}
          </button>
        ))}
      </div>

      <div className="grid-12">
        {/* Main Feed */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          {/* Quick post creation box */}
          <div className="glass-card">
            <h3 className="text-sm font-bold text-white mb-3">Share a Post on the Circle Feed</h3>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="What is on your mind? Share a relocation inquiry, roommate listing, or marketplace deal..."
                className="w-full h-24 p-4 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 resize-none"
              />
              <div className="flex justify-end">
                <button type="submit" className="btn-premium py-2 text-xs">
                  Publish Post
                </button>
              </div>
            </form>
          </div>

          {/* Posts list */}
          <div className="space-y-6">
            {filteredPosts.map((p) => (
              <div key={p.id} className="glass-card flex flex-col gap-4">
                <div className="flex-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-xs text-indigo-400">
                      {p.author[0]}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0">{p.author}</h4>
                      <p className="text-[10px] text-slate-500 mb-0">{p.role} • {p.date}</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{p.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-0">{p.content}</p>
                </div>

                <hr className="border-white/5" />

                <div className="flex items-center gap-6 text-[11px] text-slate-500">
                  <button 
                    onClick={() => addToast({ type: 'success', message: 'Liked community post!' })}
                    className="hover:text-indigo-400 font-semibold"
                  >
                    👍 {p.likes} Likes
                  </button>
                  <span>💬 {p.comments} Comments</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Small interest groups */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <h2 className="text-xl font-bold text-white mb-0">Active Campus Circles</h2>
          
          <div className="glass-card space-y-4 text-xs">
            <div className="flex-between p-3 bg-slate-900/60 border border-white/5 rounded-lg">
              <div>
                <div className="font-bold text-slate-200">🎓 Northeastern Relocators</div>
                <div className="text-[10px] text-slate-500">2.4k members active</div>
              </div>
              <button 
                onClick={() => addToast({ type: 'success', message: 'Joined NEU circle!' })}
                className="px-3 py-1 bg-slate-950 hover:bg-slate-900 border border-white/10 text-[9px] text-slate-300 font-bold uppercase rounded"
              >
                Join
              </button>
            </div>

            <div className="flex-between p-3 bg-slate-900/60 border border-white/5 rounded-lg">
              <div>
                <div className="font-bold text-slate-200">🍎 Harvard Settlement Pass</div>
                <div className="text-[10px] text-slate-500">4.1k members active</div>
              </div>
              <button 
                onClick={() => addToast({ type: 'success', message: 'Joined Harvard circle!' })}
                className="px-3 py-1 bg-slate-950 hover:bg-slate-900 border border-white/10 text-[9px] text-slate-300 font-bold uppercase rounded"
              >
                Join
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}

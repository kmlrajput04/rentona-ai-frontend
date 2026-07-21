'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  // Mock property object matching layout guidelines
  const property = {
    id: id || 'prop-1',
    title: 'The Indigo Vista Lofts',
    description: 'A premium, luxury flat designed specifically for university students and relocating professionals. Featuring satin steel appliances, a modern workspace desk, fast Wi-Fi integrations, and large windows allowing ample sunlight. Backed by Rentora AI legal lease templates for immediate compliance checking.',
    price: 1850,
    currency: 'USD',
    city: 'Boston',
    address: '144 Symphony Road, Fenway, Boston, MA 02115',
    rating: 4.9,
    reviews: 42,
    host: {
      name: 'Sarah Peterson',
      verified: true,
      role: 'Super Host Provider',
      responseRate: '100%',
    },
    amenities: [
      '⚡ High-Speed Wi-Fi',
      '🧺 In-unit Washer & Dryer',
      '🏊 Rooftop Swimming Pool',
      '🏋️ Modern Fitness Center',
      '🔒 24/7 Security Patrol',
      '🍳 Stainless Steel Kitchen',
    ],
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200">
      {/* Property Details Header */}
      <header className="h-20 border-b border-white/10 backdrop-blur-md sticky top-0 z-40 bg-[#020617]/85 flex-between px-8">
        <Link href="/search" className="text-sm text-slate-400 hover:text-white transition-colors">
          ← Back to Discovery Map
        </Link>
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          RENTORA AI
        </span>
        <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-xs text-indigo-400">
          RA
        </div>
      </header>

      {/* Main Container */}
      <div className="container py-12 grid-12">
        
        {/* Left Side: Property Content */}
        <section className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* Gallery mock container */}
          <div className="w-full h-96 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center text-slate-600 text-lg font-semibold relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-left">
              <span className="text-xs uppercase bg-indigo-600 text-white font-bold px-3 py-1 rounded-full">
                Featured Space
              </span>
              <h1 className="text-3xl font-extrabold text-white mt-3 mb-1">{property.title}</h1>
              <p className="text-xs text-slate-400">{property.address}</p>
            </div>
            🏡 Mock space photo gallery slider
          </div>

          {/* Description */}
          <div className="glass-card">
            <h2 className="text-xl font-bold text-white mb-4">About the Workspace Loft</h2>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="glass-card">
            <h2 className="text-xl font-bold text-white mb-4">Key Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-white/5">
                  {a}
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Right Side: Host card and Booking checkout widgets */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Booking reservation card */}
          <div className="glass-card border-indigo-500/30">
            <div className="flex-between mb-4">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wide">Monthly Lease</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-black text-white">${property.price}</span>
                  <span className="text-xs text-slate-500">/month</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-amber-400">★ 4.9</span>
                <div className="text-[10px] text-slate-500">42 ratings</div>
              </div>
            </div>

            <hr className="border-white/5 my-4" />

            <div className="space-y-4 mb-6">
              <div className="p-3 bg-[#020617]/80 border border-white/10 rounded-lg text-xs">
                <div className="text-slate-500 uppercase tracking-widest font-semibold mb-1">Standard Duration</div>
                <div className="text-slate-200">12 Months (August 1, 2026 - July 31, 2027)</div>
              </div>
              <div className="p-3 bg-[#020617]/80 border border-white/10 rounded-lg text-xs">
                <div className="text-slate-500 uppercase tracking-widest font-semibold mb-1">Refundable Security Deposit</div>
                <div className="text-slate-200">${property.price} USD (Paid on lease sign)</div>
              </div>
            </div>

            <Link href={`/booking/${property.id}`} className="w-full text-center py-4 btn-premium font-semibold text-sm rounded-lg block">
              Reserve Workspace Lease
            </Link>
          </div>

          {/* Host details */}
          <div className="glass-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-bold text-indigo-400">
                SP
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white mb-0">{property.host.name}</h3>
                  <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                    ✓ Verified
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-0">{property.host.role} • response rate {property.host.responseRate}</p>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </main>
  );
}

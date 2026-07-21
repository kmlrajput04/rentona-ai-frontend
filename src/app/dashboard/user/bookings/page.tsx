'use client';

import React from 'react';
import { useUIStore } from '@/store/use-ui-store';

export default function UserBookingsPage() {
  const { addToast } = useUIStore();

  const leases = [
    {
      id: 'lease-101',
      title: 'The Indigo Vista Lofts',
      address: '144 Symphony Road, Fenway, Boston, MA',
      term: '12 Months (August 1, 2026 - July 31, 2027)',
      rent: '$1,850.00 / month',
      deposit: '$1,850.00 (Escrow Cleared)',
      status: 'active',
      host: 'Sarah Peterson',
    }
  ];

  const handleDownload = () => {
    addToast({ type: 'success', message: 'Downloading signed tenancy_agreement_boston.pdf...' });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">My Bookings & Leases</h1>
        <p className="text-sm text-slate-400 font-light">View active rental agreements, transaction terms, and sign histories.</p>
      </div>

      <div className="space-y-6">
        {leases.map((l) => (
          <div key={l.id} className="glass-card space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Lease Active
                </span>
                <h2 className="text-2xl font-bold text-white mt-3 mb-1">{l.title}</h2>
                <p className="text-xs text-slate-400">{l.address}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 uppercase tracking-wide">ID: {l.id}</span>
                <div className="text-sm text-slate-300 font-medium mt-1">Host: {l.host}</div>
              </div>
            </div>

            <hr className="border-white/5" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-lg text-xs space-y-1">
                <div className="text-slate-500 font-bold uppercase tracking-wider">Tenancy Term</div>
                <div className="text-slate-200 font-medium">{l.term}</div>
              </div>
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-lg text-xs space-y-1">
                <div className="text-slate-500 font-bold uppercase tracking-wider">Monthly Rent Billing</div>
                <div className="text-slate-200 font-medium">{l.rent}</div>
              </div>
              <div className="p-4 bg-slate-900/60 border border-white/5 rounded-lg text-xs space-y-1">
                <div className="text-slate-500 font-bold uppercase tracking-wider">Security Deposit (Escrow)</div>
                <div className="text-slate-200 font-medium">{l.deposit}</div>
              </div>
            </div>

            <hr className="border-white/5" />

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-xs text-slate-400">
                🛡️ This agreement is digitally signed and bound by localized state landlord-tenant regulations.
              </div>
              <button 
                onClick={handleDownload}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 border border-white/10 hover:bg-slate-900/60 text-slate-300 text-xs font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                📥 Download Signed PDF Agreement
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

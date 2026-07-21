'use client';

import React from 'react';
import { useUIStore } from '@/store/use-ui-store';

export default function UserPaymentsPage() {
  const { addToast } = useUIStore();

  const transactions = [
    { id: 'txn_001', type: 'Refundable Security Deposit', date: 'May 31, 2026', amount: '$1,850.00', status: 'escrowed', method: '•••• 4111' },
    { id: 'txn_002', type: 'First Month Rent Advance', date: 'May 31, 2026', amount: '$1,850.00', status: 'cleared', method: '•••• 4111' },
  ];

  const handleDownloadInvoice = (id: string) => {
    addToast({ type: 'success', message: `Downloading receipt for ${id}...` });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Invoices & Payments</h1>
        <p className="text-sm text-slate-400 font-light">Manage secure credit card configurations, invoice logs, and payment histories.</p>
      </div>

      <div className="grid-12">
        {/* Payment history list */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          <h2 className="text-xl font-bold text-white mb-0">Transaction Logs</h2>
          
          <div className="glass-card p-0 overflow-hidden border-white/5">
            <div className="p-6 border-b border-white/5 bg-slate-900/40 text-xs font-bold text-slate-500 grid grid-cols-12 uppercase tracking-wider">
              <div className="col-span-4">Payment Category</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2 text-right">Amount</div>
              <div className="col-span-2 text-center">Status</div>
              <div className="col-span-2 text-right">Action</div>
            </div>
            
            <div className="divide-y divide-white/5">
              {transactions.map((t) => (
                <div key={t.id} className="p-6 grid grid-cols-12 items-center text-xs">
                  <div className="col-span-4">
                    <div className="font-semibold text-slate-200">{t.type}</div>
                    <div className="text-[10px] text-slate-500 mt-1">ID: {t.id} • {t.method}</div>
                  </div>
                  <div className="col-span-2 text-slate-400 font-medium">{t.date}</div>
                  <div className="col-span-2 text-right text-white font-bold">{t.amount}</div>
                  <div className="col-span-2 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold uppercase tracking-widest text-[9px] ${
                      t.status === 'escrowed' 
                        ? 'bg-indigo-500/10 border border-indigo-500/25 text-indigo-400' 
                        : 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400'
                    }`}>
                      {t.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <button 
                      onClick={() => handleDownloadInvoice(t.id)}
                      className="px-3 py-1.5 bg-slate-900 border border-white/10 hover:bg-slate-900/60 rounded text-[10px] text-slate-300 font-semibold"
                    >
                      Receipt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right side payment method widgets */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <h2 className="text-xl font-bold text-white mb-0">Active Card</h2>
          
          <div className="glass-card bg-gradient-to-br from-indigo-800 to-purple-800 border-none relative overflow-hidden flex flex-col justify-between min-h-48 text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl rounded-full" />
            
            <div className="flex-between">
              <span className="text-xs uppercase tracking-widest font-black opacity-80">Rentora AI Escrow</span>
              <span className="text-xl font-bold">💳</span>
            </div>
            
            <div className="text-xl tracking-widest font-mono py-6">
              •••• •••• •••• 4111
            </div>

            <div className="flex-between text-[10px]">
              <div>
                <div className="opacity-60 uppercase font-semibold">Cardholder</div>
                <div className="font-bold text-slate-200">JOHNATHAN DOE</div>
              </div>
              <div className="text-right">
                <div className="opacity-60 uppercase font-semibold">Expiry</div>
                <div className="font-bold text-slate-200">12/28</div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}

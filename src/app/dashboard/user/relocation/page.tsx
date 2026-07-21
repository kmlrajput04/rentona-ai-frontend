'use client';

import React, { useState } from 'react';
import { useUIStore } from '@/store/use-ui-store';

export default function UserRelocationPage() {
  const { addToast } = useUIStore();

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Biometric Visa ID Upload', category: 'visa', desc: 'Secure biometric identification submission and approval checks.', completed: true },
    { id: 2, title: 'Pay Escrow Tenancy Deposit', category: 'finance', desc: 'Settle secure refundable rental deposit to secure Symphony Road lofts.', completed: true },
    { id: 3, title: 'Purchase Travel Health Insurance', category: 'travel', desc: 'Upload mandatory coverage policies matching student visas.', completed: false },
    { id: 4, title: 'Schedule Local Airport Shuttle Pickup', category: 'travel', desc: 'Coordinate timing metrics with Rentora verified transport partners.', completed: false },
    { id: 5, title: 'Submit local university admission letter', category: 'visa', desc: 'Verify enrollment details with Partner University lists.', completed: true },
    { id: 6, title: 'Register local regional tax account', category: 'compliance', desc: 'Configure automatic taxation guidelines with local laws.', completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          const nextState = !t.completed;
          addToast({ 
            type: 'info', 
            message: `Task "${t.title}" marked as ${nextState ? 'Completed' : 'Pending'}.` 
          });
          return { ...t, completed: nextState };
        }
        return t;
      })
    );
  };

  const progressPercentage = Math.round((tasks.filter((t) => t.completed).length / tasks.length) * 100);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Relocation Checklist</h1>
        <p className="text-sm text-slate-400 font-light">Follow checkpoints to clear visas, complete settlement profiles, and book local services.</p>
      </div>

      {/* Progress visual card */}
      <div className="glass-card flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-indigo-500/20 bg-gradient-to-r from-indigo-950/20 to-slate-900/40">
        <div className="flex-1 w-full space-y-3">
          <div className="flex-between">
            <span className="text-sm font-semibold text-white">Settlement Progress</span>
            <span className="text-sm font-bold text-indigo-400">{progressPercentage}% Complete</span>
          </div>
          <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid-12">
        {/* Main Tasks List */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          <h2 className="text-xl font-bold text-white mb-0">Checklist Checkpoints</h2>
          
          <div className="space-y-4">
            {tasks.map((t) => (
              <div 
                key={t.id} 
                onClick={() => toggleTask(t.id)}
                className={`glass-card flex gap-4 items-start cursor-pointer hover:border-indigo-500/30 transition-all ${
                  t.completed ? 'border-white/5 opacity-70' : 'border-indigo-500/10'
                }`}
              >
                <div className={`w-6 h-6 rounded-md border flex items-center justify-center font-bold text-xs mt-0.5 transition-all ${
                  t.completed ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-[#020617] border-white/20 text-transparent'
                }`}>
                  ✓
                </div>
                <div className="flex-1">
                  <div className="flex-between">
                    <h3 className={`text-base font-bold mb-1 ${t.completed ? 'line-through text-slate-500' : 'text-white'}`}>
                      {t.title}
                    </h3>
                    <span className="text-[10px] bg-slate-900 border border-white/10 text-slate-400 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {t.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light mb-0">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local services widget */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <h2 className="text-xl font-bold text-white mb-0">Verified Partner Services</h2>
          
          <div className="glass-card space-y-6">
            <div className="p-4 bg-slate-900/60 border border-white/5 rounded-lg text-xs space-y-2">
              <span className="text-2xl">📱</span>
              <h3 className="text-sm font-bold text-white">Direct SIM Card Setup</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                Secure pre-activated mobile numbers with 50GB data plans, dispatched prior to your flights.
              </p>
              <button 
                onClick={() => addToast({ type: 'success', message: 'Requesting Mobile SIM dispatch...' })}
                className="w-full text-center py-2.5 bg-slate-950 border border-white/10 hover:bg-slate-900 text-slate-300 font-semibold rounded text-[10px] block"
              >
                Dispatch Mobile SIM
              </button>
            </div>

            <div className="p-4 bg-slate-900/60 border border-white/5 rounded-lg text-xs space-y-2">
              <span className="text-2xl">🏦</span>
              <h3 className="text-sm font-bold text-white">Escrow Bank Setup</h3>
              <p className="text-slate-500 leading-relaxed font-light">
                Open fully compliant, certified checking accounts for local currency exchanges and rent transfers.
              </p>
              <button 
                onClick={() => addToast({ type: 'success', message: 'Opening Escrow Banking details...' })}
                className="w-full text-center py-2.5 bg-slate-950 border border-white/10 hover:bg-slate-900 text-slate-300 font-semibold rounded text-[10px] block"
              >
                Configure Escrow Bank
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useAuthStore } from '@/store/use-auth-store';
import { useUIStore } from '@/store/use-ui-store';

export default function UserProfileSettingsPage() {
  const { user, updateUser } = useAuthStore();
  const { addToast } = useUIStore();

  const [name, setName] = useState(user?.name || 'JOHNATHAN DOE');
  const [email, setEmail] = useState(user?.email || 'resident@rentora.ai');
  const [phone, setPhone] = useState('+1 (617) 555-0199');

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ name, email });
    addToast({ type: 'success', message: 'User settings profile updated successfully!' });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Security Profile Settings</h1>
        <p className="text-sm text-slate-400 font-light">Configure encryption preferences, notification settings, and verify credentials.</p>
      </div>

      <div className="grid-12">
        {/* Core Settings Form */}
        <section className="col-span-12 lg:col-span-8 space-y-6">
          <div className="glass-card">
            <h2 className="text-xl font-bold text-white mb-4">Personal Details</h2>
            <hr className="border-white/5 mb-6" />

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Contact Mobile Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button type="submit" className="btn-premium py-3 text-xs px-6">
                  Save Settings Profile
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Security verification checklist */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <h2 className="text-xl font-bold text-white mb-0">Identity & Verification</h2>
          
          <div className="glass-card space-y-6 text-xs">
            <div className="p-4 bg-slate-900/60 border border-white/5 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-200">Legal Document Vault Check</div>
                <div className="text-[10px] text-emerald-400 mt-1">✓ Complete & Approved</div>
              </div>
              <span className="text-xl">🛡️</span>
            </div>

            <div className="p-4 bg-slate-900/60 border border-white/5 rounded-lg flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-200">Biometric Verification</div>
                <div className="text-[10px] text-emerald-400 mt-1">✓ Verified matching passport</div>
              </div>
              <span className="text-xl">👤</span>
            </div>
            
            <div className="text-[10px] text-slate-500 leading-relaxed text-center">
              Your profile is verified inside Rentora global immigration compliance engines.
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}

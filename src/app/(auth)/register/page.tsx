'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore, UserProfile } from '@/store/use-auth-store';
import { useUIStore } from '@/store/use-ui-store';

export default function RegisterPage() {
  const router = useRouter();
  const { login, setLoading, isLoading } = useAuthStore();
  const { addToast } = useUIStore();

  const [role, setRole] = useState<'tenant' | 'provider'>('tenant');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      addToast({ type: 'error', message: 'Please fill in all registration fields.' });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const mockUser: UserProfile = {
        id: crypto.randomUUID(),
        email: email,
        name: name,
        role: role,
        verified: false, // Starts unverified to trigger onboarding verifications!
      };

      login(mockUser, 'mock-jwt-token-registered');
      addToast({ type: 'success', message: 'Successfully registered account!' });
      
      // Redirect directly to the onboarding wizard
      router.push('/onboarding');
    }, 1000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden px-4">
      {/* Visual glowing backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="glass-card max-w-md w-full relative z-10">
        <div className="text-center mb-6">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            RENTORA AI
          </Link>
          <h2 className="text-xl font-semibold text-white mt-4">Create Account</h2>
          <p className="text-xs text-slate-500 mt-1">Begin your global relocation or listing management journey</p>
        </div>

        {/* Tab Role Selector */}
        <div className="flex bg-[#020617]/60 border border-white/10 rounded-lg p-1.5 mb-6">
          <button
            onClick={() => setRole('tenant')}
            className={`flex-1 text-center py-2.5 text-xs font-semibold rounded-md transition-all ${
              role === 'tenant' 
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            👤 Tenant / Relocator
          </button>
          <button
            onClick={() => setRole('provider')}
            className={`flex-1 text-center py-2.5 text-xs font-semibold rounded-md transition-all ${
              role === 'provider' 
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            🏢 Property Provider
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
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
              placeholder="e.g. resident@campus.edu"
              className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 8 characters"
              className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 btn-premium font-medium text-sm rounded-lg"
          >
            {isLoading ? 'Creating Account...' : 'Register Account'}
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-slate-500">
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-400 hover:underline font-semibold">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}

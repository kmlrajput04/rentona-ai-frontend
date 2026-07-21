'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore, UserProfile } from '@/store/use-auth-store';
import { useUIStore } from '@/store/use-ui-store';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/dashboard/user';
  
  const { login, setLoading, isLoading } = useAuthStore();
  const { addToast } = useUIStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      addToast({ type: 'error', message: 'Please provide email and password credentials.' });
      return;
    }

    setLoading(true);

    // Mock successful authentication for testing
    setTimeout(() => {
      const mockUser: UserProfile = {
        id: crypto.randomUUID(),
        email: email,
        name: email.split('@')[0].toUpperCase(),
        role: 'tenant',
        verified: true,
      };
      
      login(mockUser, 'mock-jwt-token-12345');
      addToast({ type: 'success', message: 'Successfully signed in Rentora session!' });
      router.push(returnUrl);
    }, 1000);
  };

  // Development bypass logins for fast developer sweeps
  const handleQuickLogin = (role: 'tenant' | 'provider' | 'manager' | 'super-admin') => {
    setLoading(true);
    setTimeout(() => {
      const mockUser: UserProfile = {
        id: crypto.randomUUID(),
        email: `${role}@rentora.ai`,
        name: `${role.toUpperCase()} COMPANION`,
        role,
        verified: true,
      };

      login(mockUser, `mock-jwt-token-${role}`);
      addToast({ type: 'success', message: `Signed in as ${role.toUpperCase()}!` });
      
      if (role === 'provider') {
        router.push('/dashboard/provider');
      } else if (role === 'manager') {
        router.push('/dashboard/manager');
      } else if (role === 'super-admin') {
        router.push('/super-admin');
      } else {
        router.push('/dashboard/user');
      }
    }, 500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden px-4">
      {/* Visual glowing backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
      
      <div className="glass-card max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            RENTORA AI
          </Link>
          <h2 className="text-xl font-semibold text-white mt-4">Welcome Back</h2>
          <p className="text-xs text-slate-500 mt-1">Sign in with credentials to manage your ecosystem</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. resident@rentora.ai"
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
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-slate-500">
              <input type="checkbox" className="accent-indigo-500" />
              <span>Remember me</span>
            </label>
            <Link href="/reset-password" className="text-indigo-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 btn-premium font-medium text-sm rounded-lg"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-slate-500">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-indigo-400 hover:underline font-semibold">
            Create Account
          </Link>
        </div>

        {/* Developer Sandbox Logins */}
        <hr className="border-white/5 my-6" />
        <div>
          <div className="text-[10px] text-center text-slate-600 uppercase font-black tracking-widest mb-3">
            Developer Sandbox Logins
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleQuickLogin('tenant')}
              className="px-3 py-2 bg-slate-900/40 border border-white/5 rounded text-xs hover:bg-slate-900 text-indigo-300 font-medium"
            >
              👤 Tenant Authed
            </button>
            <button 
              onClick={() => handleQuickLogin('provider')}
              className="px-3 py-2 bg-slate-900/40 border border-white/5 rounded text-xs hover:bg-slate-900 text-purple-300 font-medium"
            >
              🏢 Provider Authed
            </button>
            <button 
              onClick={() => handleQuickLogin('manager')}
              className="px-3 py-2 bg-slate-900/40 border border-white/5 rounded text-xs hover:bg-slate-900 text-emerald-300 font-medium"
            >
              ⚙️ Manager Authed
            </button>
            <button 
              onClick={() => handleQuickLogin('super-admin')}
              className="px-3 py-2 bg-slate-900/40 border border-white/5 rounded text-xs hover:bg-slate-900 text-pink-300 font-medium"
            >
              ⚡ Super Admin Authed
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        Loading Rentora Session...
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}


'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type Step = 'email' | 'otp' | 'password' | 'success';

export default function ResetPasswordPage() {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      if (next) (next as HTMLInputElement).focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      if (prev) (prev as HTMLInputElement).focus();
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.1)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.005)_1px,_transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Logo */}
      <Link href="/" className="mb-8 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent tracking-tight relative z-10">
        RENTORA AI
      </Link>

      {/* Card */}
      <div className="glass-panel rounded-3xl p-8 w-full max-w-md relative z-10 shadow-2xl shadow-black/40">
        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-8">
          {(['email', 'otp', 'password'] as Step[]).map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all ${
                step === s ? 'bg-indigo-600 text-white' :
                ['email', 'otp', 'password'].indexOf(step) > i ? 'bg-emerald-600 text-white' :
                'bg-slate-800 text-slate-500'
              }`}>
                {['email', 'otp', 'password'].indexOf(step) > i ? '✓' : i + 1}
              </div>
              {i < 2 && (
                <div className={`flex-1 h-0.5 rounded-full transition-all ${
                  ['email', 'otp', 'password'].indexOf(step) > i ? 'bg-emerald-600' : 'bg-slate-800'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step: Email */}
        {step === 'email' && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
              <p className="text-slate-400 text-sm">Enter your registered email address and we&apos;ll send you a verification code.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              </div>
              <button
                onClick={() => email && setStep('otp')}
                className="btn-premium btn-premium-hover w-full py-3.5 font-semibold"
              >
                Send Verification Code
              </button>
            </div>
          </div>
        )}

        {/* Step: OTP */}
        {step === 'otp' && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">Enter Code</h1>
              <p className="text-slate-400 text-sm">We sent a 6-digit code to <strong className="text-white">{email}</strong>. Enter it below.</p>
            </div>
            <div className="flex gap-2 justify-center mb-6">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  className="w-12 h-14 bg-slate-900/60 border border-white/10 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setStep('password')}
                className="btn-premium btn-premium-hover w-full py-3.5 font-semibold"
              >
                Verify Code
              </button>
              <button className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                Didn&apos;t receive it? Resend code
              </button>
            </div>
          </div>
        )}

        {/* Step: New Password */}
        {step === 'password' && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">New Password</h1>
              <p className="text-slate-400 text-sm">Create a new secure password for your account.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 12 characters"
                    className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-white transition-colors text-sm"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {/* Strength bar */}
                {password.length > 0 && (
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4].map((s) => (
                      <div
                        key={s}
                        className={`flex-1 h-1 rounded-full transition-all ${
                          password.length < 6 && s === 1 ? 'bg-red-500' :
                          password.length < 10 && s <= 2 ? 'bg-orange-500' :
                          password.length < 14 && s <= 3 ? 'bg-yellow-500' :
                          password.length >= 14 ? 'bg-emerald-500' : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat new password"
                  className={`bg-slate-900/60 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                    confirmPassword && confirmPassword !== password
                      ? 'border-red-500/60 focus:ring-red-500/20 focus:border-red-500/60'
                      : 'border-white/10 focus:border-indigo-500/60 focus:ring-indigo-500/20'
                  }`}
                />
                {confirmPassword && confirmPassword !== password && (
                  <p className="text-red-400 text-xs">Passwords do not match</p>
                )}
              </div>
              <button
                onClick={() => password === confirmPassword && password.length >= 8 && setStep('success')}
                className="btn-premium btn-premium-hover w-full py-3.5 font-semibold"
              >
                Set New Password
              </button>
            </div>
          </div>
        )}

        {/* Step: Success */}
        {step === 'success' && (
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-4xl mx-auto mb-5">
              ✅
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Password Reset!</h1>
            <p className="text-slate-400 text-sm mb-8">Your password has been successfully updated. You can now sign in with your new credentials.</p>
            <Link href="/login" className="btn-premium btn-premium-hover inline-block px-8 py-3.5 font-semibold">
              Sign In Now
            </Link>
          </div>
        )}

        {/* Footer Links */}
        {step !== 'success' && (
          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
              ← Back to Sign In
            </Link>
          </div>
        )}
      </div>

      <p className="text-slate-700 text-xs mt-6 relative z-10">
        © 2026 Rentora Technologies Ltd. All rights reserved.
      </p>
    </main>
  );
}

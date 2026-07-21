'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useUIStore } from '@/store/use-ui-store';

export default function BookingCheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { addToast } = useUIStore();
  const [step, setStep] = useState(1);
  const [signature, setSignature] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleSignLease = () => {
    if (!signature) {
      addToast({ type: 'warning', message: 'Please type your full legal signature to bind the lease.' });
      return;
    }
    setStep(2);
    addToast({ type: 'success', message: 'Lease signed. Proceed to secure deposit payment.' });
  };

  const handlePayment = () => {
    if (!cardNumber || cardNumber.length < 16) {
      addToast({ type: 'warning', message: 'Please provide a valid secure card number configuration.' });
      return;
    }
    setStep(3);
    addToast({ type: 'success', message: 'Deposit invoice cleared! Booking complete.' });
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 py-12 px-4 flex flex-col justify-between">
      {/* Checkout progress headers */}
      <div className="max-w-xl w-full mx-auto text-center mb-8">
        <Link href={`/properties/${id}`} className="text-xs text-slate-500 hover:text-white transition-colors block mb-4">
          ← Cancel Booking
        </Link>
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          SECURE TRANSACTIONS
        </span>
        <h2 className="text-2xl font-bold text-white mt-1">Lease Application Checkout</h2>
      </div>

      {/* Main card box */}
      <div className="max-w-lg w-full mx-auto glass-card min-h-[380px] flex flex-col justify-between">
        
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Step 1: Sign Digital Agreement</h3>
              <p className="text-xs text-slate-500">Review legal parameters of Rentora AI lease contracts.</p>
            </div>
            
            <div className="p-4 bg-slate-900/60 border border-white/10 rounded-lg text-xs leading-relaxed max-h-40 overflow-y-auto space-y-3">
              <p className="text-white font-bold mb-1">Standard Tenancy Lease Agreement</p>
              <p>
                1. PARTIES: This agreement binds the Tenant to the Landlord for occupancy of Symphony Road Boston lofts.
              </p>
              <p>
                2. SECURITY DEPOSIT: A refundable deposit equal to 1 month rent ($1,850) is held inside secure escrow accounts.
              </p>
              <p>
                3. MAINTENANCE: The landlord warrants the structural state and supplies in-unit amenities.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Type Legal Name as Digital Signature
              </label>
              <input
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="e.g. JOHNATHAN DOE"
                className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 font-serif italic text-lg"
              />
            </div>

            <button
              onClick={handleSignLease}
              className="w-full py-3.5 btn-premium font-semibold text-sm rounded-lg"
            >
              Sign & Lock Tenancy Agreement
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Step 2: Clear Deposit Escrow Invoice</h3>
              <p className="text-xs text-slate-500">Provide secure debit or credit card details to complete payment.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  defaultValue={signature}
                  className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Secure Card Number
                </label>
                <input
                  type="text"
                  maxLength={16}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4111 2222 3333 4444"
                  className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-3.5 btn-premium font-semibold text-sm rounded-lg"
            >
              Pay Refundable Deposit ($1,850.00)
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-center py-6">
            <span className="text-5xl">🎉</span>
            <div>
              <h3 className="text-lg font-bold text-white">Lease Form Registered Successfully!</h3>
              <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
                Your deposit is securely escrowed. Rentora AI has notified your host Sarah. All communication channels are now open.
              </p>
            </div>

            <Link href="/dashboard/user/bookings" className="w-full py-3.5 btn-premium font-semibold text-sm rounded-lg block text-center">
              Open Lease Dashboard
            </Link>
          </div>
        )}

      </div>

      <div className="text-center text-xs text-slate-600">
        🛡️ Bank-grade SSL dynamic transaction checkout.
      </div>
    </main>
  );
}

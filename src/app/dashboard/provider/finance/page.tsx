'use client';

import React from 'react';

/**
 * Provider — Finance & Revenue Page
 * Revenue tracking, payout history, and financial analytics.
 */

export default function ProviderFinancePage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Finance & Revenue</h1>
        <p className="text-sm text-slate-500 mt-1">Track your earnings, payouts, and financial performance</p>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Revenue', value: '£0.00', icon: '💰', trend: '+0%' },
          { label: 'Monthly Earnings', value: '£0.00', icon: '📈', trend: '+0%' },
          { label: 'Pending Payouts', value: '£0.00', icon: '⏳', trend: '' },
          { label: 'Occupancy Rate', value: '0%', icon: '📊', trend: '' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              {stat.trend && (
                <span className="text-[11px] font-medium text-emerald-400">{stat.trend}</span>
              )}
            </div>
            <p className="text-xs text-slate-500">{stat.label}</p>
            <p className="text-xl font-bold text-slate-100 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="glass-card">
        <h3 className="text-sm font-semibold text-slate-200 mb-4">Revenue Overview</h3>
        <div className="h-64 flex items-center justify-center text-slate-600">
          <div className="text-center">
            <span className="text-4xl block mb-2">📉</span>
            <p className="text-sm">Revenue chart will appear once you have earnings data</p>
          </div>
        </div>
      </div>

      {/* Payout History */}
      <div className="glass-card">
        <h3 className="text-sm font-semibold text-slate-200 mb-4">Payout History</h3>
        <div className="text-center py-8 text-slate-500 text-sm">
          No payouts yet. Your payout history will be displayed here.
        </div>
      </div>
    </div>
  );
}

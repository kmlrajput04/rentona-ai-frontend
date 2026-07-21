'use client';

import React from 'react';

/**
 * Provider — Bookings Management Page
 * View and manage tenant booking requests and agreements.
 */

export default function ProviderBookingsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Booking Requests</h1>
        <p className="text-sm text-slate-500 mt-1">Review and manage tenant booking applications</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Pending Review', value: '0', icon: '📋', color: 'text-amber-400' },
          { label: 'Approved', value: '0', icon: '✅', color: 'text-emerald-400' },
          { label: 'Active Leases', value: '0', icon: '🔑', color: 'text-indigo-400' },
          { label: 'Completed', value: '0', icon: '🎉', color: 'text-purple-400' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-xs text-slate-500">{stat.label}</p>
                <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      <div className="glass-card text-center py-16">
        <span className="text-5xl mb-4 block">📭</span>
        <h3 className="text-lg font-semibold text-slate-200 mb-2">No Booking Requests</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Booking requests from tenants will appear here. Make sure your properties are listed and visible.
        </p>
      </div>
    </div>
  );
}

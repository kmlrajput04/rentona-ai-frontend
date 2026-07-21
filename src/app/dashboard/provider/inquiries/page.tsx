'use client';

import React from 'react';

/**
 * Provider — Inquiries Page
 * Manage tenant inquiries, questions, and communication.
 */

export default function ProviderInquiriesPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Tenant Inquiries</h1>
        <p className="text-sm text-slate-500 mt-1">Respond to tenant questions and property inquiries</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'New Inquiries', value: '0', icon: '📩', color: 'text-sky-400' },
          { label: 'Awaiting Response', value: '0', icon: '⏰', color: 'text-amber-400' },
          { label: 'Resolved', value: '0', icon: '✅', color: 'text-emerald-400' },
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
        <span className="text-5xl mb-4 block">💬</span>
        <h3 className="text-lg font-semibold text-slate-200 mb-2">No Inquiries Yet</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          When tenants send inquiries about your properties, they will appear here. Keep your listings detailed to reduce common questions.
        </p>
      </div>
    </div>
  );
}

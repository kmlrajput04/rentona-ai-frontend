'use client';

import React from 'react';

/**
 * Provider — Properties Management Page
 * Manage listings, view property stats, and edit property details.
 */

export default function ProviderPropertiesPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Property Listings</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your rental properties and listings</p>
        </div>
        <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-md shadow-indigo-500/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40 transition-all">
          + Add Property
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Properties', value: '0', icon: '🏠' },
          { label: 'Active Listings', value: '0', icon: '✅' },
          { label: 'Avg. Rating', value: '—', icon: '⭐' },
          { label: 'Total Views', value: '0', icon: '👁️' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-xs text-slate-500">{stat.label}</p>
                <p className="text-xl font-bold text-slate-100">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      <div className="glass-card text-center py-16">
        <span className="text-5xl mb-4 block">🏗️</span>
        <h3 className="text-lg font-semibold text-slate-200 mb-2">No Properties Yet</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Start by adding your first property listing. Your properties will appear here once published.
        </p>
      </div>
    </div>
  );
}

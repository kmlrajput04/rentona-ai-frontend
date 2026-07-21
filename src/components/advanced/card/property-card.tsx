'use client';

import React from 'react';

export interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  currency?: string;
  location: string;
  imageUrl?: string;
  rating?: number;
  reviewsCount?: number;
  amenities?: string[];
  status?: 'available' | 'pending' | 'booked';
  onView?: (id: string) => void;
  className?: string;
}

const statusBadge: Record<string, string> = {
  available: 'bg-emerald-500/15 text-emerald-400',
  pending: 'bg-amber-500/15 text-amber-400',
  booked: 'bg-red-500/15 text-red-400',
};

export default function PropertyCard({
  id, title, price, currency = 'GBP', location, imageUrl, rating, reviewsCount, amenities = [], status = 'available', onView, className = '',
}: PropertyCardProps) {
  return (
    <div
      className={`glass-card glass-card-hover group cursor-pointer ${className}`}
      onClick={() => onView?.(id)}
    >
      {/* Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-slate-800">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600 text-3xl">🏠</div>
        )}
        <span className={`absolute top-3 right-3 px-2 py-0.5 text-[10px] font-semibold rounded-full capitalize ${statusBadge[status]}`}>
          {status}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-slate-100 truncate mb-1">{title}</h3>
      <p className="text-xs text-slate-500 mb-3">📍 {location}</p>

      {/* Amenities */}
      {amenities.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {amenities.slice(0, 3).map((a) => (
            <span key={a} className="px-2 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded-md border border-slate-700">
              {a}
            </span>
          ))}
          {amenities.length > 3 && (
            <span className="text-[10px] text-slate-500">+{amenities.length - 3} more</span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {new Intl.NumberFormat('en-GB', { style: 'currency', currency }).format(price)}
          <span className="text-xs text-slate-500 font-normal">/mo</span>
        </div>
        {rating !== undefined && (
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <span className="text-amber-400">★</span>
            {rating.toFixed(1)}
            {reviewsCount !== undefined && <span className="text-slate-600">({reviewsCount})</span>}
          </div>
        )}
      </div>
    </div>
  );
}

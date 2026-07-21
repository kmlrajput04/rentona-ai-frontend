'use client';

/**
 * Dashboard Feature Module
 * Provider analytics, stats computation, and dashboard widget helpers.
 */

// Dashboard stat card data
export interface DashboardStat {
  label: string;
  value: string | number;
  change?: number; // percentage change
  trend?: 'up' | 'down' | 'neutral';
  icon: string;
}

// Format trend display
export function formatTrend(change: number): { text: string; color: string } {
  if (change > 0) return { text: `+${change.toFixed(1)}%`, color: 'text-emerald-400' };
  if (change < 0) return { text: `${change.toFixed(1)}%`, color: 'text-red-400' };
  return { text: '0%', color: 'text-slate-500' };
}

// Calculate occupancy rate
export function calculateOccupancyRate(occupied: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((occupied / total) * 100);
}

// Generate date range labels for charts
export function generateMonthLabels(count: number = 6): string[] {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const now = new Date();
  const labels: string[] = [];
  
  for (let i = count - 1; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    labels.push(months[date.getMonth()]);
  }
  
  return labels;
}

// Provider dashboard metric types
export interface ProviderMetrics {
  totalProperties: number;
  activeListings: number;
  totalBookings: number;
  monthlyRevenue: number;
  occupancyRate: number;
  avgRating: number;
  pendingInquiries: number;
}

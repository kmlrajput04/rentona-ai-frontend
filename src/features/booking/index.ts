'use client';

/**
 * Booking Feature Module
 * Agreement form logic, booking status tracking, and lease management.
 */

import type { Booking } from '@/types/models';

// Booking status flow
export const BOOKING_STATUS_FLOW = ['submitted', 'screening', 'approved', 'signed', 'completed'] as const;

export type BookingStatus = typeof BOOKING_STATUS_FLOW[number];

// Get booking progress percentage
export function getBookingProgress(status: BookingStatus): number {
  const index = BOOKING_STATUS_FLOW.indexOf(status);
  if (index === -1) return 0;
  return Math.round(((index + 1) / BOOKING_STATUS_FLOW.length) * 100);
}

// Get status display info
export function getStatusInfo(status: BookingStatus): { label: string; color: string; icon: string } {
  const map: Record<BookingStatus, { label: string; color: string; icon: string }> = {
    submitted: { label: 'Submitted', color: 'sky', icon: '📝' },
    screening: { label: 'Under Review', color: 'amber', icon: '🔍' },
    approved: { label: 'Approved', color: 'emerald', icon: '✅' },
    signed: { label: 'Agreement Signed', color: 'indigo', icon: '✍️' },
    completed: { label: 'Completed', color: 'purple', icon: '🎉' },
  };
  return map[status];
}

// Calculate total lease cost
export function calculateLeaseCost(booking: Booking): number {
  const start = new Date(booking.startDate);
  const end = new Date(booking.endDate);
  const months = Math.max(1, Math.round((end.getTime() - start.getTime()) / (30 * 24 * 60 * 60 * 1000)));
  return booking.depositAmount + (booking.monthlyRent * months);
}

// Check if a booking is active
export function isBookingActive(booking: Booking): boolean {
  return ['submitted', 'screening', 'approved', 'signed'].includes(booking.status);
}

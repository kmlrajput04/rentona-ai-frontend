import { api } from './api-client';
import type { Booking } from '@/types/models';
import type { CreateBookingRequest, CreateBookingResponse, ApiResponse } from '@/types/api';

/**
 * Bookings Service — Agreements, lease tracking, and booking management.
 */

// Create a new booking request
export function createBooking(data: CreateBookingRequest) {
  return api.post<CreateBookingResponse>('/bookings', data);
}

// Get all bookings for current user
export function getUserBookings() {
  return api.get<ApiResponse<Booking[]>>('/bookings');
}

// Get a specific booking by ID
export function getBookingById(id: string) {
  return api.get<{ booking: Booking }>(`/bookings/${id}`);
}

// Update booking status (provider action)
export function updateBookingStatus(id: string, status: Booking['status']) {
  return api.put<{ booking: Booking }>(`/bookings/${id}/status`, { status });
}

// Cancel a booking
export function cancelBooking(id: string) {
  return api.post<{ message: string }>(`/bookings/${id}/cancel`);
}

// Get provider bookings
export function getProviderBookings() {
  return api.get<ApiResponse<Booking[]>>('/bookings/provider');
}

// Download lease agreement PDF
export function downloadAgreement(bookingId: string) {
  return api.get<Blob>(`/bookings/${bookingId}/agreement`, {
    responseType: 'blob',
  });
}

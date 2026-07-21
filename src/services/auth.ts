import { api } from './api-client';
import type { LoginResponse, RefreshTokenResponse } from '@/types/api';

/**
 * Auth Service — Token/Session API endpoints
 */

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role?: 'tenant' | 'provider';
}

export interface ResetPasswordPayload {
  email: string;
}

// Login with email and password
export function loginUser(payload: LoginPayload) {
  return api.post<LoginResponse>('/auth/login', payload);
}

// Register a new user
export function registerUser(payload: RegisterPayload) {
  return api.post<LoginResponse>('/auth/register', payload);
}

// Request password reset email
export function requestPasswordReset(payload: ResetPasswordPayload) {
  return api.post<{ message: string }>('/auth/reset-password', payload);
}

// Verify email with token
export function verifyEmail(token: string) {
  return api.post<{ message: string }>('/auth/verify-email', { token });
}

// Fetch current user profile from access token
export function fetchCurrentUser() {
  return api.get<{ user: LoginResponse['user'] }>('/auth/me');
}

// Logout and invalidate refresh token cookie
export function logoutUser() {
  return api.post<{ message: string }>('/auth/logout');
}

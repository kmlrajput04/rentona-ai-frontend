'use client';

/**
 * Auth Feature Module
 * JWT session management, login/register form logic, and auth guards.
 */

export { useAuthStore } from '@/store/use-auth-store';

// Auth guard hook for protecting routes
export function useRequireAuth() {
  const { useAuthStore } = require('@/store/use-auth-store');
  const store = useAuthStore();
  
  return {
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    user: store.user,
  };
}

// Role-based access helper
export function hasRole(userRole: string | undefined, allowedRoles: string[]): boolean {
  if (!userRole) return false;
  return allowedRoles.includes(userRole);
}

// Session validation helper
export function isSessionExpired(expiresAt: number): boolean {
  return Date.now() >= expiresAt * 1000;
}

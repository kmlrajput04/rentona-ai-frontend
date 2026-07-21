/**
 * Rentora AI — Zustand Store Type Definitions
 */

import type { UserProfile } from '@/store/use-auth-store';
import type { ToastMessage } from '@/store/use-ui-store';

// Auth Store State
export interface AuthStoreState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: UserProfile, token: string) => void;
  logout: () => void;
  updateUser: (updates: Partial<UserProfile>) => void;
  setLoading: (loading: boolean) => void;
}

// UI Store State
export interface UIStoreState {
  theme: 'dark' | 'light';
  sidebarOpen: boolean;
  activeModalId: string | null;
  toasts: ToastMessage[];
  toggleTheme: () => void;
  setSidebarOpen: (open: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

// Search Store State
export interface SearchStoreState {
  query: string;
  city: string;
  minPrice: number;
  maxPrice: number;
  rooms: number | null;
  amenities: string[];
  propertyType: string;
  sortBy: 'price_asc' | 'price_desc' | 'rating' | 'newest';
  mapCenter: [number, number];
  mapZoom: number;
  viewMode: 'list' | 'map' | 'split';
  setQuery: (query: string) => void;
  setCity: (city: string) => void;
  setPriceRange: (min: number, max: number) => void;
  setRooms: (rooms: number | null) => void;
  toggleAmenity: (amenity: string) => void;
  setPropertyType: (type: string) => void;
  setSortBy: (sort: SearchStoreState['sortBy']) => void;
  setViewMode: (mode: SearchStoreState['viewMode']) => void;
  resetFilters: () => void;
}

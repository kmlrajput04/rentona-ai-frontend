import { create } from 'zustand';
import { setLocalAccessToken } from '@/services/api-client';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'tenant' | 'provider' | 'manager' | 'super-admin';
  verified: boolean;
  avatarUrl?: string;
  preferences?: Record<string, any>;
}

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: UserProfile, token: string) => void;
  logout: () => void;
  updateUser: (updates: Partial<UserProfile>) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  
  login: (user, token) => {
    // 1. Store token in-memory in API client
    setLocalAccessToken(token);
    
    // 2. Set global Zustand state
    set({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
    
    // 3. Persist basic state safely for fast UI boots (sessionStorage is fine for SPA hydration)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('rentora_session_active', 'true');
    }
  },
  
  logout: () => {
    // 1. Wipe tokens from client headers
    setLocalAccessToken(null);
    
    // 2. Reset global Zustand state
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    
    // 3. Clear sessions storage caches
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('rentora_session_active');
    }
  },
  
  updateUser: (updates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    })),
    
  setLoading: (loading) => set({ isLoading: loading }),
}));

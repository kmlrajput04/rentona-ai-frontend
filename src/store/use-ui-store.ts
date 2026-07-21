import { create } from 'zustand';

export interface ToastMessage {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
  duration?: number;
}

interface UIState {
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

export const useUIStore = create<UIState>((set) => ({
  theme: 'dark',
  sidebarOpen: true,
  activeModalId: null,
  toasts: [],
  
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    })),
    
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  
  openModal: (modalId) => set({ activeModalId: modalId }),
  
  closeModal: () => set({ activeModalId: null }),
  
  addToast: (toast) => {
    const id = crypto.randomUUID();
    const newToast = { ...toast, id };
    
    set((state) => ({
      toasts: [...state.toasts, newToast],
    }));
    
    // Auto-remove toast after specified or default duration (3 seconds)
    const duration = toast.duration || 3000;
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, duration);
  },
  
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));

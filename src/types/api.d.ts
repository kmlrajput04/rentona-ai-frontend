import { User, Property, Booking, RelocationTask, CommunityPost } from './models';

// ==========================================
// Rentora AI API Request & Response Contracts
// ==========================================

// Global API Standard Wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  meta?: {
    currentPage?: number;
    totalPages?: number;
    totalCount?: number;
  };
}

// 1. Authentication Payloads
export interface LoginResponse {
  user: User;
  accessToken: string;
  expiresIn: number;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

// 2. Search & Listings API Criteria
export interface SearchPropertiesFilters {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  rooms?: number;
  amenities?: string[];
  bounds?: {
    ne: { lat: number; lng: number };
    sw: { lat: number; lng: number };
  };
}

export interface SearchPropertiesResponse {
  properties: Property[];
}

// 3. Bookings Transactions
export interface CreateBookingRequest {
  propertyId: string;
  startDate: string;
  endDate: string;
}

export interface CreateBookingResponse {
  booking: Booking;
}

// 4. Relocation & Settlement Checklists
export interface UpdateTaskStatusRequest {
  taskId: string;
  status: 'pending' | 'in_progress' | 'completed';
}

export interface RelocationChecklistResponse {
  checklist: RelocationChecklistResponse;
}

// 5. Community Forum Activities
export interface CreatePostRequest {
  title: string;
  content: string;
  category: 'roommates' | 'marketplace' | 'events' | 'circles' | 'general';
}

export interface CreatePostResponse {
  post: CommunityPost;
}

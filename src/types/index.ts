/**
 * Rentora AI — Common Base Types & Re-exports
 * Central type barrel file for the entire application.
 */

// Re-export all domain models
export type {
  User,
  Property,
  PropertyLocation,
  PropertyHost,
  Booking,
  RelocationTask,
  RelocationChecklist,
  CommunityPost,
} from './models';

// Re-export all API contracts
export type {
  ApiResponse,
  LoginResponse,
  RefreshTokenResponse,
  SearchPropertiesFilters,
  SearchPropertiesResponse,
  CreateBookingRequest,
  CreateBookingResponse,
  UpdateTaskStatusRequest,
  RelocationChecklistResponse,
  CreatePostRequest,
  CreatePostResponse,
} from './api';

// Common shared types
export type ID = string;

export type SortDirection = 'asc' | 'desc';

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortDir?: SortDirection;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  status: AsyncStatus;
  error: string | null;
}

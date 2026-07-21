'use client';

/**
 * Search Feature Module
 * Filter state management, map integration, and search query builders.
 */

export interface SearchFilters {
  city: string;
  minPrice: number;
  maxPrice: number;
  rooms: number | null;
  amenities: string[];
  propertyType: string;
  sortBy: 'price_asc' | 'price_desc' | 'rating' | 'newest';
}

export const defaultFilters: SearchFilters = {
  city: '',
  minPrice: 0,
  maxPrice: 10000,
  rooms: null,
  amenities: [],
  propertyType: '',
  sortBy: 'newest',
};

// Build query string from filters
export function buildSearchQuery(filters: Partial<SearchFilters>): string {
  const params = new URLSearchParams();
  
  if (filters.city) params.set('city', filters.city);
  if (filters.minPrice) params.set('minPrice', String(filters.minPrice));
  if (filters.maxPrice) params.set('maxPrice', String(filters.maxPrice));
  if (filters.rooms) params.set('rooms', String(filters.rooms));
  if (filters.amenities?.length) params.set('amenities', filters.amenities.join(','));
  if (filters.propertyType) params.set('type', filters.propertyType);
  if (filters.sortBy) params.set('sort', filters.sortBy);
  
  return params.toString();
}

// Parse URL search params back to filters
export function parseSearchParams(searchParams: URLSearchParams): Partial<SearchFilters> {
  return {
    city: searchParams.get('city') || undefined,
    minPrice: searchParams.has('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.has('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    rooms: searchParams.has('rooms') ? Number(searchParams.get('rooms')) : undefined,
    amenities: searchParams.get('amenities')?.split(',') || undefined,
    propertyType: searchParams.get('type') || undefined,
    sortBy: (searchParams.get('sort') as SearchFilters['sortBy']) || undefined,
  };
}

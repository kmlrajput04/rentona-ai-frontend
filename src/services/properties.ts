import { api } from './api-client';
import type { Property } from '@/types/models';
import type { SearchPropertiesFilters, SearchPropertiesResponse, ApiResponse } from '@/types/api';

/**
 * Properties Service — Listings search, detail, and management API calls.
 */

// Search properties with filters
export function searchProperties(filters: SearchPropertiesFilters) {
  return api.get<SearchPropertiesResponse>('/properties', {
    params: filters,
  });
}

// Get single property by ID
export function getPropertyById(id: string) {
  return api.get<{ property: Property }>(`/properties/${id}`);
}

// Get featured/recommended properties
export function getFeaturedProperties() {
  return api.get<{ properties: Property[] }>('/properties/featured');
}

// Provider: Create a new listing
export function createProperty(data: Partial<Property>) {
  return api.post<{ property: Property }>('/properties', data);
}

// Provider: Update an existing listing
export function updateProperty(id: string, data: Partial<Property>) {
  return api.put<{ property: Property }>(`/properties/${id}`, data);
}

// Provider: Delete a listing
export function deleteProperty(id: string) {
  return api.delete<{ message: string }>(`/properties/${id}`);
}

// Get properties by provider
export function getProviderProperties() {
  return api.get<ApiResponse<Property[]>>('/properties/my-listings');
}

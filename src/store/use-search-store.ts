import { create } from 'zustand';

/**
 * Search Store — Map coordinates, filter states, and search preferences.
 */

export interface MapBounds {
  ne: { lat: number; lng: number };
  sw: { lat: number; lng: number };
}

interface SearchState {
  // Query
  query: string;
  city: string;

  // Price range
  minPrice: number;
  maxPrice: number;

  // Filters
  rooms: number | null;
  amenities: string[];
  propertyType: string;
  sortBy: 'price_asc' | 'price_desc' | 'rating' | 'newest';

  // Map state
  mapCenter: [number, number]; // [lng, lat]
  mapZoom: number;
  mapBounds: MapBounds | null;

  // View mode
  viewMode: 'list' | 'map' | 'split';

  // Actions
  setQuery: (query: string) => void;
  setCity: (city: string) => void;
  setPriceRange: (min: number, max: number) => void;
  setRooms: (rooms: number | null) => void;
  toggleAmenity: (amenity: string) => void;
  setPropertyType: (type: string) => void;
  setSortBy: (sort: SearchState['sortBy']) => void;
  setMapCenter: (center: [number, number]) => void;
  setMapZoom: (zoom: number) => void;
  setMapBounds: (bounds: MapBounds | null) => void;
  setViewMode: (mode: SearchState['viewMode']) => void;
  resetFilters: () => void;
}

const defaultState = {
  query: '',
  city: '',
  minPrice: 0,
  maxPrice: 10000,
  rooms: null,
  amenities: [] as string[],
  propertyType: '',
  sortBy: 'newest' as const,
  mapCenter: [-0.1276, 51.5074] as [number, number],
  mapZoom: 12,
  mapBounds: null,
  viewMode: 'list' as const,
};

export const useSearchStore = create<SearchState>((set) => ({
  ...defaultState,

  setQuery: (query) => set({ query }),
  setCity: (city) => set({ city }),
  setPriceRange: (min, max) => set({ minPrice: min, maxPrice: max }),
  setRooms: (rooms) => set({ rooms }),
  toggleAmenity: (amenity) =>
    set((state) => ({
      amenities: state.amenities.includes(amenity)
        ? state.amenities.filter((a) => a !== amenity)
        : [...state.amenities, amenity],
    })),
  setPropertyType: (type) => set({ propertyType: type }),
  setSortBy: (sort) => set({ sortBy: sort }),
  setMapCenter: (center) => set({ mapCenter: center }),
  setMapZoom: (zoom) => set({ mapZoom: zoom }),
  setMapBounds: (bounds) => set({ mapBounds: bounds }),
  setViewMode: (mode) => set({ viewMode: mode }),
  resetFilters: () => set(defaultState),
}));

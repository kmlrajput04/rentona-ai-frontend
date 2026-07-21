'use client';

/**
 * Properties Feature Module
 * Detail page logic, gallery management, and property comparison utilities.
 */

import type { Property } from '@/types/models';

// Gallery image navigation helpers
export interface GalleryState {
  currentIndex: number;
  total: number;
}

export function nextImage(state: GalleryState): GalleryState {
  return {
    ...state,
    currentIndex: (state.currentIndex + 1) % state.total,
  };
}

export function prevImage(state: GalleryState): GalleryState {
  return {
    ...state,
    currentIndex: state.currentIndex === 0 ? state.total - 1 : state.currentIndex - 1,
  };
}

// Property comparison
export function compareProperties(a: Property, b: Property): Record<string, { a: string | number; b: string | number }> {
  return {
    price: { a: a.price, b: b.price },
    rating: { a: a.rating, b: b.rating },
    reviews: { a: a.reviewsCount, b: b.reviewsCount },
    amenities: { a: a.amenities.length, b: b.amenities.length },
  };
}

// Price per amenity calculation
export function pricePerAmenity(property: Property): number {
  if (property.amenities.length === 0) return property.price;
  return Math.round(property.price / property.amenities.length);
}

// Check if property is within a price range
export function isInPriceRange(property: Property, min: number, max: number): boolean {
  return property.price >= min && property.price <= max;
}

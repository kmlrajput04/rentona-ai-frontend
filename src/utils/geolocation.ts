/**
 * Rentora AI — Map & Geolocation Utility Helpers
 */

export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Calculate distance between two coordinates using Haversine formula.
 * Returns distance in kilometers.
 */
export function calculateDistance(point1: Coordinates, point2: Coordinates): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(point2.lat - point1.lat);
  const dLng = toRad(point2.lng - point1.lng);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(point1.lat)) * Math.cos(toRad(point2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Format distance for display.
 * @example formatDistance(0.5) → '500m'
 * @example formatDistance(3.2) → '3.2 km'
 */
export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)}m`;
  return `${km.toFixed(1)} km`;
}

/**
 * Check if a point is within a bounding box.
 */
export function isWithinBounds(
  point: Coordinates,
  bounds: { ne: Coordinates; sw: Coordinates }
): boolean {
  return (
    point.lat >= bounds.sw.lat &&
    point.lat <= bounds.ne.lat &&
    point.lng >= bounds.sw.lng &&
    point.lng <= bounds.ne.lng
  );
}

/**
 * Calculate the center of a bounding box.
 */
export function getBoundsCenter(bounds: { ne: Coordinates; sw: Coordinates }): Coordinates {
  return {
    lat: (bounds.ne.lat + bounds.sw.lat) / 2,
    lng: (bounds.ne.lng + bounds.sw.lng) / 2,
  };
}

/**
 * Sort points by distance from a reference point.
 */
export function sortByDistance<T extends { lat: number; lng: number }>(
  points: T[],
  from: Coordinates
): T[] {
  return [...points].sort((a, b) => {
    const distA = calculateDistance(from, { lat: a.lat, lng: a.lng });
    const distB = calculateDistance(from, { lat: b.lat, lng: b.lng });
    return distA - distB;
  });
}

/**
 * Get the user's current geolocation position.
 * Returns a promise that resolves to Coordinates.
 */
export function getCurrentPosition(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve({ lat: position.coords.latitude, lng: position.coords.longitude }),
      (error) => reject(error),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  });
}

'use client';

import React from 'react';

/**
 * Mapbox Custom Map Component
 * 
 * This component serves as the wrapper for Mapbox GL JS integration.
 * Requires `mapbox-gl` package and a valid MAPBOX_TOKEN environment variable.
 * 
 * Usage:
 * <MapView center={[lng, lat]} zoom={12} markers={markers} />
 */

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  label?: string;
  color?: string;
}

export interface MapViewProps {
  center?: [number, number];
  zoom?: number;
  markers?: MapMarker[];
  onMarkerClick?: (id: string) => void;
  className?: string;
  height?: string;
}

export default function MapView({
  center = [-0.1276, 51.5074], // London default
  zoom = 12,
  markers = [],
  onMarkerClick,
  className = '',
  height = '400px',
}: MapViewProps) {
  /**
   * TODO: Integrate Mapbox GL JS with useRef + useEffect pattern
   * For now, renders a placeholder map container.
   * 
   * Install: npm install mapbox-gl @types/mapbox-gl
   * Token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN
   */

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden border border-white/10 bg-slate-900 ${className}`}
      style={{ height }}
    >
      {/* Map placeholder */}
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-500">
        <span className="text-4xl">🗺️</span>
        <p className="text-sm">Map View</p>
        <p className="text-xs text-slate-600">
          Center: {center[1].toFixed(4)}, {center[0].toFixed(4)} | Zoom: {zoom}
        </p>
        {markers.length > 0 && (
          <p className="text-xs text-slate-600">{markers.length} marker(s)</p>
        )}
      </div>
    </div>
  );
}

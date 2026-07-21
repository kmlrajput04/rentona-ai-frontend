'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

/**
 * Recharts Dashboard Chart Wrappers
 * Pre-styled for the Rentora AI dark glassmorphic theme.
 */

export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface DashboardChartProps {
  data: ChartDataPoint[];
  dataKey: string;
  secondaryKey?: string;
  type?: 'area' | 'bar' | 'line';
  height?: number;
  color?: string;
  secondaryColor?: string;
  title?: string;
  className?: string;
}

const defaultGridStyle = { strokeDasharray: '3 3', stroke: 'rgba(255,255,255,0.05)' };
const defaultAxisStyle = { fill: '#64748b', fontSize: 11 };

export default function DashboardChart({
  data,
  dataKey,
  secondaryKey,
  type = 'area',
  height = 300,
  color = '#6366F1',
  secondaryColor = '#A855F7',
  title,
  className = '',
}: DashboardChartProps) {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid {...defaultGridStyle} />
            <XAxis dataKey="name" tick={defaultAxisStyle} axisLine={false} tickLine={false} />
            <YAxis tick={defaultAxisStyle} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#e2e8f0' }} />
            <Legend />
            <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
            {secondaryKey && <Bar dataKey={secondaryKey} fill={secondaryColor} radius={[4, 4, 0, 0]} />}
          </BarChart>
        );
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid {...defaultGridStyle} />
            <XAxis dataKey="name" tick={defaultAxisStyle} axisLine={false} tickLine={false} />
            <YAxis tick={defaultAxisStyle} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#e2e8f0' }} />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
            {secondaryKey && <Line type="monotone" dataKey={secondaryKey} stroke={secondaryColor} strokeWidth={2} dot={false} />}
          </LineChart>
        );
      default: // area
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid {...defaultGridStyle} />
            <XAxis dataKey="name" tick={defaultAxisStyle} axisLine={false} tickLine={false} />
            <YAxis tick={defaultAxisStyle} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, color: '#e2e8f0' }} />
            <Legend />
            <Area type="monotone" dataKey={dataKey} stroke={color} fill="url(#colorPrimary)" strokeWidth={2} />
          </AreaChart>
        );
    }
  };

  return (
    <div className={`glass-card ${className}`}>
      {title && <h3 className="text-sm font-semibold text-slate-200 mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
}

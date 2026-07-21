'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Briefcase, 
  Calendar, 
  Users, 
  TrendingUp, 
  Percent, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Plus, 
  Bell, 
  MessageSquare, 
  Eye, 
  MoreHorizontal, 
  Edit2, 
  Link2, 
  ShieldCheck, 
  Check, 
  Activity, 
  FileText, 
  DollarSign,
  TrendingDown
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function ProviderDashboardPage() {
  const [activeRole, setActiveRole] = useState('Landlord');
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Month');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Metrics data
  const metrics = [
    { 
      label: 'Total Properties', 
      value: '24', 
      change: '+12% from last month', 
      positive: true,
      icon: <Home className="w-5 h-5 text-purple-400" />,
      iconBg: 'bg-purple-500/10 border-purple-500/20'
    },
    { 
      label: 'Total Bookings', 
      value: '48', 
      change: '+18% from last month', 
      positive: true,
      icon: <Eye className="w-5 h-5 text-blue-400" />,
      iconBg: 'bg-blue-500/10 border-blue-500/20'
    },
    { 
      label: 'Total Inquiries', 
      value: '36', 
      change: '+14% from last month', 
      positive: true,
      icon: <MessageSquare className="w-5 h-5 text-amber-400" />,
      iconBg: 'bg-amber-500/10 border-amber-500/20'
    },
    { 
      label: 'Total Views', 
      value: '12,586', 
      change: '+22% from last month', 
      positive: true,
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      iconBg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    { 
      label: 'Total Earnings', 
      value: '$24,680', 
      change: '+20% from last month', 
      positive: true,
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      iconBg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    { 
      label: 'Conversion Rate', 
      value: '18.6%', 
      change: '+3.5% from last month', 
      positive: true,
      icon: <Percent className="w-5 h-5 text-indigo-400" />,
      iconBg: 'bg-indigo-500/10 border-indigo-500/20'
    },
  ];

  // Earnings overview chart data
  const earningsData = [
    { name: 'May 1', bookings: 1000, services: 400, other: 150 },
    { name: 'May 6', bookings: 1800, services: 600, other: 250 },
    { name: 'May 11', bookings: 1400, services: 500, other: 200 },
    { name: 'May 16', bookings: 2400, services: 900, other: 300 },
    { name: 'May 21', bookings: 3200, services: 1100, other: 450 },
    { name: 'May 26', bookings: 2800, services: 880, other: 400 },
    { name: 'May 31', bookings: 3640, services: 1510, other: 800 },
  ];

  // Bookings doughnut chart data
  const bookingsStatusData = [
    { name: 'Confirmed', value: 24, color: '#10B981', percentage: '50%' },
    { name: 'Pending', value: 14, color: '#F59E0B', percentage: '29%' },
    { name: 'Completed', value: 7, color: '#3B82F6', percentage: '15%' },
    { name: 'Cancelled', value: 3, color: '#EF4444', percentage: '6%' },
  ];

  // Roles selector row
  const roles = [
    { name: 'Landlord', desc: 'Property Owner', active: true, upgrade: false },
    { name: 'Property Manager', desc: 'Upgrade', active: false, upgrade: true },
    { name: 'Builder', desc: 'Upgrade', active: false, upgrade: true },
    { name: 'Realtor', desc: 'Upgrade', active: false, upgrade: true },
    { name: 'Airport Pickup', desc: 'Active', active: true, upgrade: false, isService: true },
    { name: 'Insurance', desc: 'Active', active: true, upgrade: false, isService: true },
    { name: 'Internet Provider', desc: 'Inactive', active: false, upgrade: false, isService: true },
    { name: 'Cleaning Service', desc: 'Inactive', active: false, upgrade: false, isService: true },
    { name: 'Moving Service', desc: 'Inactive', active: false, upgrade: false, isService: true },
    { name: 'Other Services', desc: 'Inactive', active: false, upgrade: false, isService: true },
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. Header Bar matching image */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            Welcome back, Sarah! 👋
          </h1>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            Manage your properties, services and grow your business.
          </p>
        </div>

        <div className="flex items-center gap-4 self-stretch lg:self-auto justify-between lg:justify-end">
          <button className="px-4 py-2 border border-purple-500/30 hover:border-purple-500/60 bg-purple-500/5 hover:bg-purple-500/10 text-[11px] font-bold text-white rounded-xl transition-all duration-300 shadow-md shadow-purple-600/5 flex items-center gap-1.5">
            <Plus className="w-3.5 h-3.5" />
            Add New Listing / Service
          </button>

          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <div className="relative cursor-pointer p-2 hover:bg-white/[0.04] rounded-xl border border-white/[0.04] bg-[#0c101f] transition-colors">
              <Bell className="w-4 h-4 text-slate-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px] font-black border border-[#030614]">
                8
              </span>
            </div>

            {/* Chat bubble */}
            <div className="cursor-pointer p-2 hover:bg-white/[0.04] rounded-xl border border-white/[0.04] bg-[#0c101f] transition-colors">
              <MessageSquare className="w-4 h-4 text-slate-400" />
            </div>

            <div className="h-6 w-px bg-white/[0.08]" />

            {/* Profile widget */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-[11px] font-black text-white flex items-center gap-1">
                  Sarah Johnson
                  <ChevronDown className="w-3 h-3 text-slate-500" />
                </div>
                <div className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5 mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Roles & Services Selector Row */}
      <div className="glass-card p-4 border-white/[0.04] bg-[#070b15]/65">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <span>You are viewing as</span>
            <div className="px-2.5 py-1 rounded-lg bg-[#0e1224] border border-white/[0.05] flex items-center gap-1.5 text-white text-[11px] cursor-pointer hover:border-indigo-500/30 transition-all">
              <Home className="w-3.5 h-3.5 text-indigo-400" />
              Landlord <span className="text-[9px] text-slate-500">Property Owner</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
          </div>

          <div className="flex items-center gap-3.5 overflow-x-auto pb-1 custom-scrollbar scroll-smooth">
            {roles.map((r, i) => (
              <div 
                key={i} 
                onClick={() => !r.upgrade && setActiveRole(r.name)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border shrink-0 cursor-pointer transition-all duration-300 ${
                  r.upgrade 
                    ? 'border-white/[0.02] bg-white/[0.01] hover:bg-white/[0.03]' 
                    : r.active 
                      ? r.isService 
                        ? 'border-emerald-500/20 bg-emerald-500/[0.03] shadow-lg shadow-emerald-500/5'
                        : 'border-purple-500/30 bg-purple-500/[0.03] shadow-lg shadow-purple-500/5'
                      : 'border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                  r.upgrade 
                    ? 'border-white/[0.05] bg-white/[0.02] text-slate-600' 
                    : r.active 
                      ? r.isService 
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                        : 'border-purple-500/30 bg-purple-500/10 text-purple-400'
                      : 'border-white/[0.05] bg-white/[0.02] text-slate-500'
                }`}>
                  {r.isService ? <Briefcase className="w-4 h-4" /> : <Home className="w-4 h-4" />}
                </div>
                <div className="text-left leading-none">
                  <div className="text-[11px] font-black text-white">{r.name}</div>
                  <div className={`text-[8.5px] font-bold mt-1 uppercase tracking-wider ${
                    r.upgrade 
                      ? 'text-purple-400/90' 
                      : r.active 
                        ? 'text-indigo-400' 
                        : 'text-slate-500'
                  }`}>
                    {r.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="glass-card p-4 flex flex-col justify-between border-white/[0.04] bg-[#070b15]/65 relative overflow-hidden group hover:border-indigo-500/25 transition-all">
            <div className="flex justify-between items-start">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black leading-none">{m.label}</span>
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 ${m.iconBg}`}>
                {m.icon}
              </div>
            </div>
            <div className="mt-3.5">
              <span className="text-xl font-black text-white tracking-tight">{m.value}</span>
              <div className="flex items-center gap-1 mt-1 text-[8.5px] font-bold text-emerald-400">
                <TrendingUp className="w-3 h-3" />
                <span>{m.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Charts & Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Earnings Overview Bar Chart (Lg: col-span-5) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-5 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Earnings Overview</h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl font-black text-white">$24,680</span>
                <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  +20% vs last month
                </span>
              </div>
            </div>
            <select 
              value={selectedTimeframe} 
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-2 py-1 text-[10px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white focus:outline-none cursor-pointer"
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>Year to Date</option>
            </select>
          </div>

          <div className="h-56 w-full">
            {isMounted && (
              <ResponsiveContainer width="100%" height={224}>
                <BarChart data={earningsData} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 9, fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 9, fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0c0f1d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#e2e8f0' }}
                    labelStyle={{ fontSize: 9, fontWeight: 'bold', color: '#818cf8' }}
                    itemStyle={{ fontSize: 10, padding: '2px 0' }}
                  />
                  <Bar dataKey="bookings" stackId="a" fill="#6366f1" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="services" stackId="a" fill="#a855f7" />
                  <Bar dataKey="other" stackId="a" fill="#f59e0b" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-white/[0.03] pt-4 mt-2">
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                Property Bookings
              </div>
              <div className="text-[11px] font-black text-white mt-1">$16,240 <span className="text-[8.5px] font-bold text-emerald-400 ml-1">+65.8%</span></div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                Services
              </div>
              <div className="text-[11px] font-black text-white mt-1">$5,890 <span className="text-[8.5px] font-bold text-emerald-400 ml-1">+23.9%</span></div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                Other Earnings
              </div>
              <div className="text-[11px] font-black text-white mt-1">$2,550 <span className="text-[8.5px] font-bold text-emerald-400 ml-1">+10.3%</span></div>
            </div>
          </div>
        </div>

        {/* Bookings Doughnut Chart (Lg: col-span-3) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-3 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Bookings Overview</h3>
            <select className="px-2 py-0.5 text-[9px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white">
              <option>This Month</option>
            </select>
          </div>

          <div className="relative h-44 flex items-center justify-center">
            {/* Center label */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-white tracking-tight leading-none">48</span>
              <span className="text-[8px] font-black text-slate-500 mt-1 uppercase tracking-widest leading-none">Total Bookings</span>
            </div>

            {isMounted && (
              <ResponsiveContainer width="100%" height={176}>
                <PieChart>
                  <Pie
                    data={bookingsStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={54}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {bookingsStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="space-y-1.5 border-t border-white/[0.03] pt-3.5">
            {bookingsStatusData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-white">{item.value}</span>
                  <span className="text-[8.5px] text-slate-500 font-bold">({item.percentage})</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/[0.03]">
            <div className="text-left leading-none">
              <span className="text-[8px] text-slate-500 uppercase font-black">Average Value</span>
              <div className="text-[11px] font-black text-white mt-1 flex items-center gap-1">
                $514
                <span className="text-[8.5px] font-bold text-emerald-400">+12%</span>
              </div>
            </div>
            <div className="text-left leading-none">
              <span className="text-[8px] text-slate-500 uppercase font-black">Occupancy Rate</span>
              <div className="text-[11px] font-black text-white mt-1 flex items-center gap-1">
                76%
                <span className="text-[8.5px] font-bold text-emerald-400">+8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiries & Rating Columns combined (Lg: col-span-4) */}
        <div className="grid grid-rows-2 gap-6 lg:col-span-4">
          
          {/* Row 1: Inquiries Overview */}
          <div className="glass-card p-4.5 border-white/[0.04] bg-[#070b15]/65 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1.5">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Inquiries Overview</h3>
              <select className="px-2 py-0.5 text-[9px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white">
                <option>This Month</option>
              </select>
            </div>

            <div className="grid grid-cols-4 gap-2 py-2">
              <div className="text-center bg-[#0a0d1e]/60 p-2 rounded-xl border border-white/[0.02]">
                <div className="text-[8px] font-black text-slate-500 uppercase">New</div>
                <div className="text-sm font-black text-white mt-1">24</div>
                <div className="text-[8px] text-emerald-400 font-bold mt-0.5">+14%</div>
              </div>
              <div className="text-center bg-[#0a0d1e]/60 p-2 rounded-xl border border-white/[0.02]">
                <div className="text-[8px] font-black text-slate-500 uppercase">Responded</div>
                <div className="text-sm font-black text-white mt-1">9</div>
                <div className="text-[8px] text-emerald-400 font-bold mt-0.5">+8%</div>
              </div>
              <div className="text-center bg-[#0a0d1e]/60 p-2 rounded-xl border border-white/[0.02]">
                <div className="text-[8px] font-black text-slate-500 uppercase">Converted</div>
                <div className="text-sm font-black text-white mt-1">6</div>
                <div className="text-[8px] text-emerald-400 font-bold mt-0.5">+20%</div>
              </div>
              <div className="text-center bg-[#0a0d1e]/60 p-2 rounded-xl border border-white/[0.02]">
                <div className="text-[8px] font-black text-slate-500 uppercase">Lost</div>
                <div className="text-sm font-black text-white mt-1">3</div>
                <div className="text-[8px] text-rose-400 font-bold mt-0.5">-5%</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-white/[0.03] pt-2">
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 px-1">
                <span>Response Rate</span>
                <span className="font-black text-emerald-400">75% <span className="text-[8px] font-bold text-emerald-400/80">(+10%)</span></span>
              </div>
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400 px-1 border-l border-white/[0.04]">
                <span>Conversion Rate</span>
                <span className="font-black text-emerald-400">16.7% <span className="text-[8px] font-bold text-emerald-400/80">(+2.5%)</span></span>
              </div>
            </div>
          </div>

          {/* Row 2: Rating & Reviews */}
          <div className="glass-card p-4.5 border-white/[0.04] bg-[#070b15]/65 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Rating & Reviews</h3>
              <button className="text-[9px] font-black text-indigo-400 hover:text-indigo-300 uppercase tracking-wider">View All</button>
            </div>

            <div className="flex items-center gap-4 py-1">
              <div className="text-left shrink-0">
                <div className="text-3xl font-black text-white tracking-tight leading-none">4.8</div>
                <div className="flex gap-0.5 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </div>
                <div className="text-[8px] text-slate-500 font-bold mt-1.5">(128 Reviews)</div>
              </div>

              <div className="flex-1 space-y-1">
                {[
                  { star: 5, pct: 78 },
                  { star: 4, pct: 16 },
                  { star: 3, pct: 4 },
                  { star: 2, pct: 1 },
                  { star: 1, pct: 1 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-[9px] font-semibold text-slate-400">
                    <span className="w-2.5 text-right shrink-0">{item.star}</span>
                    <div className="flex-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                    <span className="w-5 text-right shrink-0 text-slate-500">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-white/[0.03] pt-2 text-[9.5px] font-bold text-emerald-400/90 justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>You're in top 10% of providers!</span>
            </div>
          </div>

        </div>

      </div>

      {/* 5. Performance Tables & Growth Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Top Performing Properties (Lg: col-span-5) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-5 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Top Performing Properties</h3>
            <button className="px-2.5 py-1 bg-[#0c101f] hover:bg-[#11172e] border border-white/[0.04] rounded-lg text-[9px] font-black text-indigo-400 uppercase tracking-wider transition-colors">
              View All Properties
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[10px]">
              <thead>
                <tr className="border-b border-white/[0.04] text-slate-500 font-bold uppercase tracking-wider">
                  <th className="py-2 pr-2">Property</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 px-2 text-right">Views</th>
                  <th className="py-2 px-2 text-right">Earnings</th>
                  <th className="py-2 px-2 text-center">Occupancy</th>
                  <th className="py-2 pl-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03] font-semibold text-slate-300">
                {[
                  { name: 'Maple House', loc: 'Downtown Toronto', status: 'Active', val: 'Active', views: '1,245', earnings: '$6,450', occ: 82, occColor: 'text-emerald-400' },
                  { name: 'UrbanNest Toronto', loc: 'Downtown Toronto', status: 'Active', val: 'Active', views: '982', earnings: '$4,280', occ: 75, occColor: 'text-emerald-400' },
                  { name: 'Yorkville Suites', loc: 'Yorkville, Toronto', status: 'Active', val: 'Active', views: '756', earnings: '$3,950', occ: 88, occColor: 'text-emerald-400' },
                  { name: 'The College View', loc: 'Near University of Toronto', status: 'Under Review', val: 'Under Review', views: '432', earnings: '$2,320', occ: 60, occColor: 'text-amber-400' },
                  { name: 'Modern Living Studio', loc: 'North York, Toronto', status: 'Inactive', val: 'Inactive', views: '123', earnings: '$680', occ: 20, occColor: 'text-rose-400' },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-2.5 pr-2">
                      <div className="font-black text-white">{item.name}</div>
                      <div className="text-[8.5px] text-slate-500 font-bold mt-0.5">{item.loc}</div>
                    </td>
                    <td className="py-2.5 px-2">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${
                        item.status === 'Active' 
                          ? 'bg-emerald-500/10 text-emerald-400' 
                          : item.status === 'Under Review' 
                            ? 'bg-amber-500/10 text-amber-400' 
                            : 'bg-slate-500/10 text-slate-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-right font-black">{item.views}</td>
                    <td className="py-2.5 px-2 text-right font-black text-white">{item.earnings}</td>
                    <td className="py-2.5 px-2 text-center">
                      <div className="inline-flex items-center gap-1.5 justify-center">
                        {/* Circular ring indicator */}
                        <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.03)" strokeWidth="2.5" fill="transparent" />
                            <circle cx="10" cy="10" r="8" stroke={item.occ > 70 ? "#10B981" : item.occ > 40 ? "#F59E0B" : "#EF4444"} strokeWidth="2.5" fill="transparent"
                              strokeDasharray={2 * Math.PI * 8}
                              strokeDashoffset={2 * Math.PI * 8 * (1 - item.occ / 100)}
                            />
                          </svg>
                          <span className="absolute text-[6.5px] font-black text-white">{item.occ}%</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 pl-2 text-right">
                      <div className="inline-flex items-center gap-1.5 justify-end">
                        <button className="p-1 hover:bg-white/[0.04] rounded text-slate-400 hover:text-white transition-colors">
                          <Edit2 className="w-3 h-3" />
                        </button>
                        <button className="p-1 hover:bg-white/[0.04] rounded text-slate-400 hover:text-white transition-colors">
                          <Link2 className="w-3 h-3" />
                        </button>
                        <button className="p-1 hover:bg-white/[0.04] rounded text-slate-400 hover:text-white transition-colors">
                          <MoreHorizontal className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-white/[0.03] pt-3 mt-1 flex justify-center">
            <button className="text-[9px] font-black text-slate-400 hover:text-slate-200 uppercase tracking-widest flex items-center gap-1 transition-colors">
              View All Properties <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Service Performance (Lg: col-span-4) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Service Performance</h3>
            <button className="px-2.5 py-1 bg-[#0c101f] hover:bg-[#11172e] border border-white/[0.04] rounded-lg text-[9px] font-black text-indigo-400 uppercase tracking-wider transition-colors">
              View All Services
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[10px]">
              <thead>
                <tr className="border-b border-white/[0.04] text-slate-500 font-bold uppercase tracking-wider">
                  <th className="py-2 pr-2">Service</th>
                  <th className="py-2 px-2 text-right">Bookings</th>
                  <th className="py-2 px-2 text-right">Earnings</th>
                  <th className="py-2 pl-2 text-right">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03] font-semibold text-slate-300">
                {[
                  { name: 'Airport Pickup', bookings: '18', earnings: '$2,160', rating: '4.9' },
                  { name: 'Insurance', bookings: '12', earnings: '$1,920', rating: '4.8' },
                  { name: 'Internet Setup', bookings: '9', earnings: '$990', rating: '4.7' },
                  { name: 'Cleaning Service', bookings: '7', earnings: '$630', rating: '4.8' },
                  { name: 'Moving Service', bookings: '5', earnings: '$350', rating: '4.7' },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-3 pr-2 font-black text-white">{item.name}</td>
                    <td className="py-3 px-2 text-right font-black">{item.bookings}</td>
                    <td className="py-3 px-2 text-right font-black text-white">{item.earnings}</td>
                    <td className="py-3 pl-2 text-right">
                      <div className="inline-flex items-center gap-1 justify-end font-black text-white">
                        <span>{item.rating}</span>
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-white/[0.03] pt-3 mt-1 flex justify-center">
            <button className="text-[9px] font-black text-slate-400 hover:text-slate-200 uppercase tracking-widest flex items-center gap-1 transition-colors">
              View All Services <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Business Growth Tips (Lg: col-span-3) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-3 flex flex-col justify-between">
          <div className="mb-2">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Business Growth Tips</h3>
          </div>

          <div className="flex items-start gap-3 bg-[#0a0d1e]/60 p-3 rounded-xl border border-white/[0.03] relative overflow-hidden">
            <div className="shrink-0 text-indigo-400">
              {/* Rocket Icon */}
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-left leading-snug">
              <div className="text-[11px] font-black text-white">Complete your profile</div>
              <p className="text-[9.5px] text-slate-400 mt-0.5">Increase your visibility and get more bookings.</p>
            </div>
            {/* Percentage gauge floating */}
            <div className="absolute right-3.5 top-3 flex items-center gap-1 font-black text-white text-[11px]">
              <span>86%</span>
            </div>
          </div>

          <div className="w-full bg-white/[0.02] border border-white/[0.04] rounded-lg h-2 overflow-hidden mt-3">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full" style={{ width: '86%' }} />
          </div>

          <div className="space-y-2 mt-4 flex-1">
            {[
              { text: 'Add more photos (10+)', checked: true },
              { text: 'Complete property descriptions', checked: true },
              { text: 'Add video walkthrough', checked: false },
              { text: 'Get more reviews (5 more)', checked: false },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 text-[10px] font-semibold text-slate-400">
                <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                  item.checked 
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' 
                    : 'border-white/[0.08] bg-white/[0.01]'
                }`}>
                  {item.checked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
                <span className={item.checked ? 'text-slate-500 line-through' : 'text-slate-300'}>{item.text}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-2.5 mt-4 text-[10px] font-black text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-300 shadow-md shadow-indigo-600/10">
            Improve Now
          </button>
        </div>

      </div>

      {/* 6. Footer Inquiries, Bookings, Reviews, Account Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Recent Inquiries */}
        <div className="glass-card p-4.5 border-white/[0.04] bg-[#070b15]/65 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Recent Inquiries</h3>
            <button className="text-[9px] font-black text-indigo-400 uppercase tracking-wider">View All</button>
          </div>

          <div className="space-y-3 flex-1">
            {[
              { name: 'Maple Brown', msg: 'Interested in Maple House', time: '2m ago', isNew: true, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
              { name: 'Priya Sharma', msg: 'Interested in UrbanNest Toronto', time: '15m ago', isNew: true, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
              { name: 'David Lee', msg: 'Interested in Yorkville Suites', time: '1h ago', isNew: true, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 text-[10px] hover:bg-white/[0.01] p-1 rounded transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg overflow-hidden bg-slate-800 shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-black text-white">{item.name}</div>
                    <div className="text-[8.5px] text-slate-500 font-semibold mt-0.5">{item.msg}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[8.5px] text-slate-500 font-bold">{item.time}</div>
                  {item.isNew && (
                    <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[7.5px] font-black text-indigo-400 uppercase tracking-widest">New</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="glass-card p-4.5 border-white/[0.04] bg-[#070b15]/65 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Upcoming Bookings</h3>
            <button className="text-[9px] font-black text-indigo-400 uppercase tracking-wider">View Calendar</button>
          </div>

          <div className="space-y-3 flex-1">
            {[
              { name: 'Emma Wilson', prop: 'Maple House - Room 101', date: 'May 22, 2025', status: 'Confirmed' },
              { name: 'James Carter', prop: 'UrbanNest Toronto - Unit 2B', date: 'May 25, 2025', status: 'Confirmed' },
              { name: 'Sophia Martinez', prop: 'Yorkville Suites - Suite 5A', date: 'May 28, 2025', status: 'Pending' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 text-[10px] hover:bg-white/[0.01] p-1 rounded transition-colors">
                <div className="text-left leading-tight">
                  <div className="font-black text-white">{item.name}</div>
                  <div className="text-[8.5px] text-slate-500 font-semibold mt-0.5">{item.prop}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[8.5px] text-slate-400 font-bold">{item.date}</div>
                  <span className={`inline-block mt-1 px-1.5 py-0.5 rounded text-[7.5px] font-black uppercase tracking-widest ${
                    item.status === 'Confirmed' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10' 
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/10'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="glass-card p-4.5 border-white/[0.04] bg-[#070b15]/65 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Recent Reviews</h3>
            <button className="text-[9px] font-black text-indigo-400 uppercase tracking-wider">View All</button>
          </div>

          <div className="space-y-3 flex-1 text-left">
            {[
              { name: 'Emma Wilson', prop: 'Maple House', score: '5.0', text: 'Great place! Very clean and excellent location.', time: '2d ago' },
              { name: 'James Carter', prop: 'UrbanNest Toronto', score: '4.8', text: 'Amazing experience. Will book again!', time: '3d ago' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1 hover:bg-white/[0.01] p-1 rounded transition-colors">
                <div className="flex justify-between items-start text-[10px]">
                  <div className="leading-tight">
                    <span className="font-black text-white">{item.name}</span>
                    <span className="text-[8.5px] text-slate-500 font-bold ml-1">{item.prop}</span>
                  </div>
                  <div className="flex items-center gap-1 font-black text-white shrink-0 text-[9.5px]">
                    <span>{item.score}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                  </div>
                </div>
                <p className="text-[9.5px] text-slate-400 italic">"{item.text}"</p>
                <div className="text-[8px] text-slate-500 font-semibold">{item.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Summary */}
        <div className="glass-card p-4.5 border-white/[0.04] bg-[#070b15]/65 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Account Summary</h3>
            <button className="text-[9px] font-black text-indigo-400 uppercase tracking-wider">View Details</button>
          </div>

          <div className="space-y-2.5 flex-1 font-semibold text-slate-400 text-[10px]">
            <div className="flex justify-between items-center">
              <span>Plan</span>
              <span className="font-black text-purple-400">Pro Plan</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Member Since</span>
              <span className="font-black text-white">Jan 15, 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Properties Limit</span>
              <span className="font-black text-white">24 <span className="text-slate-600">/ 50</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span>Services Limit</span>
              <span className="font-black text-white">5 <span className="text-slate-600">/ 10</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span>Profile Views This Month</span>
              <span className="font-black text-white">1,245</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

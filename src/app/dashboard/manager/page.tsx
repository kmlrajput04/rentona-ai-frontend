'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Briefcase, 
  Home, 
  Calendar, 
  DollarSign, 
  Activity, 
  HelpCircle, 
  ShieldCheck, 
  ChevronDown, 
  Bell, 
  MessageSquare,
  TrendingUp,
  FileText,
  AlertTriangle,
  MessageCircle,
  AlertOctagon,
  CreditCard,
  MapPin,
  Plus,
  Compass,
  Zap,
  CheckCircle,
  FileSpreadsheet,
  ArrowRight
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
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

export default function ManagerDashboardPage() {
  const [selectedRange, setSelectedRange] = useState('May 18 – May 24, 2025');
  const [activeRole, setActiveRole] = useState('Platform Manager');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sparkline data helpers
  const sparklineDataPurple = [
    { name: '1', v: 40 }, { name: '2', v: 55 }, { name: '3', v: 45 }, { name: '4', v: 60 }, { name: '5', v: 50 }, { name: '6', v: 75 }
  ];
  const sparklineDataBlue = [
    { name: '1', v: 30 }, { name: '2', v: 40 }, { name: '3', v: 35 }, { name: '4', v: 48 }, { name: '5', v: 44 }, { name: '6', v: 52 }
  ];
  const sparklineDataYellow = [
    { name: '1', v: 20 }, { name: '2', v: 28 }, { name: '3', v: 24 }, { name: '4', v: 32 }, { name: '5', v: 29 }, { name: '6', v: 35 }
  ];
  const sparklineDataGreen = [
    { name: '1', v: 10 }, { name: '2', v: 15 }, { name: '3', v: 12 }, { name: '4', v: 18 }, { name: '5', v: 16 }, { name: '6', v: 22 }
  ];

  // 8 Metrics Data
  const metrics = [
    { label: 'Active Users', value: '24,589', change: '+18.6% vs last 7 days', positive: true, icon: <Users className="w-5 h-5 text-purple-400" /> },
    { label: 'Providers', value: '2,348', change: '+14.2% vs last 7 days', positive: true, icon: <Briefcase className="w-5 h-5 text-blue-400" /> },
    { label: 'Properties Listed', value: '8,742', change: '+22.5% vs last 7 days', positive: true, icon: <Home className="w-5 h-5 text-emerald-400" /> },
    { label: 'Bookings', value: '1,389', change: '+16.8% vs last 7 days', positive: true, icon: <Calendar className="w-5 h-5 text-amber-400" /> },
    { label: 'Revenue (This Week)', value: '$128,540', change: '+21.6% vs last 7 days', positive: true, icon: <DollarSign className="w-5 h-5 text-emerald-400" /> },
    { label: 'AI Match Success', value: '92.7%', change: '+5.3% vs last 7 days', positive: true, icon: <Activity className="w-5 h-5 text-purple-400" /> },
    { label: 'Open Tickets', value: '42', change: '+12.5% vs last 7 days', positive: false, icon: <HelpCircle className="w-5 h-5 text-rose-400" /> },
    { label: 'Platform Health', value: '99.9%', change: 'All Systems Operational', positive: true, icon: <ShieldCheck className="w-5 h-5 text-blue-400" /> },
  ];

  // Ecosystem Overview line list
  const ecosystemOverview = [
    { label: 'Users', count: '24,589', pct: '+18.6%', color: '#a855f7', spark: sparklineDataPurple },
    { label: 'International Students', count: '12,984', pct: '+20.4%', color: '#a855f7', spark: sparklineDataPurple },
    { label: 'Professionals', count: '6,745', pct: '+15.2%', color: '#3b82f6', spark: sparklineDataBlue },
    { label: 'Families', count: '3,126', pct: '+10.1%', color: '#eab308', spark: sparklineDataYellow },
    { label: 'Immigrants', count: '1,734', pct: '+11.7%', color: '#10b981', spark: sparklineDataGreen },
  ];

  // Revenue Overview chart data
  const revenueChartData = [
    { name: 'May 1', rev: 15000 },
    { name: 'May 8', rev: 32000 },
    { name: 'May 15', rev: 28000 },
    { name: 'May 22', rev: 45000 },
    { name: 'May 29', rev: 38000 },
  ];

  // Revenue Sources doughnut chart data
  const revenueSources = [
    { name: 'Bookings', value: 208202, pct: '38%', color: '#3B82F6' },
    { name: 'Services', value: 131494, pct: '24%', color: '#0EA5E9' },
    { name: 'Partnerships', value: 109578, pct: '20%', color: '#F59E0B' },
    { name: 'Commissions', value: 65810, pct: '12%', color: '#A855F7' },
    { name: 'Others', value: 32808, pct: '6%', color: '#64748B' },
  ];

  // User Distribution by Type doughnut chart data
  const userDistribution = [
    { name: 'International Students', value: 12984, pct: '52.8%', color: '#10B981' },
    { name: 'Students', value: 6745, pct: '27.4%', color: '#3B82F6' },
    { name: 'Professionals', value: 3371, pct: '13.7%', color: '#F59E0B' },
    { name: 'Families', value: 789, pct: '3.2%', color: '#EC4899' },
    { name: 'Immigrants', value: 700, pct: '2.9%', color: '#84CC16' },
  ];

  // Bookings overview multiple lines
  const bookingsTimelineData = [
    { name: 'May 12', confirmed: 200, pending: 350, cancelled: 90 },
    { name: 'May 14', confirmed: 350, pending: 450, cancelled: 110 },
    { name: 'May 16', confirmed: 280, pending: 400, cancelled: 80 },
    { name: 'May 18', confirmed: 480, pending: 500, cancelled: 130 },
    { name: 'May 20', confirmed: 410, pending: 420, cancelled: 95 },
    { name: 'May 22', confirmed: 590, pending: 580, cancelled: 120 },
    { name: 'May 24', confirmed: 510, pending: 480, cancelled: 110 },
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. Header Bar matching image */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            Welcome back, Manager! 👋
          </h1>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            Here's what's happening across the Rentora AI ecosystem today.
          </p>
        </div>

        <div className="flex items-center gap-4 self-stretch lg:self-auto justify-between lg:justify-end">
          
          <div className="flex items-center gap-3">
            {/* Date range picker */}
            <div className="px-3 py-1.5 rounded-xl bg-[#0c101f] border border-white/[0.04] flex items-center gap-2 text-white text-[11px] font-bold cursor-pointer hover:border-indigo-500/30 transition-all">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{selectedRange}</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>

            {/* Platform status indicator */}
            <div className="px-3.5 py-1.5 rounded-xl bg-[#0c101f] border border-white/[0.04] flex items-center gap-2.5 text-left shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div className="leading-tight">
                <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Platform Status</div>
                <div className="text-[9.5px] font-black text-emerald-400">All Systems Operational</div>
              </div>
            </div>

            <div className="h-6 w-px bg-white/[0.08]" />

            {/* Notification bell */}
            <div className="relative cursor-pointer p-2 hover:bg-white/[0.04] rounded-xl border border-white/[0.04] bg-[#0c101f] transition-colors shrink-0">
              <Bell className="w-4 h-4 text-slate-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px] font-black border border-[#030614]">
                12
              </span>
            </div>

            {/* Chat bubble */}
            <div className="relative cursor-pointer p-2 hover:bg-white/[0.04] rounded-xl border border-white/[0.04] bg-[#0c101f] transition-colors shrink-0">
              <MessageSquare className="w-4 h-4 text-slate-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-[9px] font-black border border-[#030614]">
                8
              </span>
            </div>

            <div className="h-6 w-px bg-white/[0.08]" />

            {/* Profile widget */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" 
                  alt="Alex Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-[11px] font-black text-white flex items-center gap-1">
                  Alex Johnson
                  <ChevronDown className="w-3 h-3 text-slate-500" />
                </div>
                <div className="text-[9px] font-bold text-slate-400 flex items-center mt-0.5 uppercase tracking-wider">
                  Platform Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons row */}
      <div className="flex justify-end gap-3 pb-1">
        <button className="px-4 py-2 border border-white/10 hover:bg-white/[0.03] text-[10.5px] font-black text-slate-300 rounded-xl transition-all duration-200 flex items-center gap-1.5 uppercase tracking-wider">
          <FileSpreadsheet className="w-4 h-4 text-slate-400" />
          Export Report
        </button>
        <button className="px-4 py-2 bg-[#6366f1] hover:bg-[#5053e1] text-[10.5px] font-black text-white rounded-xl transition-all duration-300 shadow-md shadow-indigo-600/10 flex items-center gap-1.5 uppercase tracking-wider">
          <Plus className="w-4 h-4 stroke-[3]" />
          Create Announcement
        </button>
      </div>

      {/* 2. 8 Metrics Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="glass-card p-3.5 flex flex-col justify-between border-white/[0.04] bg-[#070b15]/65 relative overflow-hidden group hover:border-indigo-500/20 transition-all">
            <div className="flex justify-between items-start">
              <span className="text-[9px] text-slate-500 uppercase tracking-widest font-black leading-none">{m.label}</span>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/[0.04] shrink-0">
                {m.icon}
              </div>
            </div>
            <div className="mt-3 leading-none">
              <span className="text-lg font-black text-white tracking-tight">{m.value}</span>
              <div className={`flex items-center gap-0.5 mt-1 text-[8px] font-bold ${
                m.positive ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {m.positive && <TrendingUp className="w-2.5 h-2.5" />}
                <span>{m.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Middle Section: line charts, activity feed, action center */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Ecosystem Overview line list (col-span-4) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Ecosystem Overview</h3>
            <select className="px-2 py-0.5 text-[9px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white">
              <option>This Week</option>
            </select>
          </div>

          <div className="space-y-3.5 flex-1">
            {ecosystemOverview.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 p-1 rounded hover:bg-white/[0.01] transition-colors">
                <div className="text-left leading-none">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.label}
                  </div>
                  <div className="text-xs font-black text-white mt-1.5">{item.count}</div>
                </div>

                {/* Mini Recharts Sparkline */}
                <div className="h-6 w-16 shrink-0 flex items-center justify-center">
                  {isMounted && (
                    <LineChart width={64} height={24} data={item.spark} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
                      <Line type="monotone" dataKey="v" stroke={item.color} strokeWidth={1.5} dot={false} />
                    </LineChart>
                  )}
                </div>

                <span className="text-[9px] font-bold text-emerald-400 shrink-0 text-right leading-none">{item.pct}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.03] pt-3 mt-3 flex justify-start">
            <button className="text-[9px] font-black text-indigo-400 hover:text-indigo-300 uppercase tracking-widest flex items-center gap-1 transition-colors">
              View All Users <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Live Platform Activity (col-span-4) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Live Platform Activity</h3>
            <button className="px-2 py-0.5 bg-[#0c101f] border border-white/[0.04] rounded-lg text-[9px] font-black text-slate-400 uppercase">
              View All
            </button>
          </div>

          <div className="space-y-3.5 flex-1">
            {[
              { title: 'New user registered', desc: 'Priya Sharma from India', time: '2m ago', icon: <Users className="w-3.5 h-3.5 text-purple-400" />, isUser: true, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
              { title: 'New property listed', desc: 'UrbanNest Toronto – 2 Bed Apartment', time: '5m ago', icon: <Home className="w-3.5 h-3.5 text-blue-400" /> },
              { title: 'New booking confirmed', desc: 'Maple House – Room 101', time: '7m ago', icon: <Calendar className="w-3.5 h-3.5 text-emerald-400" /> },
              { title: 'New service request', desc: 'Airport Pickup – John Smith', time: '8m ago', icon: <Briefcase className="w-3.5 h-3.5 text-purple-400" /> },
              { title: 'New support ticket', desc: 'Payment issue – Ticket #8452', time: '10m ago', icon: <MessageSquare className="w-3.5 h-3.5 text-amber-400" /> },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 text-[10.5px] p-1 rounded hover:bg-white/[0.01] transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg border border-white/[0.04] bg-white/[0.02] flex items-center justify-center shrink-0 overflow-hidden">
                    {item.isUser ? (
                      <img src={item.avatar} alt="User" className="w-full h-full object-cover" />
                    ) : item.icon}
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-black text-white">{item.title}</div>
                    <div className="text-[8.5px] text-slate-500 font-semibold mt-0.5">{item.desc}</div>
                  </div>
                </div>
                <span className="text-[8.5px] text-slate-500 font-bold shrink-0">{item.time}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.03] pt-3 mt-3 flex justify-start">
            <button className="text-[9px] font-black text-indigo-400 hover:text-indigo-300 uppercase tracking-widest flex items-center gap-1 transition-colors">
              Go to Activity Feed <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Action Center (col-span-4) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Action Center</h3>
            <button className="px-2 py-0.5 bg-[#0c101f] border border-white/[0.04] rounded-lg text-[9px] font-black text-slate-400 uppercase">
              View All
            </button>
          </div>

          <div className="space-y-2.5 flex-1">
            {[
              { label: 'Pending Verifications', count: 128, color: 'text-amber-400 border-amber-500/20 bg-amber-500/5', icon: <ShieldCheck className="w-4 h-4" /> },
              { label: 'Fraud Alerts', count: 17, color: 'text-rose-400 border-rose-500/20 bg-rose-500/5', icon: <AlertTriangle className="w-4 h-4 animate-pulse" /> },
              { label: 'Support Escalations', count: 9, color: 'text-rose-400 border-rose-500/20 bg-rose-500/5', icon: <MessageCircle className="w-4 h-4" /> },
              { label: 'AI Match Issues', count: 4, color: 'text-purple-400 border-purple-500/20 bg-purple-500/5', icon: <Activity className="w-4 h-4" /> },
              { label: 'Payment Issues', count: 6, color: 'text-blue-400 border-blue-500/20 bg-blue-500/5', icon: <CreditCard className="w-4 h-4" /> },
              { label: 'Policy Violations', count: 3, color: 'text-rose-400 border-rose-500/20 bg-rose-500/5', icon: <AlertOctagon className="w-4 h-4" /> },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 p-2 rounded-xl border border-white/[0.03] bg-white/[0.01]">
                <div className="flex items-center gap-2.5 text-[10px] font-semibold text-slate-300">
                  <div className={`w-6.5 h-6.5 rounded-lg border flex items-center justify-center shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-white">{item.count}</span>
                  <button className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[9px] font-black text-slate-300 transition-colors uppercase">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Second Row Charts: Revenue overview, Revenue sources */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Revenue Overview (col-span-8) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-8 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Revenue Overview</h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl font-black text-white">$547,892</span>
                <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  19.6% vs last month
                </span>
              </div>
            </div>
            <select className="px-2 py-1 text-[10px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white focus:outline-none cursor-pointer">
              <option>This Month</option>
            </select>
          </div>

          <div className="h-56 w-full">
            {isMounted && (
              <ResponsiveContainer width="100%" height={224}>
                <BarChart data={revenueChartData} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 9, fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 9, fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0c0f1d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, color: '#e2e8f0' }}
                    labelStyle={{ fontSize: 9, fontWeight: 'bold', color: '#818cf8' }}
                  />
                  <Bar dataKey="rev" fill="#6366f1" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Revenue Sources doughnut (col-span-4) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Revenue Sources</h3>
            <select className="px-2 py-0.5 text-[9px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white">
              <option>This Month</option>
            </select>
          </div>

          <div className="relative h-44 flex items-center justify-center">
            {/* Center label */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-xl font-black text-white tracking-tight leading-none">$547,892</span>
              <span className="text-[7.5px] font-black text-slate-500 mt-1 uppercase tracking-widest leading-none">Total</span>
            </div>

            {isMounted && (
              <ResponsiveContainer width="100%" height={176}>
                <PieChart>
                  <Pie
                    data={revenueSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={54}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {revenueSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="space-y-1.5 border-t border-white/[0.03] pt-3">
            {revenueSources.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-[9.5px] font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-white">${item.value.toLocaleString('en-US')}</span>
                  <span className="text-[8px] text-slate-500 font-bold">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5. Third Row: User Distribution, City Activity, Bookings line */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* User Distribution doughnut (col-span-4) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">User Distribution by Type</h3>
            <select className="px-2 py-0.5 text-[9px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white">
              <option>This Week</option>
            </select>
          </div>

          <div className="relative h-40 flex items-center justify-center">
            {/* Center label */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-xl font-black text-white tracking-tight leading-none">24,589</span>
              <span className="text-[7.5px] font-black text-slate-500 mt-1 uppercase tracking-widest leading-none">Total</span>
            </div>

            {isMounted && (
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie
                    data={userDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={66}
                    paddingAngle={2.5}
                    dataKey="value"
                  >
                    {userDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="space-y-1.5 border-t border-white/[0.03] pt-3">
            {userDistribution.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-[9.5px] font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="truncate max-w-[130px]">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-white">{item.value.toLocaleString('en-US')}</span>
                  <span className="text-[8px] text-slate-500 font-bold">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Cities Activity (col-span-4) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Top Cities Activity</h3>
            <select className="px-2 py-0.5 text-[9px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white">
              <option>This Week</option>
            </select>
          </div>

          <div className="space-y-3.5 flex-1">
            {[
              { city: 'Toronto, Canada', count: '5,642', change: '18.6%' },
              { city: 'Vancouver, Canada', count: '3,125', change: '16.3%' },
              { city: 'New York, USA', count: '2,987', change: '14.9%' },
              { city: 'London, UK', count: '2,456', change: '12.1%' },
              { city: 'Sydney, Australia', count: '1,987', change: '11.4%' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between gap-3 text-[10.5px] p-2 bg-white/[0.01] border border-white/[0.03] rounded-xl">
                <div className="flex items-center gap-2.5 text-slate-300 font-semibold">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{item.city}</span>
                </div>
                <div className="text-right leading-none">
                  <div className="font-black text-white">{item.count}</div>
                  <div className="text-[8.5px] font-bold text-emerald-400 mt-1 flex items-center gap-0.5 justify-end">
                    <TrendingUp className="w-2.5 h-2.5" />
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bookings line timeline (col-span-4) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-4 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Bookings Overview</h3>
            <select className="px-2 py-0.5 text-[9px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white">
              <option>This Week</option>
            </select>
          </div>

          <div className="flex justify-start gap-3.5 mb-2.5">
            <div className="flex items-center gap-1 text-[8.5px] font-bold text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Confirmed
            </div>
            <div className="flex items-center gap-1 text-[8.5px] font-bold text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Pending
            </div>
            <div className="flex items-center gap-1 text-[8.5px] font-bold text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Cancelled
            </div>
          </div>

          <div className="h-44 w-full">
            {isMounted && (
              <ResponsiveContainer width="100%" height={176}>
                <LineChart data={bookingsTimelineData} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 8.5, fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 8.5, fontWeight: 600 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0c0f1d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10 }} />
                  <Line type="monotone" dataKey="confirmed" stroke="#a855f7" strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="pending" stroke="#3b82f6" strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="cancelled" stroke="#ef4444" strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

      </div>

      {/* 6. Fourth Row: Recent verifications table, Support overview, Quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recent Verifications Table (col-span-6) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Recent Verifications</h3>
            <button className="text-[9px] font-black text-indigo-400 hover:text-indigo-300 uppercase tracking-wider flex items-center gap-1 transition-colors">
              View All Verifications <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[10px]">
              <thead>
                <tr className="border-b border-white/[0.04] text-slate-500 font-bold uppercase tracking-wider">
                  <th className="py-2 pr-2">Type</th>
                  <th className="py-2 px-2">Name</th>
                  <th className="py-2 px-2">Category</th>
                  <th className="py-2 px-2">Submitted On</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 pl-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03] font-semibold text-slate-300">
                {[
                  { type: 'Property', color: 'bg-purple-500/10 text-purple-400', name: 'Modern Living Studio', loc: 'Toronto, Canada', cat: 'Property', date: 'May 24, 2025 10:30 AM', status: 'Pending', statusColor: 'bg-amber-500/10 text-amber-400 border border-amber-500/10', actText: 'Review', actColor: 'bg-purple-600 hover:bg-purple-500 text-white' },
                  { type: 'Landlord', color: 'bg-amber-500/10 text-amber-400', name: 'John Smith', loc: 'Toronto, Canada', cat: 'Landlord', date: 'May 24, 2025 09:15 AM', status: 'In Review', statusColor: 'bg-blue-500/10 text-blue-400 border border-blue-500/10', actText: 'Review', actColor: 'bg-purple-600 hover:bg-purple-500 text-white' },
                  { type: 'Service', color: 'bg-blue-500/10 text-blue-400', name: 'Airport Pickup Toronto', loc: 'Toronto, Canada', cat: 'Airport Pickup', date: 'May 23, 2025 04:45 PM', status: 'Pending', statusColor: 'bg-amber-500/10 text-amber-400 border border-amber-500/10', actText: 'Review', actColor: 'bg-purple-600 hover:bg-purple-500 text-white' },
                  { type: 'Property', color: 'bg-purple-500/10 text-purple-400', name: 'Maple House', loc: 'Vancouver, Canada', cat: 'Property', date: 'May 23, 2025 02:20 PM', status: 'Verified', statusColor: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10', actText: '✓ Verified', actColor: 'text-emerald-400 font-bold', isStatic: true },
                  { type: 'Landlord', color: 'bg-amber-500/10 text-amber-400', name: 'UrbanNest Inc.', loc: 'Toronto, Canada', cat: 'Property Manager', date: 'May 22, 2025 11:10 AM', status: 'Verified', statusColor: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10', actText: '✓ Verified', actColor: 'text-emerald-400 font-bold', isStatic: true },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-2.5 pr-2">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${item.color}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="py-2.5 px-2">
                      <div className="font-black text-white">{item.name}</div>
                      <div className="text-[8px] text-slate-500 font-bold mt-0.5">{item.loc}</div>
                    </td>
                    <td className="py-2.5 px-2 font-black">{item.cat}</td>
                    <td className="py-2.5 px-2 text-slate-500 font-bold">{item.date}</td>
                    <td className="py-2.5 px-2">
                      <span className={`px-1.5 py-0.5 rounded-[5px] text-[8px] font-black uppercase tracking-wider ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2.5 pl-2 text-right">
                      {item.isStatic ? (
                        <span className={`text-[9px] ${item.actColor}`}>{item.actText}</span>
                      ) : (
                        <button className={`px-2 py-0.5 rounded text-[8.5px] font-black uppercase transition-colors ${item.actColor}`}>
                          {item.actText}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Support Overview circular gauge (col-span-3) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-3 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Support Overview</h3>
            <select className="px-2 py-0.5 text-[9px] font-bold bg-[#0e1224] border border-white/[0.06] rounded-lg text-white">
              <option>This Week</option>
            </select>
          </div>

          <div className="flex items-center gap-6 py-2 flex-1">
            <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
              {/* Circular gauge */}
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="56" cy="56" r="46" stroke="rgba(255,255,255,0.03)" strokeWidth="7" fill="transparent" />
                <circle cx="56" cy="56" r="46" stroke="#10b981" strokeWidth="7" fill="transparent"
                  strokeDasharray={2 * Math.PI * 46}
                  strokeDashoffset={2 * Math.PI * 46 * (1 - 0.886)}
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-xl font-black text-white tracking-tight">88.6%</span>
                <span className="text-[7.5px] font-black text-slate-500 mt-1 uppercase tracking-widest">Resolved Rate</span>
              </div>
            </div>

            <div className="flex-1 space-y-2 font-semibold text-[10px] text-slate-400">
              <div className="flex justify-between">
                <span>Total Tickets</span>
                <span className="font-black text-white">612</span>
              </div>
              <div className="flex justify-between">
                <span>Open Tickets</span>
                <span className="font-black text-white">42</span>
              </div>
              <div className="flex justify-between">
                <span>In Progress</span>
                <span className="font-black text-white">28</span>
              </div>
              <div className="flex justify-between">
                <span>Resolved</span>
                <span className="font-black text-white">542</span>
              </div>
              <div className="flex justify-between">
                <span>Resolution Time</span>
                <span className="font-black text-emerald-400">2.4h</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-white/[0.03] pt-2 text-[9px] font-bold text-emerald-400 justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>+8.3% vs last week</span>
          </div>
        </div>

        {/* Quick Actions (col-span-3) */}
        <div className="glass-card p-5 border-white/[0.04] bg-[#070b15]/65 lg:col-span-3 flex flex-col justify-between">
          <div className="mb-3.5">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider text-left">Quick Actions</h3>
          </div>

          <div className="grid grid-cols-2 gap-2.5 flex-1">
            {[
              { label: 'Add Announcement', icon: <Bell className="w-3.5 h-3.5 text-indigo-400" /> },
              { label: 'Create Promo Code', icon: <Zap className="w-3.5 h-3.5 text-purple-400" /> },
              { label: 'Verify Property', icon: <Home className="w-3.5 h-3.5 text-emerald-400" /> },
              { label: 'Approve Provider', icon: <Briefcase className="w-3.5 h-3.5 text-blue-400" /> },
              { label: 'View Reports', icon: <FileText className="w-3.5 h-3.5 text-amber-400" /> },
              { label: 'Manage Users', icon: <Users className="w-3.5 h-3.5 text-indigo-400" /> },
              { label: 'System Logs', icon: <Compass className="w-3.5 h-3.5 text-slate-400" /> },
              { label: 'Platform Settings', icon: <Zap className="w-3.5 h-3.5 text-purple-400" /> },
            ].map((item, idx) => (
              <button key={idx} className="p-2.5 rounded-xl border border-white/[0.03] bg-[#0c101f]/40 hover:bg-[#11172e] flex flex-col items-center justify-center gap-1.5 text-center transition-all group">
                <div className="w-7 h-7 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-[8.5px] font-black text-slate-400 leading-tight truncate w-full">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

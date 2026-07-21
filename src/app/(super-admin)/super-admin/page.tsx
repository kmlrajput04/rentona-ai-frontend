'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Activity, ShieldAlert, Globe, Users, TrendingUp, Coins, 
  Briefcase, Server, Database, Bell, Settings, ChevronDown, 
  Calendar, MapPin, Sparkles, Cpu, Clock, ArrowUpRight, 
  CheckCircle2, Map, Key, DollarSign, LineChart, BookOpen, 
  Layers, Search, Check, Shield, AlertTriangle, RefreshCw,
  Percent, ArrowDownRight, Zap, GraduationCap, BarChart2,
  Lock, AlertCircle, FileText
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, 
  LineChart as RechartsLineChart, Line, RadialBarChart, RadialBar, Legend
} from 'recharts';

// Hydration guard helper
function SafeHydration({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div className="min-h-screen bg-[#060814] flex items-center justify-center text-slate-500">Loading Command Center...</div>;
  return <>{children}</>;
}

// Simulated data matching reference image
const sparklineData1 = [
  { pv: 100 }, { pv: 140 }, { pv: 110 }, { pv: 170 }, { pv: 150 }, { pv: 210 }, { pv: 190 }, { pv: 240 }
];
const sparklineData2 = [
  { pv: 80 }, { pv: 90 }, { pv: 85 }, { pv: 110 }, { pv: 95 }, { pv: 120 }, { pv: 105 }, { pv: 130 }
];
const sparklineData3 = [
  { pv: 300 }, { pv: 320 }, { pv: 310 }, { pv: 380 }, { pv: 350 }, { pv: 420 }, { pv: 390 }, { pv: 450 }
];
const sparklineData4 = [
  { pv: 150 }, { pv: 180 }, { pv: 160 }, { pv: 220 }, { pv: 190 }, { pv: 260 }, { pv: 240 }, { pv: 290 }
];
const sparklineData5 = [
  { pv: 10 }, { pv: 15 }, { pv: 12 }, { pv: 22 }, { pv: 18 }, { pv: 28 }, { pv: 25 }, { pv: 32 }
];
const sparklineData6 = [
  { pv: 180 }, { pv: 200 }, { pv: 190 }, { pv: 240 }, { pv: 220 }, { pv: 280 }, { pv: 260 }, { pv: 312 }
];
const sparklineData7 = [
  { pv: 90 }, { pv: 92 }, { pv: 91 }, { pv: 95 }, { pv: 94 }, { pv: 97 }, { pv: 96 }, { pv: 96.8 }
];
const sparklineData8 = [
  { pv: 99.9 }, { pv: 99.95 }, { pv: 99.92 }, { pv: 99.99 }, { pv: 99.97 }, { pv: 99.99 }, { pv: 99.98 }, { pv: 99.99 }
];

const revenueOverviewData = [
  { name: 'May 1', bookings: 3.5, services: 1.2, subs: 0.8, uni: 0.5, other: 0.7 },
  { name: 'May 8', bookings: 4.2, services: 1.5, subs: 1.0, uni: 0.7, other: 0.9 },
  { name: 'May 15', bookings: 5.1, services: 1.9, subs: 1.2, uni: 0.8, other: 1.1 },
  { name: 'May 22', bookings: 5.8, services: 2.2, subs: 1.3, uni: 0.9, other: 1.2 },
  { name: 'May 24', bookings: 6.21, services: 2.41, subs: 1.48, uni: 1.02, other: 1.36 },
];

const financialSnapshotData = [
  { name: 'W1', mrr: 7.2, arr: 85, burn: 1.5, runway: 15 },
  { name: 'W2', mrr: 7.6, arr: 92, burn: 1.4, runway: 16.5 },
  { name: 'W3', mrr: 8.0, arr: 97, burn: 1.35, runway: 17.8 },
  { name: 'W4', mrr: 8.42, arr: 101.04, burn: 1.32, runway: 18.6 },
];

const retentionData = [
  { name: 'Day 1', retention: 72.4 },
  { name: 'Day 7', retention: 48.6 },
  { name: 'Day 30', retention: 28.7 },
  { name: 'Churn', retention: 3.2 },
];

const ecosystemHealthData = [
  { name: 'AI Systems', value: 93, fill: '#8b5cf6' },
  { name: 'Payments', value: 89, fill: '#ec4899' },
  { name: 'Universities', value: 91, fill: '#0ea5e9' },
  { name: 'Communities', value: 87, fill: '#f59e0b' },
  { name: 'Services', value: 90, fill: '#10b981' },
  { name: 'Providers', value: 88, fill: '#06b6d4' },
  { name: 'Users', value: 92, fill: '#6366f1' },
];

export default function SuperAdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('Executive Overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    {
      group: '',
      items: [
        { name: 'Executive Overview', icon: Activity, active: true },
      ]
    },
    {
      group: 'GROWTH CENTER',
      items: [
        { name: 'Global Growth', icon: Globe },
        { name: 'Countries & Cities', icon: MapPin },
        { name: 'Universities', icon: GraduationCap },
        { name: 'Expansion Pipeline', icon: Layers },
      ]
    },
    {
      group: 'REVENUE INTELLIGENCE',
      items: [
        { name: 'Revenue Overview', icon: LineChart },
        { name: 'Revenue Breakdown', icon: BarChart2 },
        { name: 'Subscriptions', icon: Coins },
        { name: 'Payouts & Settlements', icon: DollarSign },
      ]
    },
    {
      group: 'AI COMMAND CENTER',
      items: [
        { name: 'AI Performance', icon: Cpu },
        { name: 'AI Usage Analytics', icon: Sparkles },
        { name: 'AI Accuracy Monitoring', icon: Activity },
        { name: 'AI Cost & Impact', icon: Zap },
      ]
    },
    {
      group: 'INFRASTRUCTURE',
      items: [
        { name: 'Platform Health', icon: Server },
        { name: 'System Performance', icon: Activity },
        { name: 'API & Services', icon: Key },
        { name: 'Database & Storage', icon: Database },
      ]
    },
    {
      group: 'BUSINESS INTELLIGENCE',
      items: [
        { name: 'User Analytics', icon: Users },
        { name: 'Provider Analytics', icon: Briefcase },
        { name: 'Retention & Churn', icon: RefreshCw },
        { name: 'Conversion Funnel', icon: BarChart2 },
      ]
    },
    {
      group: 'INVESTOR CENTER',
      items: [
        { name: 'Investor Dashboard', icon: BarChart2 },
        { name: 'Financial Metrics', icon: LineChart },
        { name: 'Growth Forecast', icon: TrendingUp },
        { name: 'Company Valuation', icon: DollarSign },
      ]
    },
    {
      group: 'RISK & COMPLIANCE',
      items: [
        { name: 'Risk Overview', icon: ShieldAlert },
        { name: 'Security Center', icon: Shield },
        { name: 'Compliance', icon: FileText },
        { name: 'Audit Logs', icon: BookOpen },
      ]
    },
    {
      group: 'ECOSYSTEM HEALTH',
      items: [
        { name: 'Ecosystem Overview', icon: Activity },
      ]
    },
    {
      group: 'GLOBAL SETTINGS',
      items: [
        { name: 'Platform Settings', icon: Settings },
      ]
    }
  ];

  return (
    <SafeHydration>
      <div className="min-h-screen bg-[#060814] text-slate-100 flex font-sans selection:bg-[#6366f1]/30 selection:text-white antialiased">
        
        {/* SIDEBAR */}
        <aside className={`fixed inset-y-0 left-0 z-50 w-[260px] border-r border-[#1a1f36]/40 bg-[#070a17] flex flex-col justify-between transition-transform duration-300 xl:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="px-6 h-[72px] flex items-center gap-3 border-b border-[#1a1f36]/30">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6366f1] via-[#8b5cf6] to-[#ec4899] flex items-center justify-center shadow-lg shadow-[#6366f1]/20">
                <span className="text-white font-black text-xl italic tracking-tighter">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-black tracking-tight text-white leading-none">
                  Rentora AI
                </span>
                <span className="text-[10px] font-bold text-[#a855f7] mt-1 tracking-wider uppercase">
                  Super Admin
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 px-4 py-4 space-y-4 overflow-y-auto custom-scrollbar text-[13px] font-medium">
              {sidebarItems.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-1">
                  {group.group && (
                    <div className="px-4 py-1.5 text-[9px] font-black tracking-widest text-[#4f5b86] uppercase">
                      {group.group}
                    </div>
                  )}
                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeMenu === item.name;
                      return (
                        <button
                          key={item.name}
                          onClick={() => setActiveMenu(item.name)}
                          className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 border text-left ${
                            isActive
                              ? 'bg-gradient-to-r from-[#6366f1]/15 to-[#8b5cf6]/5 border-[#6366f1]/25 text-white font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] shadow-indigo-500/5'
                              : 'text-slate-400 border-transparent hover:bg-white/[0.02] hover:text-slate-200'
                          }`}
                        >
                          <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[#8b5cf6]' : 'text-slate-400'}`} />
                          <span className="truncate">{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-[#1a1f36]/30 bg-[#050711]">
            <div className="text-[10px] text-slate-500 font-bold text-center">
              © 2025 Rentora AI. All rights reserved.
            </div>
          </div>
        </aside>

        {/* MAIN LAYOUT WRAPPER */}
        <div className="flex-1 flex flex-col min-w-0 xl:pl-[260px]">
          
          {/* HEADER / TOP BAR */}
          <header className="h-[72px] border-b border-[#1a1f36]/40 bg-[#070a17]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
            <div>
              <h1 className="text-lg font-black text-white tracking-tight">Super Admin Command Center</h1>
              <p className="text-[11px] text-[#4f5b86] font-semibold mt-0.5">Complete platform control and global intelligence overview</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Datepicker Mock */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#1a1f36] bg-[#0c1020]/45 text-[11px] font-bold text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>May 18 - May 24, 2025</span>
              </div>

              {/* Compare Select */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#1a1f36] bg-[#0c1020]/45 text-[11px] font-bold text-slate-300 cursor-pointer hover:border-slate-800 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                <span>Compare: Last 7 Days</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </div>

              {/* Global View Select */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#1a1f36] bg-[#0c1020]/45 text-[11px] font-bold text-slate-300 cursor-pointer hover:border-slate-800 transition-colors">
                <Globe className="w-3.5 h-3.5 text-[#6366f1]" />
                <span>Global View</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </div>

              {/* Notifications */}
              <button className="relative w-9 h-9 flex items-center justify-center rounded-xl border border-[#1a1f36] bg-[#0c1020]/45 text-slate-400 hover:text-white transition-colors">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f43f5e] text-[9px] font-black text-white flex items-center justify-center border border-[#060814]">
                  12
                </span>
              </button>

              {/* Settings Toggle */}
              <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#1a1f36] bg-[#0c1020]/45 text-slate-400 hover:text-white transition-colors">
                <Settings className="w-4 h-4" />
              </button>

              {/* Profile */}
              <div className="flex items-center gap-2.5 pl-2 border-l border-[#1a1f36]/40">
                <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" 
                    alt="David Anderson" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-[12px] font-bold text-white leading-tight">David Anderson</div>
                  <div className="text-[9px] text-[#a855f7] font-bold uppercase tracking-wider">Super Administrator</div>
                </div>
              </div>
            </div>
          </header>

          {/* MAIN PAGE BODY */}
          <main className="flex-1 p-6 space-y-6 overflow-y-auto">
            
            {/* ROW 1: STATS CARDS (8 WIDGETS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4">
              
              {/* CARD 1: Total Users */}
              <div className="bg-[#0b0e1a] border border-[#1a1f36]/45 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6366f1]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <Users className="w-3 h-3 text-[#6366f1]" />
                    <span>Total Users</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-xl font-black text-white tracking-tight">1,248,593</div>
                  <div className="text-[9px] font-bold text-[#10b981] flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>18.6%</span>
                    <span className="text-slate-500 font-medium font-sans ml-0.5">vs last 7 days</span>
                  </div>
                </div>
                <div className="h-7 w-full mt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparklineData1}>
                      <defs>
                        <linearGradient id="glow-users" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="pv" stroke="#6366f1" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-users)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CARD 2: Total Providers */}
              <div className="bg-[#0b0e1a] border border-[#1a1f36]/45 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#06b6d4]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <Briefcase className="w-3 h-3 text-[#06b6d4]" />
                    <span>Total Providers</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-xl font-black text-white tracking-tight font-sans">85,432</div>
                  <div className="text-[9px] font-bold text-[#10b981] flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>14.2%</span>
                    <span className="text-slate-500 font-medium font-sans ml-0.5">vs last 7 days</span>
                  </div>
                </div>
                <div className="h-7 w-full mt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparklineData2}>
                      <defs>
                        <linearGradient id="glow-providers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="pv" stroke="#06b6d4" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-providers)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CARD 3: Total Revenue */}
              <div className="bg-[#0b0e1a] border border-[#1a1f36]/45 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <Coins className="w-3 h-3 text-[#10b981]" />
                    <span>Total Revenue</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-xl font-black text-white tracking-tight">$12.48M</div>
                  <div className="text-[9px] font-bold text-[#10b981] flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>21.8%</span>
                    <span className="text-slate-500 font-medium font-sans ml-0.5">vs last 7 days</span>
                  </div>
                </div>
                <div className="h-7 w-full mt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparklineData3}>
                      <defs>
                        <linearGradient id="glow-revenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="pv" stroke="#10b981" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-revenue)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CARD 4: Total Transactions */}
              <div className="bg-[#0b0e1a] border border-[#1a1f36]/45 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f59e0b]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <BarChart2 className="w-3 h-3 text-[#f59e0b]" />
                    <span>Total Transactions</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-xl font-black text-white tracking-tight">324,599</div>
                  <div className="text-[9px] font-bold text-[#10b981] flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>16.3%</span>
                    <span className="text-slate-500 font-medium font-sans ml-0.5">vs last 7 days</span>
                  </div>
                </div>
                <div className="h-7 w-full mt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparklineData4}>
                      <defs>
                        <linearGradient id="glow-txs" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="pv" stroke="#f59e0b" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-txs)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CARD 5: Active Countries */}
              <div className="bg-[#0b0e1a] border border-[#1a1f36]/45 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f43f5e]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <Globe className="w-3 h-3 text-[#f43f5e]" />
                    <span>Active Countries</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-xl font-black text-white tracking-tight">28</div>
                  <div className="text-[9px] font-bold text-[#10b981] flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+3</span>
                    <span className="text-slate-500 font-medium font-sans ml-0.5">vs last 7 days</span>
                  </div>
                </div>
                <div className="h-7 w-full mt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparklineData5}>
                      <defs>
                        <linearGradient id="glow-countries" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="pv" stroke="#f43f5e" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-countries)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CARD 6: Universities Connected */}
              <div className="bg-[#0b0e1a] border border-[#1a1f36]/45 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0ea5e9]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5 text-[#0ea5e9]" />
                    <span>Universities Connected</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-xl font-black text-white tracking-tight">312</div>
                  <div className="text-[9px] font-bold text-[#10b981] flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+12</span>
                    <span className="text-slate-500 font-medium font-sans ml-0.5">vs last 7 days</span>
                  </div>
                </div>
                <div className="h-7 w-full mt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparklineData6}>
                      <defs>
                        <linearGradient id="glow-unis" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="pv" stroke="#0ea5e9" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-unis)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CARD 7: AI Match Accuracy */}
              <div className="bg-[#0b0e1a] border border-[#1a1f36]/45 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#8b5cf6]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <Cpu className="w-3 h-3 text-[#8b5cf6]" />
                    <span>AI Match Accuracy</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-xl font-black text-white tracking-tight">96.8%</div>
                  <div className="text-[9px] font-bold text-[#10b981] flex items-center gap-1 mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>2.4%</span>
                    <span className="text-slate-500 font-medium font-sans ml-0.5">vs last 7 days</span>
                  </div>
                </div>
                <div className="h-7 w-full mt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparklineData7}>
                      <defs>
                        <linearGradient id="glow-ai" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="pv" stroke="#8b5cf6" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-ai)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CARD 8: Platform Health */}
              <div className="bg-[#0b0e1a] border border-[#1a1f36]/45 p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#22c55e]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <Activity className="w-3 h-3 text-[#22c55e]" />
                    <span>Platform Health</span>
                  </div>
                </div>
                <div className="my-2">
                  <div className="text-xl font-black text-white tracking-tight">99.99%</div>
                  <div className="text-[9px] font-bold text-[#10b981] flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3 text-[#22c55e]" />
                    <span>Excellent</span>
                    <span className="text-slate-500 font-medium font-sans ml-0.5">Uptime</span>
                  </div>
                </div>
                <div className="h-7 w-full mt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparklineData8}>
                      <defs>
                        <linearGradient id="glow-health" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#22c55e" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="pv" stroke="#22c55e" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-health)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            {/* ROW 2: CORE ANALYTICS (GLOBAL GROWTH MAP, REVENUE OVERVIEW, AI PERFORMANCE) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* WIDGET 1: GLOBAL GROWTH MAP */}
              <div className="lg:col-span-5 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-black text-white">Global Growth Map</h3>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5">User Growth by Country</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 items-center">
                    {/* SVG Map Mock */}
                    <div className="md:col-span-7 flex justify-center relative py-4">
                      {/* World Map SVG Outline */}
                      <svg viewBox="0 0 1000 480" className="w-full h-auto opacity-45 stroke-slate-800 fill-[#0e1227]" strokeWidth="1.5">
                        <path d="M150,150 Q180,100 250,120 T350,180 T450,110 T550,150 T650,220 T750,150 T850,250 T950,180" fill="none" />
                        <path d="M100,200 Q200,300 300,220 T500,280 T700,240 T900,300" fill="none" />
                        <path d="M220,380 Q320,320 420,350 T620,400 T820,350" fill="none" />
                        {/* Map dots matching countries */}
                        <circle cx="250" cy="140" r="16" className="fill-[#6366f1]/25 stroke-[#6366f1] stroke-2 animate-pulse" /> {/* Canada */}
                        <circle cx="280" cy="180" r="22" className="fill-[#6366f1]/25 stroke-[#6366f1] stroke-2 animate-pulse" /> {/* US */}
                        <circle cx="480" cy="120" r="12" className="fill-[#6366f1]/25 stroke-[#6366f1] stroke-2 animate-pulse" /> {/* UK */}
                        <circle cx="510" cy="140" r="10" className="fill-[#6366f1]/25 stroke-[#6366f1] stroke-2 animate-pulse" /> {/* Germany */}
                        <circle cx="680" cy="230" r="18" className="fill-[#6366f1]/25 stroke-[#6366f1] stroke-2 animate-pulse" /> {/* India */}
                        <circle cx="610" cy="210" r="8" className="fill-[#6366f1]/25 stroke-[#6366f1] stroke-2 animate-pulse" /> {/* UAE */}
                        <circle cx="830" cy="380" r="15" className="fill-[#6366f1]/25 stroke-[#6366f1] stroke-2 animate-pulse" /> {/* Australia */}
                      </svg>
                      {/* Control overlays */}
                      <div className="absolute bottom-2 left-2 flex flex-col gap-1">
                        <button className="w-6 h-6 flex items-center justify-center bg-[#070a17] border border-[#1a1f36] text-white text-xs font-bold rounded-lg hover:bg-[#0c1020]">+</button>
                        <button className="w-6 h-6 flex items-center justify-center bg-[#070a17] border border-[#1a1f36] text-white text-xs font-bold rounded-lg hover:bg-[#0c1020]">-</button>
                      </div>
                    </div>

                    {/* Country Growth Stats Table */}
                    <div className="md:col-span-5 space-y-2 text-[11px]">
                      <div className="grid grid-cols-3 text-slate-500 font-bold border-b border-[#1a1f36]/40 pb-1 uppercase tracking-wider">
                        <span>Country</span>
                        <span className="text-right">Users</span>
                        <span className="text-right">Growth</span>
                      </div>
                      
                      <div className="space-y-1.5 font-semibold">
                        {[
                          { name: 'Canada', users: '245,856', growth: '18.6%' },
                          { name: 'United States', users: '432,753', growth: '15.3%' },
                          { name: 'United Kingdom', users: '128,147', growth: '21.7%' },
                          { name: 'Australia', users: '86,279', growth: '17.2%' },
                          { name: 'Germany', users: '74,291', growth: '19.8%' },
                          { name: 'India', users: '61,784', growth: '23.1%' },
                          { name: 'UAE', users: '42,503', growth: '16.4%' },
                          { name: 'Others', users: '177,980', growth: '14.2%' },
                        ].map((c) => (
                          <div key={c.name} className="grid grid-cols-3 items-center py-0.5 text-slate-200">
                            <span className="truncate">{c.name}</span>
                            <span className="text-right text-slate-400 font-mono">{c.users}</span>
                            <span className="text-right text-[#10b981] flex items-center justify-end font-mono">
                              <ArrowUpRight className="w-2.5 h-2.5 mr-0.5" />
                              {c.growth}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Low/High slider indicator */}
                <div className="mt-4 pt-3 border-t border-[#1a1f36]/30 flex items-center justify-between text-[9px] text-[#4f5b86] font-bold">
                  <span>Low Growth</span>
                  <div className="flex-1 mx-4 h-1.5 rounded-full bg-gradient-to-r from-[#6366f1]/10 via-[#8b5cf6]/50 to-[#ec4899] opacity-80" />
                  <span>High Growth</span>
                </div>
              </div>

              {/* WIDGET 2: REVENUE OVERVIEW */}
              <div className="lg:col-span-4 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-black text-white">Revenue Overview</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-black text-white">$12,478,593</span>
                        <span className="text-[10px] font-bold text-[#10b981] flex items-center bg-[#10b981]/10 px-1.5 py-0.5 rounded-md border border-[#10b981]/10">
                          <ArrowUpRight className="w-2.5 h-2.5 mr-0.5" /> 21.8%
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold">vs last month</span>
                      </div>
                    </div>
                    
                    <div className="px-2.5 py-1 rounded-xl border border-[#1a1f36] bg-[#070a17] text-[10px] font-bold text-slate-400 flex items-center gap-1 cursor-pointer">
                      <span>This Month</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Chart area */}
                  <div className="h-[210px] w-full mt-6 text-[10px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueOverviewData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorServices" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorSubs" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#4f5b86" tickLine={false} axisLine={false} />
                        <YAxis stroke="#4f5b86" tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}M`} />
                        <Tooltip contentStyle={{ backgroundColor: '#070a17', border: '1px solid #1a1f36', borderRadius: '12px', color: '#fff' }} />
                        <Area type="monotone" dataKey="bookings" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorBookings)" name="Bookings" />
                        <Area type="monotone" dataKey="services" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorServices)" name="Services" />
                        <Area type="monotone" dataKey="subs" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorSubs)" name="Subscriptions" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Detailed legend breakdown */}
                <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-[#1a1f36]/30 text-[11px] font-semibold">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                        <span className="text-slate-400">Property Bookings</span>
                      </div>
                      <span className="text-white font-mono">$6.21M</span>
                      <span className="text-[#10b981] font-mono text-[9px] flex items-center"><ArrowUpRight className="w-2.5 h-2.5" />20.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                        <span className="text-slate-400">Services</span>
                      </div>
                      <span className="text-white font-mono">$2.41M</span>
                      <span className="text-[#10b981] font-mono text-[9px] flex items-center"><ArrowUpRight className="w-2.5 h-2.5" />18.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                        <span className="text-slate-400">Subscriptions</span>
                      </div>
                      <span className="text-white font-mono">$1.48M</span>
                      <span className="text-[#10b981] font-mono text-[9px] flex items-center"><ArrowUpRight className="w-2.5 h-2.5" />23.9%</span>
                    </div>
                  </div>
                  <div className="space-y-1.5 pl-2 border-l border-[#1a1f36]/20">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                        <span className="text-slate-400">University Part.</span>
                      </div>
                      <span className="text-white font-mono">$1.02M</span>
                      <span className="text-[#10b981] font-mono text-[9px] flex items-center"><ArrowUpRight className="w-2.5 h-2.5" />19.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        <span className="text-slate-400">Other Revenue</span>
                      </div>
                      <span className="text-white font-mono">$1.36M</span>
                      <span className="text-[#10b981] font-mono text-[9px] flex items-center"><ArrowUpRight className="w-2.5 h-2.5" />16.2%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WIDGET 3: AI PERFORMANCE SUMMARY */}
              <div className="lg:col-span-3 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-black text-white">AI Performance Summary</h3>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Overall engine validation</p>
                    </div>
                    <div className="px-2 py-0.5 rounded-lg border border-[#1a1f36] bg-[#070a17] text-[9px] font-bold text-slate-400">
                      This Week
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 mt-5 items-center">
                    {/* Ring Chart */}
                    <div className="col-span-5 flex justify-center relative">
                      <div className="w-24 h-24 flex items-center justify-center rounded-full border border-[#8b5cf6]/10 relative">
                        <div className="absolute inset-2 rounded-full border border-dashed border-[#8b5cf6]/20 flex flex-col items-center justify-center">
                          <span className="text-base font-black text-white leading-none">96.8%</span>
                          <span className="text-[8px] text-[#8b5cf6] font-bold mt-1 uppercase tracking-wider">Accuracy</span>
                        </div>
                        {/* Circular track overlay */}
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke="#101426" strokeWidth="6" fill="transparent" />
                          <circle cx="48" cy="48" r="40" stroke="#8b5cf6" strokeWidth="6" fill="transparent" strokeDasharray="251.2" strokeDashoffset="8" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="col-span-7 space-y-2 text-[10px] font-semibold">
                      {[
                        { name: 'Matches Generated', val: '2.48M', growth: '18.6%' },
                        { name: 'Matches Accepted', val: '1.92M', growth: '21.3%' },
                        { name: 'User Satisfaction', val: '4.8 / 5', growth: '+0.3' },
                        { name: 'AI Response Time', val: '1.42s', growth: '-0.18s' },
                        { name: 'AI Cost (This Week)', val: '$18,452', growth: '+6.2%' },
                        { name: 'AI Revenue Impact', val: '$2.91M', growth: '24.7%' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-0.5 border-b border-[#1a1f36]/25 last:border-0">
                          <span className="text-slate-500 truncate max-w-[85px]">{item.name}</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-200 font-mono">{item.val}</span>
                            <span className="text-[#10b981] font-mono text-[8px]">{item.growth}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress bars for top use cases */}
                <div className="mt-4 pt-3 border-t border-[#1a1f36]/30 space-y-2 text-[11px] font-semibold">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider pb-1">
                    <span>Top AI Use Cases</span>
                    <button className="text-[#6366f1] hover:underline">View All</button>
                  </div>
                  
                  {[
                    { name: 'Property Recommendations', val: 45.2 },
                    { name: 'Chat Assistant', val: 28.7 },
                    { name: 'Price Predictions', val: 15.3 },
                    { name: 'Relocation Guidance', val: 10.8 },
                  ].map((uc, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400">{uc.name}</span>
                        <span className="text-white font-mono">{uc.val}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-[#101426] overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] rounded-full" style={{ width: `${uc.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ROW 3: PIPELINE, ACTIVITY FEED, INFRASTRUCTURE HEALTH */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* WIDGET 1: EXPANSION PIPELINE */}
              <div className="lg:col-span-4 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-black text-white">Expansion Pipeline</h3>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Regions currently being onboarded</p>
                    </div>
                    <button className="px-2 py-0.5 rounded-lg border border-[#1a1f36] bg-[#070a17] text-[9px] font-bold text-slate-400 hover:text-white transition-colors">
                      View All
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {[
                      { title: 'Countries in Pipeline', val: '12', sub: '3 in negotiation', icon: Globe, iconColor: 'text-[#6366f1]' },
                      { title: 'Cities in Pipeline', val: '36', sub: '8 in negotiation', icon: MapPin, iconColor: 'text-[#ec4899]' },
                      { title: 'Universities in Pipeline', val: '12', sub: '12 in negotiation', icon: GraduationCap, iconColor: 'text-[#0ea5e9]' },
                      { title: 'Partners in Pipeline', val: '23', sub: '5 in negotiation', icon: Briefcase, iconColor: 'text-[#10b981]' },
                    ].map((card, i) => {
                      const Icon = card.icon;
                      return (
                        <div key={i} className="p-4 rounded-2xl bg-[#070a17]/50 border border-[#1a1f36]/30 flex flex-col justify-between relative overflow-hidden group hover:border-[#1a1f36] transition-all">
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] text-slate-400 font-bold max-w-[90px] leading-tight">{card.title}</span>
                            <Icon className={`w-4 h-4 ${card.iconColor}`} />
                          </div>
                          <div className="mt-4">
                            <div className="text-2xl font-black text-white font-mono">{card.val}</div>
                            <div className="text-[9px] text-[#4f5b86] font-bold mt-1 uppercase tracking-wider">{card.sub}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* WIDGET 2: PLATFORM ACTIVITY FEED */}
              <div className="lg:col-span-4 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-black text-white">Platform Activity Feed</h3>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Real-time actions audit trail</p>
                    </div>
                    <button className="px-2 py-0.5 rounded-lg border border-[#1a1f36] bg-[#070a17] text-[9px] font-bold text-slate-400 hover:text-white transition-colors">
                      View All
                    </button>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      { icon: GraduationCap, bg: 'bg-[#0ea5e9]/10 text-[#0ea5e9]', title: 'New University Onboarded', desc: 'University of Sydney, Australia', time: '10m ago' },
                      { icon: Globe, bg: 'bg-[#6366f1]/10 text-[#6366f1]', title: 'New City Launched', desc: 'Calgary, Canada', time: '35m ago' },
                      { icon: DollarSign, bg: 'bg-[#10b981]/10 text-[#10b981]', title: 'Large Booking Completed', desc: 'Maple House - Toronto ($4,850)', time: '1h ago' },
                      { icon: Briefcase, bg: 'bg-[#ec4899]/10 text-[#ec4899]', title: 'New Service Partner', desc: 'Premium Airport Pickup', time: '2h ago' },
                      { icon: Coins, bg: 'bg-[#f59e0b]/10 text-[#f59e0b]', title: 'Investment Received', desc: 'Series B Funding ($12.5M)', time: '5h ago' },
                    ].map((act, i) => {
                      const Icon = act.icon;
                      return (
                        <div key={i} className="flex gap-3 items-start text-[11px] font-semibold">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${act.bg}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <span className="text-white font-bold truncate pr-2">{act.title}</span>
                              <span className="text-[9px] text-[#4f5b86] font-bold uppercase tracking-wider shrink-0 mt-0.5">{act.time}</span>
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">{act.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* WIDGET 3: INFRASTRUCTURE HEALTH */}
              <div className="lg:col-span-4 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-black text-white">Infrastructure Health</h3>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Systems uptime and response rates</p>
                    </div>
                    <button className="px-2 py-0.5 rounded-lg border border-[#1a1f36] bg-[#070a17] text-[9px] font-bold text-slate-400 hover:text-white transition-colors">
                      View All
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[
                      { name: 'API Uptime', val: '99.99%', status: 'Excellent', color: 'text-[#10b981]', icon: CheckCircle2 },
                      { name: 'Database', val: '99.98%', status: 'Excellent', color: 'text-[#10b981]', icon: Database },
                      { name: 'Server Health', val: '99.97%', status: 'Excellent', color: 'text-[#10b981]', icon: Server },
                      { name: 'CDN Perf.', val: '99.96%', status: 'Excellent', color: 'text-[#10b981]', icon: Activity },
                      { name: 'Storage Usage', val: '62.4%', status: 'Optimal', color: 'text-[#10b981]', icon: Layers },
                      { name: 'Avg. Resp Time', val: '180ms', status: 'Good', color: 'text-[#10b981]', icon: Clock },
                    ].map((sys, idx) => {
                      const Icon = sys.icon;
                      return (
                        <div key={idx} className="p-3 rounded-2xl bg-[#070a17]/50 border border-[#1a1f36]/25 flex flex-col justify-between hover:border-[#1a1f36] transition-all">
                          <div className="flex justify-between items-start text-slate-500">
                            <span className="text-[9px] font-bold uppercase tracking-wider leading-tight max-w-[50px]">{sys.name}</span>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="mt-4">
                            <div className="text-base font-black text-white font-mono">{sys.val}</div>
                            <div className={`text-[9px] font-bold ${sys.color} uppercase tracking-wider mt-0.5`}>{sys.status}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 4: FINANCIALS, RETENTION, RISK, ECOSYSTEM */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* SNAPSHOT 1: INVESTOR & FINANCIAL SNAPSHOT */}
              <div className="lg:col-span-3 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-black text-white">Investor & Financial Snapshot</h3>
                    </div>
                    <div className="px-2 py-0.5 rounded-lg border border-[#1a1f36] bg-[#070a17] text-[9px] font-bold text-slate-400">
                      This Month
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mt-5 text-[11px] font-semibold">
                    {[
                      { label: 'MRR', val: '$8.42M', change: '+21.6%', up: true },
                      { label: 'ARR', val: '$101.04M', change: '+22.4%', up: true },
                      { label: 'Burn Rate', val: '$1.32M', change: '-3.4%', up: false },
                      { label: 'Runway', val: '18.6 Mo.', change: '+2.2', up: true },
                    ].map((snap, i) => (
                      <div key={i} className="space-y-1">
                        <span className="text-[9px] text-[#4f5b86] font-bold uppercase tracking-wider">{snap.label}</span>
                        <div className="text-sm font-black text-white font-mono">{snap.val}</div>
                        <span className={`text-[8px] font-mono ${snap.up ? 'text-[#10b981]' : 'text-slate-500'}`}>{snap.change}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sparkline at bottom */}
                  <div className="h-12 w-full mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={financialSnapshotData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="glow-fin" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="mrr" stroke="#8b5cf6" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-fin)" dot={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* SNAPSHOT 2: USER RETENTION OVERVIEW */}
              <div className="lg:col-span-3 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-black text-white">User Retention Overview</h3>
                    </div>
                    <div className="px-2 py-0.5 rounded-lg border border-[#1a1f36] bg-[#070a17] text-[9px] font-bold text-slate-400">
                      This Month
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mt-5 text-[11px] font-semibold">
                    {[
                      { label: 'Day 1 Ret.', val: '72.4%', change: '+2.3%', up: true },
                      { label: 'Day 7 Ret.', val: '48.6%', change: '+3.1%', up: true },
                      { label: 'Day 30 Ret.', val: '28.7%', change: '+1.8%', up: true },
                      { label: 'Churn Rate', val: '3.2%', change: '-0.6%', up: false },
                    ].map((snap, i) => (
                      <div key={i} className="space-y-1">
                        <span className="text-[9px] text-[#4f5b86] font-bold uppercase tracking-wider">{snap.label}</span>
                        <div className="text-sm font-black text-white font-mono">{snap.val}</div>
                        <span className={`text-[8px] font-mono ${snap.up ? 'text-[#10b981]' : 'text-slate-500'}`}>{snap.change}</span>
                      </div>
                    ))}
                  </div>

                  {/* Curve Sparkline */}
                  <div className="h-12 w-full mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={retentionData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="glow-ret" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ec4899" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="retention" stroke="#ec4899" strokeWidth={1.5} fillOpacity={1} fill="url(#glow-ret)" dot={false} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* SNAPSHOT 3: RISK & SECURITY OVERVIEW */}
              <div className="lg:col-span-3 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-black text-white">Risk & Security Overview</h3>
                    </div>
                    <button className="px-2 py-0.5 rounded-lg border border-[#1a1f36] bg-[#070a17] text-[9px] font-bold text-slate-400 hover:text-white transition-colors">
                      View All
                    </button>
                  </div>

                  <div className="mt-4 space-y-2 text-[11px] font-semibold">
                    <div className="flex justify-between items-center p-2 rounded-xl bg-[#f43f5e]/5 border border-[#f43f5e]/15">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#f43f5e]" />
                        <span className="text-slate-300">High Risk Alerts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono">7</span>
                        <span className="text-[8px] bg-[#f43f5e]/10 border border-[#f43f5e]/20 text-[#f43f5e] px-1.5 py-0.5 rounded font-black uppercase tracking-wider">High</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-2 rounded-xl bg-[#f59e0b]/5 border border-[#f59e0b]/15">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-[#f59e0b]" />
                        <span className="text-slate-300">Medium Risk Alerts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono">23</span>
                        <span className="text-[8px] bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] px-1.5 py-0.5 rounded font-black uppercase tracking-wider">Medium</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-2 rounded-xl bg-[#0ea5e9]/5 border border-[#0ea5e9]/15">
                      <div className="flex items-center gap-2">
                        <InfoIcon className="w-3.5 h-3.5 text-[#0ea5e9]" />
                        <span className="text-slate-300">Low Risk Alerts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-mono">56</span>
                        <span className="text-[8px] bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] px-1.5 py-0.5 rounded font-black uppercase tracking-wider">Low</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#1a1f36]/25 mt-2">
                      <span className="text-slate-500">Security Threats Blocked</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-200 font-mono">1,248</span>
                        <span className="text-[8px] font-bold text-[#10b981] bg-[#10b981]/10 px-1 py-0.5 rounded">Good</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-500">Fraud Attempts Prevented</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-200 font-mono">342</span>
                        <span className="text-[8px] font-bold text-[#10b981] bg-[#10b981]/10 px-1 py-0.5 rounded">Good</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SNAPSHOT 4: ECOSYSTEM HEALTH */}
              <div className="lg:col-span-3 bg-[#0b0e1a] border border-[#1a1f36]/45 p-5 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-black text-white">Ecosystem Health</h3>
                    </div>
                    <div className="px-2 py-0.5 rounded-lg border border-[#1a1f36] bg-[#070a17] text-[9px] font-bold text-slate-400">
                      This Week
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-3 mt-4 items-center">
                    {/* Radial Health Ring */}
                    <div className="col-span-6 flex justify-center relative">
                      <div className="w-24 h-24 flex items-center justify-center rounded-full border border-[#10b981]/10 relative">
                        <div className="absolute inset-2 rounded-full border border-dashed border-[#10b981]/20 flex flex-col items-center justify-center">
                          <span className="text-base font-black text-white leading-none">89.6%</span>
                          <span className="text-[8px] text-[#10b981] font-bold mt-1 uppercase tracking-wider">Overall</span>
                        </div>
                        {/* Circular track overlay */}
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke="#101426" strokeWidth="6" fill="transparent" />
                          <circle cx="48" cy="48" r="40" stroke="#10b981" strokeWidth="6" fill="transparent" strokeDasharray="251.2" strokeDashoffset="26" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Breakdown list */}
                    <div className="col-span-6 space-y-1.5 text-[10px] font-semibold">
                      {[
                        { label: 'Users', val: '92%', bg: 'bg-[#6366f1]' },
                        { label: 'Providers', val: '88%', bg: 'bg-[#06b6d4]' },
                        { label: 'Services', val: '90%', bg: 'bg-[#10b981]' },
                        { label: 'Communities', val: '87%', bg: 'bg-[#f59e0b]' },
                        { label: 'Universities', val: '91%', bg: 'bg-[#0ea5e9]' },
                        { label: 'Payments', val: '89%', bg: 'bg-[#ec4899]' },
                        { label: 'AI Systems', val: '93%', bg: 'bg-[#8b5cf6]' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${item.bg}`} />
                            <span className="text-slate-400 truncate max-w-[55px]">{item.label}</span>
                          </div>
                          <span className="text-slate-200 font-mono">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </main>
        </div>

      </div>
    </SafeHydration>
  );
}

// Extra fallback icons missing in standard lucide-react sets
function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

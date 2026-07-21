'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/use-auth-store';
import { useUIStore } from '@/store/use-ui-store';
import { 
  Activity, ShieldAlert, Globe, Users, TrendingUp, Coins, 
  Briefcase, Server, Database, Bell, Settings, ChevronDown, 
  Calendar, MapPin, Sparkles, Cpu, Clock, ArrowUpRight, 
  CheckCircle2, Map, Key, DollarSign, LineChart, BookOpen, 
  Layers, Search, Check, Shield, AlertTriangle, RefreshCw,
  Percent, ArrowDownRight, Zap, GraduationCap, BarChart2,
  Lock, AlertCircle, FileText, Upload, ChevronRight, MessageSquare, PhoneCall
} from 'lucide-react';

// Hydration guard helper
function SafeHydration({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div className="min-h-screen bg-[#030614] flex items-center justify-center text-slate-500">Loading Onboarding Flow...</div>;
  return <>{children}</>;
}

export default function OnboardingPage() {
  const router = useRouter();
  const { user, updateUser } = useAuthStore();
  const { addToast } = useUIStore();

  // Mode state: tenant vs provider
  const [roleMode, setRoleMode] = useState<'tenant' | 'provider'>('tenant');
  
  // Set default role mode based on current logged in user
  useEffect(() => {
    if (user?.role === 'provider') {
      setRoleMode('provider');
    } else {
      setRoleMode('tenant');
    }
  }, [user]);

  // Step state
  const [currentStep, setCurrentStep] = useState(1);

  // ==========================================
  // SHARED STATES & FORM VALUES
  // ==========================================

  // Tenant State values
  const [tenantWhoAreYou, setTenantWhoAreYou] = useState('Student');
  const [tenantDestination, setTenantDestination] = useState({
    country: 'Canada',
    province: 'Ontario',
    city: 'Toronto',
    university: 'University of Toronto',
    company: 'Google',
    arrivalDate: '2026-05-20'
  });
  const [tenantHousingGoal, setTenantHousingGoal] = useState('Private Room');
  const [tenantBudget, setTenantBudget] = useState([800, 2000]); // $800 - $2000 range
  const [tenantPrefToggles, setTenantPrefToggles] = useState({
    utilities: true,
    parking: true,
    furnished: false
  });
  const [tenantLifestyles, setTenantLifestyles] = useState<string[]>(['Near Transit', 'Near Campus', 'Quiet Area', 'Downtown']);
  const [tenantHousehold, setTenantHousehold] = useState({
    type: 'For Yourself',
    situation: 'Living Alone',
    hasPets: 'No',
    requirements: ''
  });
  const [tenantReloServices, setTenantReloServices] = useState<string[]>(['Airport Pickup', 'SIM Card Setup', 'Bank Account Setup', 'Insurance', 'Internet Setup']);
  const [tenantUploads, setTenantUploads] = useState<Record<string, string>>({
    govId: '',
    studentLetter: '',
    workPermit: '',
    visa: '',
    passport: ''
  });
  const [tenantInterests, setTenantInterests] = useState<string[]>(['Housing Tips', 'Events', 'Jobs', 'Students Community']);
  const [tenantCommPrefs, setTenantCommPrefs] = useState({
    email: true,
    sms: true,
    push: true,
    whatsapp: false
  });
  const [tenantAiPersonalization, setTenantAiPersonalization] = useState({
    price: 80,
    location: 90,
    safety: 70,
    commute: 60,
    amenities: 75,
    community: 65
  });

  // Provider State values
  const [providerType, setProviderType] = useState('Landlord');
  const [providerBusinessInfo, setProviderBusinessInfo] = useState({
    name: 'Maple Living Rentals',
    regNum: '123456789',
    email: 'contact@mapleliving.com',
    phone: '+1 (647) 123-4567',
    website: 'www.mapleliving.com'
  });
  const [providerLocation, setProviderLocation] = useState({
    country: 'Canada',
    province: 'Ontario',
    city: 'Toronto',
    address: '123 Queen St W, Toronto, ON',
    postalCode: 'M5H 2N2'
  });
  const [providerSubType, setProviderSubType] = useState('Residential Properties');
  const [providerServices, setProviderServices] = useState<string[]>(['Property Listing', 'Tenant Screening', 'Rent Collection', 'Maintenance', 'Property Management']);
  const [providerUploads, setProviderUploads] = useState<Record<string, string>>({
    businessReg: '',
    govIdLicense: '',
    taxDoc: '',
    proofAddress: '',
    insuranceCert: ''
  });
  const [providerBanking, setProviderBanking] = useState({
    holder: 'Maple Living Rentals Inc.',
    bank: 'TD Canada Trust',
    account: '123456789012',
    transit: '12345',
    institution: '004'
  });
  const [providerPayoutPref, setProviderPayoutPref] = useState('Direct Bank Transfer');
  const [providerHours, setProviderHours] = useState<Record<string, { active: boolean, from: string, to: string }>>({
    Monday: { active: true, from: '9:00 AM', to: '6:00 PM' },
    Tuesday: { active: true, from: '9:00 AM', to: '6:00 PM' },
    Wednesday: { active: true, from: '9:00 AM', to: '6:00 PM' },
    Thursday: { active: true, from: '9:00 AM', to: '6:00 PM' },
    Friday: { active: true, from: '9:00 AM', to: '6:00 PM' },
    Saturday: { active: false, from: '9:00 AM', to: '6:00 PM' },
    Sunday: { active: false, from: '9:00 AM', to: '6:00 PM' },
  });
  const [providerServiceAreas, setProviderServiceAreas] = useState<string[]>(['Downtown Toronto', 'North York', 'Mississauga', 'Vaughan']);
  const [providerPricing, setProviderPricing] = useState({
    model: 'Percentage Based',
    rate: '5',
    minimum: '100',
    additional: ''
  });
  const [providerBrand, setProviderBrand] = useState({
    logo: '',
    description: 'Maple Living Rentals offers modern and comfortable rental properties across Toronto. We provide high-quality homes and exceptional service.',
    years: '5+ Years'
  });
  const [providerNotifications, setProviderNotifications] = useState({
    bookings: true,
    inquiries: true,
    messages: true,
    payouts: true,
    marketing: false,
    email: true,
    sms: true,
    push: true,
    whatsapp: false
  });
  const [providerTermsChecked, setProviderTermsChecked] = useState(false);

  // Dynamic actions
  const handleTenantUpload = (key: string) => {
    setTenantUploads(prev => ({ ...prev, [key]: 'scanned_and_uploaded.pdf' }));
    addToast({ type: 'success', message: 'Document uploaded and scanning initialized.' });
  };

  const handleProviderUpload = (key: string) => {
    setProviderUploads(prev => ({ ...prev, [key]: 'scanned_and_uploaded.pdf' }));
    addToast({ type: 'success', message: 'Document uploaded and scanning initialized.' });
  };

  const handleNext = () => {
    const totalSteps = roleMode === 'tenant' ? 15 : 19;
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCompleteOnboarding = () => {
    updateUser({ verified: true });
    addToast({ type: 'success', message: 'Onboarding completed successfully!' });
    if (roleMode === 'provider') {
      router.push('/dashboard/provider');
    } else {
      router.push('/dashboard/user');
    }
  };

  // Lists of options
  const whoAreYouOptions = [
    { label: 'Student', desc: 'I am a student' },
    { label: 'International Student', desc: 'I am an international student' },
    { label: 'Professional', desc: 'I am working professional' },
    { label: 'Family', desc: 'I am moving with my family' },
    { label: 'New Immigrant', desc: 'I am a new immigrant' },
  ];

  const housingGoals = [
    { label: 'Entire Apartment', desc: 'I want the whole place for myself' },
    { label: 'Private Room', desc: 'I want a private room in a place' },
    { label: 'Shared Room', desc: 'I want to share with others' },
    { label: 'Student Housing', desc: 'I want on-campus or student housing' },
    { label: 'Family Home', desc: 'I am looking for a home for my family' },
    { label: 'Temporary Stay', desc: 'I need short term accommodation' },
  ];

  const lifestyleOptions = [
    { label: 'Pet Friendly', icon: '🐾' },
    { label: 'Gym', icon: '🏋️' },
    { label: 'Near Transit', icon: '🚇' },
    { label: 'Near Campus', icon: '🎓' },
    { label: 'Quiet Area', icon: '🔇' },
    { label: 'Luxury Living', icon: '👑' },
    { label: 'Downtown', icon: '🏙️' },
    { label: 'Suburban', icon: '🏡' },
    { label: 'Nightlife', icon: '🍸' },
    { label: 'Family Friendly', icon: '👨‍👩‍👧‍👦' },
  ];

  const interestOptions = [
    { label: 'Housing Tips', icon: '🏠' },
    { label: 'Events', icon: '📅' },
    { label: 'Jobs', icon: '💼' },
    { label: 'Students Community', icon: '🎓' },
    { label: 'Immigrants Community', icon: '🌍' },
    { label: 'Networking', icon: '🤝' },
    { label: 'Sports', icon: '⚽' },
    { label: 'Culture & Food', icon: '🍲' },
    { label: 'Volunteering', icon: '❤️' },
  ];

  const providerTypes = [
    { label: 'Landlord', desc: 'I own rental properties' },
    { label: 'Property Manager', desc: 'I manage properties for owners' },
    { label: 'Builder', desc: 'I build and sell properties' },
    { label: 'Realtor', desc: 'I help clients buy/sell/rent' },
    { label: 'Service Provider', desc: 'I provide relocation or other services' },
  ];

  const providerSubTypes = [
    { label: 'Residential Properties', desc: 'Apartments, Houses, Condos' },
    { label: 'Commercial Properties', desc: 'Offices, Retail, Industrial' },
    { label: 'Student Housing', desc: 'Dorms, Student Apartments' },
    { label: 'Short Term Rentals', desc: 'Airbnb, Vacation Rentals' },
    { label: 'Other', desc: 'Other property types' },
  ];

  const providerServicesList = [
    { label: 'Property Listing', icon: '🏠' },
    { label: 'Tenant Screening', icon: '🔍' },
    { label: 'Rent Collection', icon: '💳' },
    { label: 'Maintenance', icon: '🛠️' },
    { label: 'Property Management', icon: '📋' },
    { label: 'Legal Support', icon: '⚖️' },
    { label: 'Relocation Support', icon: '📦' },
    { label: 'Other Services', icon: '⚙️' },
  ];

  return (
    <SafeHydration>
      <main className="min-h-screen bg-[#030614] text-slate-100 py-10 px-4 relative overflow-hidden font-sans selection:bg-[#6366f1]/30 selection:text-white antialiased">
        
        {/* Background glow orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6366f1]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ec4899]/5 rounded-full blur-[140px] pointer-events-none" />

        {/* TOP BRAND CONTAINER */}
        <div className="max-w-[1400px] mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs text-indigo-400 font-bold tracking-wider uppercase mb-3">
            <span>⚡ Interactive Simulation Portal</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
            {roleMode === 'tenant' ? 'RENTORA AI – TENANT (USER) ONBOARDING FLOW' : 'RENTORA AI – PROVIDER ONBOARDING FLOW'}
          </h1>
          <p className="text-[12px] md:text-sm text-slate-400 font-medium mt-1">
            {roleMode === 'tenant' ? 'Your personalized relocation & housing journey starts here' : "Let's set up your business profile and help you grow with Rentora AI"}
          </p>

          {/* Toggle to easily switch mode for checking same to same UI */}
          <div className="flex justify-center items-center gap-3 mt-5">
            <button 
              onClick={() => { setRoleMode('tenant'); setCurrentStep(1); }} 
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${roleMode === 'tenant' ? 'bg-[#6366f1] border-[#6366f1] text-white shadow-lg' : 'bg-[#0b0e1a]/80 border-[#1a1f36] text-slate-400 hover:text-white'}`}
            >
              Tenant View (15 Steps)
            </button>
            <button 
              onClick={() => { setRoleMode('provider'); setCurrentStep(1); }} 
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${roleMode === 'provider' ? 'bg-[#8b5cf6] border-[#8b5cf6] text-white shadow-lg' : 'bg-[#0b0e1a]/80 border-[#1a1f36] text-slate-400 hover:text-white'}`}
            >
              Provider View (19 Steps)
            </button>
          </div>
        </div>

        {/* PROGRESS STEP INDICATOR */}
        <div className="max-w-[720px] mx-auto mb-6 px-4">
          <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">
            <span>Step {String(currentStep).padStart(2, '0')}</span>
            <span>Progress: {Math.round((currentStep / (roleMode === 'tenant' ? 15 : 19)) * 100)}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-[#12162a] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] transition-all duration-300 rounded-full"
              style={{ width: `${(currentStep / (roleMode === 'tenant' ? 15 : 19)) * 100}%` }}
            />
          </div>
        </div>

        {/* MAIN WIZARD CARD PANEL */}
        <div className="max-w-[540px] w-full mx-auto bg-[#0b0e1a] border border-[#1a1f36]/45 p-6 rounded-3xl min-h-[460px] flex flex-col justify-between shadow-2xl relative">
          
          {/* STEP HEADER */}
          <div className="mb-4">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">
              Step {String(currentStep).padStart(2, '0')} of {roleMode === 'tenant' ? '15' : '19'}
            </span>
          </div>

          {/* DYNAMIC CONTENT SWITCHER */}
          <div className="flex-1 flex flex-col justify-center my-2">
            
            {/* ====================================================
                TENANT FLOW STEPS (1-15)
                ==================================================== */}
            {roleMode === 'tenant' && (
              <>
                {/* Step 1: Welcome */}
                {currentStep === 1 && (
                  <div className="text-center py-4 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#6366f1] to-[#ec4899] flex items-center justify-center shadow-lg shadow-[#6366f1]/25">
                      <span className="text-white font-black text-3xl italic tracking-tighter">R</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-white">Welcome to Rentora AI</h2>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed max-w-[320px] mx-auto">
                        Let's personalize your housing and relocation journey.
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#070a17] border border-[#1a1f36] text-[10px] text-slate-400 font-bold mx-auto">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>Estimated Time: 3-5 minutes</span>
                    </div>
                  </div>
                )}

                {/* Step 2: Who Are You? */}
                {currentStep === 2 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Who Are You?</h2>
                    <p className="text-[11px] text-slate-500">Select the option that best describes you.</p>
                    <div className="space-y-2 mt-2">
                      {whoAreYouOptions.map((opt) => (
                        <div 
                          key={opt.label}
                          onClick={() => setTenantWhoAreYou(opt.label)}
                          className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${tenantWhoAreYou === opt.label ? 'bg-[#6366f1]/10 border-[#6366f1] text-white' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">{opt.label}</span>
                            <span className="text-[10px] text-slate-500 font-semibold mt-0.5">{opt.desc}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${tenantWhoAreYou === opt.label ? 'border-[#6366f1] bg-[#6366f1]' : 'border-slate-700'}`}>
                            {tenantWhoAreYou === opt.label && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Where Are You Headed? */}
                {currentStep === 3 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Where Are You Headed?</h2>
                    <p className="text-[11px] text-slate-500">Tell us about your destination.</p>
                    <div className="space-y-3 mt-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Country</label>
                        <select 
                          value={tenantDestination.country} 
                          onChange={(e) => setTenantDestination(prev => ({ ...prev, country: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        >
                          <option>Canada</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Province / State</label>
                          <input 
                            type="text" 
                            value={tenantDestination.province} 
                            onChange={(e) => setTenantDestination(prev => ({ ...prev, province: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">City</label>
                          <input 
                            type="text" 
                            value={tenantDestination.city} 
                            onChange={(e) => setTenantDestination(prev => ({ ...prev, city: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">University (Optional)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. University of Toronto" 
                          value={tenantDestination.university} 
                          onChange={(e) => setTenantDestination(prev => ({ ...prev, university: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Company (Optional)</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Google" 
                            value={tenantDestination.company} 
                            onChange={(e) => setTenantDestination(prev => ({ ...prev, company: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Expected Arrival Date</label>
                          <input 
                            type="date" 
                            value={tenantDestination.arrivalDate} 
                            onChange={(e) => setTenantDestination(prev => ({ ...prev, arrivalDate: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none text-[11px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: What's Your Housing Goal? */}
                {currentStep === 4 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">What's Your Housing Goal?</h2>
                    <p className="text-[11px] text-slate-500">What type of place are you looking for?</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {housingGoals.map((g) => (
                        <div 
                          key={g.label}
                          onClick={() => setTenantHousingGoal(g.label)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between h-20 ${tenantHousingGoal === g.label ? 'bg-[#6366f1]/10 border-[#6366f1] text-white' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-[11px] font-bold leading-tight">{g.label}</span>
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${tenantHousingGoal === g.label ? 'border-[#6366f1] bg-[#6366f1]' : 'border-slate-700'}`}>
                              {tenantHousingGoal === g.label && <Check className="w-2 h-2 text-white" />}
                            </div>
                          </div>
                          <span className="text-[9px] text-slate-500 font-semibold leading-tight">{g.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Set Your Budget */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <h2 className="text-base font-black text-white">Set Your Budget</h2>
                    <p className="text-[11px] text-slate-500">What is your monthly budget range?</p>
                    <div className="py-6 text-center">
                      <div className="text-2xl font-black text-[#6366f1] font-mono">${tenantBudget[0]} - ${tenantBudget[1]}</div>
                      <div className="flex items-center gap-3 mt-4 px-2">
                        <span className="text-[10px] text-slate-500 font-bold">$500</span>
                        <input 
                          type="range" 
                          min="500" 
                          max="5000" 
                          value={tenantBudget[1]} 
                          onChange={(e) => setTenantBudget([tenantBudget[0], Number(e.target.value)])}
                          className="flex-1 accent-[#6366f1]"
                        />
                        <span className="text-[10px] text-slate-500 font-bold">$5,000+</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-[#1a1f36]/30 text-xs">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Additional Preferences</div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-slate-300 font-semibold">Utilities Included</span>
                        <input 
                          type="checkbox" 
                          checked={tenantPrefToggles.utilities} 
                          onChange={(e) => setTenantPrefToggles(prev => ({ ...prev, utilities: e.target.checked }))}
                          className="accent-[#6366f1] w-4 h-4" 
                        />
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-slate-300 font-semibold">Parking Needed</span>
                        <input 
                          type="checkbox" 
                          checked={tenantPrefToggles.parking} 
                          onChange={(e) => setTenantPrefToggles(prev => ({ ...prev, parking: e.target.checked }))}
                          className="accent-[#6366f1] w-4 h-4" 
                        />
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-slate-300 font-semibold">Furnished Required</span>
                        <input 
                          type="checkbox" 
                          checked={tenantPrefToggles.furnished} 
                          onChange={(e) => setTenantPrefToggles(prev => ({ ...prev, furnished: e.target.checked }))}
                          className="accent-[#6366f1] w-4 h-4" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 6: Lifestyle Preferences */}
                {currentStep === 6 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Lifestyle Preferences</h2>
                    <p className="text-[11px] text-slate-500">What amenities and lifestyle do you prefer?</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {lifestyleOptions.map((opt) => {
                        const isSelected = tenantLifestyles.includes(opt.label);
                        return (
                          <div 
                            key={opt.label}
                            onClick={() => {
                              if (isSelected) {
                                setTenantLifestyles(tenantLifestyles.filter(x => x !== opt.label));
                              } else {
                                setTenantLifestyles([...tenantLifestyles, opt.label]);
                              }
                            }}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${isSelected ? 'bg-[#6366f1]/10 border-[#6366f1] text-white' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                          >
                            <span className="text-lg">{opt.icon}</span>
                            <span className="text-xs font-semibold">{opt.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 7: Household Details */}
                {currentStep === 7 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Household Details</h2>
                    <p className="text-[11px] text-slate-500">Tell us about yourself.</p>
                    
                    <div className="flex rounded-xl bg-[#070a17] border border-[#1a1f36]/80 p-1 mt-2">
                      <button 
                        onClick={() => setTenantHousehold(prev => ({ ...prev, type: 'For Yourself' }))}
                        className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${tenantHousehold.type === 'For Yourself' ? 'bg-[#6366f1] text-white' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        For Yourself
                      </button>
                      <button 
                        onClick={() => setTenantHousehold(prev => ({ ...prev, type: 'With Others' }))}
                        className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${tenantHousehold.type === 'With Others' ? 'bg-[#6366f1] text-white' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        With Others
                      </button>
                    </div>

                    <div className="space-y-2 mt-3">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Living Situation</label>
                      {['Living Alone', 'With Roommates', 'Shared Housing'].map((sit) => (
                        <div 
                          key={sit}
                          onClick={() => setTenantHousehold(prev => ({ ...prev, situation: sit }))}
                          className={`flex items-center gap-3 p-2 rounded-xl border cursor-pointer transition-all ${tenantHousehold.situation === sit ? 'bg-[#6366f1]/5 border-[#6366f1] text-white' : 'bg-[#070a17]/25 border-[#1a1f36]/40 text-slate-300'}`}
                        >
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${tenantHousehold.situation === sit ? 'border-[#6366f1] bg-[#6366f1]' : 'border-slate-700'}`}>
                            {tenantHousehold.situation === sit && <Check className="w-2 h-2 text-white" />}
                          </div>
                          <span className="text-[11px] font-semibold">{sit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3 items-center">
                      <span className="font-semibold text-slate-300">Do you have any pets?</span>
                      <div className="flex gap-4 justify-end">
                        {['Yes', 'No'].map((pet) => (
                          <label key={pet} className="flex items-center gap-1.5 cursor-pointer">
                            <input 
                              type="radio" 
                              name="hasPets" 
                              checked={tenantHousehold.hasPets === pet} 
                              onChange={() => setTenantHousehold(prev => ({ ...prev, hasPets: pet }))}
                              className="accent-[#6366f1]" 
                            />
                            <span className="font-bold">{pet}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Any special requirements?</label>
                      <textarea 
                        value={tenantHousehold.requirements} 
                        onChange={(e) => setTenantHousehold(prev => ({ ...prev, requirements: e.target.value }))}
                        placeholder="e.g. Accessibility, allergies, etc." 
                        className="w-full h-16 px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none placeholder-slate-600"
                      />
                    </div>
                  </div>
                )}

                {/* Step 8: Relocation Services */}
                {currentStep === 8 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Relocation Services</h2>
                    <p className="text-[11px] text-slate-500">Which services do you need help with?</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {[
                        'Airport Pickup', 'SIM Card Setup', 'Bank Account Setup', 
                        'Insurance', 'Furniture & Appliances', 'Moving Service', 
                        'Internet Setup', 'Cleaning Service', 'Other Services'
                      ].map((srv) => {
                        const isSelected = tenantReloServices.includes(srv);
                        return (
                          <div 
                            key={srv}
                            onClick={() => {
                              if (isSelected) {
                                setTenantReloServices(tenantReloServices.filter(x => x !== srv));
                              } else {
                                setTenantReloServices([...tenantReloServices, srv]);
                              }
                            }}
                            className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${isSelected ? 'bg-[#6366f1]/10 border-[#6366f1] text-white' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                          >
                            <span className="text-[10px] font-bold">{srv}</span>
                            <input type="checkbox" checked={isSelected} readOnly className="accent-[#6366f1]" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 9: Verification Setup */}
                {currentStep === 9 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Verification Setup</h2>
                    <p className="text-[11px] text-slate-500">Upload documents to verify your identity.</p>
                    <div className="space-y-2 mt-2">
                      {[
                        { key: 'govId', label: 'Government ID', desc: 'Passport / Driving License' },
                        { key: 'studentLetter', label: 'Student Letter / ID', desc: 'From your institution' },
                        { key: 'workPermit', label: 'Work Permit (Optional)', desc: 'If applicable' },
                        { key: 'visa', label: 'Visa / Study Permit', desc: 'Visa copy' },
                        { key: 'passport', label: 'Passport', desc: 'Passport bio page' },
                      ].map((doc) => (
                        <div key={doc.key} className="flex justify-between items-center p-2 rounded-xl bg-[#070a17]/40 border border-[#1a1f36]/40">
                          <div>
                            <span className="font-bold text-slate-200 block">{doc.label}</span>
                            <span className="text-[9px] text-slate-500 font-semibold">{doc.desc}</span>
                          </div>
                          <button 
                            onClick={() => handleTenantUpload(doc.key)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${tenantUploads[doc.key] ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-[#0b0e1a] border-[#1a1f36] hover:bg-white/5 text-slate-300'}`}
                          >
                            {tenantUploads[doc.key] ? 'Scanning Complete ✓' : 'Upload'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 10: Community Interests */}
                {currentStep === 10 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Community Interests</h2>
                    <p className="text-[11px] text-slate-500">What are you interested in?</p>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {interestOptions.map((opt) => {
                        const isSelected = tenantInterests.includes(opt.label);
                        return (
                          <div 
                            key={opt.label}
                            onClick={() => {
                              if (isSelected) {
                                setTenantInterests(tenantInterests.filter(x => x !== opt.label));
                              } else {
                                setTenantInterests([...tenantInterests, opt.label]);
                              }
                            }}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border cursor-pointer transition-all aspect-square text-center ${isSelected ? 'bg-[#6366f1]/15 border-[#6366f1] text-white shadow-inner' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                          >
                            <span className="text-2xl mb-1">{opt.icon}</span>
                            <span className="text-[9px] font-bold leading-tight">{opt.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 11: Communication Preferences */}
                {currentStep === 11 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Communication Preferences</h2>
                    <p className="text-[11px] text-slate-500">How would you like us to reach you?</p>
                    <div className="space-y-3 mt-3 text-xs">
                      {[
                        { key: 'email', label: 'Email', desc: 'Receive important updates' },
                        { key: 'sms', label: 'SMS / Text', desc: 'Receive text notifications' },
                        { key: 'push', label: 'Push Notifications', desc: 'In-app notifications' },
                        { key: 'whatsapp', label: 'WhatsApp', desc: 'Receive updates on WhatsApp' },
                      ].map((item) => (
                        <div key={item.key} className="flex justify-between items-center p-3 rounded-xl bg-[#070a17]/50 border border-[#1a1f36]/40">
                          <div>
                            <span className="font-bold text-slate-200 block">{item.label}</span>
                            <span className="text-[10px] text-slate-500 mt-0.5">{item.desc}</span>
                          </div>
                          <input 
                            type="checkbox" 
                            checked={tenantCommPrefs[item.key as keyof typeof tenantCommPrefs]} 
                            onChange={(e) => setTenantCommPrefs(prev => ({ ...prev, [item.key]: e.target.checked }))}
                            className="accent-[#6366f1] w-4.5 h-4.5"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 12: AI Personalization */}
                {currentStep === 12 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">AI Personalization</h2>
                    <p className="text-[11px] text-slate-500">What matters most to you? (drag to adjust)</p>
                    <div className="space-y-3.5 mt-3">
                      {Object.keys(tenantAiPersonalization).map((key) => {
                        const val = tenantAiPersonalization[key as keyof typeof tenantAiPersonalization];
                        return (
                          <div key={key} className="space-y-1">
                            <div className="flex justify-between font-bold text-slate-400 text-[10px] uppercase">
                              <span>{key}</span>
                              <span className="text-white font-mono">{val}%</span>
                            </div>
                            <input 
                              type="range" 
                              min="0" 
                              max="100" 
                              value={val}
                              onChange={(e) => setTenantAiPersonalization(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                              className="w-full accent-[#6366f1] h-1" 
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 13: Profile Summary */}
                {currentStep === 13 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Your Profile Summary</h2>
                    <p className="text-[11px] text-slate-500">Review your information.</p>
                    <div className="space-y-2 mt-3 bg-[#070a17]/50 border border-[#1a1f36]/40 p-4 rounded-2xl font-medium">
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">You Are</span>
                        <span className="text-slate-200 font-bold">{tenantWhoAreYou}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">Destination</span>
                        <span className="text-slate-200 font-bold">{tenantDestination.city}, {tenantDestination.country}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">Arrival Date</span>
                        <span className="text-slate-200 font-bold">{tenantDestination.arrivalDate}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">Housing Goal</span>
                        <span className="text-slate-200 font-bold">{tenantHousingGoal}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">Budget</span>
                        <span className="text-slate-200 font-mono font-bold">${tenantBudget[0]} - ${tenantBudget[1]}</span>
                      </div>
                      <div className="flex justify-between py-1 last:border-0">
                        <span className="text-slate-500">Services</span>
                        <span className="text-slate-200 font-bold text-right truncate max-w-[200px]">{tenantReloServices.slice(0, 3).join(', ')}...</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setCurrentStep(2)}
                      className="w-full mt-3 py-2 border border-[#1a1f36] hover:bg-white/5 text-[10px] font-bold rounded-xl text-slate-300 uppercase tracking-wider"
                    >
                      Edit Summary
                    </button>
                  </div>
                )}

                {/* Step 14: Recommended Next Steps */}
                {currentStep === 14 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Recommended Next Steps</h2>
                    <p className="text-[11px] text-slate-500">You're almost done! Here's what to do next.</p>
                    <div className="space-y-2 mt-3 text-xs">
                      {[
                        { title: 'Complete Verification', desc: 'Verify your documents to get better matches', icon: Shield },
                        { title: 'Explore Matches', desc: 'Browse personalized property matches', icon: Search },
                        { title: 'Join Community', desc: 'Connect with people in your area', icon: Users },
                        { title: 'Setup Relocation Plan', desc: 'Get a smooth relocation experience', icon: MapPin },
                      ].map((step, idx) => {
                        const Icon = step.icon;
                        return (
                          <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-[#070a17]/50 border border-[#1a1f36]/40 cursor-pointer hover:border-slate-800 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="font-bold text-slate-200 block">{step.title}</span>
                                <span className="text-[10px] text-slate-500 font-semibold">{step.desc}</span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-600" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 15: All Set, Welcome Aboard! */}
                {currentStep === 15 && (
                  <div className="text-center py-6 space-y-5">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-white">Your Rentora AI profile is ready!</h2>
                      <p className="text-xs text-slate-400 mt-2 max-w-[320px] mx-auto leading-relaxed">
                        We'll find the best places and services just for you.
                      </p>
                    </div>

                    <div className="pt-4 space-y-3">
                      <button 
                        onClick={handleCompleteOnboarding}
                        className="w-full py-3 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#6366f1]/20"
                      >
                        Go to Dashboard
                      </button>
                      <button 
                        onClick={handleCompleteOnboarding}
                        className="text-[10px] text-[#6366f1] font-bold block mx-auto hover:underline uppercase tracking-wider"
                      >
                        Explore Now
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ====================================================
                PROVIDER FLOW STEPS (1-19)
                ==================================================== */}
            {roleMode === 'provider' && (
              <>
                {/* Step 1: Welcome */}
                {currentStep === 1 && (
                  <div className="text-center py-4 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#8b5cf6] to-[#ec4899] flex items-center justify-center shadow-lg shadow-[#8b5cf6]/25">
                      <span className="text-white font-black text-3xl italic tracking-tighter">R</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-white">Welcome to Rentora AI</h2>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed max-w-[320px] mx-auto">
                        Let's get your business set up and start reaching more clients.
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#070a17] border border-[#1a1f36] text-[10px] text-slate-400 font-bold mx-auto">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>Estimated Time: 5-7 minutes</span>
                    </div>
                  </div>
                )}

                {/* Step 2: What Type of Provider Are You? */}
                {currentStep === 2 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">What Type of Provider Are You?</h2>
                    <p className="text-[11px] text-slate-500">Select the option that best describes your business.</p>
                    <div className="space-y-2 mt-2">
                      {providerTypes.map((opt) => (
                        <div 
                          key={opt.label}
                          onClick={() => setProviderType(opt.label)}
                          className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${providerType === opt.label ? 'bg-[#8b5cf6]/10 border-[#8b5cf6] text-white' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">{opt.label}</span>
                            <span className="text-[10px] text-slate-500 font-semibold mt-0.5">{opt.desc}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${providerType === opt.label ? 'border-[#8b5cf6] bg-[#8b5cf6]' : 'border-slate-700'}`}>
                            {providerType === opt.label && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Business Information */}
                {currentStep === 3 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Business Information</h2>
                    <p className="text-[11px] text-slate-500">Tell us about your business.</p>
                    <div className="space-y-3 mt-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Business Name *</label>
                        <input 
                          type="text" 
                          value={providerBusinessInfo.name} 
                          onChange={(e) => setProviderBusinessInfo(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Business Registration Number (Optional)</label>
                        <input 
                          type="text" 
                          value={providerBusinessInfo.regNum} 
                          onChange={(e) => setProviderBusinessInfo(prev => ({ ...prev, regNum: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Business Email *</label>
                        <input 
                          type="email" 
                          value={providerBusinessInfo.email} 
                          onChange={(e) => setProviderBusinessInfo(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Business Phone Number *</label>
                          <input 
                            type="text" 
                            value={providerBusinessInfo.phone} 
                            onChange={(e) => setProviderBusinessInfo(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Business Website (Optional)</label>
                          <input 
                            type="text" 
                            value={providerBusinessInfo.website} 
                            onChange={(e) => setProviderBusinessInfo(prev => ({ ...prev, website: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Business Location */}
                {currentStep === 4 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Business Location</h2>
                    <p className="text-[11px] text-slate-500">Where is your business based?</p>
                    <div className="space-y-3 mt-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Country</label>
                        <select 
                          value={providerLocation.country} 
                          onChange={(e) => setProviderLocation(prev => ({ ...prev, country: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        >
                          <option>Canada</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Province / State</label>
                          <input 
                            type="text" 
                            value={providerLocation.province} 
                            onChange={(e) => setProviderLocation(prev => ({ ...prev, province: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">City</label>
                          <input 
                            type="text" 
                            value={providerLocation.city} 
                            onChange={(e) => setProviderLocation(prev => ({ ...prev, city: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Business Address</label>
                        <input 
                          type="text" 
                          value={providerLocation.address} 
                          onChange={(e) => setProviderLocation(prev => ({ ...prev, address: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Postal / ZIP Code</label>
                        <input 
                          type="text" 
                          value={providerLocation.postalCode} 
                          onChange={(e) => setProviderLocation(prev => ({ ...prev, postalCode: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Provider Sub-Type */}
                {currentStep === 5 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Provider Sub-Type</h2>
                    <p className="text-[11px] text-slate-500">Select the category that fits you best.</p>
                    <div className="space-y-2 mt-2">
                      {providerSubTypes.map((opt) => (
                        <div 
                          key={opt.label}
                          onClick={() => setProviderSubType(opt.label)}
                          className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${providerSubType === opt.label ? 'bg-[#8b5cf6]/10 border-[#8b5cf6] text-white' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">{opt.label}</span>
                            <span className="text-[10px] text-slate-500 font-semibold mt-0.5">{opt.desc}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${providerSubType === opt.label ? 'border-[#8b5cf6] bg-[#8b5cf6]' : 'border-slate-700'}`}>
                            {providerSubType === opt.label && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 6: Services You Provide */}
                {currentStep === 6 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Services You Provide</h2>
                    <p className="text-[11px] text-slate-500">Select all the services you offer.</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {providerServicesList.map((opt) => {
                        const isSelected = providerServices.includes(opt.label);
                        return (
                          <div 
                            key={opt.label}
                            onClick={() => {
                              if (isSelected) {
                                setProviderServices(providerServices.filter(x => x !== opt.label));
                              } else {
                                setProviderServices([...providerServices, opt.label]);
                              }
                            }}
                            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${isSelected ? 'bg-[#8b5cf6]/10 border-[#8b5cf6] text-white' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-base">{opt.icon}</span>
                              <span className="text-xs font-semibold">{opt.label}</span>
                            </div>
                            <input type="checkbox" checked={isSelected} readOnly className="accent-[#8b5cf6]" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 7: Verification & Documents */}
                {currentStep === 7 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Verification & Documents</h2>
                    <p className="text-[11px] text-slate-500">Upload documents to verify your business.</p>
                    <div className="space-y-2 mt-2">
                      {[
                        { key: 'businessReg', label: 'Business Registration Certificate', desc: 'Company incorporation doc' },
                        { key: 'govIdLicense', label: 'Government ID or License', desc: 'Valid ID of representative' },
                        { key: 'taxDoc', label: 'Tax Document (Optional)', desc: 'TIN or VAT certificates' },
                        { key: 'proofAddress', label: 'Proof of Address', desc: 'Utility bill or bank statement' },
                        { key: 'insuranceCert', label: 'Insurance Certificate (Optional)', desc: 'Liability coverage document' },
                      ].map((doc) => (
                        <div key={doc.key} className="flex justify-between items-center p-2 rounded-xl bg-[#070a17]/40 border border-[#1a1f36]/40">
                          <div>
                            <span className="font-bold text-slate-200 block">{doc.label}</span>
                            <span className="text-[9px] text-slate-500 font-semibold">{doc.desc}</span>
                          </div>
                          <button 
                            onClick={() => handleProviderUpload(doc.key)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${providerUploads[doc.key] ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-[#0b0e1a] border-[#1a1f36] hover:bg-white/5 text-slate-300'}`}
                          >
                            {providerUploads[doc.key] ? 'Scanning Complete ✓' : 'Upload'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 8: Banking Details */}
                {currentStep === 8 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Banking Details</h2>
                    <p className="text-[11px] text-slate-500">Add your bank information for secure payouts.</p>
                    <div className="space-y-3 mt-3 text-xs">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Account Holder Name *</label>
                        <input 
                          type="text" 
                          value={providerBanking.holder} 
                          onChange={(e) => setProviderBanking(prev => ({ ...prev, holder: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Bank Name *</label>
                        <input 
                          type="text" 
                          value={providerBanking.bank} 
                          onChange={(e) => setProviderBanking(prev => ({ ...prev, bank: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Account Number *</label>
                        <input 
                          type="text" 
                          value={providerBanking.account} 
                          onChange={(e) => setProviderBanking(prev => ({ ...prev, account: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Transit Number *</label>
                          <input 
                            type="text" 
                            value={providerBanking.transit} 
                            onChange={(e) => setProviderBanking(prev => ({ ...prev, transit: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Institution Number *</label>
                          <input 
                            type="text" 
                            value={providerBanking.institution} 
                            onChange={(e) => setProviderBanking(prev => ({ ...prev, institution: e.target.value }))}
                            className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 9: Payout Preferences */}
                {currentStep === 9 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Payout Preferences</h2>
                    <p className="text-[11px] text-slate-500">How would you like to receive payments?</p>
                    <div className="space-y-2.5 mt-2">
                      {[
                        { label: 'Direct Bank Transfer', desc: 'Secure and fast bank transfers' },
                        { label: 'PayPal', desc: 'Receive payments via PayPal' },
                        { label: 'Wise (TransferWise)', desc: 'International money transfers' },
                        { label: 'Other Method', desc: 'Other payout methods' },
                      ].map((opt) => (
                        <div 
                          key={opt.label}
                          onClick={() => setProviderPayoutPref(opt.label)}
                          className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${providerPayoutPref === opt.label ? 'bg-[#8b5cf6]/10 border-[#8b5cf6] text-white' : 'bg-[#070a17]/50 border-[#1a1f36]/60 text-slate-300 hover:border-slate-800'}`}
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">{opt.label}</span>
                            <span className="text-[10px] text-slate-500 font-semibold mt-0.5">{opt.desc}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${providerPayoutPref === opt.label ? 'border-[#8b5cf6] bg-[#8b5cf6]' : 'border-slate-700'}`}>
                            {providerPayoutPref === opt.label && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 10: Business Hours */}
                {currentStep === 10 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Business Hours</h2>
                    <p className="text-[11px] text-slate-500">When are you available to serve clients?</p>
                    <div className="space-y-2 mt-2 text-xs">
                      {Object.keys(providerHours).map((day) => {
                        const h = providerHours[day];
                        return (
                          <div key={day} className="flex justify-between items-center p-2 rounded-xl bg-[#070a17]/40 border border-[#1a1f36]/30">
                            <div className="flex items-center gap-2">
                              <input 
                                type="checkbox" 
                                checked={h.active} 
                                onChange={(e) => setProviderHours(prev => ({ 
                                  ...prev, 
                                  [day]: { ...prev[day], active: e.target.checked } 
                                }))}
                                className="accent-[#8b5cf6] w-4 h-4"
                              />
                              <span className="font-bold text-slate-300 w-20">{day}</span>
                            </div>
                            
                            {h.active && (
                              <div className="flex items-center gap-2 text-[10px]">
                                <input 
                                  type="text" 
                                  value={h.from} 
                                  onChange={(e) => setProviderHours(prev => ({ 
                                    ...prev, 
                                    [day]: { ...prev[day], from: e.target.value } 
                                  }))}
                                  className="w-16 px-1.5 py-0.5 bg-[#0b0e1a] border border-[#1a1f36] rounded text-center text-white"
                                />
                                <span className="text-slate-500 font-bold">to</span>
                                <input 
                                  type="text" 
                                  value={h.to} 
                                  onChange={(e) => setProviderHours(prev => ({ 
                                    ...prev, 
                                    [day]: { ...prev[day], to: e.target.value } 
                                  }))}
                                  className="w-16 px-1.5 py-0.5 bg-[#0b0e1a] border border-[#1a1f36] rounded text-center text-white"
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 11: Service Areas */}
                {currentStep === 11 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Service Areas</h2>
                    <p className="text-[11px] text-slate-500">Where do you provide your services?</p>
                    
                    <div className="space-y-2 mt-2">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Add Service Areas</label>
                      <div className="flex flex-wrap gap-1.5 p-2.5 rounded-xl border border-[#1a1f36]/80 bg-[#070a17]">
                        {providerServiceAreas.map((area) => (
                          <span key={area} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#8b5cf6]/15 border border-[#8b5cf6]/25 text-[10px] font-bold text-[#a855f7]">
                            <span>{area}</span>
                            <button 
                              onClick={() => setProviderServiceAreas(providerServiceAreas.filter(x => x !== area))}
                              className="text-slate-400 hover:text-white"
                            >
                              ✕
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mock map graphic */}
                    <div className="h-28 rounded-2xl border border-[#1a1f36]/40 bg-[#070a17] relative overflow-hidden flex items-center justify-center mt-3">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1a1f36_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/35 flex items-center justify-center animate-pulse">
                        <Map className="w-6 h-6 text-[#8b5cf6]" />
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#0b0e1a] text-[8px] text-slate-500 font-bold border border-[#1a1f36]">
                        Interactive Radius Map
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 12: Pricing & Commission */}
                {currentStep === 12 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Pricing & Commission</h2>
                    <p className="text-[11px] text-slate-500">Tell us about your pricing structure.</p>
                    
                    <div className="space-y-3 mt-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Pricing Model</label>
                        <select 
                          value={providerPricing.model}
                          onChange={(e) => setProviderPricing(prev => ({ ...prev, model: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        >
                          <option>Percentage Based</option>
                          <option>Fixed Flat Fee</option>
                          <option>Subscription Model</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Commission Rate (%) *</label>
                          <div className="relative">
                            <input 
                              type="number" 
                              value={providerPricing.rate}
                              onChange={(e) => setProviderPricing(prev => ({ ...prev, rate: e.target.value }))}
                              className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none font-mono"
                            />
                            <Percent className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-2.5" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Minimum Commission (Optional)</label>
                          <div className="relative">
                            <input 
                              type="number" 
                              value={providerPricing.minimum}
                              onChange={(e) => setProviderPricing(prev => ({ ...prev, minimum: e.target.value }))}
                              className="w-full pl-6 pr-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none font-mono"
                            />
                            <span className="text-slate-500 absolute left-3 top-2.5">$</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Additional Fees (Optional)</label>
                        <textarea 
                          value={providerPricing.additional}
                          onChange={(e) => setProviderPricing(prev => ({ ...prev, additional: e.target.value }))}
                          placeholder="Enter additional fees details..."
                          className="w-full h-16 px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none placeholder-slate-600"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 13: Profile & Brand Details */}
                {currentStep === 13 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Profile & Brand Details</h2>
                    <p className="text-[11px] text-slate-500">Let's build your brand on Rentora AI.</p>
                    
                    <div className="space-y-3 mt-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Business Logo</label>
                        <div className="border border-dashed border-[#1a1f36]/80 rounded-2xl p-4 bg-[#070a17]/40 flex flex-col items-center justify-center cursor-pointer hover:border-slate-800 transition-colors">
                          <Upload className="w-6 h-6 text-slate-500 mb-2" />
                          <span className="font-bold text-slate-300">Upload Logo</span>
                          <span className="text-[9px] text-slate-500 mt-1">JPG, PNG (Max 2MB)</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Business Description *</label>
                        <textarea 
                          value={providerBrand.description}
                          onChange={(e) => setProviderBrand(prev => ({ ...prev, description: e.target.value }))}
                          className="w-full h-20 px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none text-[11px] leading-relaxed"
                          maxLength={300}
                        />
                        <div className="text-right text-[8px] text-slate-500 font-bold mt-1">{providerBrand.description.length}/300</div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Years in Business *</label>
                        <input 
                          type="text" 
                          value={providerBrand.years}
                          onChange={(e) => setProviderBrand(prev => ({ ...prev, years: e.target.value }))}
                          className="w-full px-3 py-2 bg-[#070a17] border border-[#1a1f36]/80 rounded-xl text-slate-200 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 14: Notification Preferences */}
                {currentStep === 14 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Notification Preferences</h2>
                    <p className="text-[11px] text-slate-500">How would you like to stay updated?</p>
                    
                    <div className="space-y-2 mt-3">
                      {[
                        { key: 'bookings', label: 'New Booking Requests' },
                        { key: 'inquiries', label: 'New Inquiries' },
                        { key: 'messages', label: 'Messages' },
                        { key: 'payouts', label: 'Payment Updates' },
                        { key: 'marketing', label: 'Marketing & Promotions' },
                      ].map((item) => (
                        <div key={item.key} className="flex justify-between items-center p-2 rounded-xl bg-[#070a17]/50 border border-[#1a1f36]/30">
                          <span className="font-bold text-slate-300">{item.label}</span>
                          <input 
                            type="checkbox" 
                            checked={providerNotifications[item.key as keyof typeof providerNotifications]} 
                            onChange={(e) => setProviderNotifications(prev => ({ ...prev, [item.key]: e.target.checked }))}
                            className="accent-[#8b5cf6] w-4.5 h-4.5" 
                          />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 pt-3 border-t border-[#1a1f36]/30 mt-3">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Preferred Channels</label>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { key: 'email', label: 'Email' },
                          { key: 'sms', label: 'SMS' },
                          { key: 'push', label: 'Push Notification' },
                          { key: 'whatsapp', label: 'WhatsApp' },
                        ].map((ch) => (
                          <div key={ch.key} className="p-2 rounded-xl bg-[#070a17]/50 border border-[#1a1f36]/30 flex flex-col items-center justify-between aspect-square text-center">
                            <span className="text-[9px] font-bold text-slate-400 block leading-tight">{ch.label}</span>
                            <input 
                              type="checkbox" 
                              checked={providerNotifications[ch.key as keyof typeof providerNotifications]} 
                              onChange={(e) => setProviderNotifications(prev => ({ ...prev, [ch.key]: e.target.checked }))}
                              className="accent-[#8b5cf6] w-4 h-4" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 15: Review Your Information */}
                {currentStep === 15 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Review Your Information</h2>
                    <p className="text-[11px] text-slate-500">Please review your details before completing setup.</p>
                    
                    <div className="space-y-2.5 mt-3 bg-[#070a17]/50 border border-[#1a1f36]/40 p-4 rounded-2xl font-medium">
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">Business Type</span>
                        <span className="text-slate-200 font-bold">{providerType} ({providerSubType})</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">Business Name</span>
                        <span className="text-slate-200 font-bold">{providerBusinessInfo.name}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">Location</span>
                        <span className="text-slate-200 font-bold">{providerLocation.city}, {providerLocation.province}, {providerLocation.country}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#1a1f36]/25">
                        <span className="text-slate-500">Service Areas</span>
                        <span className="text-slate-200 font-bold text-right truncate max-w-[200px]">{providerServiceAreas.join(', ')}</span>
                      </div>
                      <div className="flex justify-between py-1 last:border-0">
                        <span className="text-slate-500">Commission Rate</span>
                        <span className="text-slate-200 font-mono font-bold">{providerPricing.rate}%</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setCurrentStep(3)}
                      className="w-full mt-3 py-2 border border-[#1a1f36] hover:bg-white/5 text-[10px] font-bold rounded-xl text-slate-300 uppercase tracking-wider"
                    >
                      Edit Information
                    </button>
                  </div>
                )}

                {/* Step 16: Rentora AI Tools */}
                {currentStep === 16 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Rentora AI Tools</h2>
                    <p className="text-[11px] text-slate-500">Get access to powerful tools to grow your business.</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {[
                        { title: 'Smart Property Listing', desc: 'AI-powered listing optimization', icon: Sparkles },
                        { title: 'AI Lead Management', desc: 'Manage leads & inquiries', icon: Cpu },
                        { title: 'Tenant Screening', desc: 'Find the best tenants', icon: Search },
                        { title: 'Calendar & Bookings', desc: 'Manage viewings & bookings', icon: Calendar },
                        { title: 'Analytics Dashboard', desc: 'Track performance & growth', icon: BarChart2 },
                        { title: 'Marketing Boost', desc: 'Promote your listings', icon: Zap },
                      ].map((tool, idx) => (
                        <div key={idx} className="p-3 rounded-xl border border-[#1a1f36]/40 bg-[#070a17]/50 flex gap-2.5 items-start">
                          <div className="w-7 h-7 rounded bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center shrink-0 mt-0.5">
                            <tool.icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-white block">{tool.title}</span>
                            <span className="text-[8px] text-slate-500 mt-0.5 leading-tight block">{tool.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 17: Community & Network */}
                {currentStep === 17 && (
                  <div className="space-y-3">
                    <h2 className="text-base font-black text-white">Community & Network</h2>
                    <p className="text-[11px] text-slate-500">Connect and grow with the Rentora AI community.</p>
                    <div className="space-y-2 mt-2 text-xs">
                      {[
                        { title: 'Join Provider Community', desc: 'Network with other providers', icon: Users },
                        { title: 'Attend Webinars & Events', desc: 'Learn and grow your business', icon: GraduationCap },
                        { title: 'Share Market Insights', desc: 'Help others and get recognized', icon: Globe },
                        { title: 'Referral Program', desc: 'Earn rewards by inviting others', icon: Coins },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-[#070a17]/50 border border-[#1a1f36]/45">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center shrink-0">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="font-bold text-slate-200 block">{item.title}</span>
                              <span className="text-[9px] text-slate-500 font-semibold">{item.desc}</span>
                            </div>
                          </div>
                          <input type="checkbox" defaultChecked className="accent-[#8b5cf6] w-4.5 h-4.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 18: Terms & Conditions */}
                {currentStep === 18 && (
                  <div className="space-y-3 text-xs">
                    <h2 className="text-base font-black text-white">Terms & Conditions</h2>
                    <p className="text-[11px] text-slate-500">Please accept to continue.</p>
                    
                    <div className="border border-[#1a1f36]/80 rounded-2xl p-4 bg-[#070a17]/40 h-32 overflow-y-auto text-[10px] text-slate-400 font-medium leading-relaxed custom-scrollbar mt-3">
                      By creating an account, you agree to Rentora AI's Terms of Service and Privacy Policy. You also agree to our platform commission and payout terms. We use high-security databases to encrypt your information. For any questions, please contact support center.
                    </div>

                    <div className="flex gap-2.5 items-start mt-4">
                      <input 
                        type="checkbox" 
                        id="termsCheck"
                        checked={providerTermsChecked} 
                        onChange={(e) => setProviderTermsChecked(e.target.checked)}
                        className="accent-[#8b5cf6] w-4.5 h-4.5 shrink-0 mt-0.5" 
                      />
                      <label htmlFor="termsCheck" className="font-semibold text-slate-300 leading-tight cursor-pointer">
                        I agree to the Terms & Conditions and Privacy Policy
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 19: All Set, Welcome Aboard! */}
                {currentStep === 19 && (
                  <div className="text-center py-6 space-y-5">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-white">Your Rentora AI provider profile is all set!</h2>
                      <p className="text-xs text-slate-400 mt-2 max-w-[320px] mx-auto leading-relaxed">
                        Start listing your properties and connecting with clients.
                      </p>
                    </div>

                    <div className="pt-4 space-y-3">
                      <button 
                        onClick={handleCompleteOnboarding}
                        className="w-full py-3 bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#ec4899] text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#8b5cf6]/20"
                      >
                        Go to Dashboard
                      </button>
                      <button 
                        onClick={handleCompleteOnboarding}
                        className="text-[10px] text-[#8b5cf6] font-bold block mx-auto hover:underline uppercase tracking-wider"
                      >
                        Explore Dashboard
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

          </div>

          {/* CARD NAVIGATION ACTIONS */}
          <div className="mt-6 pt-4 border-t border-[#1a1f36]/30 flex justify-between gap-3 text-xs font-bold uppercase tracking-wider">
            {currentStep > 1 && (
              <button 
                onClick={handleBack}
                className="px-4 py-2 border border-[#1a1f36] hover:bg-white/5 text-slate-400 hover:text-white rounded-xl transition-all"
              >
                ← Back
              </button>
            )}
            <div className="flex-1" />
            {currentStep < (roleMode === 'tenant' ? 15 : 19) ? (
              <button 
                onClick={handleNext}
                className={`px-5 py-2.5 text-white rounded-xl shadow-lg transition-all ${roleMode === 'tenant' ? 'bg-[#6366f1] hover:bg-indigo-500 shadow-indigo-500/10' : 'bg-[#8b5cf6] hover:bg-purple-500 shadow-purple-500/10'}`}
              >
                Next →
              </button>
            ) : null}
          </div>

        </div>

        {/* BOTTOM METRICS PANELS SECTION */}
        <div className="max-w-[1400px] mx-auto mt-10 pt-8 border-t border-[#1a1f36]/40">
          {roleMode === 'tenant' ? (
            /* Tenant footer panels */
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-semibold leading-relaxed">
              {/* Box 1: Specialized Questions */}
              <div className="bg-[#0b0e1a]/40 border border-[#1a1f36]/25 p-4 rounded-2xl">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Specialized Questions Based on Your Selection</span>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-medium">
                  <div className="space-y-0.5">
                    <div className="text-white font-bold mb-0.5">🎓 Student</div>
                    <div className="text-slate-400">• University</div>
                    <div className="text-slate-400">• Program / Course</div>
                    <div className="text-slate-400">• Year / Semester</div>
                    <div className="text-slate-400">• Start Date</div>
                  </div>
                  <div className="space-y-0.5 border-l border-[#1a1f36]/20 pl-2">
                    <div className="text-white font-bold mb-0.5">🌍 Int. Student</div>
                    <div className="text-slate-400">• Country of Origin</div>
                    <div className="text-slate-400">• Visa Status</div>
                    <div className="text-slate-400">• Arrival Airport</div>
                    <div className="text-slate-400">• Insurance Needs</div>
                  </div>
                </div>
              </div>

              {/* Box 2: Why This Matters */}
              <div className="bg-[#0b0e1a]/40 border border-[#1a1f36]/25 p-4 rounded-2xl space-y-3">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Why This Matters?</span>
                <div className="grid grid-cols-2 gap-2.5 text-[9px] font-medium leading-tight">
                  <div className="flex gap-1.5 items-start">
                    <Sparkles className="w-3.5 h-3.5 text-[#6366f1] shrink-0" />
                    <div>
                      <div className="text-white font-bold">Better Matches</div>
                      <p className="text-slate-400 mt-0.5">AI finds the best options for you</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <Map className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-white font-bold">Smart Relocation</div>
                      <p className="text-slate-400 mt-0.5">End-to-end support for your journey</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <Users className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                    <div>
                      <div className="text-white font-bold">Personalized Exp.</div>
                      <p className="text-slate-400 mt-0.5">Tailored recommendations and services</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <Coins className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <div>
                      <div className="text-white font-bold">Save Time & Money</div>
                      <p className="text-slate-400 mt-0.5">Avoid mistakes and unnecessary costs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3: Data Safety */}
              <div className="bg-[#0b0e1a]/40 border border-[#1a1f36]/25 p-4 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Your Data is Safe with Us</span>
                  <div className="flex gap-3 items-start text-[10px] text-slate-400 font-medium">
                    <Lock className="w-6 h-6 text-emerald-500 shrink-0" />
                    <p>We use bank-level encryption to protect your data. Your information is secure and never shared without your permission.</p>
                  </div>
                </div>
                <div className="flex gap-3 text-[9px] font-bold text-emerald-400 mt-3">
                  <span className="flex items-center gap-1">✓ Secure</span>
                  <span className="flex items-center gap-1">✓ Encrypted</span>
                  <span className="flex items-center gap-1">✓ Private</span>
                </div>
              </div>

              {/* Box 4: Need Help */}
              <div className="bg-[#0b0e1a]/40 border border-[#1a1f36]/25 p-4 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Need Help?</span>
                  <p className="text-[10px] text-slate-400 font-medium">Our support team is always here to help you.</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button className="py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-[#6366f1] border border-[#6366f1]/20 rounded-xl font-bold text-[10px] flex items-center justify-center gap-1">
                    <MessageSquare className="w-3 h-3" /> Chat with Us
                  </button>
                  <button className="py-2 bg-slate-900 border border-[#1a1f36] hover:bg-white/5 text-slate-300 rounded-xl font-bold text-[10px] flex items-center justify-center gap-1">
                    <PhoneCall className="w-3 h-3" /> Contact Support
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Provider footer panels */
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-semibold leading-relaxed">
                {/* Box 1: What Happens Next */}
                <div className="bg-[#0b0e1a]/40 border border-[#1a1f36]/25 p-4 rounded-2xl">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-3">What Happens Next?</span>
                  <div className="space-y-2 text-[10px] font-medium text-slate-400">
                    <div className="flex gap-2 items-start">
                      <span className="w-4 h-4 rounded-full bg-[#8b5cf6]/10 text-[#a855f7] border border-[#8b5cf6]/20 flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">1</span>
                      <p>Your profile will be reviewed by our team.</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="w-4 h-4 rounded-full bg-[#8b5cf6]/10 text-[#a855f7] border border-[#8b5cf6]/20 flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">2</span>
                      <p>Once verified, you can start listing properties.</p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="w-4 h-4 rounded-full bg-[#8b5cf6]/10 text-[#a855f7] border border-[#8b5cf6]/20 flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">3</span>
                      <p>You'll start receiving inquiries and booking requests.</p>
                    </div>
                  </div>
                </div>

                {/* Box 2: Need Help */}
                <div className="bg-[#0b0e1a]/40 border border-[#1a1f36]/25 p-4 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Need Help?</span>
                    <p className="text-[10px] text-slate-400 font-medium">Our support team is here to help you.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className="py-2.5 bg-[#8b5cf6]/10 hover:bg-[#8b5cf6]/20 text-[#a855f7] border border-[#8b5cf6]/20 rounded-xl font-bold text-[10px] flex items-center justify-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" /> Chat with Us
                    </button>
                    <button className="py-2.5 bg-slate-900 border border-[#1a1f36] hover:bg-white/5 text-slate-300 rounded-xl font-bold text-[10px] flex items-center justify-center gap-1">
                      <PhoneCall className="w-3.5 h-3.5" /> Contact Support
                    </button>
                  </div>
                </div>

                {/* Box 3: Empty or extra info */}
                <div className="bg-[#0b0e1a]/40 border border-[#1a1f36]/25 p-4 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-1">
                    <div className="text-[#8b5cf6] font-bold">Rentora Provider Portal</div>
                    <p className="text-[9px] text-slate-500">Fast tracking verified listings to global students</p>
                  </div>
                </div>
              </div>

              {/* Badges footer list */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-6 border-t border-[#1a1f36]/25 text-center">
                {[
                  { label: 'AI-Powered Matching', desc: 'We connect you with the right tenants', icon: Cpu },
                  { label: 'Verified & Trusted', desc: 'Build trust with verified profile', icon: Shield },
                  { label: 'Secure Payments', desc: 'Get paid securely with our system', icon: Lock },
                  { label: 'Grow Your Business', desc: 'Access tools to scale your business', icon: TrendingUp },
                  { label: '24/7 Support', desc: 'Our team is always here to support you', icon: Clock },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-900/60 border border-[#1a1f36] text-slate-300 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-[#8b5cf6]" />
                    </div>
                    <div className="text-[10px] font-bold text-white leading-tight">{item.label}</div>
                    <p className="text-[8px] text-slate-500 max-w-[120px] mx-auto leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </main>
    </SafeHydration>
  );
}

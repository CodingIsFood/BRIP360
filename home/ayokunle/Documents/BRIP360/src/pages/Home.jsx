import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, Building2, Scale, Briefcase, TrendingUp, Calculator, 
  Landmark, Users, ChevronRight, Check, Target, ArrowRight,
  Shield, Lock, FileCheck, Eye, UserCheck
} from 'lucide-react';

const services = [
  'Insolvency Practitioners', 'Banks & Lenders', 'Lawyers', 'Corporate Recovery Advisors',
  'Asset Managers', 'Accountants & Auditors', 'Government Agencies', 'Investors & PE Firms',
];

const serviceIcons = { 
  'Insolvency Practitioners': User, 'Banks & Lenders': Building2, 'Lawyers': Scale, 
  'Corporate Recovery Advisors': Briefcase, 'Asset Managers': TrendingUp, 
  'Accountants & Auditors': Calculator, 'Government Agencies': Landmark, 'Investors & PE Firms': Users 
};

const lifecycleSteps = [
  { num: 1, label: 'Onboard', color: '#1E3A8A' }, { num: 2, label: 'Assess', color: '#1E40AF' },
  { num: 3, label: 'Diagnose', color: '#2563EB' }, { num: 4, label: 'Decide', color: '#0D9488' },
  { num: 5, label: 'Restructure', color: '#14B8A6' }, { num: 6, label: 'Administer', color: '#CA8A04' },
  { num: 7, label: 'Recover', color: '#EA580C' }, { num: 8, label: 'Report', color: '#DC2626' },
  { num: 9, label: 'Monitor', color: '#7C3AED' }, { num: 10, label: 'Close', color: '#0B192C' },
];

const actionCards = [
  { icon: TrendingUp, title: 'Assess a Distressed Business', desc: 'Run comprehensive viability analysis' },
  { icon: Calculator, title: 'Determine Solvency', desc: 'Apply statutory solvency tests' },
  { icon: Briefcase, title: 'Build 13-Week Cash Flow', desc: 'Model short-term liquidity' },
  { icon: FileCheck, title: 'Generate Recovery Plan', desc: 'Create stakeholder-ready strategies' },
  { icon: Building2, title: 'Value Distressed Assets', desc: 'Apply multiple valuation methods' },
  { icon: Scale, title: 'Run Insolvency Tests', desc: 'Balance sheet & cash flow tests' },
];

const trustItems = [
  { icon: Shield, label: 'Secure & Confidential', sub: 'Bank-grade encryption' },
  { icon: Building2, label: 'Multi-Tenant Platform', sub: 'Isolated workspaces' },
  { icon: FileCheck, label: 'Compliance Ready', sub: 'CAMA & IFRS aligned' },
  { icon: Eye, label: 'Audit Trails', sub: 'Complete activity logging' },
  { icon: UserCheck, label: 'Human Oversight', sub: 'Licensed professionals' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0B192C] text-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-[560px]">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-medium tracking-wider mb-4">
                NIGERIA’S INTEGRATED PLATFORM
              </div>
              <h1 className="text-5xl md:text-[52px] leading-[1.05] font-semibold tracking-[-1.5px] mb-6">
                One Platform.<br />Every Stage of Business Recovery &amp; Insolvency.
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Manage cases, diagnose financial distress, evaluate recovery options, restructure viable businesses, 
                administer insolvency, recover assets and generate professional reports from one intelligent platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/pricing" className="brip-button inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00A859] hover:bg-[#009148] text-white font-semibold rounded-xl text-base">
                  Create Free Account <ArrowRight size={18} />
                </Link>
                <Link to="/solutions" className="brip-button inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/40 hover:bg-white/5 text-white font-medium rounded-xl text-base">
                  Explore Platform
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
                {['🇳🇬 Built for Nigeria', '🔒 Secure & Private', '✓ Professional & Trusted', '🤖 AI-Enabled', '📋 Standards-Based'].map((t,i) => <div key={i}>{t}</div>)}
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative mt-8 md:mt-0">
              <div className="dashboard-mockup bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <div className="bg-slate-50 px-5 py-3 border-b flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
                    <span className="text-xs font-medium text-slate-500">BRIP360 • Professional</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-medium">● Live</div>
                </div>
                <div className="p-5 bg-white">
                  <div className="mb-4">
                    <p className="text-xs text-slate-500">Good morning</p>
                    <p className="font-semibold text-lg">Welcome back, Olumide</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-slate-50 border rounded-xl p-3.5"><div className="text-[10px] text-slate-500">ACTIVE CASES</div><div className="text-2xl font-semibold">47</div><div className="text-[10px] text-emerald-600">+3 this week</div></div>
                    <div className="bg-slate-50 border rounded-xl p-3.5"><div className="text-[10px] text-slate-500">AUM RECOVERED</div><div className="text-2xl font-semibold">₦18.4B</div><div className="text-[10px] text-emerald-600">94.2% of target</div></div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-xs mb-2">
                      <div className="w-5 h-5 bg-[#00A859] rounded-full flex items-center justify-center"><span className="text-white text-[10px]">AI</span></div>
                      <span className="font-semibold text-[#0B192C]">Ask BRIP AI Copilot</span>
                    </div>
                    <input placeholder="What is the solvency position of Acme Ltd?" className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="eyebrow text-emerald-600">WHO WE SERVE</div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0B192C]">Who BRIP360 Serves</h2>
          </div>
          <Link to="/solutions" className="hidden md:flex items-center gap-1 text-sm font-medium text-[#00A859]">View All <ArrowRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service];
            return (
              <div key={index} className="brip-card flex flex-col items-center justify-center gap-3 border border-slate-200 bg-white rounded-xl p-5 text-center hover:border-[#00A859]/30">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 text-[#0B192C]"><Icon size={19} /></div>
                <span className="text-sm font-medium text-slate-700 leading-tight">{service}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B192C] mb-10">End-to-End Recovery &amp; Insolvency Lifecycle</h2>
          <div className="flex flex-col md:flex-row gap-1 overflow-x-auto pb-4">
            {lifecycleSteps.map((step, index) => (
              <div key={index} className="chevron-step min-w-[108px] md:flex-1 px-4 py-4 text-white flex items-center justify-center text-center" style={{ backgroundColor: step.color }}>
                <div className="flex flex-col items-center"><div className="text-[11px] font-mono opacity-75">STEP {step.num}</div><div className="font-semibold text-sm tracking-tight">{step.label}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8"><h2 className="text-3xl font-semibold tracking-tight">What would you like to do?</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {actionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link to="/tools" key={index} className="brip-card group flex items-start gap-4 border border-slate-200 bg-white rounded-xl p-5 hover:border-[#00A859]/40">
                <div className="mt-0.5 shrink-0 w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-[#0B192C] group-hover:bg-emerald-50 group-hover:text-[#00A859]"><Icon size={18} /></div>
                <div><div className="font-semibold text-[#0B192C]">{card.title}</div><div className="text-xs text-slate-500">{card.desc}</div></div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#0B192C] text-white rounded-2xl p-8">
            <div className="text-emerald-400 text-xs font-semibold mb-2">POWERED BY AI</div>
            <h3 className="text-2xl font-semibold mb-6">BRIP AI Copilot™</h3>
            <ul className="space-y-3 text-sm text-slate-200 mb-8">
              {['Analyse financial statements','Identify distress indicators','Recommend recovery strategies','Generate professional reports'].map((f,i)=><li key={i} className="flex gap-3"><Check className="text-[#00A859] mt-0.5" size={17}/>{f}</li>)}
            </ul>
            <Link to="/tools" className="text-[#00A859] font-semibold flex items-center gap-1">See BRIP AI in Action <ArrowRight /></Link>
          </div>
          <div className="bg-[#F8FAFC] border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Models &amp; Templates Library</h3>
            <ul className="space-y-3 text-sm text-slate-700 mb-8">
              {['13-Week Cash Flow Model','Solvency Assessment Toolkit','Restructuring Plan Builder','Creditor Proposal Templates'].map((f,i)=><li key={i} className="flex gap-3"><Check className="text-[#00A859] mt-0.5" size={17}/>{f}</li>)}
            </ul>
            <Link to="/tools" className="text-[#00A859] font-semibold">Explore Library →</Link>
          </div>
          <div className="bg-[#F8FAFC] border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Industry Intelligence</h3>
            <ul className="space-y-3 text-sm text-slate-700 mb-8">
              {['Sector recovery benchmarks','Regulatory update alerts','Precedent case library','Market distress signals'].map((f,i)=><li key={i} className="flex gap-3"><Target className="text-red-500 mt-0.5" size={17}/>{f}</li>)}
            </ul>
            <Link to="/knowledge" className="text-red-600 font-semibold">View Insights →</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-y-8">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return <div key={i} className="flex items-center gap-4"><div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center"><Icon size={21} /></div><div><div className="font-semibold text-sm">{item.label}</div><div className="text-xs text-slate-500">{item.sub}</div></div></div>;
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B192C] py-14 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-[34px] font-semibold tracking-tight mb-3">Transform How You Deliver<br />Business Recovery &amp; Insolvency Services.</h2>
          <p className="text-slate-400 mb-8">Join leading practitioners modernising insolvency practice in Africa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#00A859] hover:bg-[#009148] text-white font-semibold rounded-xl">Create Your Free Account</Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/30 hover:bg-white/5 rounded-xl">Request a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}

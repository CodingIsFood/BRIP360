import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, FileText, Calculator, TrendingUp, Users, Gavel, Shield } from 'lucide-react';

const toolCategories = [
  {
    title: 'Assessment & Diagnostics',
    icon: Calculator,
    color: '#2563EB',
    items: ['Financial Distress Diagnostic', 'Solvency Testing Suite', '13-Week Cash Flow Builder', 'Viability Screening']
  },
  {
    title: 'Recovery & Restructuring',
    icon: TrendingUp,
    color: '#10B981',
    items: ['Recovery Options Engine', 'Restructuring Plan Studio', 'Creditor Proposal Builder', 'Scenario Modelling']
  },
  {
    title: 'Insolvency Administration',
    icon: Gavel,
    color: '#8B5CF6',
    items: ['Case Management', 'Asset & Realisation Ledger', 'Claims Adjudication', 'Distribution Engine']
  },
  {
    title: 'Reporting & Compliance',
    icon: FileText,
    color: '#F59E0B',
    items: ['Statutory Report Generator', 'Notices & Letters Pack', 'Regulatory Filing Checklists', 'Court-Ready Documentation']
  },
];

const aiCapabilities = [
  'Analyse complex financial statements in seconds',
  'Surface hidden risks and anomalies',
  'Draft professional reports and notices',
  'Recommend optimal recovery pathways',
];

export default function Tools() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[#0B192C] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-emerald-400 text-xs tracking-[2px] font-semibold mb-2">PROFESSIONAL TOOLKIT</div>
            <h1 className="text-5xl font-semibold tracking-[-1.5px] leading-none mb-4">Powerful tools.<br />Professional outcomes.</h1>
            <p className="text-slate-300 text-lg">Everything you need to manage the full lifecycle — diagnostics, modelling, administration, and reporting.</p>
          </div>
        </div>
      </div>

      {/* AI Copilot Highlight */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-[#0B192C] rounded-3xl p-10 text-white grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <Sparkles size={18} /> <span className="text-xs tracking-widest font-semibold">AI POWERED</span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight">BRIP AI Copilot</h2>
            <p className="mt-3 text-slate-300">Your intelligent assistant that understands Nigerian insolvency practice.</p>
            <ul className="mt-6 space-y-3">
              {aiCapabilities.map((cap, i) => (
                <li key={i} className="flex gap-3 text-sm"><Check className="text-emerald-400 mt-0.5 shrink-0" size={16} /> {cap}</li>
              ))}
            </ul>
            <Link to="/pricing" className="mt-8 inline-block text-emerald-400 font-semibold">Try AI Copilot →</Link>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-sm">
            <div className="text-emerald-400 text-xs mb-2">ASK ANYTHING</div>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">"Run a solvency test on Acme Ltd"</div>
              <div className="bg-emerald-500/80 text-white rounded-lg p-3 ml-8">Balance sheet test: FAILS. Cash flow test: PASSES for 7 weeks. Recommended: Restructuring pathway.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Explore the Toolkit</h2>
          <p className="text-slate-600">18 integrated modules across 4 core areas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="border border-slate-200 rounded-2xl p-6 bg-white hover:shadow-lg transition">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{cat.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {cat.items.map((item, idx) => <li key={idx} className="flex gap-2"><Check size={15} className="mt-1 text-emerald-500" /> {item}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

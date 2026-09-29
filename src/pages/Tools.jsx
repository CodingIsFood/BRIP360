import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, FileText, Calculator, TrendingUp, Gavel, Shield, Zap } from 'lucide-react';

const toolCategories = [
  { title: 'Assessment & Diagnostics', icon: Calculator, color: '#2563EB', items: ['Financial Distress Diagnostic', 'Solvency Testing Suite', '13-Week Cash Flow Builder', 'Viability Screening'] },
  { title: 'Recovery & Restructuring', icon: TrendingUp, color: '#10B981', items: ['Recovery Options Engine', 'Restructuring Plan Studio', 'Creditor Proposal Builder', 'Scenario & Sensitivity Models'] },
  { title: 'Insolvency Administration', icon: Gavel, color: '#8B5CF6', items: ['Case Management Workspace', 'Asset & Realisation Ledger', 'Claims Adjudication', 'Distribution Engine'] },
  { title: 'Reporting & Compliance', icon: FileText, color: '#F59E0B', items: ['Statutory Report Generator', 'Notices & Letters Pack', 'Regulatory Filing Checklists', 'Court-Ready Documentation'] },
];

const featured = [
  { icon: Zap, title: 'AI-Powered Diagnostics', desc: 'Instant analysis of financial health and distress signals.' },
  { icon: Shield, title: 'Compliance Engine', desc: 'Automated checks against CAMA and regulatory requirements.' },
];

export default function Tools() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#0B192C] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-emerald-400 text-xs tracking-[2px] font-semibold mb-2">PROFESSIONAL TOOLKIT</div>
            <h1 className="text-5xl font-semibold tracking-[-1.5px] leading-none mb-4">Powerful tools.<br />Professional outcomes.</h1>
            <p className="text-slate-300 text-lg">A complete suite of diagnostics, models, administration, and reporting tools — all in one place.</p>
            <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold">Start Free Trial</Link>
          </div>
        </div>
      </div>

      {/* AI Spotlight */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-[#0B192C] rounded-3xl p-10 text-white grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-3"><Sparkles size={18} /> <span className="text-xs tracking-widest font-semibold">AI POWERED</span></div>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">BRIP AI Copilot</h2>
            <p className="text-slate-300 mb-6">Your always-available expert assistant for analysis, drafting and decision support.</p>
            <ul className="space-y-3 text-sm mb-8">
              {['Analyse financial statements in seconds','Surface hidden risks and anomalies','Draft professional reports and notices','Recommend optimal recovery pathways'].map((cap,i) => <li key={i} className="flex gap-3"><Check className="text-emerald-400 mt-0.5" size={16} /> {cap}</li>)}
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-sm">
            <div className="text-emerald-400 text-xs mb-2">EXAMPLE QUERY</div>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">"Run a solvency test on Acme Ltd"</div>
              <div className="bg-emerald-500/80 text-white rounded-lg p-3 ml-8">Balance sheet: FAILS. Cash flow: PASSES for 7 weeks. Recommended: Restructuring pathway with creditor negotiation.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-semibold tracking-widest text-emerald-600">18 INTEGRATED MODULES</div>
            <h2 className="text-3xl font-semibold tracking-tight">Explore the Toolkit</h2>
          </div>
          <Link to="/knowledge" className="text-sm font-medium text-emerald-600 hidden md:flex items-center gap-1">Browse Models <ArrowRight size={16}/></Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="group border border-slate-200 rounded-2xl p-6 bg-white hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}><Icon size={22} /></div>
                <h3 className="font-semibold text-lg mb-3">{cat.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {cat.items.map((item, idx) => <li key={idx} className="flex gap-2"><Check size={15} className="mt-1 text-emerald-500" /> {item}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-4">
          {featured.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex gap-4 bg-white border border-slate-200 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><Icon size={22} /></div>
                <div>
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

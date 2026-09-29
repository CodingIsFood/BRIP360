import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, Building2, Scale, Landmark, Briefcase, TrendingUp, Gavel, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: ShieldCheck, title: 'Diagnose & Decide', desc: 'Comprehensive financial distress diagnostics and solvency testing.', color: '#2563EB' },
  { icon: Briefcase, title: 'Restructure Viable Businesses', desc: 'Model, negotiate and document creditor-approved restructuring plans.', color: '#10B981' },
  { icon: Gavel, title: 'Administer Insolvency', desc: 'Full case management for administration, receivership and liquidation.', color: '#8B5CF6' },
  { icon: TrendingUp, title: 'Recover & Distribute', desc: 'Asset tracking, claim adjudication and automated distribution engine.', color: '#0EA5E9' },
];

const audience = [
  { icon: Users, title: 'Insolvency Practitioners', desc: 'End-to-end tools for licensed professionals and their teams.' },
  { icon: Building2, title: 'Insolvency Firms', desc: 'Portfolio oversight, standardisation and team collaboration.' },
  { icon: Scale, title: 'Lawyers & Legal', desc: 'Compliant documentation, filings and notices.' },
  { icon: Landmark, title: 'Banks & Lenders', desc: 'Real-time visibility over distressed exposures and recoveries.' },
];

const lifecycle = [
  'Onboard Clients', 'Assess Position', 'Diagnose Distress', 'Decide Options', 
  'Plan Recovery', 'Execute', 'Recover Assets', 'Distribute', 'Report', 'Close & Learn'
];

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#0B192C] text-white pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-emerald-400 text-xs tracking-[3px] font-semibold mb-3">SOLUTIONS</div>
            <h1 className="text-5xl font-semibold tracking-[-1.5px] leading-none mb-5">Every stage of recovery<br />and insolvency, solved.</h1>
            <p className="text-lg text-slate-300 max-w-lg">One intelligent platform covering the complete lifecycle — from first warning signs to final distribution.</p>
            <div className="mt-8 flex gap-4">
              <Link to="/pricing" className="btn-primary">Start Free Trial</Link>
              <Link to="/contact" className="btn-outline">Book a Demo</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="group p-7 rounded-2xl border border-slate-200 hover:border-emerald-200 transition-all bg-white">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${p.color}15`, color: p.color }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-xl tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lifecycle */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-emerald-600 font-semibold">THE JOURNEY</div>
              <h2 className="text-3xl font-semibold tracking-tight">End-to-End Lifecycle</h2>
            </div>
            <Link to="/tools" className="text-sm font-medium text-emerald-600 flex items-center gap-1">See Tools <ArrowRight size={16} /></Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {lifecycle.map((step, i) => (
              <div key={i} className="px-5 py-3 bg-white border border-slate-200 rounded-full text-sm font-medium flex-1 min-w-[120px] text-center">
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-8">Built for every stakeholder</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {audience.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="flex gap-5 p-6 border border-slate-200 rounded-2xl bg-white">
                <div className="shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{a.title}</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0B192C] py-12 text-white">
        <div className="max-w-xl mx-auto text-center px-6">
          <h3 className="text-2xl font-semibold mb-3">Ready to transform how you work?</h3>
          <Link to="/pricing" className="inline-flex items-center gap-2 mt-2 text-emerald-400 font-medium">Explore pricing <ArrowRight /></Link>
        </div>
      </div>
    </div>
  );
}

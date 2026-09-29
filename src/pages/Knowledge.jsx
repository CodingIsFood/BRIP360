import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, TrendingUp, Download, ArrowRight, Play, Award } from 'lucide-react';

const resources = [
  { type: 'Guide', title: 'Practitioner’s Guide to Recovery in Nigeria', desc: 'Complete lifecycle from early warning to closure. 120 pages.', icon: BookOpen, color: '#2563EB', size: '4.2 MB' },
  { type: 'Template', title: '13-Week Cash Flow Master Model', desc: 'Ready-to-use liquidity forecasting with commentary and sensitivity analysis.', icon: FileText, color: '#10B981', size: '1.8 MB' },
  { type: 'Webinar', title: 'Solvency Testing Masterclass', desc: 'On-demand 45-min session with practical Nigerian case studies.', icon: Video, color: '#8B5CF6', size: 'Video' },
  { type: 'Report', title: 'H1 2026 Sector Distress Trends', desc: 'Anonymised benchmarks across 8 key Nigerian industries.', icon: TrendingUp, color: '#F59E0B', size: 'PDF' },
];

const categories = ['All', 'Guides', 'Templates', 'Webinars', 'Reports', 'Regulations'];

const faqs = [
  { q: 'Is content aligned with Nigerian regulations?', a: 'Yes. All materials are developed in line with CAMA, BOFIA, and BRIPAN professional standards.' },
  { q: 'Can firms contribute their own templates?', a: 'Yes. Firm users can upload and share approved internal models within their private workspace.' },
  { q: 'How often is new content added?', a: 'New resources are published monthly. Industry intelligence reports are released quarterly.' },
];

export default function Knowledge() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#0B192C] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-emerald-400 text-xs tracking-[3px] font-semibold mb-2">KNOWLEDGE HUB</div>
            <h1 className="text-5xl font-semibold tracking-[-1.5px] mb-4">Learn. Apply. Lead.</h1>
            <p className="text-lg text-slate-300">Curated guides, models, webinars and industry intelligence designed for Nigerian insolvency professionals.</p>
          </div>
        </div>
      </div>

      {/* Filters + Resources */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Resources</h2>
          <div className="hidden md:flex gap-2 text-sm">
            {categories.map((cat, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full border ${i === 0 ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'border-slate-200 hover:bg-slate-50'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="group border border-slate-200 bg-white rounded-2xl p-6 hover:border-emerald-200 transition flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${r.color}15`, color: r.color }}>
                    {r.type}
                  </span>
                  <Icon size={22} style={{ color: r.color }} />
                </div>
                <h3 className="font-semibold text-lg leading-tight mb-2 flex-1">{r.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{r.desc}</p>
                
                <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t">
                  <span className="text-slate-500">{r.size}</span>
                  <button className="flex items-center gap-1.5 font-medium text-emerald-600 group-hover:gap-2 transition-all">
                    Download <Download size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Industry Intelligence Teaser */}
      <div className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="uppercase text-xs tracking-[2px] text-emerald-600 font-semibold mb-2">INDUSTRY INTELLIGENCE</div>
            <h2 className="text-3xl font-semibold tracking-tight">Real data. Real benchmarks.</h2>
            <p className="mt-3 text-slate-600 max-w-md">Anonymised insights from thousands of Nigerian recovery and insolvency cases.</p>
          </div>
          <div className="md:col-span-5 bg-white border rounded-2xl p-6">
            <div className="text-sm font-semibold mb-3">H1 2026 Distress Index</div>
            <div className="space-y-4 text-sm">
              {[
                { sector: 'Manufacturing', val: 72 },
                { sector: 'Retail & Consumer', val: 64 },
                { sector: 'Construction', val: 58 },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1"><span>{s.sector}</span><span className="font-medium">{s.val}</span></div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-500" style={{ width: `${s.val}%` }} /></div>
                </div>
              ))}
            </div>
            <Link to="/pricing" className="text-sm text-emerald-600 mt-4 inline-flex items-center gap-1">Access full report <ArrowRight size={15} /></Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border-l-4 border-emerald-500 pl-5">
              <div className="font-semibold">{f.q}</div>
              <div className="text-sm text-slate-600 mt-1 leading-relaxed">{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0B192C] py-12 text-center text-white">
        <p className="mb-4">Ready to access the full library?</p>
        <Link to="/pricing" className="inline-flex items-center gap-2 bg-white text-[#0B192C] font-semibold px-8 py-3 rounded-xl">Create Free Account</Link>
      </div>
    </div>
  );
}

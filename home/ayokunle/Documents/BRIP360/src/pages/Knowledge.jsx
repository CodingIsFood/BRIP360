import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, FileText, TrendingUp, ArrowRight, Download } from 'lucide-react';

const resources = [
  { type: 'Guide', title: 'Practitioner’s Guide to Recovery in Nigeria', desc: 'Complete lifecycle from early warning to closure.', icon: BookOpen, color: '#2563EB' },
  { type: 'Template', title: '13-Week Cash Flow Master Model', desc: 'Ready-to-use liquidity forecasting with commentary.', icon: FileText, color: '#10B981' },
  { type: 'Webinar', title: 'Solvency Testing Masterclass', desc: 'On-demand session with practical examples.', icon: Video, color: '#8B5CF6' },
  { type: 'Report', title: 'H1 2026 Sector Distress Trends', desc: 'Anonymised benchmarks across key industries.', icon: TrendingUp, color: '#F59E0B' },
];

const faqs = [
  { q: 'Is content aligned with Nigerian regulations?', a: 'Yes. All materials are developed in line with CAMA, BOFIA and BRIPAN professional standards.' },
  { q: 'Can firms contribute their own templates?', a: 'Yes. Firm users can upload and share approved internal models within their workspace.' },
];

export default function Knowledge() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="max-w-2xl mb-12">
        <div className="text-emerald-600 text-xs tracking-widest font-semibold">KNOWLEDGE HUB</div>
        <h1 className="text-4xl font-semibold tracking-tight mt-2">Learn. Apply. Lead.</h1>
        <p className="mt-3 text-slate-600">Curated guides, models, webinars and industry intelligence for the modern insolvency professional.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {resources.map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={i} className="group border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 transition bg-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${r.color}15`, color: r.color }}>{r.type}</span>
                <Icon size={22} style={{ color: r.color }} />
              </div>
              <h3 className="font-semibold text-lg mt-4 mb-2 leading-tight">{r.title}</h3>
              <p className="text-sm text-slate-600">{r.desc}</p>
              <button className="mt-5 text-sm font-medium text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all">Download <Download size={15} /></button>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 md:p-10">
        <h3 className="font-semibold text-xl mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-l-4 border-emerald-500 pl-4">
              <div className="font-medium">{f.q}</div>
              <div className="text-sm text-slate-600 mt-1">{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to="/pricing" className="inline-flex items-center gap-2 text-emerald-600 font-semibold">Access the full library →</Link>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For students, associates and professionals exploring the platform.',
    features: ['1 active case', 'Core diagnostics', '13-week cash flow', 'Knowledge Hub access'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: '₦45,000',
    period: '/mo',
    desc: 'For practising insolvency professionals and sole practitioners.',
    features: ['Up to 25 active cases', 'Full Recovery Engine', 'BRIP AI Copilot', 'Document Generator', 'Priority support'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Firm',
    price: '₦225,000',
    period: '/mo',
    desc: 'For insolvency firms and multi-disciplinary teams.',
    features: ['Unlimited cases', 'Up to 25 team seats', 'Portfolio dashboards', 'Client portals', 'Dedicated success manager'],
    cta: 'Talk to Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="text-emerald-600 text-xs tracking-[3px] font-semibold">PRICING</div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-3">Simple pricing.<br />Powerful capabilities.</h1>
        <p className="text-slate-600 mt-3 max-w-md mx-auto">Start free. Scale as your practice grows.</p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full border p-1 bg-slate-100">
          <button onClick={() => setAnnual(false)} className={`px-6 py-1.5 text-sm rounded-full font-medium transition ${!annual ? 'bg-white shadow' : 'text-slate-500'}`}>Monthly</button>
          <button onClick={() => setAnnual(true)} className={`px-6 py-1.5 text-sm rounded-full font-medium transition ${annual ? 'bg-white shadow' : 'text-slate-500'}`}>Annual <span className="text-emerald-600 text-xs ml-1">-20%</span></button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className={`relative rounded-3xl border p-8 flex flex-col ${plan.popular ? 'border-emerald-500 shadow-xl scale-[1.02]' : 'border-slate-200'}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-4 py-1 rounded-full flex items-center gap-1">
                <Sparkles size={13} /> MOST POPULAR
              </div>
            )}
            <div>
              <h3 className="font-semibold text-2xl">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-semibold tracking-tighter">{plan.price}</span>
                {plan.period && <span className="text-slate-500 ml-1">{plan.period}</span>}
              </div>
              <p className="text-sm text-slate-600 mt-3">{plan.desc}</p>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex text-sm"><Check className="text-emerald-500 mt-0.5 mr-3 shrink-0" size={16} /> {f}</li>
              ))}
            </ul>

            <Link to="/contact" className={`mt-8 w-full py-3 rounded-xl font-semibold text-center transition ${plan.popular ? 'bg-[#00A859] text-white hover:bg-emerald-700' : 'border border-slate-300 hover:bg-slate-50'}`}>
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center text-xs text-slate-500 mt-10">All plans include bank-grade security, audit trails and BRIPAN-aligned workflows.</div>
    </div>
  );
}

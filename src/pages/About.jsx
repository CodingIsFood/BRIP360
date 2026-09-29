import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Landmark, Users, ArrowRight } from 'lucide-react';

const values = [
  { icon: Award, title: 'Professional First', desc: 'We build for licensed practitioners who carry real responsibility.' },
  { icon: ShieldCheck, title: 'Compliance Ready', desc: 'Every workflow is designed to meet Nigerian regulatory expectations.' },
  { icon: Landmark, title: 'Built for Nigeria', desc: 'Designed around CAMA, BOFIA and local market realities.' },
  { icon: Users, title: 'Collaborative by Design', desc: 'One secure source of truth for practitioners, creditors and clients.' },
];

const milestones = [
  { year: '2023', text: 'Idea conceived with BRIPAN members' },
  { year: '2024', text: 'Core platform built and piloted' },
  { year: '2025', text: 'Early adopters across 12 states' },
  { year: '2026', text: 'Full 18-module platform launched nationally' },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="max-w-3xl">
        <div className="text-emerald-600 text-xs tracking-[3px] font-semibold">OUR STORY</div>
        <h1 className="text-5xl font-semibold tracking-[-1.5px] mt-3 leading-none">Building the operating system for Nigerian insolvency.</h1>
        <p className="mt-5 text-lg text-slate-600">BRIP360 was born from a simple belief: the professionals who rescue businesses deserve world-class tools.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div key={i} className="p-6 border border-slate-200 rounded-2xl bg-white">
              <Icon className="text-emerald-600 mb-4" size={28} />
              <h3 className="font-semibold text-lg">{v.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{v.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <h2 className="font-semibold text-2xl mb-8">Our Journey</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="border-l-4 border-emerald-500 pl-5">
              <div className="text-emerald-600 font-mono text-sm">{m.year}</div>
              <div className="font-medium mt-1">{m.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-[#0B192C] text-white rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">Join us in strengthening Nigerian business recovery.</h3>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#0B192C] font-semibold px-6 py-3 rounded-xl">
          Get in Touch <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

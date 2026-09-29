import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organisation: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3500);
      setForm({ name: '', email: '', organisation: '', message: '' });
    }
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-emerald-600 text-xs tracking-[3px] font-semibold mb-2">LET'S TALK</div>
          <h1 className="text-4xl font-semibold tracking-tight">Get in touch with our team.</h1>
          <p className="mt-4 text-slate-600 max-w-md">Whether you're a practitioner, firm, regulator or partner — we'd love to hear from you.</p>

          <div className="mt-10 space-y-6 text-sm">
            <div className="flex gap-4"><Mail className="text-emerald-600 mt-0.5" /> <div><div className="font-medium">Email</div><a href="mailto:hello@brip360.ng" className="text-emerald-600">hello@brip360.ng</a></div></div>
            <div className="flex gap-4"><Phone className="text-emerald-600 mt-0.5" /> <div><div className="font-medium">Phone</div><a href="tel:+2347000003600">+234 (0) 700 000 3600</a></div></div>
            <div className="flex gap-4"><MapPin className="text-emerald-600 mt-0.5" /> <div><div className="font-medium">Head Office</div>Lagos, Nigeria</div></div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <CheckCircle className="text-emerald-500 w-12 h-12 mb-4" />
              <h3 className="font-semibold text-xl">Thank you!</h3>
              <p className="text-slate-600 mt-1">Your message has been sent. A member of our team will reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" value={form.name} onChange={update('name')} required className="border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500" />
                <input type="email" placeholder="Work Email" value={form.email} onChange={update('email')} required className="border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500" />
              </div>
              <input type="text" placeholder="Organisation / Firm" value={form.organisation} onChange={update('organisation')} className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500" />
              <textarea placeholder="How can we help you?" rows={5} value={form.message} onChange={update('message')} required className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 resize-y" />
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#00A859] hover:bg-emerald-700 transition text-white font-semibold py-3.5 rounded-xl">Send Message <Send size={17} /></button>
              <p className="text-[11px] text-center text-slate-400">Your information is kept confidential.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

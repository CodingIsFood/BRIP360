import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Tools & Models', to: '/tools' },
  { label: 'Knowledge Hub', to: '/knowledge' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-[#00A859] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg tracking-tighter">B</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-2xl tracking-[-1.2px] text-[#0B192C]">BRIP360</span>
                <span className="text-[9px] font-medium text-emerald-600 -mt-0.5">Recovery &amp; Insolvency</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-x-1 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    isActive(link.to)
                      ? 'text-[#00A859] bg-emerald-50 font-semibold'
                      : 'text-slate-600 hover:text-[#0B192C] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-x-3">
              <Link 
                to="/contact" 
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all"
              >
                Sign In
              </Link>
              <Link 
                to="/pricing" 
                className="px-5 py-2 text-sm font-semibold bg-[#00A859] text-white rounded-lg hover:bg-[#009148] transition-all"
              >
                Create Account
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col gap-y-1 text-sm font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2.5 px-3 rounded-lg ${
                      isActive(link.to) ? 'text-[#00A859] bg-emerald-50' : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 flex flex-col gap-2 border-t border-slate-100">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="py-2.5 text-center text-sm font-medium border border-slate-300 rounded-lg">Sign In</Link>
                  <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="py-2.5 text-center text-sm font-semibold bg-[#00A859] text-white rounded-lg">Create Account</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#0B192C] text-white/80">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
          <div className="grid md:grid-cols-12 gap-y-10">
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#00A859] flex items-center justify-center">
                  <span className="text-white font-bold text-base">B</span>
                </div>
                <span className="font-semibold text-xl tracking-tight text-white">BRIP360</span>
              </Link>
              <p className="max-w-xs text-sm text-white/60">
                Nigeria’s integrated platform for business recovery, restructuring and insolvency.
              </p>
            </div>

            <div className="md:col-span-2 text-sm">
              <div className="font-semibold text-white mb-3">Platform</div>
              <div className="space-y-2 text-white/70">
                <Link to="/solutions" className="block hover:text-white">Solutions</Link>
                <Link to="/tools" className="block hover:text-white">Tools &amp; Models</Link>
                <Link to="/knowledge" className="block hover:text-white">Knowledge Hub</Link>
              </div>
            </div>

            <div className="md:col-span-2 text-sm">
              <div className="font-semibold text-white mb-3">Company</div>
              <div className="space-y-2 text-white/70">
                <Link to="/about" className="block hover:text-white">About Us</Link>
                <Link to="/pricing" className="block hover:text-white">Pricing</Link>
                <Link to="/contact" className="block hover:text-white">Contact</Link>
              </div>
            </div>

            <div className="md:col-span-3 text-sm">
              <div className="font-semibold text-white mb-3">Legal</div>
              <div className="space-y-2 text-white/70">
                <a href="#" className="block hover:text-white">Privacy Policy</a>
                <a href="#" className="block hover:text-white">Terms of Service</a>
                <a href="#" className="block hover:text-white">Security</a>
                <a href="#" className="block hover:text-white">Compliance</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 text-xs text-white/50 flex flex-col md:flex-row md:items-center justify-between gap-y-3">
            <div>© {new Date().getFullYear()} BRIP360. All rights reserved. Supporting BRIPAN members.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">X</a>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  User, Building2, Scale, Briefcase, TrendingUp, Calculator, 
  Landmark, Users, ChevronRight, Check, Target, ArrowRight,
  Shield, Lock, FileCheck, Eye, UserCheck, Menu, X
} from 'lucide-react';

// Icon mapping for service cards
const serviceIcons = {
  'Insolvency Practitioners': User,
  'Banks & Lenders': Building2,
  'Lawyers': Scale,
  'Corporate Recovery Advisors': Briefcase,
  'Asset Managers': TrendingUp,
  'Accountants & Auditors': Calculator,
  'Government Agencies': Landmark,
  'Investors & PE Firms': Users,
};

const services = [
  'Insolvency Practitioners',
  'Banks & Lenders',
  'Lawyers',
  'Corporate Recovery Advisors',
  'Asset Managers',
  'Accountants & Auditors',
  'Government Agencies',
  'Investors & PE Firms',
];

const lifecycleSteps = [
  { num: 1, label: 'Onboard', color: '#1E3A8A' },
  { num: 2, label: 'Assess', color: '#1E40AF' },
  { num: 3, label: 'Diagnose', color: '#2563EB' },
  { num: 4, label: 'Decide', color: '#0D9488' },
  { num: 5, label: 'Restructure', color: '#14B8A6' },
  { num: 6, label: 'Administer', color: '#CA8A04' },
  { num: 7, label: 'Recover', color: '#EA580C' },
  { num: 8, label: 'Report', color: '#DC2626' },
  { num: 9, label: 'Monitor', color: '#7C3AED' },
  { num: 10, label: 'Close', color: '#0B192C' },
];

const actionCards = [
  { icon: TrendingUp, title: 'Assess a Distressed Business', desc: 'Run comprehensive viability analysis' },
  { icon: Calculator, title: 'Determine Solvency', desc: 'Apply statutory solvency tests' },
  { icon: Briefcase, title: 'Build 13-Week Cash Flow', desc: 'Model short-term liquidity' },
  { icon: FileCheck, title: 'Generate Recovery Plan', desc: 'Create stakeholder-ready strategies' },
  { icon: Building2, title: 'Value Distressed Assets', desc: 'Apply multiple valuation methods' },
  { icon: Scale, title: 'Run Insolvency Tests', desc: 'Balance sheet & cash flow tests' },
  { icon: Users, title: 'Draft Restructuring Proposal', desc: 'Structure creditor arrangements' },
  { icon: Landmark, title: 'Create Creditor Reports', desc: 'Professional statutory reporting' },
  { icon: Target, title: 'Track Asset Recovery', desc: 'Monitor collection progress' },
  { icon: Calculator, title: 'Model Liquidation Scenarios', desc: 'Compare outcomes & recoveries' },
  { icon: FileCheck, title: 'Prepare Court Filings', desc: 'Generate compliant documentation' },
  { icon: Users, title: 'Analyze Stakeholder Impact', desc: 'Map interests & outcomes' },
];

const trustItems = [
  { icon: Shield, label: 'Secure & Confidential', sub: 'Bank-grade encryption' },
  { icon: Building2, label: 'Multi-Tenant Platform', sub: 'Isolated workspaces' },
  { icon: FileCheck, label: 'Compliance Ready', sub: 'CAMA & IFRS aligned' },
  { icon: Eye, label: 'Audit Trails', sub: 'Complete activity logging' },
  { icon: UserCheck, label: 'Human Oversight', sub: 'Licensed professionals' },
];

const aiFeatures = [
  'Analyse financial statements',
  'Identify distress indicators',
  'Recommend recovery strategies',
  'Generate professional reports',
  'Answer complex legal queries',
];

const libraryFeatures = [
  '13-Week Cash Flow Model',
  'Solvency Assessment Toolkit',
  'Asset Valuation Templates',
  'Creditor Proposal Builder',
  'Liquidation Scenario Models',
];

const intelligenceFeatures = [
  'Sector recovery benchmarks',
  'Regulatory update alerts',
  'Precedent case library',
  'Market distress signals',
  'Stakeholder behaviour data',
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      alert(`BRIP AI would respond to: "${chatInput}"`);
      setChatInput('');
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#00A859] flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-semibold text-2xl tracking-tight text-[#0B192C]">
                BRIP360
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-x-8 text-sm font-medium">
              {['Home', 'Solutions', 'Tools & Models', 'Knowledge Hub', 'Pricing', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '').replace('&', ''))}
                  className="brip-nav-link text-slate-600 hover:text-[#00A859] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-x-3">
              <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all brip-button">
                Sign In
              </button>
              <button className="px-5 py-2 text-sm font-semibold bg-[#00A859] text-white rounded-lg hover:bg-[#009148] transition-all brip-button">
                Create Account
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col gap-y-3 text-sm font-medium">
                {['Home', 'Solutions', 'Tools & Models', 'Knowledge Hub', 'Pricing', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '').replace('&', ''))}
                    className="text-left py-1.5 text-slate-600"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-3 flex flex-col gap-2 border-t border-slate-100">
                  <button className="py-2 text-sm font-medium border border-slate-300 rounded-lg">Sign In</button>
                  <button className="py-2 text-sm font-semibold bg-[#00A859] text-white rounded-lg">Create Account</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-[#0B192C] text-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy */}
            <div className="max-w-[560px]">
              <h1 className="text-5xl md:text-[52px] leading-[1.05] font-semibold tracking-[-1.5px] mb-6">
                One Platform.<br />Every Stage of Business Recovery &amp; Insolvency.
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Manage cases, diagnose financial distress, evaluate recovery options, 
                restructure viable businesses, administer insolvency, recover assets and 
                generate professional reports from one intelligent platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="brip-button inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00A859] hover:bg-[#009148] text-white font-semibold rounded-xl text-base"
                >
                  Create Free Account <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="brip-button inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/40 hover:bg-white/5 text-white font-medium rounded-xl text-base transition-all"
                >
                  Explore Platform
                </button>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
                {[
                  { icon: '🇳🇬', label: 'Built for Nigeria' },
                  { icon: '🔒', label: 'Secure & Private' },
                  { icon: '✓', label: 'Professional & Trusted' },
                  { icon: '🤖', label: 'AI-Enabled' },
                  { icon: '📋', label: 'Standards-Based' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Dashboard Mockup */}
            <div className="relative mt-8 md:mt-0">
              <div className="dashboard-mockup relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                {/* Top Bar */}
                <div className="bg-slate-50 px-5 py-3 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs font-medium text-slate-500">BRIP360 • Professional</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-medium">● Live</div>
                </div>

                <div className="flex">
                  {/* Simulated Sidebar */}
                  <div className="w-14 bg-[#0B192C] py-4 hidden sm:block">
                    <div className="px-3 space-y-4">
                      <div className="w-8 h-8 bg-white/10 rounded-lg mx-auto"></div>
                      <div className="space-y-1.5 px-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-2 bg-white/10 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-5 bg-white">
                    {/* Greeting */}
                    <div className="mb-5">
                      <p className="text-xs text-slate-500">Good morning</p>
                      <p className="font-semibold text-lg text-[#0B192C]">Welcome back, Olumide</p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                        <div className="text-[10px] text-slate-500 mb-1">ACTIVE CASES</div>
                        <div className="text-2xl font-semibold text-[#0B192C]">47</div>
                        <div className="text-[10px] text-emerald-600">+3 this week</div>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
                        <div className="text-[10px] text-slate-500 mb-1">AUM RECOVERED</div>
                        <div className="text-2xl font-semibold text-[#0B192C]">₦18.4B</div>
                        <div className="text-[10px] text-emerald-600">94.2% of target</div>
                      </div>
                    </div>

                    {/* AI Copilot Input */}
                    <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <div className="w-5 h-5 bg-[#00A859] rounded-full flex items-center justify-center">
                          <span className="text-white text-[10px]">AI</span>
                        </div>
                        <span className="font-semibold text-[#0B192C]">Ask BRIP AI Copilot</span>
                      </div>
                      <form onSubmit={handleChatSubmit}>
                        <input
                          type="text"
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          placeholder="What is the solvency position of Acme Ltd?"
                          className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#00A859] placeholder:text-slate-400"
                        />
                      </form>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px]">
                      <div className="flex -space-x-1">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white"></div>
                        ))}
                      </div>
                      <span className="text-emerald-600 font-medium">12 queries today</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Subtle glow */}
              <div className="absolute -inset-3 bg-[#00A859]/5 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO BRIP360 SERVES */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B192C]">Who BRIP360 Serves</h2>
          <a href="#pricing" className="hidden md:flex items-center gap-1 text-sm font-medium text-[#00A859] hover:underline">
            View All Members &amp; Partners <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service];
            return (
              <div 
                key={index} 
                className="brip-card flex flex-col items-center justify-center gap-3 border border-slate-200 bg-white rounded-xl p-5 text-center hover:border-[#00A859]/30"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 text-[#0B192C]">
                  <Icon size={19} />
                </div>
                <span className="text-sm font-medium text-slate-700 leading-tight">{service}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* END-TO-END LIFECYCLE */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B192C] mb-10">End-to-End Recovery &amp; Insolvency Lifecycle</h2>
          
          <div className="flex flex-col md:flex-row gap-1 md:gap-0 overflow-x-auto pb-4">
            {lifecycleSteps.map((step, index) => (
              <div 
                key={index} 
                className="chevron-step min-w-[108px] md:flex-1 px-4 py-4 text-white flex items-center justify-center text-center relative"
                style={{ backgroundColor: step.color }}
              >
                <div className="flex flex-col items-center">
                  <div className="text-[11px] font-mono opacity-75 mb-0.5">STEP {step.num}</div>
                  <div className="font-semibold text-sm tracking-tight">{step.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3 text-center md:text-left">From first engagement through final distribution — fully integrated.</p>
        </div>
      </section>

      {/* WHAT WOULD YOU LIKE TO DO? */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B192C]">What would you like to do?</h2>
          <p className="text-slate-600 mt-1">Choose from our most used professional workflows</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {actionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="brip-card group flex items-start gap-4 border border-slate-200 bg-white rounded-xl p-5 cursor-pointer hover:border-[#00A859]/40"
              >
                <div className="mt-0.5 shrink-0 w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-[#0B192C] group-hover:bg-emerald-50 group-hover:text-[#00A859] transition-colors">
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#0B192C] leading-snug mb-0.5">{card.title}</div>
                  <div className="text-xs text-slate-500">{card.desc}</div>
                </div>
                <ChevronRight size={17} className="mt-1 text-slate-400 group-hover:text-[#00A859] transition-colors" />
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURE SPOTLIGHT - 3 COLUMNS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {/* BRIP AI Copilot */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                POWERED BY AI
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">BRIP AI Copilot™</h3>
            </div>
            
            <ul className="space-y-3 mb-8 flex-1">
              {aiFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check size={17} className="mt-0.5 text-[#00A859] shrink-0" />
                  <span className="text-slate-200">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A859] hover:text-emerald-400 transition-colors group">
              See BRIP AI in Action <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
            </button>
          </div>

          {/* Models & Templates Library */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-xs font-semibold tracking-widest text-[#00A859] mb-1">PROFESSIONAL TOOLS</div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#0B192C]">Models &amp; Templates Library</h3>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {libraryFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check size={17} className="mt-0.5 text-[#00A859] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A859] hover:text-emerald-600 transition-colors group">
              Explore Library <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
            </button>
          </div>

          {/* Industry Intelligence */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-xs font-semibold tracking-widest text-red-600 mb-1">INSIGHTS</div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#0B192C]">Industry Intelligence</h3>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {intelligenceFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <Target size={17} className="mt-0.5 text-red-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors group">
              View Insights <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-t border-b border-slate-200 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Icon size={21} className="text-[#0B192C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#0B192C]">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section id="pricing" className="bg-[#0B192C] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-[34px] font-semibold tracking-tight mb-3">
            Transform How You Deliver<br />Business Recovery &amp; Insolvency Services.
          </h2>
          <p className="text-slate-400 mb-8">Join leading practitioners modernising insolvency practice in Africa.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="brip-button inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#00A859] hover:bg-[#009148] text-white font-semibold rounded-xl"
            >
              Create Your Free Account <ArrowRight size={18} />
            </button>
            <button className="brip-button inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/30 hover:bg-white/5 text-white font-medium rounded-xl transition-all">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-9">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-y-6 text-sm">
          {/* Left */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#00A859] flex items-center justify-center">
              <span className="text-white text-xs font-bold">B</span>
            </div>
            <span className="font-semibold text-[#0B192C]">BRIP360</span>
            <span className="text-slate-400 ml-1">© {new Date().getFullYear()}</span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-slate-600 text-sm">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Compliance</a>
            <a href="#" className="hover:text-slate-900">Security</a>
            <a href="#" className="hover:text-slate-900">Legal</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" className="hover:text-slate-700 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-700 transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

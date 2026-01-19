import React from 'react';
import { BarChart2, TrendingUp, Shield, Zap, Check, ArrowRight, TreeDeciduous, Twitter, Instagram, Linkedin, Mail, Phone, Globe, Star } from 'lucide-react';

/* Ensure your global CSS includes the 'blob' and 'shine' animations 
  from the previous responses for the full effect.
*/

const brokers = [
  {
    id: 1,
    name: 'Zerodha',
    type: 'Discount Broker',
    rating: 4.8,
    theme: 'from-[#1a1a1a] to-[#3d3d3d]',
    features: ['₹20 per trade', 'No hidden fees', 'Advanced Kite Charts', 'Direct Mutual Funds'],
    minDeposit: '₹0',
    link: 'https://zerodha.com'
  },
  {
    id: 2,
    name: 'Upstox',
    type: 'Digital Broker',
    rating: 4.6,
    theme: 'from-[#2d0a31] to-[#521a57]',
    features: ['₹20 Intraday', 'Free Equity Delivery', 'Pro Trading Tools', 'Instant Onboarding'],
    minDeposit: '₹0',
    link: 'https://upstox.com'
  },
  {
    id: 3,
    name: 'Groww',
    type: 'Investment App',
    rating: 4.7,
    theme: 'from-[#004d40] to-[#00796b]',
    features: ['₹0 Commission', 'Paperless SIPs', 'Clean UI / UX', 'US Stocks Access'],
    minDeposit: '₹100',
    link: 'https://groww.in'
  },
  {
    id: 4,
    name: 'Angel One',
    type: 'Full Service',
    rating: 4.5,
    theme: 'from-[#0f172a] to-[#334155]',
    features: ['Research Advisory', 'Smart Money App', 'IPO Priority Access', 'ARQ Prime Engine'],
    minDeposit: '₹0',
    link: 'https://www.angelone.in/'
  },
  {
    id: 5,
    name: '5Paisa',
    type: 'Ultra Discount',
    rating: 4.3,
    theme: 'from-[#b91c1c] to-[#7f1d1d]',
    features: ['₹10 flat brokerage', 'Robo Advisory', 'Derivative Special', 'Multi-asset Platform'],
    minDeposit: '₹0',
    link: 'https://www.5paisa.com/'
  },
  {
    id: 6,
    name: 'ICICI Direct',
    type: 'Banking + Broking',
    rating: 4.4,
    theme: 'from-[#003366] to-[#0052a3]',
    features: ['3-in-1 Account', 'Global Investing', 'Tax Planning Tools', 'Portfolio Mgmt'],
    minDeposit: '₹0',
    link: 'https://www.icicidirect.com/'
  }
];

const Brokers = () => {
  return (
    <div className="relative min-h-screen bg-[#FCFBF7] overflow-x-hidden">
      
      {/* Animated Background Blobs (MoneyTree Golden Theme) */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-[#F3E5AB]/40 rounded-full filter blur-[120px] animate-blob z-0"></div>
      <div className="fixed top-1/4 -right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>
      <div className="fixed -bottom-20 left-1/3 w-96 h-96 bg-[#E5E4E2]/50 rounded-full filter blur-[120px] animate-blob animation-delay-4000 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#B8860B]">Market Leaders 2026</h2>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight italic">
            MoneyTree Brokers
          </h1>
        </div>

        {/* Broker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {brokers.map((broker) => (
            <div 
              key={broker.id} 
              className="group bg-white/70 backdrop-blur-md rounded-[2.2rem] p-3 border border-white/80 shadow-[0_4px_20px_rgba(212,175,55,0.05)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Virtual Trading Terminal Card */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${broker.theme} rounded-[1.6rem] p-5 text-white overflow-hidden shadow-2xl`}>
                <div className="relative flex flex-col h-full justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-bold opacity-50">{broker.type}</p>
                      <h3 className="text-lg font-bold tracking-tight">{broker.name}</h3>
                    </div>
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                      <Star className="h-3 w-3 text-[#D4AF37] fill-[#D4AF37]" />
                      <span className="text-xs font-bold">{broker.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                     <div>
                        <p className="text-[8px] uppercase font-black opacity-50 mb-1">Brokerage</p>
                        <p className="text-sm font-bold text-[#D4AF37]">Flat Fee Model</p>
                     </div>
                     <div className="h-8 w-px bg-white/10"></div>
                     <div>
                        <p className="text-[8px] uppercase font-black opacity-50 mb-1">Demat Charge</p>
                        <p className="text-sm font-bold text-white">Competitive</p>
                     </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <p className="text-[8px] uppercase tracking-widest font-bold opacity-40 italic">SEBI Registered Broker</p>
                    <TrendingUp className="h-5 w-5 text-[#D4AF37] opacity-50" />
                  </div>
                </div>
                {/* Shine animation */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              </div>

              {/* Info Area */}
              <div className="px-4 py-6">
                <div className="flex justify-between items-center mb-5 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Equity Delivery</span>
                    <p className="text-sm font-bold text-slate-800">FREE / Low Cost</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Account Opening</span>
                    <p className="text-sm font-bold text-slate-800">INSTANT</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 min-h-[120px]">
                  {broker.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <div className="mt-1 h-4 w-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-[#B8860B]" strokeWidth={4} />
                      </div>
                      <span className="text-[12px] text-slate-600 font-semibold leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => window.open(broker.link, '_blank')}
                  className="w-full py-3.5 rounded-xl bg-slate-900 text-[#D4AF37] font-bold text-xs flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-[0.98] shadow-lg shadow-slate-100"
                >
                  Start Trading
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Section */}
        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/80 shadow-xl mb-24">
          <h2 className="text-2xl font-black text-slate-900 mb-8 italic">Trading Intelligence</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <TrendingUp className="text-[#B8860B] h-5 w-5" />, title: "Low Costs", desc: "We filter for brokers with minimal hidden charges to protect your margins." },
              { icon: <Shield className="text-[#B8860B] h-5 w-5" />, title: "SEBI Security", desc: "Every broker listed is SEBI registered with high compliance standards." },
              { icon: <Zap className="text-[#B8860B] h-5 w-5" />, title: "Pro Tools", desc: "Prioritizing platforms with sub-second execution and advanced charting." }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="bg-[#D4AF37]/10 w-10 h-10 rounded-xl flex items-center justify-center">{item.icon}</div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 bg-white/60 backdrop-blur-3xl border-t border-[#D4AF37]/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-slate-900 p-2 rounded-xl">
                  <TreeDeciduous className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <span className="text-2xl font-black text-slate-900 tracking-tighter">MoneyTree<span className="text-[#D4AF37]">.</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                The ecosystem for Indian investors. We provide the tools; you build the wealth.
              </p>
              <div className="flex gap-3">
                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <button key={i} className="h-9 w-9 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:border-[#D4AF37] hover:text-[#B8860B] transition-all">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Trading Desk</h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                <li className="hover:text-[#B8860B] cursor-pointer">Stock Brokers</li>
                <li className="hover:text-[#B8860B] cursor-pointer">Mutual Funds</li>
                <li className="hover:text-[#B8860B] cursor-pointer">IPO Dashboard</li>
                <li className="hover:text-[#B8860B] cursor-pointer">Options Trading</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Assistance</h4>
              <ul className="space-y-4 text-[13px] font-bold text-slate-500">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#D4AF37]" /> markets@moneytree.in</li>
                <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-[#D4AF37]" /> www.moneytree.in</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#D4AF37]" /> 1800-MONEY-TREE</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Market Pulse</h4>
              <div className="relative">
                <input type="email" placeholder="Private Email" className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none" />
                <button className="absolute right-2 top-2 h-8 w-8 bg-slate-900 text-[#D4AF37] rounded-lg flex items-center justify-center hover:bg-black">
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2026 MoneyTree International • Trading Portal</p>
            <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span className="hover:text-[#B8860B] cursor-pointer">Risk Disclosure</span>
              <span className="hover:text-[#B8860B] cursor-pointer">Brokerage Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Brokers;
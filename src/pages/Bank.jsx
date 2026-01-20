import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Landmark, 
  Wallet, 
  CreditCard, 
  ArrowRight, 
  Percent, 
  Check, 
  TreeDeciduous, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  Globe,
  Home 
} from 'lucide-react';

/* Ensure your global CSS includes the 'blob' and 'shine' animations */

const banks = [
  {
    id: 1,
    name: 'HDFC Bank',
    type: 'Private Bank',
    interestRate: '2.50% - 6.50%',
    minBalance: '₹2,500',
    theme: 'from-[#0f172a] to-[#334155]',
    features: ['Zero balance option', 'Free virtual debit card', '24/7 VIP support', '1% cashback on spends'],
    link: 'https://www.hdfcbank.com/'
  },
  {
    id: 2,
    name: 'State Bank of India',
    type: 'Public Sector',
    interestRate: '2.90% - 6.80%',
    minBalance: '₹1,000',
    theme: 'from-[#1a2a6c] to-[#b21f1f]',
    features: ['Zero balance basic account', 'Free digital banking', 'Widest ATM network', 'Govt. Schemes'],
    link: 'https://www.sbi.co.in/'
  },
  {
    id: 3,
    name: 'ICICI Bank',
    type: 'Private Bank',
    interestRate: '3.00% - 6.50%',
    minBalance: '₹10,000',
    theme: 'from-[#232f3e] to-[#000000]',
    features: ['Instant opening', 'Free virtual debit card', 'Pre-approved loans', 'Wealth management'],
    link: 'https://www.icicibank.com/'
  },
  {
    id: 4,
    name: 'Axis Bank',
    type: 'Private Bank',
    interestRate: '3.00% - 6.50%',
    minBalance: '₹2,500',
    theme: 'from-[#800040] to-[#b91c1c]',
    features: ['Digital savings account', 'Priority Banking', 'Pre-approved offers', 'Smart Rewards'],
    link: 'https://www.axisbank.com/'
  },
  {
    id: 5,
    name: 'Punjab National Bank',
    type: 'Public Sector',
    interestRate: '2.90% - 6.25%',
    minBalance: '₹500',
    theme: 'from-[#4e0e0e] to-[#9a1c1f]',
    features: ['Zero balance account', 'Free SMS alerts', 'Wide branch network', 'Secure Deposits'],
    link: 'https://www.pnbindia.in/'
  },
  {
    id: 6,
    name: 'Kotak Mahindra',
    type: 'Private Bank',
    interestRate: '3.50% - 6.50%',
    minBalance: '₹5,000',
    theme: 'from-[#ed1c24] to-[#af141a]',
    features: ['Zero balance 811 account', 'Highest Interest Rates', 'Seamless App experience', '24/7 Support'],
    link: 'https://www.kotak.com/'
  }
];

const Bank = () => {
  return (
    <div className="relative min-h-screen bg-[#FCFBF7] overflow-x-hidden">
      
      {/* Fixed Home Button - Top Right */}
      <div className="fixed top-8 right-8 z-50">
        <Link 
          to="/" 
          className="group flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-xl border border-[#D4AF37]/20 text-slate-900 hover:text-[#B8860B] hover:border-[#D4AF37] transition-all duration-300 active:scale-95"
          title="Back to Home"
        >
          <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
        </Link>
      </div>

      {/* Animated Background Blobs (MoneyTree Golden Theme) */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-[#F3E5AB]/40 rounded-full filter blur-[120px] animate-blob z-0"></div>
      <div className="fixed top-1/4 -right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>
      <div className="fixed -bottom-20 left-1/3 w-96 h-96 bg-[#E5E4E2]/50 rounded-full filter blur-[120px] animate-blob animation-delay-4000 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#B8860B]">Premium 2026 Collection</h2>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight italic">
            MoneyTree Banking
          </h1>
        </div>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {banks.map((bank) => (
            <div 
              key={bank.id} 
              className="group bg-white/70 backdrop-blur-md rounded-[2.2rem] p-3 border border-white/80 shadow-[0_4px_20px_rgba(212,175,55,0.05)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Virtual Bank Card */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${bank.theme} rounded-[1.6rem] p-5 text-white overflow-hidden shadow-2xl`}>
                <div className="relative flex flex-col h-full justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-bold opacity-50">{bank.type}</p>
                      <h3 className="text-lg font-bold tracking-tight">{bank.name}</h3>
                    </div>
                    <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <Landmark className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                      <div>
                        <p className="text-[8px] uppercase font-black opacity-50 mb-1">Avg interest</p>
                        <p className="text-sm font-bold text-[#D4AF37]">{bank.interestRate}</p>
                      </div>
                      <div className="h-8 w-px bg-white/10"></div>
                      <div>
                        <p className="text-[8px] uppercase font-black opacity-50 mb-1">Min Balance</p>
                        <p className="text-sm font-bold text-white">{bank.minBalance}</p>
                      </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <p className="text-[8px] uppercase tracking-widest font-bold opacity-40">MoneyTree Verified Account</p>
                    <div className="flex -space-x-2">
                      <div className="h-5 w-5 rounded-full bg-[#D4AF37]/40"></div>
                      <div className="h-5 w-5 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              </div>

              {/* Info Area */}
              <div className="px-4 py-6">
                <h4 className="text-[10px] font-black uppercase text-[#B8860B] tracking-widest mb-4">Elite Benefits</h4>
                <ul className="space-y-3 mb-8 min-h-[120px]">
                  {bank.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <div className="mt-1 h-4 w-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-[#B8860B]" strokeWidth={4} />
                      </div>
                      <span className="text-[12px] text-slate-600 font-semibold leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => window.open(bank.link, '_blank')}
                  className="w-full py-3.5 rounded-xl bg-slate-900 text-[#D4AF37] font-bold text-xs flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-[0.98] shadow-lg shadow-slate-100"
                >
                  Open Digital Account
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/80 shadow-xl mb-24">
          <h2 className="text-2xl font-black text-slate-900 mb-8 italic">Banking Intelligence (FAQ)</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                q: "Digital vs. Physical Account?",
                a: "MoneyTree recommends digital accounts for 24/7 access and lower fees, while traditional accounts are better for high-cash volume businesses."
              },
              {
                q: "Why trust MoneyTree ratings?",
                a: "We analyze hidden charges, app stability, and actual customer service wait times so you don't have to."
              }
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="text-sm font-black text-[#B8860B] uppercase tracking-wider mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.a}</p>
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
                Simplifying Indian Banking since 2026. Every branch, every account, curated for your growth.
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
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Banking Services</h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                <li className="hover:text-[#B8860B] cursor-pointer">Savings Elite</li>
                <li className="hover:text-[#B8860B] cursor-pointer">Current Pro</li>
                <li className="hover:text-[#B8860B] cursor-pointer">Fixed Deposits</li>
                <li className="hover:text-[#B8860B] cursor-pointer">Corporate Banking</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Concierge</h4>
              <ul className="space-y-4 text-[13px] font-bold text-slate-500">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#D4AF37]" /> banks@moneytree.in</li>
                <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-[#D4AF37]" /> www.moneytree.in</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#D4AF37]" /> 1800-MONEY-TREE</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Wealth Newsletter</h4>
              <div className="relative">
                <input type="email" placeholder="Private Email" className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none" />
                <button className="absolute right-2 top-2 h-8 w-8 bg-slate-900 text-[#D4AF37] rounded-lg flex items-center justify-center hover:bg-black">
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2026 MoneyTree International • Banking Portal</p>
            <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span className="hover:text-[#B8860B] cursor-pointer">Privacy</span>
              <span className="hover:text-[#B8860B] cursor-pointer">Banking Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bank;
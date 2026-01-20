import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard as CreditCardIcon, 
  Check, 
  ArrowRight, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  Globe, 
  TreeDeciduous, 
  Home 
} from 'lucide-react';

/* Add these to your global CSS:
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  @keyframes shine {
    100% { left: 125%; }
  }
  .animate-blob { animation: blob 7s infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
*/

const creditCards = [
  {
    id: 1,
    name: 'HDFC Millennia',
    bank: 'HDFC Bank',
    type: 'Visa Signature',
    annualFee: '₹1,000',
    joiningFee: '₹0',
    theme: 'from-[#0f172a] to-[#334155]',
    accent: 'text-[#D4AF37]',
    rewards: ['5% cashback on Amazon & Swiggy', '1% cashback on all other spends', 'Complimentary lounge access'],
    link: 'https://www.hdfcbank.com/'
  },
  {
    id: 2,
    name: 'SBI SimplyCLICK',
    bank: 'SBI Card',
    type: 'Visa Platinum',
    annualFee: '₹499 + GST',
    joiningFee: '₹499 + GST',
    theme: 'from-[#1a2a6c] to-[#b21f1f]',
    accent: 'text-[#D4AF37]',
    rewards: ['10x rewards on online partners', '₹500 voucher on joining', '1% fuel surcharge waiver'],
    link: 'https://www.sbicard.com/'
  },
  {
    id: 3,
    name: 'Amazon Pay ICICI',
    bank: 'ICICI Bank',
    type: 'Visa Contactless',
    annualFee: 'Lifetime Free',
    joiningFee: '₹0',
    theme: 'from-[#232f3e] to-[#000000]',
    accent: 'text-[#D4AF37]',
    rewards: ['5% cashback for Prime members', '2% cashback on partners', 'No joining or annual fees'],
    link: 'https://www.icicibank.com/'
  },
  {
    id: 4,
    name: 'Axis Bank Ace',
    bank: 'Axis Bank',
    type: 'Visa Signature',
    annualFee: '₹499 + GST',
    joiningFee: '₹499 + GST',
    theme: 'from-[#800040] to-[#b91c1c]',
    accent: 'text-[#D4AF37]',
    rewards: ['5% cashback on Google Pay', '4% cashback on Swiggy', '2% cashback on all spends'],
    link: 'https://www.axisbank.com/'
  },
  {
    id: 5,
    name: 'StanC DigiSmart',
    bank: 'StanC',
    type: 'Mastercard',
    annualFee: '₹49/month',
    joiningFee: '₹0',
    theme: 'from-[#004d26] to-[#007a3d]',
    accent: 'text-[#D4AF37]',
    rewards: ['20% off at Myntra', '10% off on Grofers & Zomato', '10% off on Ola bookings'],
    link: 'https://www.sc.com/in/'
  },
  {
    id: 6,
    name: 'IDFC First Select',
    bank: 'IDFC FIRST',
    type: 'Visa Signature',
    annualFee: 'Lifetime Free',
    joiningFee: '₹0',
    theme: 'from-[#4e0e0e] to-[#9a1c1f]',
    accent: 'text-[#D4AF37]',
    rewards: ['10x rewards on dining', 'Interest-free cash withdrawal', 'Buy 1 Get 1 Movie tickets'],
    link: 'https://www.idfcfirstbank.com/'
  },
  {
    id: 7,
    name: 'Amex Platinum Travel',
    bank: 'American Express',
    type: 'Network Card',
    annualFee: '₹5,000',
    joiningFee: '₹3,500',
    theme: 'from-[#006fcf] to-[#002663]',
    accent: 'text-[#D4AF37]',
    rewards: ['15,000 Bonus Points on ₹1.9L spend', 'Taj Stay vouchers', 'Priority Pass membership'],
    link: 'https://www.americanexpress.com/in/'
  },
  {
    id: 8,
    name: 'HDFC Regalia Gold',
    bank: 'HDFC Bank',
    type: 'Visa/Mastercard',
    annualFee: '₹2,500',
    joiningFee: '₹2,500',
    theme: 'from-[#b8860b] to-[#8b6508]',
    accent: 'text-[#D4AF37]',
    rewards: ['5x rewards on lifestyle brands', 'Global lounge access', 'M&S/Reliance vouchers'],
    link: 'https://www.hdfcbank.com/'
  },
  {
    id: 9,
    name: 'BPCL SBI Card Octane',
    bank: 'SBI Card',
    type: 'Visa',
    annualFee: '₹1,499',
    joiningFee: '₹1,499',
    theme: 'from-[#f97316] to-[#ea580c]',
    accent: 'text-[#D4AF37]',
    rewards: ['7.25% value back on fuel', '10x rewards on dining', '₹1500 voucher on joining'],
    link: 'https://www.sbicard.com/'
  },
  {
    id: 10,
    name: 'Axis Bank Magnus',
    bank: 'Axis Bank',
    type: 'Visa Infinite',
    annualFee: '₹12,500',
    joiningFee: '₹12,500',
    theme: 'from-[#2d0a31] to-[#521a57]',
    accent: 'text-[#D4AF37]',
    rewards: ['12,000 Edge reward points', 'VIP Airport Concierge', 'Unlimited lounge access'],
    link: 'https://www.axisbank.com/'
  },
  {
    id: 11,
    name: 'Kotak League Platinum',
    bank: 'Kotak Bank',
    type: 'Visa',
    annualFee: '₹499',
    joiningFee: '₹0',
    theme: 'from-[#ed1c24] to-[#af141a]',
    accent: 'text-[#D4AF37]',
    rewards: ['8x reward points on spends', 'Fuel surcharge waiver', 'Annual spend milestone bonus'],
    link: 'https://www.kotak.com/'
  },
  {
    id: 12,
    name: 'RBL World Safari',
    bank: 'RBL Bank',
    type: 'Mastercard World',
    annualFee: '₹3,000',
    joiningFee: '₹3,000',
    theme: 'from-[#004a99] to-[#002b5c]',
    accent: 'text-[#D4AF37]',
    rewards: ['0% Foreign Markup fee', 'Travel insurance coverage', 'Complimentary lounge access'],
    link: 'https://www.rblbank.com/'
  }
];

const CreditCardPage = () => {
  return (
    <div className="relative min-h-screen bg-[#FCFBF7] overflow-x-hidden">
      
      {/* Fixed Home Button - Top Right Corner */}
      <div className="fixed top-8 right-8 z-50">
        <Link 
          to="/" 
          className="group flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-xl border border-[#D4AF37]/20 text-slate-900 hover:text-[#B8860B] hover:border-[#D4AF37] transition-all duration-300 active:scale-95"
          title="Back to Home"
        >
          <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
        </Link>
      </div>

      {/* Animated Background Blobs (Golden Theme) */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-[#F3E5AB]/40 rounded-full filter blur-[120px] animate-blob z-0"></div>
      <div className="fixed top-1/4 -right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>
      <div className="fixed -bottom-20 left-1/3 w-96 h-96 bg-[#E5E4E2]/50 rounded-full filter blur-[120px] animate-blob animation-delay-4000 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Header */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#B8860B]">Premium 2026 Collection</h2>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight italic">
            Credit Cards
          </h1>
        </div>

        {/* Credit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {creditCards.map((card) => (
            <div 
              key={card.id} 
              className="group bg-white/70 backdrop-blur-md rounded-[2.2rem] p-3 border border-white/80 shadow-[0_4px_20px_rgba(212,175,55,0.05)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Virtual Card */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${card.theme} rounded-[1.6rem] p-5 text-white overflow-hidden shadow-2xl`}>
                <div className="relative flex flex-col h-full justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-bold opacity-50">{card.bank}</p>
                      <h3 className="text-lg font-bold tracking-tight">{card.name}</h3>
                    </div>
                    <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <CreditCardIcon className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-6 bg-gradient-to-br from-[#D4AF37] via-[#FFFACD] to-[#B8860B] rounded-sm shadow-md"></div>
                    <p className="text-[10px] font-mono tracking-[0.3em] opacity-60">•••• 2026</p>
                  </div>

                  <div className="flex justify-between items-end">
                    <p className="text-[8px] uppercase tracking-widest font-bold opacity-50">{card.type}</p>
                    <div className="flex -space-x-2">
                      <div className="h-5 w-5 rounded-full bg-[#D4AF37]/40"></div>
                      <div className="h-5 w-5 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              </div>

              {/* Info Area */}
              <div className="px-4 py-5">
                <div className="flex justify-between mb-5 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Annual Fee</span>
                    <p className="text-base font-bold text-slate-800">{card.annualFee}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Joining</span>
                    <p className="text-base font-bold text-slate-800">{card.joiningFee}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 min-h-[100px]">
                  {card.rewards.map((reward, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <div className={`mt-1 h-4 w-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-2.5 w-2.5 text-[#B8860B]" strokeWidth={4} />
                      </div>
                      <span className="text-[12px] text-slate-600 font-medium leading-tight">{reward}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => window.open(card.link, '_blank')}
                  className="w-full py-3.5 rounded-xl bg-slate-900 text-[#D4AF37] font-bold text-xs flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-[0.98] shadow-lg shadow-slate-100"
                >
                  Apply via MoneyTree
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 bg-white/60 backdrop-blur-3xl border-t border-[#D4AF37]/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-slate-900 p-2 rounded-xl">
                  <TreeDeciduous className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <span className="text-2xl font-black text-slate-900 tracking-tighter">MoneyTree<span className="text-[#D4AF37]">.</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Growing your rewards since 2026. We curate the finest financial instruments for the modern Indian spender.
              </p>
              <div className="flex gap-3">
                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <button key={i} className="h-9 w-9 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 hover:border-[#D4AF37] hover:text-[#B8860B] transition-all">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Asset Classes</h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                <li className="hover:text-[#B8860B] cursor-pointer transition-colors">Elite Travel</li>
                <li className="hover:text-[#B8860B] cursor-pointer transition-colors">Wealth Cashback</li>
                <li className="hover:text-[#B8860B] cursor-pointer transition-colors">Fuel Reserves</li>
                <li className="hover:text-[#B8860B] cursor-pointer transition-colors">Zero Fee Cards</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Concierge</h4>
              <ul className="space-y-4 text-[13px] font-bold text-slate-500">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#D4AF37]" />
                  wealth@moneytree.in
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-[#D4AF37]" />
                  www.moneytree.in
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  1800-MONEY-TREE
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Insider Access</h4>
              <p className="text-slate-500 text-xs mb-4 font-medium">Early alerts on exclusive card devaluations and launches.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Private Email" 
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-xs focus:ring-1 focus:ring-[#D4AF37] outline-none"
                />
                <button className="absolute right-2 top-2 h-8 w-8 bg-slate-900 text-[#D4AF37] rounded-lg flex items-center justify-center hover:bg-black">
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              © 2026 MoneyTree International • Excellence in Finance
            </p>
            <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span className="hover:text-[#B8860B] cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-[#B8860B] cursor-pointer transition-colors">Wealth Terms</span>
              <span className="hover:text-[#B8860B] cursor-pointer transition-colors">Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreditCardPage;
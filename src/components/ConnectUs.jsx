import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TreeDeciduous, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Clock, 
  Send,
  ShieldCheck,
  Home
} from 'lucide-react';
import { FaGlobe } from 'react-icons/fa';

const ConnectUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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

      {/* Animated Background Blobs */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-[#F3E5AB]/40 rounded-full filter blur-[120px] animate-blob z-0"></div>
      <div className="fixed top-1/4 -right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>
      <div className="fixed -bottom-20 left-1/3 w-96 h-96 bg-[#E5E4E2]/50 rounded-full filter blur-[120px] animate-blob animation-delay-4000 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#B8860B]">Private Concierge</h2>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight italic">
            Connect with MoneyTree
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/70 backdrop-blur-md rounded-[2.2rem] p-8 border border-white/80 shadow-xl group hover:shadow-2xl transition-all duration-500">
              <div className="bg-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="text-[#D4AF37] h-6 w-6" />
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Email Inquiry</h3>
              <p className="text-xs text-slate-500 font-bold mb-4">Response time: &lt; 2 Hours</p>
              <p className="text-slate-800 font-bold text-lg">wealth@moneytree.in</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-[2.2rem] p-8 border border-white/80 shadow-xl group hover:shadow-2xl transition-all duration-500">
              <div className="bg-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="text-[#D4AF37] h-6 w-6" />
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Priority Line</h3>
              <p className="text-xs text-slate-500 font-bold mb-4">Mon-Sat, 9am - 8pm</p>
              <p className="text-slate-800 font-bold text-lg">1800-MONEY-TREE</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-[2.2rem] p-8 border border-white/80 shadow-xl group hover:shadow-2xl transition-all duration-500">
              <div className="bg-slate-900 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="text-[#D4AF37] h-6 w-6" />
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">Corporate HQ</h3>
              <p className="text-slate-800 font-bold text-base leading-relaxed">
                MoneyTree Financial Hub,<br />
                Bandra-Kurla Complex (BKC),<br />
                Mumbai, MH 400051
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/80 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-black text-slate-900 mb-2 italic">Send a Private Message</h2>
                <p className="text-slate-500 font-medium mb-8">Tell us about your financial goals and our experts will reach out.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#B8860B] ml-1">Full Name</label>
                      <input type="text" required className="w-full bg-white/50 border border-slate-200 rounded-2xl py-4 px-5 text-sm focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#B8860B] ml-1">Email Address</label>
                      <input type="email" required className="w-full bg-white/50 border border-slate-200 rounded-2xl py-4 px-5 text-sm focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#B8860B] ml-1">Subject</label>
                    <select className="w-full bg-white/50 border border-slate-200 rounded-2xl py-4 px-5 text-sm focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all appearance-none">
                      <option>Credit Card Advisory</option>
                      <option>Banking Solutions</option>
                      <option>Brokerage Assistance</option>
                      <option>Wealth Management</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#B8860B] ml-1">Message</label>
                    <textarea rows="4" required className="w-full bg-white/50 border border-slate-200 rounded-2xl py-4 px-5 text-sm focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" placeholder="How can we help you grow?"></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full md:w-auto px-12 py-4 rounded-2xl bg-slate-900 text-[#D4AF37] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-[0.98] shadow-xl shadow-slate-200"
                  >
                    {submitted ? "Message Sent" : "Transmit Message"}
                    {submitted ? <ShieldCheck className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                  </button>
                </form>
              </div>

              {/* Decorative Shine */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Global Network Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-[#D4AF37] text-3xl font-black italic mb-4">Our Presence is Everywhere</h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto mb-8">
              MoneyTree operates across all major financial hubs in India. From digital support to physical wealth summits, we are where your money grows.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {['Mumbai', 'Delhi', 'Bangalore', 'Gift City', 'Hyderabad'].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></div>
                  <span className="text-white text-xs font-black uppercase tracking-widest">{city}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </div>

      {/* Footer */}
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
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Concierge</h4>
              <ul className="space-y-3 text-[13px] font-bold text-slate-500">
                <li className="hover:text-[#B8860B] cursor-pointer">Support Portal</li>
                <li className="hover:text-[#B8860B] cursor-pointer">Security Center</li>
                <li className="hover:text-[#B8860B] cursor-pointer">Wealth Blog</li>
                <li className="hover:text-[#B8860B] cursor-pointer">API Access</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8860B] mb-6">Connect</h4>
              <ul className="space-y-4 text-[13px] font-bold text-slate-500">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#D4AF37]" /> concierge@moneytree.in</li>
                <li className="flex items-center gap-3"><FaGlobe className="h-4 w-4 text-[#D4AF37]" /> www.moneytree.in</li>
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
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2026 MoneyTree International • Excellence Hub</p>
            <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span className="hover:text-[#B8860B] cursor-pointer">Data Protection</span>
              <span className="hover:text-[#B8860B] cursor-pointer">Service Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConnectUs;
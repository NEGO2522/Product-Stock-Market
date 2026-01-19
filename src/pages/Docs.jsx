import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  BarChart2, 
  Shield, 
  Zap, 
  TrendingUp, 
  CreditCard, 
  Building2 as Bank, 
  Users, 
  FileText, 
  HelpCircle, 
  ChevronRight,
  Lock,
  CheckCircle2
} from 'lucide-react';

const Docs = () => {
  const location = useLocation();

  // Handle smooth scrolling when hash changes or on initial load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState({}, '', `#${id}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { name: 'Introduction', href: '#introduction', icon: BookOpen, isRoute: false },
    { name: 'Features', href: '#features', icon: Zap, isRoute: false },
    { name: 'Getting Started', href: '#getting-started', icon: TrendingUp, isRoute: false },
    { name: 'Brokers', href: '#brokers', icon: BarChart2, isRoute: false },
    { name: 'Banks', href: '#banks', icon: Bank, isRoute: false },
    { name: 'Credit Cards', href: '#credit-cards', icon: CreditCard, isRoute: false },
    { name: 'Security', href: '#security', icon: Shield, isRoute: false },
    { name: 'FAQ', href: '#faq', icon: HelpCircle, isRoute: false },
    { name: 'Contact Support', href: '/connect-us', icon: Users, isRoute: true },
    { name: 'Terms of Service', href: '/terms', icon: FileText, isRoute: true },
    { name: 'Privacy Policy', href: '/privacy-policy', icon: Shield, isRoute: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-slate-50 to-orange-50 text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900 tracking-tight">Money Tree Documentation</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <nav className="sticky top-24 space-y-1">
              {navItems.map((item) => {
                const isActive = (!item.isRoute && (location.hash === item.href || (location.hash === '' && item.href === '#introduction')));
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => !item.isRoute && handleNavClick(e, item.href.substring(1))}
                    className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                        : 'text-gray-600 hover:bg-white hover:text-blue-600'
                    }`}
                  >
                    <item.icon className={`flex-shrink-0 h-5 w-5 mr-3 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`} />
                    <span>{item.name}</span>
                    {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-28">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Introduction</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Welcome to Money Tree, your comprehensive financial companion designed to simplify investment decisions and banking services. 
                Our platform bridges the gap between investors, banks, and financial service providers.
              </p>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Zap className="mr-2 h-6 w-6 text-yellow-400" /> Our Mission
                </h3>
                <p className="text-blue-50 text-lg leading-relaxed">
                  To democratize access to financial services and investment opportunities, making complex financial decisions 
                  approachable for everyone—from first-time savers to seasoned experts.
                </p>
              </div>
            </section>

            {/* Features */}
            <section id="features" className="mb-16 scroll-mt-28">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Core Ecosystem</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Broker Comparison', desc: 'Detailed analysis of fees and trading tools.', icon: <BarChart2 className="text-blue-600" />, color: 'bg-blue-50' },
                  { title: 'Banking Services', desc: 'Transparent interest rates and account terms.', icon: <Bank className="text-green-600" />, color: 'bg-green-50' },
                  { title: 'Credit Cards', desc: 'Rewards and eligibility criteria comparison.', icon: <CreditCard className="text-purple-600" />, color: 'bg-purple-50' },
                  { title: 'Security First', desc: 'Enterprise-grade encryption for your data.', icon: <Shield className="text-red-600" />, color: 'bg-red-50' },
                ].map((feature, i) => (
                  <div key={i} className="p-6 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all group">
                    <div className={`h-12 w-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="mb-16 scroll-mt-28">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Started</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-z-10 before:h-full before:w-0.5 before:bg-gray-100">
                {[
                  { title: 'Create Your Account', text: 'Sign up for free. No credit card required.' },
                  { title: 'Complete Your Profile', text: 'Define your financial goals for tailored advice.' },
                  { title: 'Explore & Compare', text: 'Browse curated lists of brokers and banks.' },
                ].map((step, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Security Section */}
            <section id="security" className="mb-16 scroll-mt-28 bg-slate-900 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold">Your Security is Our Priority</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Bank-level 256-bit encryption',
                  'Two-factor authentication (2FA)',
                  'Regular security audits',
                  'Read-only account access'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
              <div className="space-y-6">
                {[
                  { q: "Is Money Tree free?", a: "Yes, basic features are free. Premium tools are available via subscription." },
                  { q: "How do you make money?", a: "We earn referral fees from partners. This never changes the rates you see." },
                  { q: "Is my data secure?", a: "We use bank-level security and never store your login credentials." }
                ].map((item, i) => (
                  <div key={i} className="border border-gray-100 rounded-lg p-5 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Docs;
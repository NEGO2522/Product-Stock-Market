import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, BarChart2, Shield, Zap, TrendingUp, CreditCard, Building2 as Bank, Users, FileText, HelpCircle, ChevronRight } from 'lucide-react';

const Docs = () => {
  const location = useLocation();

  // Handle smooth scrolling when hash changes
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, [location]);

  // Smooth scroll handler for manual clicks
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Update URL without causing a page reload
      window.history.pushState({}, '', `#${id}`);
      
      // Smooth scroll to the element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-slate-50 to-orange-50 text-gray-800">
      {/* Header */}
      <header className="bg-transparent absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Money Tree Documentation</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <nav className="space-y-1">
              {[
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
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (!item.isRoute) {
                      e.preventDefault();
                      handleNavClick(e, item.href.substring(1));
                    }
                  }}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    (!item.isRoute && (location.hash === item.href || 
                    (location.hash === '' && item.href === '#introduction')))
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon 
                    className={`flex-shrink-0 h-5 w-5 ${
                      location.hash === item.href || 
                      (location.hash === '' && item.href === '#introduction')
                        ? 'text-blue-600'
                        : 'text-gray-500 group-hover:text-gray-600'
                    }`} 
                  />
                  <span className="ml-3">{item.name}</span>
                  {(!item.isRoute && (location.hash === item.href || 
                    (location.hash === '' && item.href === '#introduction'))) && (
                    <ChevronRight className="ml-auto h-4 w-4 text-blue-600" />
                  )}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 bg-white rounded-lg shadow-sm p-8">
            {/* Introduction */}
            <section id="introduction" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Money Tree, your comprehensive financial companion designed to simplify investment decisions and banking services. 
                Our platform bridges the gap between investors, banks, and financial service providers, offering a seamless experience 
                for managing your financial portfolio.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To democratize access to financial services and investment opportunities, making complex financial decisions 
                  more approachable for everyone, from first-time investors to seasoned financial experts.
                </p>
              </div>
            </section>

            {/* Features */}
            <section id="features" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Broker Comparison',
                    description: 'Compare brokerage services, fees, and features to find the perfect match for your trading style.',
                    icon: <BarChart2 className="h-6 w-6 text-blue-600" />
                  },
                  {
                    title: 'Banking Services',
                    description: 'Access a wide range of banking products with transparent interest rates and terms.',
                    icon: <Bank className="h-6 w-6 text-green-600" />
                  },
                  {
                    title: 'Credit Card Offers',
                    description: 'Discover and compare credit card benefits, rewards, and eligibility criteria.',
                    icon: <CreditCard className="h-6 w-6 text-purple-600" />
                  },
                  {
                    title: 'Investment Tools',
                    description: 'Powerful analytics and tools to help you make informed investment decisions.',
                    icon: <TrendingUp className="h-6 w-6 text-yellow-600" />
                  },
                  {
                    title: 'Security First',
                    description: 'Enterprise-grade security to protect your financial information and transactions.',
                    icon: <Shield className="h-6 w-6 text-red-600" />
                  }
                ].map((feature, index) => (
                  <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Account</h3>
                    <p className="text-gray-600">
                      Sign up for a free account to access all features. No credit card required to get started.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Your Profile</h3>
                    <p className="text-gray-600">
                      Help us understand your financial goals and preferences to provide personalized recommendations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore & Compare</h3>
                    <p className="text-gray-600">
                      Browse through our curated list of brokers, banks, and financial products. Compare features, fees, and benefits.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Brokers Section */}
            <section id="brokers" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Brokers</h2>
              <p className="text-gray-600 mb-6">
                Our platform provides comprehensive information about various brokerage services to help you make informed decisions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                <li>Detailed broker profiles with ratings and reviews</li>
                <li>Comparison of trading fees, account minimums, and features</li>
                <li>Analysis of trading platforms and tools</li>
                <li>Educational resources for traders of all levels</li>
              </ul>
            </section>

            {/* Banks Section */}
            <section id="banks" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Banks</h2>
              <p className="text-gray-600 mb-6">
                Access a wide range of banking services with transparent information:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Savings & Current Accounts</h3>
                  <p className="text-gray-600">Compare interest rates, fees, and features of various bank accounts.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Loans & Mortgages</h3>
                  <p className="text-gray-600">Find the best loan options with our comparison tools.</p>
                </div>
              </div>
            </section>

            {/* Credit Cards Section */}
            <section id="credit-cards" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Credit Cards</h2>
              <p className="text-gray-600 mb-6">
                Discover the perfect credit card that matches your spending habits and financial goals:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {['Travel Rewards', 'Cash Back', 'Low Interest', 'Balance Transfer', 'Business', 'Student']
                  .map((type) => (
                    <div key={type} className="p-4 border border-gray-200 rounded-lg text-center">
                      <CreditCard className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                      <h4 className="font-medium text-gray-900">{type}</h4>
                    </div>
                  ))
                }
              </div>
            </section>

            {/* Security Section */}
            <section id="security" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Security</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Security is Our Priority</h3>
                <p className="text-gray-600 mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Bank-level 256-bit encryption</li>
                  <li>Two-factor authentication (2FA)</li>
                  <li>Regular security audits</li>
                  <li>Read-only access to connected accounts</li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "Is Money Tree free to use?",
                    answer: "Yes, Money Tree is completely free for basic features. We offer premium subscriptions for advanced analytics and tools."
                  },
                  {
                    question: "How do you make money?",
                    answer: "We earn referral fees when users sign up for services through our platform. This doesn't affect the rates or terms you receive."
                  },
                  {
                    question: "Is my financial data secure?",
                    answer: "Absolutely. We use bank-level security and never store your banking credentials. Your data is encrypted and protected."
                  },
                  {
                    question: "Can I trust the recommendations?",
                    answer: "Our recommendations are based on objective analysis and user data. We disclose any potential conflicts of interest."
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                    <p className="mt-1 text-gray-600">{item.answer}</p>
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
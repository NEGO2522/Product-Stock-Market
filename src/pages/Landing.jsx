import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, TrendingUp, Shield, Zap, Check, X } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Menu, Transition } from '@headlessui/react';

const Landing = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid email address' });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      // Add a new document with a generated id
      const docRef = await addDoc(collection(db, 'newsletterSubscribers'), {
        email: email,
        subscribedAt: serverTimestamp(),
        source: 'website-footer'
      });
      
      setStatus({ loading: false, success: true, error: null });
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);
      
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatus({ loading: false, success: false, error: 'Failed to subscribe. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 text-gray-800">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BarChart2 className="h-8 w-8 text-gray-800" />
              <span className="ml-2 text-xl font-bold text-gray-900">Money tree</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-1">
                {/* Banks Link */}
                <Link to="/banks" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  Banks
                </Link>

                {/* Brokers Link */}
                <Link to="/brokers" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  Brokers
                </Link>

                {/* Credit Cards Link */}
                <Link to="/credit-cards" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  Credit Cards
                </Link>

                <Link to="/connect-us" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  Connect Us
                </Link>
                <Link to="/docs" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  Docs
                </Link>
              </div>
              <Link 
                to="/login" 
                className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-all"
              >
                Account
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Investing <br />
              <span className="text-gray-900">Made Simple</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Access real-time market data, advanced analytics, and powerful tools to make informed investment decisions.
            </p>
            <div className="mt-10">
              <Link
                to="/brokers"
                className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Compare Stocks
              </Link>
              <Link 
                to="/docs" 
                className="ml-4 px-8 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Static Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-white p-4 rounded-xl shadow-xl h-80">
              <img 
                src="/stock.jpg" 
                alt="Stock Market Data Visualization"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Data</h3>
              <p className="text-gray-600">Access up-to-the-minute stock prices and market data to stay ahead of the curve.</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Powerful tools and visualizations to analyze market trends and patterns.</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Your data and investments are protected with enterprise-grade security.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Brokers & Credit Cards */}
      <div className="bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Featured Brokers */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Brokers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: 'Zerodha', logo: 'Z' },
                  { name: 'Upstox', logo: 'U' },
                  { name: 'Groww', logo: 'G' },
                  { name: 'Angel One', logo: 'A' }
                ].map((broker) => (
                  <Link to="/brokers" key={broker.name} className="block">
                    <div className="p-4 border-2 border-gray-300 bg-white rounded-lg hover:shadow-md transition-all duration-300 h-full">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-3">
                        {broker.logo}
                      </div>
                      <h3 className="font-medium text-gray-900">{broker.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">Compare & Open Account</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/brokers" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center justify-center w-full sm:w-auto mx-auto">
                  View More Brokers
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200"></div>

            {/* Featured Credit Cards */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Credit Cards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: 'HDFC Millennia', logo: 'H' },
                  { name: 'SBI SimplyClick', logo: 'S' },
                  { name: 'Axis Bank Ace', logo: 'A' },
                  { name: 'ICICI Amazon Pay', logo: 'I' }
                ].map((card) => (
                  <Link to="/credit-cards" key={card.name} className="block">
                    <div className="p-4 border-2 border-gray-300 bg-white rounded-lg hover:shadow-md transition-all duration-300 h-full">
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl mb-3">
                        {card.logo}
                      </div>
                      <h3 className="font-medium text-gray-900">{card.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">Check Eligibility & Apply</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/credit-cards" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center justify-center w-full sm:w-auto mx-auto">
                  View More Credit Cards
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Banks */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Banks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'HDFC Bank', logo: 'H' },
                { name: 'SBI', logo: 'S' },
                { name: 'ICICI Bank', logo: 'I' },
                { name: 'Axis Bank', logo: 'A' },
                { name: 'Kotak Mahindra', logo: 'K' },
                { name: 'PNB', logo: 'P' }
              ].map((bank) => (
                <Link to="/banks" key={bank.name} className="block">
                  <div className="p-4 border-2 border-gray-300 bg-white rounded-lg hover:shadow-md transition-all duration-300 flex flex-col items-center h-full">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-2xl mb-3">
                      {bank.logo}
                    </div>
                    <h3 className="font-medium text-gray-900 text-center">{bank.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 text-center">Interest Rates & Offers</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/banks" className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                View All Banks
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 text-gray-700">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <BarChart2 className="h-8 w-8 text-gray-900" />
                <span className="ml-2 text-2xl font-bold text-gray-900">Money tree</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empowering investors with real-time market data and powerful analytics tools to make informed investment decisions.
              </p>
              <div className="flex space-x-4 pt-2">
                {[ 
                  { 
                    name: 'GitHub', 
                    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
                    url: 'https://github.com/NEGO2522'
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Features', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                {['Blog', 'Guides', 'API Documentation', 'Market Research', 'Help Center'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter for the latest market insights and updates.</p>
              <form onSubmit={handleSubscribe}>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-900"
                    required
                    disabled={status.loading}
                  />
                  <button 
                    type="submit"
                    className={`flex items-center justify-center bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-r-md transition-all duration-200 ${status.loading ? 'opacity-75' : ''}`}
                    disabled={status.loading}
                  >
                    {status.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </>
                    ) : 'Subscribe'}
                  </button>
                </div>
                {status.error && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <X className="h-4 w-4 mr-1" /> {status.error}
                  </p>
                )}
                {status.success && (
                  <p className="mt-2 text-sm text-green-600 flex items-center">
                    <Check className="h-4 w-4 mr-1" /> Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="md:flex md:items-center md:justify-between">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Money tree. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {[
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                  { name: 'Terms of Service', path: '/terms' },
                  { name: 'Connect Us', path: '/connect-us' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-400">
                Money tree is a demo application. Not financial advice. Investing involves risk, including possible loss of principal.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
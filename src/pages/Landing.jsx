import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { BarChart2, TrendingUp, Shield, ArrowRight, MessageSquare, BookOpen, CreditCard, Landmark } from 'lucide-react';

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
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100">
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

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 z-50">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center">
            <BarChart2 className="h-7 w-7 text-gray-800" />
            <span className="ml-2 text-xl font-bold text-gray-900">Money tree</span>
          </div>
          <Link 
            to="/login" 
            className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-700 transition-all"
          >
            Account
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center h-14">
          <Link to="/banks" className="flex flex-col items-center justify-center w-full h-full text-gray-700 hover:text-gray-900 transition-colors">
            <Landmark className="h-5 w-5" />
            <span className="text-xs mt-0.5">Banks</span>
          </Link>
          <Link to="/brokers" className="flex flex-col items-center justify-center w-full h-full text-gray-700 hover:text-gray-900 transition-colors">
            <BarChart2 className="h-5 w-5" />
            <span className="text-xs mt-0.5">Brokers</span>
          </Link>
          <Link to="/credit-cards" className="flex flex-col items-center justify-center w-full h-full text-gray-700 hover:text-gray-900 transition-colors">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs mt-0.5">Cards</span>
          </Link>
          <Link to="/connect-us" className="flex flex-col items-center justify-center w-full h-full text-gray-700 hover:text-gray-900 transition-colors">
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs mt-0.5">Connect</span>
          </Link>
          <Link to="/docs" className="flex flex-col items-center justify-center w-full h-full text-gray-700 hover:text-gray-900 transition-colors">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs mt-0.5">Docs</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 md:pt-10 md:pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Smart Investing <br />
              <span className="text-gray-900">Made Simple</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Access real-time market data, advanced analytics, and powerful tools to make informed investment decisions.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/brokers"
                className="bg-gray-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-gray-700 transition-colors text-center"
              >
                Compare Stocks
              </Link>
              <Link 
                to="/docs" 
                className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition-colors text-center"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 rounded-lg shadow-sm hover:shadow-md transition-all h-full">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Data</h3>
              <p className="text-gray-600">Access up-to-the-minute stock prices and market data to stay ahead of the curve.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 rounded-lg shadow-sm hover:shadow-md transition-all h-full">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Powerful tools and visualizations to analyze market trends and patterns.</p>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 rounded-lg shadow-sm hover:shadow-md transition-all h-full">
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
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Featured Brokers */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Brokers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { 
                    name: 'Zerodha', 
                    logo: 'https://opensourcepledge.com/images/members/zerodha/logo.webp',
                    alt: 'Zerodha Logo'
                  },
                  { 
                    name: 'Upstox', 
                    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHqu3S3cd_R-g/company-logo_200_200/company-logo_200_200/0/1631600709019/upstox_logo?e=2147483647&v=beta&t=_cBwDHJkrw79EP2Hy_0y7mS6iWLfu5W17b8OjTuBPSE',
                    alt: 'Upstox Logo'
                  },
                  { 
                    name: 'Groww', 
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Groww_app_logo.png',
                    alt: 'Groww Logo'
                  },
                  { 
                    name: 'Angel One', 
                    logo: 'https://yt3.googleusercontent.com/BUXdWI-gsrRXMa1uTwRW9I_DeRHKUwXYpBW-pd8r7hu2b5eCtXCAEzTL408aeUyrQIsyEIhjKMY=s900-c-k-c0x00ffffff-no-rj',
                    alt: 'Angel One Logo'
                  }
                ].map((broker) => (
                  <Link to="/brokers" key={broker.name} className="block">
                    <div className="p-3 sm:p-4 border-2 border-gray-300 bg-white rounded-lg hover:shadow-md transition-all duration-300 h-full">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center overflow-hidden mb-3 border border-gray-200">
                        <img 
                          src={broker.logo} 
                          alt={broker.alt}
                          className="h-full w-full object-contain p-1"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23e5e7eb"><rect width="100" height="100" rx="50"/><text x="50%" y="50%" font-size="40" text-anchor="middle" dy=".3em" fill="%236b7280" font-family="sans-serif">' + broker.name.charAt(0) + '</text></svg>';
                          }}
                        />
                      </div>
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">{broker.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">Compare & Open Account</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/brokers" className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                  View More Brokers
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-gray-200"></div>

            {/* Featured Credit Cards */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Credit Cards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { 
                    name: 'HDFC Millennia', 
                    logo: 'https://www.hdfc.bank.in/content/hdfcbankpws/in/en/personal-banking/credit-cards/millennia-credit-card/_jcr_content/root/container/container_704997858_/box_container/extendedteaser.coreimg.png/1765351865160/millennia-credit-card.png',
                    alt: 'HDFC Millennia Credit Card'
                  },
                  { 
                    name: 'SBI SimplyClick', 
                    logo: 'https://i.pinimg.com/736x/11/bd/cd/11bdcdf25fad9a03dbf803d1a6b38e97.jpg',
                    alt: 'SBI SimplyClick Credit Card'
                  },
                  { 
                    name: 'Axis Bank Ace', 
                    logo: 'https://www.finowings.com/financial-products/credit-cards/axis-bank/img/axis-bank-credit-card.jpg',
                    alt: 'Axis Bank Ace Credit Card'
                  },
                  { 
                    name: 'ICICI Amazon Pay', 
                    logo: 'https://ibsintelligence.com/wp-content/uploads/2020/01/AmazonPayLogo-543.jpg',
                    alt: 'ICICI Amazon Pay Credit Card'
                  }
                ].map((card) => (
                  <Link to="/credit-cards" key={card.name} className="block">
                    <div className="p-3 sm:p-4 border-2 border-gray-300 bg-white rounded-lg hover:shadow-md transition-all duration-300 h-full">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center overflow-hidden mb-3 border border-gray-200">
                        <img 
                          src={card.logo} 
                          alt={card.alt}
                          className="h-full w-full object-contain p-1"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23e5e7eb"><rect width="100" height="100" rx="50"/><text x="50%" y="50%" font-size="40" text-anchor="middle" dy=".3em" fill="%236b7280" font-family="sans-serif">' + card.name.charAt(0) + '</text></svg>';
                          }}
                        />
                      </div>
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base">{card.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">Check Eligibility & Apply</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/credit-cards" className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center">
                  View More Credit Cards
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Banks */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Banks</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                { 
                  name: 'HDFC Bank', 
                  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpTMzhrXL6tX7Co5j2M5wNTVzVFNd4UvdPg&s',
                  alt: 'HDFC Bank Logo'
                },
                { 
                  name: 'SBI', 
                  logo: 'https://yt3.googleusercontent.com/NGhfS9Di_x-EquQdoHWnnCsws9C2ekE_qt5F6Cb9-Jllrecw86qwxr207V7Ffqv5bZAQYVU3e0k=s900-c-k-c0x00ffffff-no-rj',
                  alt: 'SBI Logo'
                },
                { 
                  name: 'ICICI Bank', 
                  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Yfl3u_FGS0L-sfnzW1kBeUqtwZnmAoztlg&s',
                  alt: 'ICICI Bank Logo'
                },
                { 
                  name: 'Axis Bank', 
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/1280px-Axis_Bank_logo.svg.png',
                  alt: 'Axis Bank Logo'
                },
                { 
                  name: 'Kotak Mahindra', 
                  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0x-5XTuch9fn5z1DFeFeNUI7iaWTAsN9Bpg&s',
                  alt: 'Kotak Mahindra Logo'
                },
                { 
                  name: 'PNB', 
                  logo: 'https://vectorseek.com/wp-content/uploads/2023/09/Punjab-National-Bank-Pnb-Logo-Vector.svg-.png',
                  alt: 'PNB Logo'
                }
              ].map((bank) => (
                <Link to="/banks" key={bank.name} className="block">
                  <div className="p-3 sm:p-4 border-2 border-gray-300 bg-white rounded-lg hover:shadow-md transition-all duration-300 flex flex-col items-center h-full">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-white flex items-center justify-center overflow-hidden mb-2 sm:mb-3">
                      <img 
                        src={bank.logo} 
                        alt={bank.alt} 
                        className="h-full w-full object-contain p-1"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23e5e7eb"><rect width="100" height="100" rx="50"/><text x="50%" y="50%" font-size="40" text-anchor="middle" dy=".3em" fill="%236b7280" font-family="sans-serif">' + bank.name.charAt(0) + '</text></svg>';
                        }}
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 text-center text-sm sm:text-base">{bank.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 text-center hidden sm:block">Interest Rates & Offers</p>
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
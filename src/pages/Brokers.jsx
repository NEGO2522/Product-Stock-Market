import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, TrendingUp, Shield, Zap, Check, X } from 'lucide-react';

const brokers = [
  {
    id: 1,
    name: 'Zerodha',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH79A7vRECxR_FF6UfmG7U_zlDzI2NwC11DQ&s',
    rating: 4.5,
    features: ['₹20 per trade', 'No hidden fees', 'Advanced charts', 'Mobile app'],
    minDeposit: '₹0',
    description: 'India\'s largest stock broker with over 6+ million clients.',
    link: 'https://zerodha.com'
  },
  {
    id: 2,
    name: 'Upstox',
    logo: 'https://www.minereum.com/wp-content/uploads/2025/10/upstox.webp',
    rating: 4.3,
    features: ['₹20 per trade', 'Free delivery', 'Advanced tools', 'Beginner friendly'],
    minDeposit: '₹0',
    description: 'Fastest growing stock trading platform with modern interface.',
    link: 'https://upstox.com'
  },
  {
    id: 3,
    name: 'Groww',
    logo: 'https://static.vecteezy.com/system/resources/previews/068/247/370/non_2x/groww-stocks-app-icon-on-a-transparent-background-free-png.png',
    rating: 4.4,
    features: ['₹0 commission', 'No account fees', 'Mutual funds', 'SIP available'],
    minDeposit: '₹100',
    description: 'Simple and easy platform for new investors.',
    link: 'https://groww.in'
  },
  {
    id: 4,
    name: 'Angel One',
    logo: 'https://www.angelone.in/favicon.ico',
    rating: 4.2,
    features: ['₹20 per trade', 'Research reports', 'IPO access', 'Demat account'],
    minDeposit: '₹0',
    description: 'Trusted full-service broker with strong research capabilities.',
    link: 'https://www.angelone.in/'
  },
  {
    id: 5,
    name: '5Paisa',
    logo: 'https://www.5paisa.com/favicon.ico',
    rating: 4.0,
    features: ['₹10 per trade', 'Low brokerage', 'Robo advisory', 'No hidden charges'],
    minDeposit: '₹0',
    description: 'Discount broker with advanced trading platforms.',
    link: 'https://www.5paisa.com/'
  },
  {
    id: 6,
    name: 'ICICI Direct',
    logo: 'https://5.imimg.com/data5/SELLER/Default/2024/9/451077235/EL/VN/HY/19119321/icicidirect-online-trading-software-500x500.png',
    rating: 4.1,
    features: ['Full-service broker', 'Research reports', 'Portfolio management', 'Banking + Trading'],
    minDeposit: '₹0',
    description: 'Banking and broking services under one roof.',
    link: 'https://www.icicidirect.com/'
  }
];

const Brokers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare Stock Brokers in India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the best stock broker that fits your trading needs and investment goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brokers.map((broker) => (
            <div key={broker.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={broker.logo} 
                      alt={`${broker.name} logo`} 
                      className="h-12 w-auto object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/48';
                      }}
                    />
                    <h3 className="ml-4 text-xl font-bold text-gray-900">{broker.name}</h3>
                  </div>
                  <div className="flex items-center bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    <span className="mr-1">★</span> {broker.rating}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{broker.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {broker.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="text-sm text-gray-500">Min. Deposit</p>
                    <p className="font-medium text-gray-900">{broker.minDeposit}</p>
                  </div>
                  <a 
                    href={broker.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Broker?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Trading Costs</h3>
              </div>
              <p className="text-gray-600">Compare brokerage fees, account maintenance charges, and other hidden costs.</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Security</h3>
              </div>
              <p className="text-gray-600">Ensure the broker is registered with SEBI and follows security best practices.</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Platform & Tools</h3>
              </div>
              <p className="text-gray-600">Look for user-friendly platforms with the tools and features you need.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brokers;
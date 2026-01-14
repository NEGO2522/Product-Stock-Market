import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Landmark, Wallet, CreditCard, ArrowRight, Percent, Shield, Globe, Zap, Check } from 'lucide-react';

const banks = [
  {
    id: 1,
    name: 'HDFC Bank',
    type: 'Private Bank',
    interestRate: '2.50% - 6.50%',
    minBalance: '₹2,500',
    features: [
      'Zero balance account option',
      'Free virtual debit card',
      '24/7 customer support',
      '1% cashback on debit card spends'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/960px-HDFC_Bank_Logo.svg.png',
    link: 'https://www.hdfcbank.com/'
  },
  {
    id: 2,
    name: 'State Bank of India',
    type: 'Public Sector Bank',
    interestRate: '2.90% - 6.80%',
    minBalance: '₹1,000',
    features: [
      'Zero balance basic account',
      'Free digital banking',
      'Wide ATM network',
      'Government schemes'
    ],
    image: 'https://media.licdn.com/dms/image/v2/C5612AQFVP19ZMIzzuw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1620463532591?e=2147483647&v=beta&t=GB6ATQ0uEkuXvwYwP4njf-e8wqG0VsjESWawBPB_Kbg',
    link: 'https://www.sbi.co.in/'
  },
  {
    id: 3,
    name: 'ICICI Bank',
    type: 'Private Bank',
    interestRate: '3.00% - 6.50%',
    minBalance: '₹10,000',
    features: [
      'Instant account opening',
      'Free virtual debit card',
      'Pre-approved loans',
      '24x7 customer care'
    ],
    image: 'https://static.vecteezy.com/system/resources/previews/020/336/263/non_2x/icici-logo-icici-icon-free-free-vector.jpg',
    link: 'https://www.icicibank.com/'
  },
  {
    id: 4,
    name: 'Axis Bank',
    type: 'Private Bank',
    interestRate: '3.00% - 6.50%',
    minBalance: '₹2,500',
    features: [
      'Digital savings account',
      'Free virtual debit card',
      'Pre-approved offers',
      '24x7 customer support'
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0t8puDMM1wnf7zYIbaG_DkKAhyDSLIh17UQ&s',
    link: 'https://www.axisbank.com/'
  },
  {
    id: 5,
    name: 'Punjab National Bank',
    type: 'Public Sector Bank',
    interestRate: '2.90% - 6.25%',
    minBalance: '₹500',
    features: [
      'Zero balance account',
      'Free SMS alerts',
      'Wide branch network',
      'Government schemes'
    ],
    image: 'https://www.pnbindia.in/images/logo.png',
    link: 'https://www.pnbindia.in/'
  },
  {
    id: 6,
    name: 'Kotak Mahindra Bank',
    type: 'Private Bank',
    interestRate: '3.50% - 6.50%',
    minBalance: '₹5,000',
    features: [
      'Zero balance 811 account',
      'Free virtual debit card',
      'Pre-approved loans',
      '24x7 customer support'
    ],
    image: 'https://www.kotak.com/content/dam/Kotak/kotak-logo.svg',
    link: 'https://www.kotak.com/'
  }
];

const accountTypes = [
  {
    name: 'Savings Account',
    description: 'Earn interest on your deposits with easy access to your funds',
    icon: <Wallet className="h-6 w-6 text-blue-600" />,
    features: ['Interest up to 7%', 'No minimum balance', 'Free debit card', 'Netbanking']
  },
  {
    name: 'Current Account',
    description: 'Ideal for businesses with high transaction volumes',
    icon: <CreditCard className="h-6 w-6 text-green-600" />,
    features: ['Unlimited transactions', 'Overdraft facility', 'Business loans', 'Dedicated RM']
  },
  {
    name: 'Fixed Deposit',
    description: 'Higher interest rates for fixed term deposits',
    icon: <Percent className="h-6 w-6 text-yellow-600" />,
    features: ['Higher interest rates', 'Flexible tenures', 'Loan against FD', 'Auto-renewal']
  }
];

const Bank = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare & Open Bank Accounts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect bank account that suits your financial needs with our comprehensive comparison.
          </p>
        </div>

        {/* Account Type Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Account Type</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {accountTypes.map((account, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-blue-200 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  {account.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{account.name}</h3>
                <p className="text-gray-600 mb-4">{account.description}</p>
                <ul className="space-y-2 mb-6">
                  {account.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                  View Options
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Comparison */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Compare Banks</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Sort by:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>Interest Rate (High to Low)</option>
                <option>Minimum Balance (Low to High)</option>
                <option>Bank Name (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {banks.map((bank) => (
              <div key={bank.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-32">
                      <img 
                        src={bank.image} 
                        alt={bank.name} 
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/150x60?text=${bank.name.split(' ').join('+')}`;
                        }}
                      />
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {bank.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-500">Interest Rate</p>
                      <p className="font-medium text-gray-900">{bank.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Min. Balance</p>
                      <p className="font-medium text-gray-900">{bank.minBalance}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {bank.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <a 
                      href={bank.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Visit Website
                    </a>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                      Open Account
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What documents do I need to open a bank account?",
                answer: "Typically, you'll need proof of identity (Aadhaar, PAN, Voter ID, etc.), proof of address (Aadhaar, utility bills, etc.), and passport-sized photographs. Some banks may have additional requirements."
              },
              {
                question: "Can I open a zero balance account?",
                answer: "Yes, many public sector banks and some private banks offer zero balance accounts, especially under the Pradhan Mantri Jan Dhan Yojana (PMJDY) scheme."
              },
              {
                question: "How do I choose the right bank account?",
                answer: "Consider factors like minimum balance requirements, interest rates, ATM and branch network, digital banking features, and additional benefits like debit card offers and customer service quality."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
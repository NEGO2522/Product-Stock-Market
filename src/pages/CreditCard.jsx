import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard as CreditCardIcon, Percent, Award, Globe, Zap, Check, ArrowRight } from 'lucide-react';

const creditCards = [
  {
    id: 1,
    name: 'HDFC Millennia',
    bank: 'HDFC Bank',
    type: 'Visa Signature',
    annualFee: '₹1,000',
    joiningFee: '₹0',
    interestRate: '1.5% - 3.5%',
    rewards: [
      '5% cashback on Amazon, Zomato, Swiggy, BookMyShow & more',
      '1% cashback on all other spends',
      '5x rewards on Flipkart & Myntra',
      'Complimentary airport lounge access'
    ],
    image: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-7d5c-4fde-8b25-389b0a3b8f2c/1f6e4a5f-6c47-4f3e-8b7f-9b9b9b9b9b9b/Personal/Pay/Cards/Credit%20Card/Images/Platinum%20Times%20Card.png',
    link: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/millennia-credit-card'
  },
  {
    id: 2,
    name: 'SBI SimplyCLICK',
    bank: 'State Bank of India',
    type: 'Visa',
    annualFee: '₹499 + GST',
    joiningFee: '₹499 + GST',
    interestRate: '3.5%',
    rewards: [
      '10x rewards on online spends',
      '5x rewards on other spends',
      '₹500 voucher on spending ₹1L in 60 days',
      '1% fuel surcharge waiver'
    ],
    image: 'https://www.sbicard.com/sbi-card-en/assets/media/images/personal/credit-cards/rewards/simplyclick/desktop/cc-simplyclick-sbi-card.png',
    link: 'https://www.sbicard.com/en/personal/credit-cards/rewards/simplyclick-sbi-card.page'
  },
  {
    id: 3,
    name: 'Amazon Pay ICICI',
    bank: 'ICICI Bank',
    type: 'Visa',
    annualFee: '₹0',
    joiningFee: '₹0',
    interestRate: '3.5%',
    rewards: [
      '5% cashback on Amazon.in for Prime members',
      '2% cashback on Amazon Pay balance reload',
      '1% cashback on other spends',
      'No minimum spend requirement'
    ],
    image: 'https://m.media-amazon.com/images/G/31/cross-site/amazon-pay-rewards-programs/credit-card/amazon-pay-icici-credit-card._CB1589940249_.png',
    link: 'https://www.icicibank.com/Personal-Banking/cards/credit-card/amazon-pay-credit-card/index.page'
  },
  {
    id: 4,
    name: 'Axis Bank Ace',
    bank: 'Axis Bank',
    type: 'Visa',
    annualFee: '₹499 + GST',
    joiningFee: '₹499 + GST',
    interestRate: '3.6%',
    rewards: [
      '5% cashback on Google Pay transactions',
      '4% cashback on Ola, Swiggy, Zomato',
      '2% cashback on utility bill payments',
      '1% cashback on other spends'
    ],
    image: 'https://www.axisbank.com/images/default-source/revamp_new/cards/credit-cards/ace-credit-card/ace-credit-card.png',
    link: 'https://www.axisbank.com/retail/cards/credit-card/ace-credit-card/features-benefits'
  },
  {
    id: 5,
    name: 'Flipkart Axis Bank',
    bank: 'Axis Bank',
    type: 'Visa',
    annualFee: '₹500 + GST',
    joiningFee: '₹500 + GST',
    interestRate: '3.6%',
    rewards: [
      '5% cashback on Flipkart & Myntra',
      '4% cashback on Swiggy, Zomato, PVR',
      '1.5% cashback on other spends',
      '4 complimentary domestic lounge access'
    ],
    image: 'https://www.axisbank.com/images/default-source/revamp_new/cards/credit-cards/flipkart-credit-card/flipkart-credit-card.png',
    link: 'https://www.axisbank.com/retail/cards/credit-card/flipkart-credit-card/features-benefits'
  },
  {
    id: 6,
    name: 'IDFC First Select',
    bank: 'IDFC FIRST Bank',
    type: 'Visa Signature',
    annualFee: '₹2,500 + GST',
    joiningFee: '₹2,500 + GST',
    interestRate: '3.6%',
    rewards: [
      '10 reward points per ₹100 on dining',
      '6 reward points per ₹100 on other spends',
      'Unlimited domestic & international lounge access',
      '1% fuel surcharge waiver'
    ],
    image: 'https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/credit-cards/select-credit-card/select-credit-card-1.png',
    link: 'https://www.idfcfirstbank.com/personal-banking/accounts/credit-card/select-credit-card'
  }
];

const CreditCardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-slate-100 to-orange-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Credit Cards in India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare and apply for the best credit cards with exclusive rewards, cashback, and benefits.
          </p>
        </div>

        {/* Credit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creditCards.map((card) => (
            <div key={card.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                    <p className="text-sm text-gray-500">{card.bank} • {card.type}</p>
                  </div>
                  <div className="h-12 w-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg flex items-center justify-center text-white font-medium shadow-md">
                    {card.bank.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                
                <div className="h-40 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-4 text-white mb-6 relative overflow-hidden shadow-lg">
                  <div className="absolute top-4 right-4 text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-white font-medium">
                    {card.type}
                  </div>
                  <div className="mt-8">
                    <p className="text-xs opacity-80">Annual Fee</p>
                    <p className="text-xl font-bold">{card.annualFee}</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-8 bg-white/20 rounded-md"></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {card.rewards.slice(0, 3).map((reward, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{reward}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-xs text-gray-500">Joining Fee</p>
                    <p className="font-medium text-gray-900">{card.joiningFee}</p>
                  </div>
                  <a 
                    href={card.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-6 py-2 rounded-md font-medium text-sm transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Choose Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Credit Card?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Percent className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Rewards & Benefits</h3>
              </div>
              <p className="text-gray-600">Look for cards that offer rewards matching your spending habits like travel, dining, or online shopping.</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <CreditCardIcon className="h-6 w-6 text-gray-400 mr-2" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Fees & Charges</h3>
              </div>
              <p className="text-gray-600">Compare annual fees, interest rates, and other charges to ensure they fit your budget.</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Global Acceptance</h3>
              </div>
              <p className="text-gray-600">If you travel internationally, ensure the card is widely accepted and offers good foreign exchange rates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardPage;
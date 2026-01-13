import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-we-collect', title: 'Information We Collect' },
    { id: 'how-we-use-data', title: 'How We Use Your Data' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'your-legal-rights', title: 'Your Legal Rights' },
    { id: 'contact-us', title: 'Contact Us' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex">
      {/* Sidebar Navigation */}
      <div className="hidden lg:block w-64 bg-gray-50 p-6 border-r border-gray-200 fixed h-full overflow-y-auto">
        <Link to="/" className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-indigo-600 mb-6 transition-colors" title="Home">
          <Home className="h-6 w-6" />
        </Link>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Privacy Policy</h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:hidden mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 13, 2024</p>
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none">
            {/* Introduction Section */}
            <section id="introduction" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="mb-4">
                At StockMarketPro, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            {/* Information We Collect Section */}
            <section id="information-we-collect" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Identity Data (name, username, or similar identifier)</li>
                <li>Contact Data (email address, phone number)</li>
                <li>Technical Data (IP address, browser type, time zone, location)</li>
                <li>Usage Data (how you use our website and services)</li>
                <li>Marketing and Communications Data (your preferences in receiving marketing from us)</li>
              </ul>
            </section>

            {/* How We Use Your Data Section */}
            <section id="how-we-use-data" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Data</h2>
              <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To register you as a new customer</li>
                <li>To process and deliver your orders</li>
                <li>To manage our relationship with you</li>
                <li>To enable you to participate in a survey</li>
                <li>To improve our website, services, and user experience</li>
                <li>To deliver relevant website content and advertisements</li>
              </ul>
            </section>

            {/* Data Security Section */}
            <section id="data-security" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal 
                data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            {/* Your Legal Rights Section */}
            <section id="your-legal-rights" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Legal Rights</h2>
              <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            {/* Contact Us Section */}
            <section id="contact-us" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mb-2">Email: privacy@stockmarketpro.com</p>
              <p>Address: 123 Market Street, Financial District, 10001</p>
            </section>

            <div className="pt-8 border-t border-gray-200 mt-12">
              <p className="text-sm text-gray-500">
                This privacy policy was last updated on January 13, 2024. We may update this policy from time to time, 
                so please review it regularly for changes.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} StockMarketPro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
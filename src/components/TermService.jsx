import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const TermService = () => {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'account-terms', title: 'Account Terms' },
    { id: 'payment-billing', title: 'Payment & Billing' },
    { id: 'user-responsibilities', title: 'User Responsibilities' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'termination', title: 'Termination' },
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'contact', title: 'Contact Us' }
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
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Terms of Service</h2>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 13, 2024</p>
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none">
            {/* Introduction Section */}
            <section id="introduction" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="mb-4">
                Welcome to StockMarketPro. These Terms of Service ("Terms") govern your access to and use of our website, 
                services, and applications. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Account Terms Section */}
            <section id="account-terms" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Terms</h2>
              <p className="mb-4">To use our services, you must:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                <li>Provide accurate and complete information when creating an account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>
            </section>

            {/* Payment & Billing Section */}
            <section id="payment-billing" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment & Billing</h2>
              <p className="mb-4">Our services are offered under the following terms:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All fees are stated in USD and are non-refundable</li>
                <li>We use third-party payment processors</li>
                <li>You are responsible for any applicable taxes</li>
                <li>We may change our pricing with 30 days' notice</li>
              </ul>
            </section>

            {/* User Responsibilities Section */}
            <section id="user-responsibilities" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit any malicious code or harmful content</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Attempt unauthorized access to our systems</li>
              </ul>
            </section>

            {/* Intellectual Property Section */}
            <section id="intellectual-property" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality on our platform, including but not limited to text, graphics, 
                logos, and software, are the exclusive property of StockMarketPro and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
            </section>

            {/* Termination Section */}
            <section id="termination" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe 
                violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            {/* Disclaimer Section */}
            <section id="disclaimer" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
              <p className="mb-4">
                Our services are provided "as is" without any warranties, express or implied. We do not guarantee 
                that our services will be available at all times, secure, or free from errors or viruses.
              </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-2">Email: support@stockmarketpro.com</p>
              <p>Address: 123 Market Street, Financial District, 10001</p>
            </section>

            <div className="pt-8 border-t border-gray-200 mt-12">
              <p className="text-sm text-gray-500">
                These Terms of Service were last updated on January 13, 2024. We may update these terms from time to time, 
                so please review them regularly for changes.
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

export default TermService;
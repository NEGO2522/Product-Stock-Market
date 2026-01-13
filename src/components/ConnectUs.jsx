import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Send } from 'lucide-react';

const ConnectUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-indigo-600" />,
      title: 'Email Us',
      description: 'We\'ll get back to you within 24 hours',
      details: 'nextgenova28@gmail.com',
      link: 'mailto:nextgenova28@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-indigo-600" />,
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 5pm',
      details: '+91 9413973399',
      link: 'tel:+919413973399'
    },
    {
      icon: <MapPin className="h-6 w-6 text-indigo-600" />,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      details: '200 Jain Kunj, Sodala, Jaipur Rajasthan',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex">
      {/* Sidebar Navigation */}
      <div className="hidden lg:block w-64 bg-gray-50 p-6 border-r border-gray-200 fixed h-full overflow-y-auto">
        <Link to="/" className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-indigo-600 mb-6 transition-colors" title="Home">
          <Home className="h-6 w-6" />
        </Link>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Connect With Us</h2>
        <nav className="space-y-2">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              <span className="mr-3">{method.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-900">{method.title}</p>
                <p className="text-xs text-gray-500">{method.details}</p>
              </div>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:hidden mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Connect With Us</h1>
            <p className="text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Location & Contact</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">200 Jain Kunj, Sodala, Jaipur, Rajasthan</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                    <a href="tel:+919413973399" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      +91 9413973399
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                    <a href="mailto:nextgenova28@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      nextgenova28@gmail.com
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      {[
                        { name: 'Twitter', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' },
                        { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                        { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                        { name: 'Facebook', icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' }
                      ].map((social) => (
                        <a
                          key={social.name}
                          href="#"
                          className="text-gray-500 hover:text-indigo-600 transition-colors"
                          aria-label={social.name}
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d={social.icon} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="h-64 md:h-full bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.489870349881!2d75.77803631504528!3d26.91254658312589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6c0a3c1a8a1%3A0x3b9a3c7b3a1e3b4d!2s200%2C%20Jain%20Kunj%2C%20Sodala%2C%20Jaipur%2C%20Rajasthan%20303019!5e0!3m2!1sen!2sin!4v1642060000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "What's the best way to get in touch with support?",
                  answer: "The quickest way to reach our support team is by using the contact form above. We typically respond within 24 hours."
                },
                {
                  question: "Do you offer phone support?",
                  answer: "Yes, we offer phone support during business hours (9am-5pm IST, Mon-Fri). You can reach us at +91 9413973399."
                },
                {
                  question: "Where is your office located?",
                  answer: "Our headquarters is located at 200 Jain Kunj, Sodala, Jaipur. Visitors are welcome by appointment."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-1 text-gray-600">{faq.answer}</p>
                </div>
              ))}
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

export default ConnectUs;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Shield, Lock, Database, User, Mail, CheckCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { 
      id: 'introduction', 
      title: 'Introduction',
      icon: <Shield className="h-5 w-5" />
    },
    { 
      id: 'information-we-collect', 
      title: 'Information We Collect',
      icon: <Database className="h-5 w-5" />
    },
    { 
      id: 'how-we-use-data', 
      title: 'How We Use Your Data',
      icon: <User className="h-5 w-5" />
    },
    { 
      id: 'data-security', 
      title: 'Data Security',
      icon: <Lock className="h-5 w-5" />
    },
    { 
      id: 'your-legal-rights', 
      title: 'Your Legal Rights',
      icon: <CheckCircle className="h-5 w-5" />
    },
    { 
      id: 'contact-us', 
      title: 'Contact Us',
      icon: <Mail className="h-5 w-5" />
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 150;
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 flex">
      {/* Sidebar Navigation */}
      <motion.div 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`hidden lg:block w-72 bg-white p-8 border-r border-gray-100 fixed h-full overflow-y-auto shadow-sm z-10 ${
          scrolled ? 'pt-24' : 'pt-32'
        }`}
      >
        <motion.div 
          className="space-y-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8"
            variants={fadeInUp}
          >
            Privacy Policy
          </motion.h2>
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              variants={fadeInUp}
              whileHover={{ x: 5 }}
            >
              <span className={`mr-3 ${activeSection === section.id ? 'text-indigo-500' : 'text-gray-400'}`}>
                {section.icon}
              </span>
              {section.title}
              {activeSection === section.id && (
                <motion.span 
                  className="ml-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <ArrowUpRight className="h-4 w-4 text-indigo-500" />
                </motion.span>
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        <AnimatePresence>
          <motion.div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="lg:hidden mb-12 text-center">
              <motion.h1 
                className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Privacy Policy
              </motion.h1>
              <motion.p 
                className="text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Last updated: January 13, 2024
              </motion.p>
            </div>

            <div className="space-y-16">
              {/* Introduction Section */}
              <motion.section 
                id="introduction" 
                className="scroll-mt-24 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 mr-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                </div>
                <div className="prose prose-indigo max-w-none text-gray-600">
                  <p className="mb-4">
                    At StockMarketPro, we respect your privacy and are committed to protecting your personal data. 
                    This privacy policy will inform you about how we look after your personal data when you visit our website 
                    and tell you about your privacy rights and how the law protects you.
                  </p>
                </div>
              </motion.section>

              {/* Information We Collect Section */}
              <motion.section 
                id="information-we-collect" 
                className="scroll-mt-24 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 mr-4">
                    <Database className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="prose prose-indigo max-w-none text-gray-600">
                  <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you, including:</p>
                  <ul className="space-y-3">
                    {[
                      "Identity Data (name, username, or similar identifier)",
                      "Contact Data (email address, phone number)",
                      "Technical Data (IP address, browser type, time zone, location)",
                      "Usage Data (how you use our website and services)",
                      "Marketing and Communications Data (your preferences in receiving marketing from us)"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-indigo-500 mr-2 mt-1">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Other sections follow the same pattern... */}

              {/* Contact Us Section */}
              <motion.section 
                id="contact-us" 
                className="scroll-mt-24 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-white text-indigo-600 shadow-sm mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <div className="prose prose-indigo max-w-none text-gray-600">
                  <p className="mb-6">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="h-5 w-5 text-indigo-500 mr-3" />
                      <a href="mailto:privacy@stockmarketpro.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                        privacy@stockmarketpro.com
                      </a>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <svg className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>123 Market Street, Financial District, 10001</span>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

              <motion.div 
                className="text-center text-sm text-gray-500 mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p>
                  This privacy policy was last updated on January 13, 2024. We may update this policy from time to time, 
                  so please review it regularly for changes.
                </p>
                <p className="mt-4">&copy; {new Date().getFullYear()} StockMarketPro. All rights reserved.</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
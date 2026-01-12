import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="relative h-full w-full">
          <Link to="/" className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-800 text-xl font-semibold">
            MoneyTree
          </Link>
          
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-2 bg-gray-100/80 rounded-full px-3 py-1">
              <NavItem to="/" label="Home" />
              <NavItem to="/about" label="About" />
              <NavItem to="/brokers" label="Brokers" />
              <NavItem to="/contact" label="Contact" />
            </div>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-4">
            <Link 
              to="/login" 
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Login</span>
            </Link>
            
            <Link 
              to="/register" 
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// NavItem component for circular navigation items with full text
const NavItem = ({ to, label }) => (
  <Link 
    to={to} 
    className="min-w-[70px] h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-white hover:shadow-sm transition-all duration-200 text-xs font-medium px-3 whitespace-nowrap"
  >
    {label}
  </Link>
);

export default Navbar;
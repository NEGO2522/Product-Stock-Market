import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './auth/Login';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermService from './components/TermService';
import ConnectUs from './components/ConnectUs';
import Docs from './pages/Docs';
import Brokers from './pages/Brokers';
import Bank from './pages/Bank';
import CreditCard from './pages/CreditCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermService />} />
          <Route path="/connect-us" element={<ConnectUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/brokers" element={<Brokers />} />
          <Route path="/banks" element={<Bank />} />
          <Route path="/credit-cards" element={<CreditCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
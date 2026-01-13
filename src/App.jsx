import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermService from './components/TermService';
import ConnectUs from './components/ConnectUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermService />} />
          <Route path="/connect-us" element={<ConnectUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
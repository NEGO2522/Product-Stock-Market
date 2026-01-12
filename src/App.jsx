import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import page components
const Home = () => <div className="min-h-screen flex items-center justify-center">Home Page</div>;
const About = () => <div className="min-h-screen flex items-center justify-center">About Us Page</div>;
const Brokers = () => <div className="min-h-screen flex items-center justify-center">Brokers Page</div>;
const Contact = () => <div className="min-h-screen flex items-center justify-center">Contact Us Page</div>;
const Login = () => <div className="min-h-screen flex items-center justify-center">Login Page</div>;
const Register = () => <div className="min-h-screen flex items-center justify-center">Register Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brokers" element={<Brokers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Loader2, ShieldCheck, Zap, Home } from 'lucide-react';
import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  actionCodeSettings
} from '../firebase/firebase';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      
      if (email) {
        setLoading(true);
        signInWithEmailLink(auth, email, window.location.href)
          .then(() => {
            window.localStorage.removeItem('emailForSignIn');
            navigate('/dashboard');
          })
          .catch((error) => {
            console.error('Error signing in', error);
            setError('The sign-in link is invalid or has expired.');
          })
          .finally(() => setLoading(false));
      }
    }
  }, [navigate]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email) return setError('Please enter your email address');

    try {
      setLoading(true);
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      setEmailSent(true);
    } catch (err) {
      setError('Failed to send link. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (err) {
      setError('Google authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-orange-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      
      {/* Home Icon (Top Left Corner) */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <Link 
          to="/" 
          className="group flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-sm border border-gray-100 text-gray-500 hover:text-blue-600 hover:shadow-md hover:border-blue-100 transition-all duration-200"
          title="Back to Home"
        >
          <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
            <Zap className="h-7 w-7 text-white" />
          </div>
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Access your Money Tree dashboard securely
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-2xl shadow-blue-100/50 sm:rounded-2xl sm:px-10 border border-gray-100">
          
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 flex items-center text-red-700 text-sm">
              <ShieldCheck className="h-5 w-5 mr-3 flex-shrink-0" />
              {error}
            </div>
          )}

          {emailSent ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Check your email</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                We've sent a magic link to <span className="font-semibold text-gray-900">{email}</span>. Click it to log in.
              </p>
              <button
                onClick={() => setEmailSent(false)}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Use a different email address
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <form onSubmit={handleEmailSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all sm:text-sm"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Continue with Email'}
                  </button>
                </div>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-400 font-medium uppercase tracking-wider text-[10px]">
                    Secure Social Login
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 rounded-xl bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FcGoogle className="h-5 w-5 mr-3" />
                  Continue with Google
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[11px] text-gray-400 leading-relaxed max-w-[280px] mx-auto uppercase tracking-tighter">
            Protected by bank-level 256-bit encryption. <br />
            © 2026 Money Tree Financial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
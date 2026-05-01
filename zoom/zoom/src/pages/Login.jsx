import React, { useState, useEffect } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/user/logindata`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok && data.token) {
        login({ email }, data.token);
        navigate('/dashboard');
      } else {
        setError(data.msg || 'Invalid credentials');
      }
    } catch (err) {
      setError('Failed to connect to server. Please try again later.');
    }
  };

  const handleSocialLogin = (provider) => {
    const inputEmail = window.prompt(`Enter your email to continue with ${provider}:`);
    if (!inputEmail) return;

    login({ name: `${provider} User`, email: inputEmail });
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <div className="bg-[#1C1F2E] rounded-2xl w-full max-w-[440px] p-8 sm:p-10 shadow-lg shadow-black/50 border border-white/5">
        
        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10 mb-8">
          <Link to="/login" className="pb-3 text-lg font-semibold text-[#00E5FF] border-b-2 border-[#00E5FF]">
            Sign In
          </Link>
          <Link to="/register" className="pb-3 text-lg font-semibold text-[#8c92a4] hover:text-white transition">
            Create Account
          </Link>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-6">
          <button onClick={() => handleSocialLogin('Google')} className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0F111A] border border-white/5 rounded-lg text-sm font-semibold text-white hover:bg-[#252839] transition">
            <img src="https://img.icons8.com/color/50/000000/google-logo.png" alt="Google" className="w-5 h-5 object-contain" />
            Google
          </button>
          <button onClick={() => handleSocialLogin('LinkedIn')} className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0F111A] border border-white/5 rounded-lg text-sm font-semibold text-white hover:bg-[#252839] transition">
            <img src="https://img.icons8.com/color/50/000000/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
            LinkedIn
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 border-t border-white/10"></div>
          <span className="text-[11px] font-bold text-[#5e6376] uppercase tracking-wider">Or continue with</span>
          <div className="flex-1 border-t border-white/10"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-2 mb-5">
            <label className="text-sm font-semibold text-white">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 bg-[#0F111A] border border-white/5 rounded-lg text-[15px] text-white outline-none transition focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/30 placeholder:text-[#5e6376]" 
              placeholder="name@example.com" 
            />
          </div>
          
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-white">Password</label>
              <a href="#" className="text-xs font-semibold text-[#00E5FF] hover:underline hover:text-white">Forgot?</a>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 bg-[#0F111A] border border-white/5 rounded-lg text-[15px] text-white outline-none transition focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/30 placeholder:text-[#5e6376] placeholder:tracking-widest" 
              placeholder="••••••••" 
            />
          </div>

          <button type="submit" className="w-full inline-flex justify-center items-center py-3.5 bg-[#00E5FF] text-[#0F111A] rounded-lg font-bold text-[15px] transition hover:bg-[#00cbe5] shadow-[0_0_15px_rgba(0,229,255,0.2)] active:scale-[0.99] border border-[#00e5ff]">
            Sign In to Dashboard
          </button>
        </form>

        <div className="mt-8 text-center text-[13px] text-[#8c92a4] font-medium">
          Don't have an account? <Link to="/register" className="text-[#00E5FF] font-bold hover:underline">Create an account</Link>
        </div>
      </div>
    </AuthLayout>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthLayout from '../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Please fill in all fields.');

      return;
    }

    try {
      await axios.post(`${API_URL}/api/user/sentdata`, {
        name, 
        email, 
        password
      });

      setName('');
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError('Failed to connect to server. Please try again later.');
      }
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(`${API_URL}/api/user/googlelogin`, {
        id_token: credentialResponse.credential
      });

      if (response.data && response.data.token) {
        login(response.data.user, response.data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Google Registration failed. Please try again.');
    }
  };

  const handleSocialRegister = (provider) => {
    // Social registrations are handled by Google component or manual form.
    console.log(`${provider} registration initiated`);
  };

  return (
    <AuthLayout>
      <div className="bg-[#1C1F2E] rounded-2xl w-full max-w-[440px] p-8 sm:p-10 shadow-lg shadow-black/50 border border-white/5">
        
        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10 mb-8">
          <Link to="/login" className="pb-3 text-lg font-semibold text-[#8c92a4] hover:text-white transition">
            Sign In
          </Link>
          <Link to="/register" className="pb-3 text-lg font-semibold text-[#00E5FF] border-b-2 border-[#00E5FF]">
            Create Account
          </Link>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex justify-center w-full">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google Registration failed')}
              theme="filled_black"
              shape="pill"
              width="100%"
            />
          </div>
          <button onClick={() => handleSocialRegister('LinkedIn')} className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0F111A] border border-white/5 rounded-lg text-sm font-semibold text-white hover:bg-[#252839] transition">
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
        <form onSubmit={handleRegister}>
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm font-semibold text-white">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 bg-[#0F111A] border border-white/5 rounded-lg text-[15px] text-white outline-none transition focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/30 placeholder:text-[#5e6376]" 
              placeholder="Alex Walker" 
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
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
            <label className="text-sm font-semibold text-white">Choose a Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0F111A] border border-white/5 rounded-lg text-[15px] text-white outline-none transition focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/30 placeholder:text-[#5e6376] placeholder:tracking-widest" 
                placeholder="••••••••" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5e6376] hover:text-[#00e5ff] transition-colors"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            <p className="text-[11px] text-[#5e6376] font-medium mt-1">
              Must be at least 8 characters long.
            </p>
          </div>

          <button type="submit" className="w-full inline-flex justify-center items-center py-3.5 bg-[#00E5FF] text-[#0F111A] rounded-lg font-bold text-[15px] transition hover:bg-[#00cbe5] shadow-[0_0_15px_rgba(0,229,255,0.2)] active:scale-[0.99] border border-[#00e5ff]">
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center text-[13px] text-[#8c92a4] font-medium leading-relaxed">
          By signing up, you agree to our <a href="#" className="font-bold hover:text-white underline">Terms</a> and <a href="#" className="font-bold hover:text-white underline">Privacy Policy</a>
        </div>
      </div>
    </AuthLayout>
  );
}


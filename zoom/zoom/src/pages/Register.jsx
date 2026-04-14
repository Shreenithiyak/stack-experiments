import React, { useState, useEffect } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { user, register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || (!email && name !== 'mock')) return;
    register({ name: name || 'Mock User', email: email || 'mock@example.com' });
    navigate('/dashboard');
  };

  const handleSocialRegister = (provider) => {
    const inputEmail = window.prompt(`Enter your email to continue with ${provider}:`);
    if (!inputEmail) return;

    const mockUser = {
      name: `${provider} User`,
      email: inputEmail
    };
    register(mockUser);
    navigate('/dashboard');
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
        <div className="flex gap-4 mb-6">
          <button onClick={() => handleSocialRegister('Google')} className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0F111A] border border-white/5 rounded-lg text-sm font-semibold text-white hover:bg-[#252839] transition">
            <img src="https://img.icons8.com/color/50/000000/google-logo.png" alt="Google" className="w-5 h-5 object-contain" />
            Google
          </button>
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
            <input 
              type="password" 
              className="px-4 py-3 bg-[#0F111A] border border-white/5 rounded-lg text-[15px] text-white outline-none transition focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/30 placeholder:text-[#5e6376] placeholder:tracking-widest" 
              placeholder="••••••••" 
            />
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

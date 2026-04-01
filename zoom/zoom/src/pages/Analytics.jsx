import React, { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Link } from 'react-router-dom';

const LoadingStep = ({ text, status }) => {
  return (
    <div className={`flex items-center gap-4 transition-all duration-500 ${status === 'pending' ? 'opacity-40' : 'opacity-100'}`}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 shrink-0 transition-colors duration-500
        ${status === 'completed' ? 'border-[#00e5ff] bg-[#00e5ff]/20 text-[#00e5ff]' : 
          status === 'active' ? 'border-[#00e5ff] border-t-transparent animate-spin' : 
          'border-white/20 bg-transparent'}`}
      >
        {status === 'completed' && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
      <span className={`font-semibold tracking-wide ${status === 'completed' ? 'text-white' : status === 'active' ? 'text-[#00e5ff]' : 'text-[#5e6376]'}`}>
        {text}
      </span>
    </div>
  );
};

export default function Analytics() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500);
    const timer2 = setTimeout(() => setStep(2), 3500);
    const timer3 = setTimeout(() => setStep(3), 5500);
    const timer4 = setTimeout(() => setStep(4), 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] max-w-[800px] mx-auto text-center px-4">
        
        {step < 4 ? (
          <>
            {/* Pulsing Core */}
            <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#00E5FF] rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 border-4 border-[#00E5FF]/20 border-t-[#00E5FF] rounded-full animate-spin shadow-[0_0_15px_#00E5FF]"></div>
              <div className="absolute inset-6 border-4 border-[#00E5FF]/10 border-b-[#00E5FF] rounded-full animate-spin-slow"></div>
              <div className="w-10 h-10 bg-[#00E5FF] rounded-full shadow-[0_0_30px_#00E5FF] animate-pulse"></div>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Analyzing Your Performance
            </h1>
            <p className="text-[#8c92a4] mb-12 max-w-lg mx-auto text-lg leading-relaxed">
              Neon AI is transcribing your session and running advanced diagnostics on your logic, tone, and technical accuracy.
            </p>

            <div className="flex flex-col gap-5 text-left w-full max-w-sm mx-auto bg-[#1C1F2E] p-8 rounded-3xl border border-white/5 shadow-2xl">
              <LoadingStep 
                text="Transcribing Audio & Speech..." 
                status={step > 0 ? 'completed' : 'active'} 
              />
              <LoadingStep 
                text="Evaluating System Design..." 
                status={step > 1 ? 'completed' : step === 1 ? 'active' : 'pending'} 
              />
              <LoadingStep 
                text="Assessing Confidence & Tone..." 
                status={step > 2 ? 'completed' : step === 2 ? 'active' : 'pending'} 
              />
              <LoadingStep 
                text="Calculating Final Score..." 
                status={step > 3 ? 'completed' : step === 3 ? 'active' : 'pending'} 
              />
            </div>
          </>
        ) : (
          <div className="animate-fade-in-up flex flex-col items-center">
            
            <div className="w-24 h-24 bg-[#00e5ff]/20 rounded-full flex items-center justify-center mb-8 border-2 border-[#00e5ff] shadow-[0_0_40px_rgba(0,229,255,0.4)] relative">
              <div className="absolute inset-0 bg-[#00E5FF] rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" class="text-[#00E5FF] relative z-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Analysis Complete!
            </h1>
            <p className="text-[#8c92a4] mb-10 text-xl font-medium">
              You scored an impressive <span className="text-[#00E5FF] font-bold">92%</span> on architecture.
            </p>

            <Link to="/dashboard" className="inline-flex items-center justify-center px-10 py-4 bg-[#00E5FF] text-[#0F111A] rounded-xl font-extrabold transition hover:bg-[#00cbe5] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] text-lg shadow-[0_0_20px_rgba(0,229,255,0.2)]">
              View Final Dashboard
            </Link>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

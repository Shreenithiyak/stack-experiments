import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiBell, FiAward, FiSettings } from 'react-icons/fi';
import { FaStop, FaFastForward, FaRedoAlt } from 'react-icons/fa';

export default function Simulator() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#11141D] text-white font-sans flex flex-col">
      
      {/* Top Navbar */}
      <div className="flex bg-[#1C1F2E] border-b border-white/5 h-20 items-center justify-between px-6 lg:px-10 sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight text-[#00E5FF] hover:opacity-80 transition-opacity">
            Neon Interview AI
          </Link>
        </div>

        {/* Center Nav Items (Matching Dashboard/Practice Navbar) */}
        <div className="hidden md:flex items-center gap-8 flex-1 pl-12">
          <Link to="/dashboard" className="text-sm font-medium text-[#8c92a4] hover:text-white transition-all">
            Dashboard
          </Link>
          <Link to="/practice" className="relative text-sm font-medium text-[#00E5FF] transition-all">
            Practice
            <div className="absolute -bottom-[29px] left-0 right-0 h-[2px] bg-[#00e5ff]" />
          </Link>
          <Link to="/analytics" className="text-sm font-medium text-[#8c92a4] hover:text-white transition-all">
            Analytics
          </Link>
        </div>

        {/* Right Nav Options (Matches Practice Navbar) */}
        <div className="flex items-center gap-5 lg:gap-6">
          <button className="text-[#8c92a4] transition-all relative hover:text-white">
            <FiBell className="w-5 h-5" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[#1C1F2E]"></div>
          </button>
          <button className="text-[#8c92a4] transition-all hover:text-white hidden sm:block">
            <FiAward className="w-[22px] h-[22px]" />
          </button>
          <button className="text-[#8c92a4] transition-all hover:text-white">
            <FiSettings className="w-5 h-5" />
          </button>
          <Link to="/dashboard" className="w-9 h-9 rounded-full overflow-hidden border border-white/20 hover:border-[#00e5ff] transition-colors ml-2 shrink-0 flex items-center justify-center bg-[#0055ff] text-white font-semibold text-sm">
            JD
          </Link>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="flex-1 max-w-[1400px] mx-auto w-full p-6 lg:p-8 flex flex-col gap-8 pb-20">
        
        {/* Videos Row (Top) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:min-h-[500px]">
          {/* AI Mentor Video Feed */}
          <div className="relative rounded-[2rem] overflow-hidden bg-[#1C1F2E] border border-white/5 shadow-2xl group flex flex-col items-center justify-center min-h-[350px]">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="AI Mentor" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11141D]/90 via-transparent to-[#11141D]/30 pointer-events-none"></div>
            
            {/* Visualizer upper right */}
            <div className="absolute top-6 right-8 flex items-end gap-[3px] h-8 opacity-80 mix-blend-screen">
               <div className="w-[3px] rounded-full bg-[#00E5FF] h-4 animate-pulse"></div>
               <div className="w-[3px] rounded-full bg-[#00E5FF] h-8 animate-pulse delay-75"></div>
               <div className="w-[3px] rounded-full bg-[#00E5FF] h-5 animate-pulse delay-150"></div>
               <div className="w-[3px] rounded-full bg-[#00E5FF] h-7 animate-pulse delay-300"></div>
               <div className="w-[3px] rounded-full bg-[#00E5FF] h-3 animate-pulse delay-75"></div>
            </div>

            {/* Bottom info label */}
            <div className="absolute bottom-6 left-6 right-6 lg:right-1/4 bg-[#1C1F2E]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#8c92a4] uppercase">AI Interaction Live</span>
              </div>
              <h2 className="text-xl md:text-[22px] font-extrabold text-white tracking-tight">Sarah, Senior Technical Lead</h2>
            </div>
          </div>

          {/* User Video Feed */}
          <div className="relative rounded-[2rem] overflow-hidden bg-[#1C1F2E] border border-white/5 shadow-2xl min-h-[350px]">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="User Web Cam" className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 opacity-90 grayscale-[20%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11141D]/90 via-transparent to-[#11141D]/30 pointer-events-none"></div>
            
            <div className="absolute top-6 left-6 bg-[#11141D]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444] animate-pulse"></div>
              <span className="text-xs font-bold tracking-widest text-[#e2e8f0]">REC 02:45</span>
            </div>

            <div className="absolute top-6 right-6 bg-[#11141D]/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10 flex flex-col items-center justify-center shadow-sm">
              <span className="text-[10px] font-extrabold text-[#10b981] mb-0.5">HD</span>
              <span className="text-[9px] font-bold tracking-wider text-[#e2e8f0]">1080P</span>
            </div>

            <div className="absolute bottom-6 left-6 px-5 py-2.5 bg-[#1C1F2E]/80 backdrop-blur-md border border-white/10 rounded-full font-bold text-sm text-white shadow-lg">
              You (John Doe)
            </div>
          </div>
        </div>

        {/* Info & Controls Row (Bottom) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
          
          {/* Question & Transcription (Left 2/3) */}
          <div className="lg:col-span-2 bg-[#1C1F2E] rounded-3xl p-8 border border-white/5 flex flex-col shadow-xl">
            <div className="mb-8 pl-1">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#00E5FF] uppercase mb-4">Current Question</div>
              <h3 className="text-3xl font-extrabold text-white leading-[1.3] tracking-tight">
                "Tell me about a time you solved a complex technical problem."
              </h3>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-[#171923] to-[#12151f] rounded-2xl p-7 border border-[#00e5ff]/20 relative shadow-inner">
              <div className="text-[10px] font-bold tracking-[0.15em] text-[#8c92a4] uppercase mb-5">Real-Time Transcription</div>
              <p className="text-[#e2e8f0] text-lg leading-[1.8] font-medium tracking-wide">
                "Last year at my previous role, we faced a critical scaling issue with our primary database. The challenge was that the bottleneck only appeared during peak hours..."
              </p>
              <div className="mt-4 flex gap-1 items-center">
                <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>

          {/* Controls Panel (Right 1/3) */}
          <div className="bg-[#1C1F2E] rounded-3xl p-8 border border-white/5 shadow-xl flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">Simulator Controls</h4>
              <p className="text-sm text-[#8c92a4] leading-relaxed mb-10">
                Maintain eye contact with the camera for better engagement score.
              </p>

              <button 
                onClick={() => navigate('/analytics')}
                className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.2)] mb-5 active:scale-[0.98]"
              >
                <FaStop className="w-[18px] h-[18px]" />
                <span className="text-[15px]">Stop Recording</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-transparent hover:bg-white/5 border-[1.5px] border-white/10 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-colors active:scale-[0.98]">
                  <FaFastForward className="w-[14px] h-[14px]" />
                  <span className="text-[15px]">Skip</span>
                </button>
                <button className="bg-[#0055ff] hover:bg-[#004ade] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-colors shadow-[0_0_15px_rgba(0,85,255,0.3)] active:scale-[0.98]">
                  <FaRedoAlt className="w-[14px] h-[14px]" />
                  <span className="text-[15px]">Restart</span>
                </button>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-bold tracking-[0.1em] text-[#8c92a4] uppercase">Confidence Score</span>
                <span className="text-[15px] font-bold text-white">84%</span>
              </div>
              <div className="w-full h-2.5 bg-[#171923] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full shadow-[0_0_10px_#10b981]" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

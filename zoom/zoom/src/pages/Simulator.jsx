import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';

export default function Simulator() {
  const customTitle = (
    <div className="flex gap-8 text-base font-medium">
      <Link to="/simulator" className="text-primary border-b-2 border-primary pb-1">Simulator</Link>
      <Link to="/dashboard" className="text-slate-500 hover:text-slate-800 pb-1">History</Link>
      <Link to="/questions" className="text-slate-500 hover:text-slate-800 pb-1">Resources</Link>
    </div>
  );

  return (
    <DashboardLayout title={customTitle}>
      <div className="pb-8">
        {/* Videos Area */}
        <div className="grid grid-cols-2 gap-6 mb-6 h-[55vh]">
          {/* AI Avatar */}
          <div className="bg-slate-800 rounded-3xl overflow-hidden relative shadow-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop")' }}>
            <div className="absolute top-6 right-6 flex gap-1 items-center h-6">
              <div className="w-1 bg-blue-500 rounded-full h-[16px]"></div>
              <div className="w-1 bg-blue-500 rounded-full h-[24px]"></div>
              <div className="w-1 bg-blue-500 rounded-full h-[12px]"></div>
              <div className="w-1 bg-blue-500 rounded-full h-[20px]"></div>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl text-white">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest mb-1 uppercase">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                AI Interaction Live
              </div>
              <div className="text-xl font-semibold">Sarah, Senior Technical Lead</div>
            </div>
          </div>

          {/* User Video */}
          <div className="bg-slate-800 rounded-3xl overflow-hidden relative shadow-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop")' }}>
            <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              REC 02:45
            </div>
            <div className="absolute top-6 right-6 bg-black/50 text-white px-2 py-1 rounded-lg text-xs font-bold flex flex-col items-center">
              <div className="text-green-400">HQ</div>
              <div>1080P</div>
            </div>

            <div className="absolute bottom-6 left-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              You (John Doe)
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="grid grid-cols-[1fr_340px] gap-6">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="text-xs font-bold text-primary tracking-widest mb-4 uppercase">Current Question</div>
            <h2 className="text-3xl font-semibold mb-8 leading-snug">
              "Tell me about a time you solved a complex technical problem."
            </h2>

            <div className="bg-slate-50 rounded-2xl p-6 flex-1 border border-slate-100">
              <div className="text-xs font-bold text-slate-500 tracking-widest mb-4 uppercase">Real-Time Transcription</div>
              <p className="text-lg text-slate-800 leading-relaxed font-medium">
                "Last year at my previous role, we faced a critical scaling issue with our primary database. The challenge was that the bottleneck only appeared during peak hours..."
              </p>
              <div className="flex gap-1.5 mt-4 items-center h-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary relative animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 relative animate-pulse delay-75"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/30 relative animate-pulse delay-150"></div>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 rounded-2xl p-6 shadow-sm border border-sky-100">
            <h3 className="mb-4 text-xl font-semibold text-slate-800">Simulator Controls</h3>
            <p className="text-sm text-sky-800 mb-8 leading-relaxed">
              Maintain eye contact with the camera for better engagement score.
            </p>

            <button className="bg-red-600 text-white w-full py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 mb-4 shadow-sm">
              <Icon name="stop" size={20} /> Stop Recording
            </button>
            
            <div className="flex gap-4 mb-12">
              <button className="bg-white text-slate-700 border border-slate-200 flex-1 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <Icon name="skip" size={18} /> Skip
              </button>
              <button className="bg-primary text-white flex-1 py-3 rounded-xl font-semibold hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 shadow-sm">
                <Icon name="restart" size={18} /> Restart
              </button>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center text-xs font-bold tracking-widest mb-2 uppercase text-slate-700">
                <span>Confidence Score</span>
                <span className="text-slate-800">84%</span>
              </div>
              <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                <div className="w-[84%] h-full bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}

import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="py-8">
        <p className="text-xs font-bold text-primary tracking-widest mb-2 uppercase">Career Trajectory</p>
        <h2 className="text-4xl font-semibold mb-10 max-w-[600px] leading-tight text-slate-800">Level: Beginner - Ready for Technical?</h2>

        <div className="grid grid-cols-[2fr_1fr] gap-8 mb-8">
          {/* Readiness Tracker */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-center border border-slate-100">
            <div className="flex justify-between items-end mb-4">
              <div className="font-medium text-slate-800">Overall Readiness</div>
              <div className="text-4xl font-bold text-primary leading-none">42%</div>
            </div>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden mb-4 relative">
              <div className="w-[42%] h-full bg-primary rounded-full absolute left-0 top-0"></div>
            </div>
            <div className="flex justify-between text-[0.65rem] font-bold tracking-widest text-slate-500 uppercase">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
              <span>Expert</span>
            </div>
          </div>

          {/* Expert Tip */}
          <div className="bg-teal-700 text-white rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="bg-white text-teal-700 w-8 h-8 rounded-full flex items-center justify-center">★</div>
              <div className="text-[0.65rem] font-bold tracking-widest bg-white/20 px-3 py-1 rounded-full uppercase">Expert Tip</div>
            </div>
            <h4 className="mb-4 text-xl font-semibold">Focus on your "Why" for the next session.</h4>
            <p className="text-sm text-teal-100 mb-6 flex-1 leading-relaxed">
              Candidates who clearly articulate their motivation have a 40% higher confidence rating.
            </p>
            <button className="bg-white text-teal-700 w-full py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
              Read Strategy
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 rounded-2xl p-6 shadow-sm border border-blue-100">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-blue-100 text-primary w-10 h-10 rounded-full flex items-center justify-center">
                <Icon name="users" size={20} />
              </div>
              <div className="text-2xl font-bold text-slate-800">75%</div>
            </div>
            <div className="font-semibold text-slate-800 mb-2">Communication</div>
            <p className="text-sm text-slate-600">Clarity, tone, and pacing are above average.</p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 shadow-sm border border-green-100">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-green-100 text-green-800 w-10 h-10 rounded-full flex items-center justify-center">
                <Icon name="grid" size={20} />
              </div>
              <div className="text-2xl font-bold text-slate-800">60%</div>
            </div>
            <div className="font-semibold text-slate-800 mb-2">Technical Knowledge</div>
            <p className="text-sm text-slate-600">Algorithm fluency needs focused practice.</p>
          </div>

          <div className="bg-sky-50 rounded-2xl p-6 shadow-sm border border-sky-100">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-sky-100 text-sky-700 w-10 h-10 rounded-full flex items-center justify-center">
                <Icon name="trending" size={20} />
              </div>
              <div className="text-2xl font-bold text-slate-800">80%</div>
            </div>
            <div className="font-semibold text-slate-800 mb-2">Confidence</div>
            <p className="text-sm text-slate-600">Great eye contact and steady delivery.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-slate-800">Recent Practice History</h3>
              <a href="#" className="text-xs font-bold text-primary tracking-widest hover:underline uppercase">View All</a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-6">
                <div className="bg-blue-50 text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <Icon name="chart" size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800 mb-1">Backend Architecture Foundations</div>
                  <div className="text-sm text-slate-500">Oct 24, 2024 • 15 Minutes</div>
                </div>
                <div className="text-right flex items-center gap-4">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Score</div>
                    <div className="font-bold text-slate-800">88/100</div>
                  </div>
                  <Icon name="chevronRight" size={20} className="text-slate-400" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-6">
                <div className="bg-blue-50 text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <Icon name="users" size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800 mb-1">Behavioral: Handling Conflict</div>
                  <div className="text-sm text-slate-500">Oct 22, 2024 • 12 Minutes</div>
                </div>
                <div className="text-right flex items-center gap-4">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Score</div>
                    <div className="font-bold text-slate-800">92/100</div>
                  </div>
                  <Icon name="chevronRight" size={20} className="text-slate-400" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-6">
                <div className="bg-blue-50 text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <Icon name="grid" size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800 mb-1">System Design: Scaling Twitter</div>
                  <div className="text-sm text-slate-500">Oct 21, 2024 • 45 Minutes</div>
                </div>
                <div className="text-right flex items-center gap-4">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Score</div>
                    <div className="font-bold text-slate-800">64/100</div>
                  </div>
                  <Icon name="chevronRight" size={20} className="text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 shadow-sm border border-blue-100 relative overflow-hidden flex flex-col">
            <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-md">
              <Icon name="video" size={32} />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-800">Ready to break the plateau?</h3>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-[280px]">
              Your data shows you're ready for the intermediate Level. You can simulate it today.
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-white p-3 rounded-xl border border-blue-100">
                <div className="bg-green-100 rounded-full p-1"><Icon name="check" size={14} className="text-green-600" /></div>
                Personalized AI Mentor
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-white p-3 rounded-xl border border-blue-100">
                <div className="bg-green-100 rounded-full p-1"><Icon name="check" size={14} className="text-green-600" /></div>
                Real-time Eye Tracking
              </div>
            </div>

            <Link to="/simulator" className="mt-auto block text-center bg-primary text-white w-full py-4 rounded-xl font-semibold hover:bg-primary-hover transition-colors shadow-sm">
              Start Next Practice Session
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

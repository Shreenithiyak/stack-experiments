import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';

export default function QuestionBank() {
  const filterBtnClass = "bg-white border text-slate-700 border-slate-200 px-4 py-3 rounded-xl flex justify-between items-center cursor-pointer w-full font-medium hover:border-primary transition-colors focus:ring-2 focus:ring-primary/20 outline-none";

  return (
    <DashboardLayout>
      <div className="py-8">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-4xl font-semibold mb-4 leading-tight text-slate-800">Question Bank</h2>
            <p className="text-lg text-slate-500 max-w-[600px]">
              Master the most frequently asked questions from top tech companies with expert-curated guidance.
            </p>
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-sm whitespace-nowrap">
            <Icon name="library" size={16} /> Offline Mode Active
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-12">
          <div>
            <div className="text-xs font-bold text-slate-500 tracking-widest mb-2 uppercase">Role</div>
            <button className={filterBtnClass}>
              Software Engineer <Icon name="down" size={16} className="text-slate-400" />
            </button>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 tracking-widest mb-2 uppercase">Level</div>
            <div className="flex bg-slate-100 p-1 rounded-xl h-[46px]">
              <button className="flex-1 border bg-white border-primary text-primary rounded-lg font-semibold shadow-sm text-sm">All</button>
              <button className="flex-1 border-none bg-transparent text-slate-500 rounded-lg font-medium text-sm hover:text-slate-700 transition-colors">Expert</button>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-500 tracking-widest mb-2 uppercase">Company</div>
            <button className={filterBtnClass}>
              All Companies <Icon name="down" size={16} className="text-slate-400" />
            </button>
          </div>
          <div className="flex flex-col justify-end">
            <button className="bg-primary text-white w-full py-3 rounded-xl flex gap-2 justify-center items-center font-medium hover:bg-primary-hover transition-colors shadow-sm h-[46px]">
              <Icon name="filter" size={18} /> Advanced Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-sky-50 text-sky-700 px-2 py-1 rounded text-xs font-bold tracking-wide">ALGORITHMS</span>
                <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold tracking-wide">SYSTEM DESIGN</span>
              </div>
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[0.65rem] font-bold tracking-wide flex items-center gap-1">
                <Icon name="users" size={12} /> EXPERT
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-6 flex-1 leading-snug text-slate-800">
              How would you design a scalable notification system for 100M active users?
            </h3>
            <div className="flex gap-2 mb-8 flex-wrap">
              <span className="bg-slate-50 text-slate-600 font-medium text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-100">
                <Icon name="users" size={12} /> Asked at Amazon 12 times
              </span>
              <span className="bg-blue-50 text-primary font-medium text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-blue-100">
                <Icon name="trending" size={12} /> High Frequency
              </span>
            </div>
            <Link to="/simulator" className="inline-flex justify-center items-center w-full bg-white text-primary border border-primary py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors gap-2">
              Practice This <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-sky-50 text-sky-700 px-2 py-1 rounded text-xs font-bold tracking-wide">JAVASCRIPT</span>
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold tracking-wide">ASYNC</span>
              </div>
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[0.65rem] font-bold tracking-wide uppercase">
                Beginner
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-6 flex-1 leading-snug text-slate-800">
              Explain the difference between Promises and Async/Await with examples.
            </h3>
            <div className="flex gap-2 mb-8 flex-wrap">
              <span className="bg-slate-50 text-slate-600 font-medium text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-100">
                <Icon name="users" size={12} /> Asked at TCS 5 times
              </span>
            </div>
            <Link to="/simulator" className="inline-flex justify-center items-center w-full bg-white text-primary border border-primary py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors gap-2">
              Practice This <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-sky-50 text-sky-700 px-2 py-1 rounded text-xs font-bold tracking-wide">BEHAVIORAL</span>
              </div>
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[0.65rem] font-bold tracking-wide uppercase">
                Mid-Level
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-6 flex-1 leading-snug text-slate-800">
              Tell me about a time you had a conflict with a teammate and how you resolved it.
            </h3>
            <div className="flex gap-2 mb-8 flex-wrap">
              <span className="bg-sky-50 text-sky-700 font-medium text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-sky-100">
                <Icon name="users" size={12} /> Common at Google
              </span>
            </div>
            <Link to="/simulator" className="inline-flex justify-center items-center w-full bg-white text-primary border border-primary py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors gap-2">
              Practice This <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-sky-50 text-sky-700 px-2 py-1 rounded text-xs font-bold tracking-wide">DATA STRUCTURES</span>
              </div>
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[0.65rem] font-bold tracking-wide uppercase">
                Mid-Level
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-6 flex-1 leading-snug text-slate-800">
              Implement an LRU Cache with O(1) time complexity for get and put operations.
            </h3>
            <div className="flex gap-2 mb-8 flex-wrap">
              <span className="bg-slate-50 text-slate-600 font-medium text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-100">
                <Icon name="users" size={12} /> Asked at Meta 8 times
              </span>
            </div>
            <Link to="/simulator" className="inline-flex justify-center items-center w-full bg-white text-primary border border-primary py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors gap-2">
              Practice This <Icon name="arrowRight" size={16} />
            </Link>
          </div>
          
          {/* Card 5 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-sky-50 text-sky-700 px-2 py-1 rounded text-xs font-bold tracking-wide">SQL</span>
              </div>
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[0.65rem] font-bold tracking-wide uppercase">
                Mid-Level
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-6 flex-1 leading-snug text-slate-800">
              Find the second highest salary from an Employee table without using LIMIT.
            </h3>
            <div className="flex gap-2 mb-8 flex-wrap">
              <span className="bg-slate-50 text-slate-600 font-medium text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-100">
                <Icon name="users" size={12} /> Asked at Oracle 15 times
              </span>
            </div>
            <Link to="/simulator" className="inline-flex justify-center items-center w-full bg-white text-primary border border-primary py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors gap-2">
              Practice This <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-sky-50 text-sky-700 px-2 py-1 rounded text-xs font-bold tracking-wide">CLOUD</span>
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold tracking-wide">SRE</span>
              </div>
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[0.65rem] font-bold tracking-wide flex items-center gap-1 uppercase">
                <Icon name="users" size={12} /> EXPERT
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-6 flex-1 leading-snug text-slate-800">
              Explain how you would handle a cascading failure in a distributed microservices environment.
            </h3>
            <div className="flex gap-2 mb-8 flex-wrap">
              <span className="bg-slate-50 text-slate-600 font-medium text-xs flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-100">
                <Icon name="users" size={12} /> Asked at Netflix 4 times
              </span>
            </div>
            <Link to="/simulator" className="inline-flex justify-center items-center w-full bg-white text-primary border border-primary py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors gap-2">
              Practice This <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-sky-100 text-sky-700 border-none px-12 py-4 rounded-full font-semibold hover:bg-sky-200 transition-colors inline-flex items-center gap-2">
            <Icon name="arrowRight" size={18} className="rotate-90" /> Load More Questions
          </button>
          <div className="mt-4 text-slate-500 text-sm">Showing 6 of 2,450 questions</div>
        </div>
      </div>
    </DashboardLayout>
  );
}

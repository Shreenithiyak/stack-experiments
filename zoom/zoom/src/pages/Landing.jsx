import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

export default function Landing() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-12 py-16">
        
        {/* Hero Section */}
        <section className="flex items-center justify-between mb-32 gap-16">
          <div className="flex-1 max-w-[600px]">
            <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold tracking-widest mb-6">
              AI-POWERED GROWTH
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6">
              Master Your <br/>Interview <span className="text-primary">with AI.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-[450px]">
              Practice, get instant feedback, and land your first job faster. Move from fresher to expert with our structured level-based training.
            </p>
            <div className="flex gap-4">
              <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-medium transition hover:-translate-y-0.5 hover:shadow-lg text-lg">Start for Free</Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-200 text-slate-800 rounded-lg font-medium transition hover:bg-white hover:border-slate-400 text-lg">View Demo</button>
            </div>
          </div>
          <div className="flex-[1.2] relative">
            {/* The Image Mockup Mock */}
            <div className="bg-slate-200 rounded-[2rem] aspect-[16/11] relative overflow-hidden shadow-2xl bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop")' }}>
              <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                LIVE FEEDBACK ACTIVE
              </div>
              <div className="absolute bottom-6 right-6 bg-white/95 p-6 rounded-2xl w-[300px] shadow-lg backdrop-blur-md">
                <div className="font-bold text-primary mb-2">AI Insight</div>
                <div className="text-sm text-slate-500 italic">
                  "Your answer about conflict resolution was structured well, but try to use more specific metrics."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Interview Suite Section */}
        <section className="mb-32 text-center">
          <h2 className="text-4xl font-semibold mb-4">The Interview Suite</h2>
          <p className="mx-auto mb-16 max-w-[600px] text-slate-500">
            Everything you need to transform from a nervous candidate into a confident professional.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* AI Simulator */}
            <div className="bg-white rounded-2xl p-10 text-left flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="text-primary mb-6"><Icon name="video" size={32} /></div>
              <h3 className="text-2xl font-semibold mb-4">AI Simulator</h3>
              <p className="text-slate-500 mb-8 flex-1">Experience realistic mock interviews with our AI avatars that adapt to your industry and role seniority.</p>
              <div className="bg-slate-100 rounded-2xl p-12 flex justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542382121-729f27d2c3e4?q=80&w=800&auto=format&fit=crop")' }}></div>
                <Link to="/simulator" className="relative z-10 inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-medium transition hover:-translate-y-0.5 hover:shadow-lg">Launch Simulator</Link>
              </div>
            </div>

            {/* Performance Dashboard */}
            <div className="bg-primary text-white rounded-2xl p-10 text-left flex flex-col shadow-sm">
              <div className="mb-6"><Icon name="chart" size={32} /></div>
              <h3 className="text-2xl font-semibold mb-4">Performance Dashboard</h3>
              <p className="text-blue-200 mb-8 flex-1">Track your progress with deep analytics on confidence levels, speech pace, and technical accuracy.</p>
              <div className="bg-white/10 rounded-2xl pt-8 px-8 flex items-end justify-between h-[160px] gap-2 overflow-hidden">
                <div className="w-full bg-green-300 rounded-t-lg h-[40%]"></div>
                <div className="w-full bg-green-300 rounded-t-lg h-[70%]"></div>
                <div className="w-full bg-green-300 rounded-t-lg h-[50%]"></div>
                <div className="w-full bg-green-300 rounded-t-lg h-[90%]"></div>
                <div className="w-full bg-green-300 rounded-t-lg h-[80%]"></div>
              </div>
            </div>
          </div>
          
          {/* Offline Question Bank */}
          <div className="bg-sky-100 rounded-2xl p-10 text-left flex items-center gap-12 mt-8">
            <div className="flex-1">
              <div className="text-sky-700 mb-6"><Icon name="library" size={32} /></div>
              <h3 className="text-2xl font-semibold mb-4">Offline Question Bank</h3>
              <p className="text-sky-800">Access over 5,000+ curated questions from top companies even without an internet connection. Prepare anytime, anywhere.</p>
            </div>
            <div className="flex-[1.5] grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-[0.65rem] font-bold text-primary tracking-widest mb-2">GOOGLE</div>
                <div className="font-semibold text-sm">System Design Patterns</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-[0.65rem] font-bold text-green-800 tracking-widest mb-2">AMAZON</div>
                <div className="font-semibold text-sm">Leadership Principles</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-[0.65rem] font-bold text-indigo-600 tracking-widest mb-2">META</div>
                <div className="font-semibold text-sm">Algorithmic Efficiency</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Digital Mentor Path */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-[600px]">
              <h2 className="text-4xl font-semibold mb-4">The Digital Mentor Path</h2>
              <p className="text-slate-500">Our structured roadmap takes you from the basics of communication to mastering executive-level behavioral interviews.</p>
            </div>
            <Link to="/questions" className="text-primary font-semibold flex items-center gap-2 hover:underline">
              Explore Full Curriculum <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* Beginner */}
            <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm">
              <div className="inline-flex px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold tracking-widest w-fit mb-6">BEGINNER</div>
              <h4 className="text-lg font-semibold mb-3">Introduction</h4>
              <p className="text-sm text-slate-500 mb-8 flex-1">Mastering 'Tell me about yourself' and basic body language.</p>
              <div className="h-1 bg-primary w-full rounded-full"></div>
            </div>

            {/* Intermediate */}
            <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm">
              <div className="inline-flex px-3 py-1 bg-sky-100 text-primary rounded-full text-xs font-bold tracking-widest w-fit mb-6">INTERMEDIATE</div>
              <h4 className="text-lg font-semibold mb-3">STAR Method</h4>
              <p className="text-sm text-slate-500 mb-8 flex-1">Structuring behavioral responses with situation and results.</p>
              <div className="h-1 bg-primary w-[60%] rounded-full relative">
                <div className="absolute inset-0 bg-slate-200 -z-10 w-[166%] rounded-full"></div>
              </div>
            </div>

            {/* Advanced */}
            <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm">
              <div className="inline-flex px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold tracking-widest w-fit mb-6">ADVANCED</div>
              <h4 className="text-lg font-semibold mb-3">Tech Mastery</h4>
              <p className="text-sm text-slate-500 mb-8 flex-1">Solving complex architecture and logic puzzles in real-time.</p>
              <div className="h-1 bg-primary w-[20%] rounded-full relative">
                <div className="absolute inset-0 bg-slate-200 -z-10 w-[500%] rounded-full"></div>
              </div>
            </div>

            {/* Expert */}
            <div className="bg-teal-700 text-white rounded-2xl p-8 flex flex-col shadow-sm">
              <div className="inline-flex px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold tracking-widest w-fit mb-6">EXPERT</div>
              <h4 className="text-lg font-semibold mb-3">Executive Presence</h4>
              <p className="text-sm text-teal-100 mb-8 flex-1">High-level negotiation and leadership communication.</p>
              <div className="h-1 bg-teal-400 w-[10%] rounded-full relative">
                <div className="absolute inset-0 bg-white/20 -z-10 w-[1000%] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white rounded-3xl py-20 px-12 text-center shadow-lg">
          <h2 className="text-4xl font-semibold mb-6">Ready to land that offer?</h2>
          <p className="mx-auto mb-12 max-w-[600px] text-lg text-blue-200">
            Join 15,000+ candidates who used InterviewReady to transition from students to software engineers.
          </p>
          <Link to="/register" className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary rounded-lg font-bold transition hover:bg-slate-100 text-lg shadow-md">
            Start Your Level Assessment
          </Link>
          <div className="mt-8 text-sm text-blue-300">
            No credit card required. Free tier includes 3 mock sessions.
          </div>
        </section>
      </div>
    </Layout>
  );
}

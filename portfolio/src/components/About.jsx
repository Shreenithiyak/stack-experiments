import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CheckCircle2 } from './Icons';

export default function About() {
  const { personalInfo, strengths } = usePortfolio();
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div>
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>
          
          <div className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-10">
            <p className="mb-6">{personalInfo.objective}</p>
            <p>
              I am passionate about creating clean, efficient, and user-friendly web applications. 
              My journey in Computer Science has equipped me with a strong foundation in both 
              frontend and backend development, allowing me to build comprehensive full-stack solutions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Key Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={24} className="text-red-500" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

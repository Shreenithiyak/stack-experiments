import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Skills() {
  const { skillCategories, getSkillsByCategory } = usePortfolio();
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Skills</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-900/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                    <skillGroup.icon size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-3">
                  {getSkillsByCategory(skillGroup.id).map((item, i) => (
                    <li key={i} className="text-lg text-slate-300 flex items-center gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

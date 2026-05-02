import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, strengths } from '../data';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>
          
          <div className="text-slate-300 text-lg leading-relaxed mb-8">
            <p className="mb-4">{personalInfo.objective}</p>
            <p>
              I am passionate about creating clean, efficient, and user-friendly web applications. 
              My journey in Computer Science has equipped me with a strong foundation in both 
              frontend and backend development, allowing me to build comprehensive full-stack solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Key Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 size={18} className="text-red-500" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

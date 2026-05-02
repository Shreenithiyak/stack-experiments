import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Education & Certifications</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-red-500" size={28} />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-400 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-900/20 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-lg">{edu.degree}</h4>
                        <span className="text-sm font-medium text-red-500">{edu.year}</span>
                      </div>
                      <p className="text-slate-300 mb-2">{edu.institution}</p>
                      <p className="text-sm text-slate-400 font-medium">{edu.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-red-500" size={28} />
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-900/20 transition-all flex items-start gap-4">
                    <div className="mt-1 p-2 bg-red-500/10 rounded-lg text-red-500 shrink-0">
                      <Award size={20} />
                    </div>
                    <p className="text-slate-300 leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

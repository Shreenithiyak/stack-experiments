import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-red-500 font-medium tracking-wide mb-2">Hi, my name is</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              {personalInfo.name}.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400 mb-6">
              I build things for the web.
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
              I'm a {personalInfo.role} based in {personalInfo.location.split(',')[0]}. {personalInfo.objective.split('.')[0]}.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition-colors flex items-center gap-2 shadow-sm"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-red-600 text-red-500 hover:bg-red-500/10 rounded-md font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                <Github size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-red-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 relative z-10 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 flex items-center justify-center shadow-xl">
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover object-top" />
            </div>
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full -z-10 transform translate-x-8 translate-y-8"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

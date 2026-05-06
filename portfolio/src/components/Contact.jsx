import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from './Icons';
import { usePortfolio } from '../context/PortfolioContext';

export default function Contact() {
  const { personalInfo } = usePortfolio();
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto text-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            I'm currently looking for new opportunities as a Full Stack Developer. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a href={`mailto:${personalInfo.email}`} className="flex flex-col items-center p-8 bg-slate-900 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-900/20 transition-all">
              <Mail className="text-red-500 mb-6" size={40} />
              <h3 className="text-white text-xl font-medium mb-3">Email</h3>
              <p className="text-slate-400 text-base">{personalInfo.email}</p>
            </a>
            
            <a href={`tel:${personalInfo.phone}`} className="flex flex-col items-center p-8 bg-slate-900 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-900/20 transition-all">
              <Phone className="text-red-500 mb-6" size={40} />
              <h3 className="text-white text-xl font-medium mb-3">Phone</h3>
              <p className="text-slate-400 text-base">{personalInfo.phone}</p>
            </a>
            
            <div className="flex flex-col items-center p-8 bg-slate-900 rounded-xl border border-slate-800">
              <MapPin className="text-red-500 mb-6" size={40} />
              <h3 className="text-white text-xl font-medium mb-3">Location</h3>
              <p className="text-slate-400 text-base">{personalInfo.location}</p>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10 transition-all">
              <Github size={32} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10 transition-all">
              <Linkedin size={32} />
            </a>
          </div>
          
          <div className="mt-16 pt-10 border-t border-slate-800 text-slate-500 text-base">
            <p>Designed & Built by {personalInfo.name}</p>
            <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

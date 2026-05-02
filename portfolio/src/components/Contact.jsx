import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            I'm currently looking for new opportunities as a Full Stack Developer. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href={`mailto:${personalInfo.email}`} className="flex flex-col items-center p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-900/20 transition-all">
              <Mail className="text-red-500 mb-4" size={32} />
              <h3 className="text-white font-medium mb-2">Email</h3>
              <p className="text-slate-400 text-sm">{personalInfo.email}</p>
            </a>
            
            <a href={`tel:${personalInfo.phone}`} className="flex flex-col items-center p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-red-500/50 hover:shadow-md hover:shadow-red-900/20 transition-all">
              <Phone className="text-red-500 mb-4" size={32} />
              <h3 className="text-white font-medium mb-2">Phone</h3>
              <p className="text-slate-400 text-sm">{personalInfo.phone}</p>
            </a>
            
            <div className="flex flex-col items-center p-6 bg-slate-900 rounded-xl border border-slate-800">
              <MapPin className="text-red-500 mb-4" size={32} />
              <h3 className="text-white font-medium mb-2">Location</h3>
              <p className="text-slate-400 text-sm">{personalInfo.location}</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10 transition-all">
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10 transition-all">
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>Designed & Built by {personalInfo.name}</p>
            <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

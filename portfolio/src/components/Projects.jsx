import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { Folder, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-900/20 hover:border-red-500/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-center mb-6">
                  <Folder size={40} className="text-red-500" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-red-500 transition-colors">{project.title}</h3>
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                )}
                
                <div className="text-slate-400 text-sm mb-6 flex-grow">
                  <ul className="list-disc pl-4 space-y-1">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-red-400 bg-red-500/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

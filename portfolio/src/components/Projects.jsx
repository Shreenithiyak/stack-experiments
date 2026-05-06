import { usePortfolio } from '../context/PortfolioContext';
import { Folder, ExternalLink, Github } from './Icons';

export default function Projects() {
  const { projects } = usePortfolio();
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-900/20 hover:border-red-500/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-center mb-8">
                  <Folder size={48} className="text-red-500" />
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                        <Github size={24} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
                
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 hover:text-red-500 transition-colors">{project.title}</h3>
                  </a>
                ) : (
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                )}
                
                <div className="text-slate-400 text-base mb-8 flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-slate-800">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm font-medium text-red-400 bg-red-500/10 px-3 py-1.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

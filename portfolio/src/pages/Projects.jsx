// src/pages/Projects.jsx
// Projects Page — Filterable projects gallery with detail popup modal
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaListUl, FaFilter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { projects, projectCategories, personalInfo } from '../data';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on active selection
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <>
      <Helmet>
        <title>Projects Portfolio | {personalInfo.name}</title>
        <meta
          name="description"
          content={`Explore the development projects of ${personalInfo.name}, ranging from responsive MERN fullstack applications to modern React interfaces.`}
        />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="section-container min-h-[calc(100vh-64px)] py-16"
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            A showcase of my recent coding projects, highlighting technologies used and core functionalities.
          </p>
        </div>

        {/* Filter category chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 mr-2">
            <FaFilter size={10} /> Filters:
          </div>
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                  ${isActive
                    ? 'bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-md shadow-purple-500/25'
                    : 'bg-white/80 dark:bg-gray-900/60 border border-gray-200/50 dark:border-gray-800/50 text-gray-600 dark:text-gray-300 hover:border-purple-300 dark:hover:border-purple-800'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col justify-between group cursor-pointer" delay={index}>
                  <div onClick={() => setSelectedProject(project)}>
                    {/* Project Category Tag */}
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-100/60 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/30 rounded-full mb-4">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>


                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="ghost"
                      size="sm"
                      className="text-xs mr-auto hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <FaListUl size={12} /> Details
                    </Button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Detail Modal */}
        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
          {selectedProject && (
            <div className="flex flex-col space-y-6">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100/60 dark:bg-purple-950/40 border border-purple-200/50 dark:border-purple-800/30 rounded-full mb-3">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <FaListUl size={10} /> Key Features & Scope
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <FaCode size={10} /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/30 dark:border-gray-700/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-gray-150 dark:border-gray-800">
                <Button href={selectedProject.githubUrl} variant="outline" size="md">
                  <FaGithub size={16} /> Source Code
                </Button>
                {selectedProject.liveUrl && (
                  <Button href={selectedProject.liveUrl} size="md">
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </Button>
                )}
                <Button onClick={() => setSelectedProject(null)} variant="ghost" size="md" className="ml-auto">
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </motion.div>
    </>
  );
}

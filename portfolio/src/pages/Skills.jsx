import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Card from '../components/ui/Card';
// Skill data matching the requested design
const skillData = [
  {
    id: 'frontend',
    category: 'FRONTEND',
    skills: [
      { name: 'React.js', level: 7, label: 'Advanced' },
      { name: 'Tailwind CSS', level: 8, label: 'Advanced' },
      { name: 'JavaScript', level: 8, label: 'Advanced' },
      { name: 'Framer Motion', level: 4, label: 'Intermediate' },
      { name: 'HTML/CSS', level: 9, label: 'Expert' },
    ],
  },
  {
    id: 'backend',
    category: 'BACKEND',
    skills: [
      { name: 'Node.js', level: 8, label: 'Advanced' },
      { name: 'Express.js', level: 8, label: 'Advanced' },
      { name: 'MongoDB', level: 8, label: 'Advanced' },
      { name: 'MySQL', level: 6, label: 'Intermediate' },

    ],
  },
  {
    id: 'tools',
    category: 'TOOLS',
    skills: [
      { name: 'Git / GitHub', level: 8, label: 'Confident' },
      { name: 'Figma', level: 5, label: 'Intermediate' },
      { name: 'VS Code', level: 9, label: 'Advanced' },
    ],
  },
];

// Dot component – filled or empty based on index
const Dot = ({ filled }) => (
  <span
    className={'inline-block w-3 h-3 rounded-full border border-[#2a7fff] ' + (filled ? 'bg-[#2a7fff] shadow-[0_0_6px_#2a7fff]' : 'bg-transparent opacity-20')}
  />
);

// Row component – renders a skill line with dots
const SkillRow = ({ skill, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, margin: '-20px' });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const dotVariants = {
    hidden: { opacity: 0 },
    visible: i => ({
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="flex items-center mb-4"
      initial="hidden"
      animate={controls}
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="w-[120px] text-sm font-medium text-gray-300">{skill.name}</div>
      <div className="flex flex-1 gap-1 justify-start mr-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={dotVariants}
            initial="hidden"
            animate="visible"
          >
            <Dot filled={i < skill.level} />
          </motion.span>
        ))}
      </div>
      <div className="text-xs font-semibold text-gray-400 min-w-[80px] text-right">{skill.label}</div>
    </motion.div>
  );
};

const CategoryHeader = ({ title, index }) => (
  <motion.h2
    className="uppercase text-gray-400 text-sm tracking-wider mb-2 mt-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
  >
    {title}
    <div className="border-t border-gray-700 mt-1" style={{ borderWidth: '0.5px' }} />
  </motion.h2>
);

export default function Skills() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#0a0a0f] text-gray-100 py-12 px-4 md:px-8 lg:px-16">
      {/* Legend */}
      <div className="text-xs text-gray-400 mb-4 flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <span className="inline-block w-3 h-3 rounded-full bg-[#2a7fff] shadow-[0_0_6px_#2a7fff]" />
          <span>Filled = Proficient</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="inline-block w-3 h-3 rounded-full border border-[#2a7fff] opacity-20" />
          <span>Empty = Learning</span>
        </div>
      </div>

      {skillData.map((cat, catIdx) => (
        <Card key={cat.id} className="mb-6" delay={catIdx}>
          <CategoryHeader title={cat.category} index={catIdx} />
          {cat.skills.map((skill, skillIdx) => (
            <SkillRow key={skill.name} skill={skill} index={skillIdx} />
          ))}
        </Card>
      ))}
    </div>
  );
}

// All portfolio data — plain JavaScript

export const personalInfo = {
  name: 'Shree Nithiya K',
  role: 'Full Stack Developer (MERN Stack)',
  tagline: 'Building the Web, One Stack at a Time',
  subtitle: 'CS Graduate | React + Node.js | Building real-world web apps',
  email: 'shreenithiyak@gmail.com',
  phone: '+91-8838844247',
  location: 'Chennai, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/shree-nithiya-k-b60213369',
  github: 'https://github.com/Shreenithiyak',
  resumeUrl: '/resume.pdf',
  bio: 'Motivated Computer Science graduate passionate about building responsive, scalable web applications that solve real-world problems. Based in Chennai — eager to learn, collaborate, and contribute to impactful projects.',
  college: 'Voorhees College, Vellore',
  degree: 'B.Sc Computer Science',
  cgpa: '7.2',
  graduationYear: '2025',
};

export const heroTypingTexts = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React Enthusiast',
  'Problem Solver',
  'Web App Builder',
];

export const navLinks = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#skills', label: 'Skills' },
  { to: '#projects', label: 'Projects' },
  { to: '#certifications', label: 'Certifications' },
  { to: '#education', label: 'Education' },
  { to: '#contact', label: 'Contact' },
];

export const projects = [
  {
    id: 1,
    number: '01',
    title: 'AI Mock Website - Learn With AI',
    description:
      'Developed a full stack web application that generates interview questions based on job roles and experience levels. Features secure user authentication using JWT and REST APIs connected to MongoDB.',
    stack: 'React.js · Node.js · Express.js · MongoDB',
    tags: ['MERN Stack', 'AI', 'JWT', 'REST API'],
    liveUrl: 'https://mock-interview-ashen-theta.vercel.app/',
    githubUrl: 'https://github.com/Shreenithiyak',
    icon: 'FaRobot',
    gradient: 'from-purple-500/15 to-cyan-500/8',
  },
  {
    id: 2,
    number: '02',
    title: 'SkillSwap Festival',
    description:
      'A Nomadic Skill-Sharing Platform. Full stack MERN web application enabling workshop discovery, reservations, and community networking. Includes secure authentication using JWT and Google OAuth.',
    stack: 'React.js · Tailwind CSS · Node.js · Express.js · MongoDB',
    tags: ['MERN Stack', 'Google OAuth', 'Tailwind CSS'],
    liveUrl: 'https://jod-neon.vercel.app/',
    githubUrl: 'https://github.com/Shreenithiyak',
    icon: 'FaCampground',
    gradient: 'from-cyan-500/15 to-purple-500/8',
  },
  {
    id: 3,
    number: '03',
    title: 'Student Portal',
    description:
      'Academic web application to manage student details and pages. Focused on clean UI and simple navigation for better user experience.',
    stack: 'HTML · CSS · JavaScript',
    tags: ['Academic', 'UI/UX', 'Vanilla JS'],
    liveUrl: null,
    githubUrl: 'https://github.com/Shreenithiyak',
    icon: 'FaGraduationCap',
    gradient: 'from-pink-500/12 to-cyan-500/6',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Business Analytics',
    issuer: 'Oracle Cloud Infrastructure',
    icon: 'FaCloud',
    status: 'Verified',
  },
  {
    id: 2,
    title: 'Developer Skills Network',
    issuer: 'IBM',
    icon: 'FaCubes',
    status: 'Verified',
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    issuer: 'MERN Stack · SLA · 2026',
    icon: 'FaGlobe',
    status: 'Completed',
  },
];

export const education = [
  {
    id: 1,
    icon: 'FaUserGraduate',
    degree: 'B.Sc Computer Science',
    institution: 'Voorhees College, Vellore',
    year: '2022 – 2025',
    score: 'CGPA: 7.2',
    scoreType: 'cgpa',
  },
  {
    id: 2,
    icon: 'FaBook',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Tamil Nadu State Board',
    year: '2022',
    score: '59.5%',
    scoreType: 'percent',
  },
  {
    id: 3,
    icon: 'FaSchool',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Tamil Nadu State Board',
    year: '2020',
    score: '72.1%',
    scoreType: 'percent',
  },
];

export const skillCategories = [
  {
    id: 'frontend',
    category: 'Frontend',
    icon: 'FaPaintBrush',
    skills: [
      { name: 'HTML5', icon: 'FaHtml5', color: '#e34c26' },
      { name: 'CSS3', icon: 'FaCss3Alt', color: '#264de4' },
      { name: 'JavaScript ES6+', icon: 'FaJs', color: '#f7df1e' },
      { name: 'React.js', icon: 'FaReact', color: '#61dafb' },
      { name: 'Tailwind CSS', icon: null, color: '#38bdf8' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    icon: 'FaCogs',
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs', color: '#68a063' },
      { name: 'Express.js', icon: null, color: '#a855f7' },
      { name: 'JWT Auth', icon: null, color: '#22d3ee' },
      { name: 'REST API', icon: null, color: '#ec4899' },
      { name: 'MVC Architecture', icon: null, color: '#a855f7' },
    ],
  },
  {
    id: 'database',
    category: 'Database',
    icon: 'FaDatabase',
    skills: [
      { name: 'MongoDB', icon: null, color: '#4db33d' },
      { name: 'Mongoose', icon: null, color: '#880000' },
    ],
  },
  {
    id: 'tools',
    category: 'Tools & Concepts',
    icon: 'FaTools',
    skills: [
      { name: 'Git', icon: 'FaGitAlt', color: '#f05032' },
      { name: 'GitHub', icon: 'FaGithub', color: '#a855f7' },
      { name: 'VS Code', icon: null, color: '#22d3ee' },
      { name: 'Thunder Client', icon: null, color: '#ec4899' },
      { name: 'Docker (Basic)', icon: 'FaDocker', color: '#2496ed' },
    ],
  },
];

export const strengths = [
  'Quick Learner',
  'Teamwork & Collaboration',
  'Communication',
  'Problem Solving',
  'Time Management',
];

// src/data.js — All portfolio data in one place
// Edit this file to update your personal info, projects, skills, etc.

// ===========================
// Personal Information
// ===========================
export const personalInfo = {
  name: "Shree Nithiya K",
  role: "Full Stack Developer",
  email: "nithiyashreek2004@gmail.com",
  phone: "+91-8838844247",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/shree-nithiya-krishnamoorthy-b60213369",
  github: "https://github.com/Shreenithiyak",
  bio: "Motivated Computer Science graduate seeking a Full Stack Developer role. Skilled in building responsive web applications using modern frontend and backend technologies. Eager to apply problem-solving skills, learn new technologies, and contribute to real-world projects in a growth-oriented environment.",
  resumeUrl: "/resume.pdf", // place your resume.pdf in public/
};

// ===========================
// Navigation Links
// ===========================
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
  { to: "/resume", label: "Resume" },
];

// ===========================
// Skills — organized by category
// ===========================
export const skillCategories = [
  {
    id: "frontend",
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "REST API Development", level: 70 },
    ],
  },
  {
    id: "database",
    category: "Database",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "Mongoose", level: 70 },
    ],
  },
  {
    id: "tools",
    category: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Thunder Client", level: 65 },
      { name: "MVC Architecture", level: 70 },
    ],
  },
];

// ===========================
// Projects
// ===========================
export const projects = [
  {
    id: 1,
    title: "AI Mock Interview Website",
    category: "Fullstack",
    description:
      "A full stack web application that generates interview questions based on job roles and experience levels. Features interactive UI, secure JWT authentication, and REST APIs with MongoDB.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Generates interview questions based on job roles and experience levels",
      "Interactive UI to display questions and record user responses",
      "Secure user authentication using JWT and protected routes",
    ],
    liveUrl: "https://mock-interview-ashen-theta.vercel.app/",
  },
];

// Filter categories for the Projects page
export const projectCategories = ["All", "Fullstack", "Frontend", "Backend"];

// ===========================
// Education
// ===========================
export const education = [
  {
    degree: "B.Sc Computer Science",
    institution: "Voorhees College, Vellore",
    year: "2022 — 2025",
    score: "CGPA: 7.2",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "State Board",
    year: "2020 — 2022",
    score: "Percentage: 59.5%",
  },
  {
    degree: "SSLC",
    institution: "State Board",
    year: "2020",
    score: "Percentage: 72.1%",
  },
];

// ===========================
// Certifications
// ===========================
export const certifications = [
  "Full Stack Web Development (MERN Stack) — SLA, 2026",
  "Business Analytics Certification — Oracle Cloud Infrastructure",
  "IBM Developer Skills Network",
];

// ===========================
// Strengths
// ===========================
export const strengths = [
  "Quick Learner",
  "Teamwork & Collaboration",
  "Communication",
  "Problem Solving",
  "Time Management",
];

// ===========================
// Typing text for Hero section
// ===========================
export const heroTypingTexts = [
  "Full Stack Developer",
  "React.js Enthusiast",
  "MERN Stack Developer",
  "Problem Solver",
];

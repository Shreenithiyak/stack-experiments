import { Code2, Database, Layout, Wrench, Server, Terminal } from "lucide-react";

export const personalInfo = {
  name: "SHREE NITHIYA K",
  role: "Full Stack Developer",
  email: "nithiyashreek2004@gmail.com",
  phone: "+91-8838844247",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/shree-nithiya-krishnamoorthy-b60213369",
  github: "https://github.com/Shreenithiyak",
  objective: "Motivated Computer Science graduate seeking a Full Stack Developer role. Skilled in building responsive web applications using modern frontend and backend technologies. Eager to apply problem-solving skills, learn new technologies, and contribute to real-world projects in a growth-oriented environment.",
};

export const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST API Development"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools & Concepts",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Thunder Client", "MVC Architecture"],
  },
];

export const strengths = [
  "Quick Learner",
  "Teamwork & Collaboration",
  "Communication",
  "Problem Solving",
  "Time Management",
];

export const projects = [
  {
    title: "AI Mock Interview Website",
    link: "http://stack-experiments.vercel.app",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description: [
      "Developed a full stack web application that generates interview questions based on job roles and experience levels.",
      "Built interactive UI to display questions and record user responses.",
      "Implemented secure user authentication using JWT and protected routes.",
      "Created REST APIs using Express.js and connected MongoDB for storing user data and feedback.",
      "Used Mongoose for schema design and efficient database operations.",
    ],
  },
  {
    title: "Personal Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    description: [
      "Designed and developed a responsive portfolio website to showcase projects and skills.",
      "Built reusable React components for better code structure.",
      "Implemented smooth navigation and mobile-friendly design.",
    ],
  },
  {
    title: "Student Portal (Academic Project)",
    tech: ["HTML", "CSS", "JavaScript"],
    description: [
      "Developed a basic web application to manage student details and pages.",
      "Focused on clean UI and simple navigation for better user experience.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc Computer Science",
    institution: "Voorhees College, Vellore",
    year: "2025",
    score: "CGPA: 7.2",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "State Board",
    year: "2022",
    score: "Percentage: 59.5%",
  },
  {
    degree: "SSLC",
    institution: "State Board",
    year: "2020",
    score: "Percentage: 72.1%",
  },
];

export const certifications = [
  "Business Analytics Certification Oracle Cloud Infrastructure (Web-based Certification)",
  "IBM Developer Skills Network",
];

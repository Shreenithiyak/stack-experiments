import { personalInfo } from '../../data.js';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a1f] py-8 px-6 text-center">
      <div className="flex justify-center gap-5 mb-4">
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
          className="text-slate-400 hover:text-purple-400 transition-colors text-lg">
          <FaLinkedinIn />
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
          className="text-slate-400 hover:text-purple-400 transition-colors text-lg">
          <FaGithub />
        </a>
        <a href={`mailto:${personalInfo.email}`}
          className="text-slate-400 hover:text-purple-400 transition-colors text-lg">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-slate-500 text-sm">
        Designed & Built with ❤️ by{' '}
        <span className="gradient-text font-semibold">Shree Nithiya K</span>{' '}
        · Chennai, India · 2025
      </p>
      <p className="text-slate-600 text-xs mt-1">Full Stack Developer · MERN Stack · Open to Opportunities</p>
    </footer>
  );
}

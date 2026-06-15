import { personalInfo } from '../../data.js';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function FloatingSocial() {
  return (
    <div className="hidden lg:flex fixed left-6 bottom-0 z-40 flex-col items-center gap-4 pb-0">
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
        title="LinkedIn"
        className="text-slate-500 hover:text-purple-400 hover:-translate-y-1 transition-all duration-200 text-base">
        <FaLinkedinIn />
      </a>
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
        title="GitHub"
        className="text-slate-500 hover:text-purple-400 hover:-translate-y-1 transition-all duration-200 text-base">
        <FaGithub />
      </a>
      <a href={`mailto:${personalInfo.email}`}
        title="Email"
        className="text-slate-500 hover:text-purple-400 hover:-translate-y-1 transition-all duration-200 text-base">
        <FaEnvelope />
      </a>
      {/* Vertical line */}
      <div className="w-px h-20 mt-2" style={{ background: 'linear-gradient(transparent, #a855f7)' }} />
    </div>
  );
}

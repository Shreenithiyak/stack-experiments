import { Github, Linkedin, Mail, ArrowRight } from './Icons';
import { usePortfolio } from '../context/PortfolioContext';
import ImageUpload from './ImageUpload';

export default function Hero() {
  const { personalInfo } = usePortfolio();

  const handleImageChange = (file) => {
    console.log('Picked file →', file);
    // TODO: store file in context or upload to server if needed
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-red-500 font-medium tracking-wide mb-3 text-lg md:text-xl">
              Hi, my name is
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              {personalInfo.name}.
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-400 mb-8">
              I build things for the web.
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              I'm a {personalInfo.role} based in {personalInfo.location.split(',')[0]}.{' '}
              {personalInfo.objective.split('.')[0]}.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12">
              <a
                href="#projects"
                className="px-10 py-4 text-lg bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition-colors flex items-center gap-3 shadow-sm"
              >
                View My Work <ArrowRight size={22} />
              </a>
              <a
                href="#contact"
                className="px-10 py-4 text-lg bg-transparent border border-red-600 text-red-500 hover:bg-red-500/10 rounded-md font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Github size={32} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Linkedin size={32} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
        {/* Image upload section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Profile Photo</h2>
          <ImageUpload onChange={handleImageChange} />
        </div>
      </div>
    </section>
  );
}

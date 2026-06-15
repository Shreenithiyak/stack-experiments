import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../../data.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050510]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-purple-900/10'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <NavLink to="/" className="font-display text-xl font-bold gradient-text tracking-tight">
          SNK
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact CTA */}
        <a
          href="/contact"
          className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5"
        >
          Let&apos;s Talk
        </a>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-300 rounded transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(5,5,16,0.98)', backdropFilter: 'blur(20px)' }}
      >
        {navLinks.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className="font-display text-2xl font-bold text-slate-200 hover:text-purple-400 transition-colors duration-200"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}

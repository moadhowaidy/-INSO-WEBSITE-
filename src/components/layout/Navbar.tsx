import React, { useState, useEffect } from 'react';
import INSOLogo from '../ui/INSOLogo';
import { LangToggle } from '../ui/LangToggle';
import { useLang } from '../../hooks/useLang';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { lang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links that route to separate pages
  const routedLinks = [
    { name: t.nav.ourWork[lang], to: '/our-work' },
    { name: t.nav.about[lang], to: '/about' },
  ];

  // Links that anchor-scroll on the home page
  const anchorLinks = [
    { name: t.nav.services[lang], href: '#services' },
    { name: t.nav.contact[lang], href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 h-[72px] bg-navy ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <INSOLogo size={48} />
          <div className="flex flex-col leading-tight">
            <span className="font-bebas text-xl tracking-widest text-orange">INSO</span>
            <span className="text-xs text-white/70 font-cairo hidden sm:block">
              {lang === 'ar' ? 'الحلول الصناعية' : 'Industrial Solutions'}
            </span>
          </div>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href={anchorLinks[0].href} 
            className="text-white hover:text-orange transition-colors font-semibold text-sm uppercase tracking-wide"
          >
            {anchorLinks[0].name}
          </a>
          {routedLinks.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.to} 
              className="text-white hover:text-orange transition-colors font-semibold text-sm uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={anchorLinks[1].href} 
            className="text-white hover:text-orange transition-colors font-semibold text-sm uppercase tracking-wide"
          >
            {anchorLinks[1].name}
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <LangToggle />
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-navy-dark shadow-xl border-t border-white/10">
          <nav className="flex flex-col py-4">
            <a 
              href={anchorLinks[0].href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white px-6 py-4 hover:bg-white/5 font-semibold text-lg border-b border-white/5"
            >
              {anchorLinks[0].name}
            </a>
            {routedLinks.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.to} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white px-6 py-4 hover:bg-white/5 font-semibold text-lg border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={anchorLinks[1].href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white px-6 py-4 hover:bg-white/5 font-semibold text-lg border-b border-white/5 last:border-0"
            >
              {anchorLinks[1].name}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

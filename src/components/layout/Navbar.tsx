import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
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

  const navLinks = [
    { name: t.nav.services[lang], href: '#services' },
    { name: t.nav.products[lang], href: '#products' },
    { name: t.nav.about[lang], href: '#about' },
    { name: t.nav.contact[lang], href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 h-[72px] bg-navy ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <Logo className="w-10 h-12" />
          <span className="text-white font-bebas text-2xl tracking-wider hidden sm:block">INSO</span>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="text-white hover:text-orange transition-colors font-semibold text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
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
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white px-6 py-4 hover:bg-white/5 font-semibold text-lg border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

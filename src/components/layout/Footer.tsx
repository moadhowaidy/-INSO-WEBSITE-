import React from 'react';
import { useLang } from '../../hooks/useLang';
import INSOLogo from '../ui/INSOLogo';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { lang, t } = useLang();

  return (
    <footer className="bg-navy-dark pt-16 pb-6 text-white/80">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <INSOLogo size={48} />
              <span className="text-white font-bebas text-3xl tracking-wider">INSO</span>
            </div>
            <p className="leading-relaxed mb-6">
              {t.footer.tagline[lang]}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{t.nav.services[lang]}</h4>
            <ul className="space-y-3">
              {t.services.items.slice(0, 4).map((service, idx) => (
                <li key={idx}>
                  <a href={`/#services`} className="hover:text-orange transition-colors">
                    {service[lang].title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{t.nav.about[lang]}</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-orange transition-colors">{t.nav.about[lang]}</Link></li>
              <li><a href="/#contact" className="hover:text-orange transition-colors">{t.nav.contact[lang]}</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">{t.nav.contact[lang]}</h4>
            <address className="not-italic space-y-3">
              <p>info@inso.ly</p>
              <p dir="ltr">+218 91 031 7993</p>
              <p dir="ltr">+218 92 121 3089</p>
              <p>{t.contact.address[lang]}</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} INSO. {t.footer.copyright[lang]}.</p>
          <p className="text-white/40">Industrial Solutions for Industrial Control Systems</p>
        </div>
      </div>
    </footer>
  );
};

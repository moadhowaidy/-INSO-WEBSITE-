// src/components/ui/WhatsAppButton.tsx
// Floating WhatsApp chat button — visible on all pages, fixed bottom-right

import { useLang } from '../../hooks/useLang';

const PHONE = '218910317993';

const MESSAGE = {
  ar: 'مرحباً، أود الاستفسار عن خدماتكم الصناعية.',
  en: 'Hello, I would like to enquire about your industrial services.',
};

export default function WhatsAppButton() {
  const { lang } = useLang();

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE[lang])}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        background: '#25D366',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 28px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.45)';
      }}
    >
      {/* WhatsApp SVG icon — no external library needed */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.67 4.78 1.83 6.77L2 30l7.43-1.79A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.85-1.6l-.42-.25-4.41 1.06 1.1-4.3-.28-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.29-8.57c-.34-.17-2.02-.99-2.33-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59H9.8c-.2 0-.52.07-.79.34-.28.28-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 2.02-.82 2.3-1.62.29-.8.29-1.48.2-1.62-.08-.14-.31-.22-.65-.39z"/>
      </svg>

      {/* Pulse ring animation */}
      <span
        style={{
          position: 'absolute',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          border: '2px solid #25D366',
          animation: 'wa-pulse 2s ease-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Inject the keyframe once */}
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.7); opacity: 0;   }
        }
      `}</style>
      
      {/* Tooltip label */}
      <span
        style={{
          position: 'absolute',
          right: '68px',
          background: '#111',
          color: '#fff',
          fontSize: '12px',
          padding: '5px 10px',
          borderRadius: '6px',
          whiteSpace: 'nowrap',
          opacity: 0,
          transition: 'opacity 0.2s',
          pointerEvents: 'none',
        }}
        className="wa-tooltip"
      >
        {lang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
      </span>
      <style>{`
        a:hover .wa-tooltip { opacity: 1 !important; }
      `}</style>
    </a>
  );
}

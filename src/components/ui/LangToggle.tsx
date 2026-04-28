import React, { useState, useRef } from 'react';
import { useLang } from '../../hooks/useLang';

export const LangToggle: React.FC = () => {
  const { lang, toggle } = useLang();
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const [ripple, setRipple] = useState<{
    active: boolean;
    x: number;
    y: number;
    size: number;
    color: string;
    phase: 'expanding' | 'collapsing' | 'none';
  }>({ active: false, x: 0, y: 0, size: 0, color: '', phase: 'none' });

  const [ghostWord, setGhostWord] = useState<{ active: boolean; word: string }>({ active: false, word: '' });
  const [isPointerBlocked, setIsPointerBlocked] = useState(false);

  const handleClick = () => {
    if (isPointerBlocked || ripple.active) return;
    
    setIsPointerBlocked(true);
    const btn = buttonRef.current;
    if (!btn) return;
    
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const maxDist = Math.hypot(Math.max(cx, vw - cx), Math.max(cy, vh - cy)) * 2.2;
    
    const targetLang = lang === 'ar' ? 'en' : 'ar';
    const rippleColor = targetLang === 'en' ? '#D4601A' : '#1A2770';
    const gWord = targetLang === 'en' ? 'ENGLISH' : 'عربي';

    setRipple({ active: true, x: cx, y: cy, size: maxDist, color: rippleColor, phase: 'expanding' });
    
    setTimeout(() => {
      setGhostWord({ active: true, word: gWord });
    }, 280);

    setTimeout(() => {
      toggle(); // This will trigger re-render with new language
    }, 490);

    setTimeout(() => {
      setRipple(prev => ({ ...prev, phase: 'collapsing' }));
    }, 540);

    setTimeout(() => {
      setGhostWord({ active: false, word: '' });
    }, 1180); // 280 + 900 fade in-out time

    setTimeout(() => {
      setRipple({ active: false, x: 0, y: 0, size: 0, color: '', phase: 'none' });
      setIsPointerBlocked(false);
    }, 1140); // 540 + 600 collapse time
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleClick}
        aria-label={lang === 'ar' ? 'تبديل اللغة إلى الإنجليزية' : 'Switch language to Arabic'}
        className="relative flex items-center justify-between w-20 h-8 bg-navy-light rounded-full p-1 cursor-pointer select-none overflow-hidden"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-[spin_8s_linear_infinite] pointer-events-none" />
        
        <span className={`z-10 text-xs font-bold w-1/2 text-center transition-colors duration-300 ${lang === 'ar' ? 'text-white' : 'text-white/50'}`}>AR</span>
        <span className={`z-10 text-xs font-bold w-1/2 text-center transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-white/50'}`}>EN</span>
        
        <div 
          className={`absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-orange rounded-full transition-transform duration-300 ease-in-out ${lang === 'en' ? 'translate-x-full rtl:-translate-x-full' : ''}`}
        />
      </button>

      {/* Ripple Element */}
      {ripple.active && (
        <div
          style={{
            position: 'fixed',
            left: ripple.x,
            top: ripple.y,
            width: ripple.phase === 'expanding' ? ripple.size : 0,
            height: ripple.phase === 'expanding' ? ripple.size : 0,
            backgroundColor: ripple.color,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            transition: ripple.phase === 'expanding' ? 'width 720ms ease-out, height 720ms ease-out' : 'width 600ms ease-in, height 600ms ease-in',
            zIndex: 9998,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Ghost Word */}
      {ghostWord.active && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none"
        >
          <span 
            className="text-white/20 font-bold tracking-widest animate-[ghostFade_900ms_ease-in-out_forwards] font-bebas"
            style={{ fontSize: 'clamp(5rem, 15vw, 15rem)' }}
          >
            {ghostWord.word}
          </span>
        </div>
      )}

      {/* Block pointer events during transition */}
      {isPointerBlocked && (
        <div className="fixed inset-0 z-[10000]" />
      )}
      
      <style>{`
        @keyframes ghostFade {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
      `}</style>
    </>
  );
};

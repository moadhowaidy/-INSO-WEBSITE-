import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-32 h-auto" }) => {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left Orange Flame */}
      <path d="M100 220C50 180 20 130 40 80C60 30 90 20 100 10C95 40 105 70 80 100C60 120 70 160 100 220Z" fill="currentColor" className="text-orange" />
      {/* Right Navy Flame */}
      <path d="M100 220C150 180 180 130 160 80C140 30 110 20 100 10C105 40 95 70 120 100C140 120 130 160 100 220Z" fill="currentColor" className="text-navy" />
      {/* Negative Space Center Gear and Text */}
      <g transform="translate(65, 45) scale(0.6)">
        {/* Gear Icon (Navy) */}
        <path d="M48 24C48 37.25 37.25 48 24 48C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0C37.25 0 48 10.75 48 24ZM39.5 24C39.5 15.44 32.56 8.5 24 8.5C15.44 8.5 8.5 15.44 8.5 24C8.5 32.56 15.44 39.5 24 39.5C32.56 39.5 39.5 32.56 39.5 24Z" fill="var(--navy)" className="text-navy" />
        <path d="M24 16C19.58 16 16 19.58 16 24C16 28.42 19.58 32 24 32C28.42 32 32 28.42 32 24C32 19.58 28.42 16 24 16Z" fill="var(--navy)" className="text-navy" />
        {/* Outer spikes approximations */}
        <rect x="21" y="-5" width="6" height="10" rx="2" fill="var(--navy)" className="text-navy" />
        <rect x="21" y="43" width="6" height="10" rx="2" fill="var(--navy)" className="text-navy" />
        <rect x="-5" y="21" width="10" height="6" rx="2" fill="var(--navy)" className="text-navy" />
        <rect x="43" y="21" width="10" height="6" rx="2" fill="var(--navy)" className="text-navy" />
        <rect x="4.5" y="4.5" width="10" height="6" rx="2" transform="rotate(45 4.5 4.5)" fill="var(--navy)" className="text-navy" />
        <rect x="38.5" y="38.5" width="10" height="6" rx="2" transform="rotate(45 38.5 38.5)" fill="var(--navy)" className="text-navy" />
        <rect x="4.5" y="38.5" width="6" height="10" rx="2" transform="rotate(-45 4.5 38.5)" fill="var(--navy)" className="text-navy" />
        <rect x="38.5" y="4.5" width="6" height="10" rx="2" transform="rotate(-45 38.5 4.5)" fill="var(--navy)" className="text-navy" />
        {/* Text 'INSO' */}
        <text x="60" y="35" fontFamily="'Bebas Neue', sans-serif" fontWeight="bold" fontSize="42" fill="var(--orange)" className="text-orange" letterSpacing="2">INSO</text>
      </g>
    </svg>
  );
};

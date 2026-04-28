import React from 'react';


interface SectionHeaderProps {
  tag: string;
  title: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ tag, title, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      <span className="text-orange font-bold text-sm tracking-widest uppercase mb-2 block">{tag}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 font-bebas">{title}</h2>
      <div className={`w-20 h-1 bg-orange ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

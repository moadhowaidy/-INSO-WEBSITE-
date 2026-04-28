import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../hooks/useLang';

export const Stats: React.FC = () => {
  const { lang, t } = useLang();

  const stats = [
    { key: 'years', data: t.stats.years },
    { key: 'projects', data: t.stats.projects },
    { key: 'clients', data: t.stats.clients },
    { key: 'support', data: t.stats.support },
  ];

  return (
    <div className="bg-orange w-full relative z-20 shadow-xl">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/20 rtl:divide-x-reverse">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-4xl md:text-5xl font-bebas font-bold text-white mb-2 drop-shadow-md" dir="ltr">
                {stat.data.value}
              </span>
              <span className="text-white/90 font-semibold text-sm md:text-base">
                {stat.data[lang]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

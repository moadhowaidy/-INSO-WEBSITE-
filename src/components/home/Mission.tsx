import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../hooks/useLang';

export const Mission: React.FC = () => {
  const { lang, t } = useLang();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Mission Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24 relative"
        >
          <span className="text-orange font-bold text-sm tracking-widest uppercase mb-6 block">{t.mission.tag[lang]}</span>
          <span className="absolute top-0 left-0 text-9xl text-gray-mid font-bebas leading-none -translate-x-8 -translate-y-8 select-none">"</span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight italic relative z-10 font-cairo">
            {t.mission.quote[lang]}
          </h3>
          <span className="absolute bottom-0 right-0 text-9xl text-gray-mid font-bebas leading-none translate-x-8 translate-y-16 select-none">"</span>
        </motion.div>

        {/* Values Grid */}
        <div className="mt-16 text-center mb-12">
           <span className="text-orange font-bold text-sm tracking-widest uppercase mb-2 block">{t.values.tag[lang]}</span>
           <div className="w-20 h-1 bg-orange mx-auto" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {t.values.items.map((value, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-gray-light rounded-2xl p-8 text-center border border-gray-mid hover:border-orange/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-navy text-white rounded-full flex items-center justify-center font-bebas text-3xl mb-6 shadow-lg shadow-navy/20">
                0{idx + 1}
              </div>
              <h4 className="text-2xl font-bold text-text-dark mb-4">{value[lang].title}</h4>
              <p className="text-gray-text leading-relaxed">{value[lang].desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

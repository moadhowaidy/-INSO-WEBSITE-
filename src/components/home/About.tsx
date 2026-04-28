import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../hooks/useLang';

import { Logo } from '../ui/Logo';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { lang, t } = useLang();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 bg-navy-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Logo Glass Card */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-3xl bg-white/5 border border-white/10 p-12 backdrop-blur-sm flex items-center justify-center">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy-light/40 rounded-full blur-2xl" />
              
              <Logo className="w-full h-full text-white filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              
              {/* ISO Badge accent */}
              <div className="absolute -bottom-8 -right-8 bg-orange text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-lg shadow-xl shadow-orange/20 rotate-12 border-4 border-navy-dark">
                ISO
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-white"
          >
            <div className="mb-8">
              <span className="text-orange font-bold text-sm tracking-widest uppercase mb-2 block">{t.about.tag[lang]}</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-bebas">{t.about.title[lang]}</h2>
              <div className="w-20 h-1 bg-orange mb-8" />
            </div>

            <motion.p variants={itemVariants} className="text-white/80 text-lg leading-relaxed mb-10">
              {t.about.body[lang]}
            </motion.p>

            <div className="space-y-4">
              {t.about.features.map((feature, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-start gap-4">
                  <CheckCircle2 className="text-orange flex-shrink-0 mt-1" size={20} />
                  <span className="text-white/90 leading-relaxed font-semibold">{feature[lang]}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../hooks/useLang';
import INSOLogo from '../ui/INSOLogo';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const { lang, t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-dark via-navy to-[#1a2b85] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange rounded-full mix-blend-screen filter blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-navy-light rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">{t.hero.badge[lang]}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">{t.hero.h1a[lang]}</span>
              <span className="block text-orange">{t.hero.h1b[lang]}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              {t.hero.sub[lang]}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.hero.cta1[lang]}
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.hero.cta2[lang]}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Logo Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-96 h-96 animate-[float_6s_ease-in-out_infinite]">
              {/* Glass Card Behind Logo */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl rotate-3" />
              <div className="absolute inset-0 flex items-center justify-center -rotate-3 p-8">
                <INSOLogo size={220} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

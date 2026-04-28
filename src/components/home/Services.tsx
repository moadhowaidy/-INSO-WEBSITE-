import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../hooks/useLang';
import { SectionHeader } from '../ui/SectionHeader';
import { servicesData } from '../../data/services';

export const Services: React.FC = () => {
  const { lang, t } = useLang();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="services" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader tag={t.services.tag[lang]} title={t.services.title[lang]} centered />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {t.services.items.map((serviceItem) => {
            const Icon = servicesData.find(s => s.id === serviceItem.id)?.icon;
            
            return (
              <motion.div 
                key={serviceItem.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-mid overflow-hidden"
              >
                {/* Top Animated Border */}
                <div 
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-orange transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${lang === 'ar' ? 'origin-right' : 'origin-left'}`}
                />
                
                <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center mb-6 text-orange group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                  {Icon && <Icon size={28} />}
                </div>
                
                <h3 className="text-xl font-bold text-text-dark mb-4">{serviceItem[lang].title}</h3>
                <p className="text-gray-text leading-relaxed">{serviceItem[lang].desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

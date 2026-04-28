import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../hooks/useLang';

export const PhotoGallery: React.FC = () => {
  const { lang } = useLang();

  const photos = [
    { src: '/images/projects/p1.jpg', label: { ar: "لوحة تحكم خلاطة — موقع حقيقي", en: "Mixing Plant Control Panel — Live Site" }, className: "md:col-span-2 md:row-span-2" },
    { src: '/images/projects/p2.jpg', label: { ar: "توصيلات داخلية محترفة", en: "Professional Internal Panel Wiring" }, className: "md:col-span-1 md:row-span-1" },
    { src: '/images/projects/p3.jpg', label: { ar: "محطة تكسير — مشروع ميداني", en: "Crushing Plant — Field Project" }, className: "md:col-span-1 md:row-span-2" },
    { src: '/images/projects/p4.jpg', label: { ar: "كابينة توزيع طاقة عالية", en: "High-Power Distribution Cabinet" }, className: "md:col-span-1 md:row-span-1" },
    { src: '/images/projects/p5.jpg', label: { ar: "شاشة SCADA — نظام خلط الإسفلت", en: "SCADA Screen — Asphalt Mixing System" }, className: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="py-0 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-2 h-auto md:h-[600px]">
        {photos.map((photo, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`relative group overflow-hidden bg-gray-mid ${photo.className}`}
          >
            <img 
              src={photo.src} 
              alt={photo.label[lang]} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback if images are missing
                const target = e.target as HTMLImageElement;
                target.src = `https://source.unsplash.com/random/800x600/?industrial,factory,engineering&sig=${idx}`;
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">{photo.label[lang]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

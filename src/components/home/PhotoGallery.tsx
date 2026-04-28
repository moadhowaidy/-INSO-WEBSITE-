import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../hooks/useLang';

export const PhotoGallery: React.FC = () => {
  const { lang, t } = useLang();
  const [activePhoto, setActivePhoto] = useState<{ src: string; label: string } | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhoto(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const photos = [
    { src: '/images/projects/p1.jpg', label: { ar: "لوحة تحكم خلاطة — موقع حقيقي", en: "Mixing Plant Control Panel — Live Site" }, className: "md:col-span-2 md:row-span-2" },
    { src: '/images/projects/p2.jpg', label: { ar: "توصيلات داخلية محترفة", en: "Professional Internal Panel Wiring" }, className: "md:col-span-1 md:row-span-1" },
    { src: '/images/projects/p3.jpg', label: { ar: "محطة تكسير — مشروع ميداني", en: "Crushing Plant — Field Project" }, className: "md:col-span-1 md:row-span-2" },
    { src: '/images/projects/p4.jpg', label: { ar: "كابينة توزيع طاقة عالية", en: "High-Power Distribution Cabinet" }, className: "md:col-span-1 md:row-span-1" },
    { src: '/images/projects/p5.jpg', label: { ar: "شاشة SCADA — نظام خلط الإسفلت", en: "SCADA Screen — Asphalt Mixing System" }, className: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="py-0 bg-white">
      {/* Section header */}
      <div className="container mx-auto px-4 md:px-8 py-12 text-center">
        <span className="text-orange font-bold text-sm tracking-widest uppercase mb-2 block">{t.ourWork.tag[lang]}</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-bebas text-navy-dark">{t.ourWork.title[lang]}</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.ourWork.sub[lang]}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-2 h-auto md:h-[600px]">
        {photos.map((photo, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className={`relative group overflow-hidden bg-gray-mid ${photo.className}`}
            onClick={() => setActivePhoto({ src: photo.src, label: photo.label[lang] })}
            style={{ cursor: 'pointer' }}
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

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          {/* Inner container — stop click from closing when clicking the image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhoto(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                background: 'none',
                border: 'none',
                color: '#ffffff',
                fontSize: '32px',
                cursor: 'pointer',
                lineHeight: 1,
                padding: '4px 8px',
              }}
              aria-label="Close"
            >
              ×
            </button>

            {/* Full-size photo */}
            <img
              src={activePhoto.src}
              alt={activePhoto.label}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '12px',
                display: 'block',
              }}
            />

            {/* Caption */}
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '14px',
                textAlign: 'center',
                marginTop: '12px',
              }}
            >
              {activePhoto.label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../hooks/useLang';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <span className="text-orange font-bold text-sm tracking-widest uppercase mb-2 block">{t.contact.tag[lang]}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 font-bebas">{t.contact.title[lang]}</h2>
              <div className="w-20 h-1 bg-orange mb-8" />
              <p className="text-gray-text text-lg leading-relaxed">{t.contact.desc[lang]}</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">HQ & Branch</h4>
                  <p className="text-gray-text">{t.contact.address[lang]}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Phone / WhatsApp</h4>
                  <p className="text-gray-text" dir="ltr">+218 91 031 7993</p>
                  <p className="text-gray-text" dir="ltr">+218 92 121 3089</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark mb-1">Email</h4>
                  <p className="text-gray-text">info@inso.ly</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-mid relative overflow-hidden">
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-10"
                >
                  <CheckCircle2 className="text-green-500 w-20 h-20 mb-6" />
                  <h3 className="text-2xl font-bold text-text-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-text">Thank you for reaching out. Our team will get back to you shortly.</p>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">{t.contact.form.name[lang]}</label>
                    <input type="text" required className="w-full px-4 py-3 bg-gray-light border-gray-mid rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all outline-none" placeholder={t.contact.form.name[lang]} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">{t.contact.form.company[lang]}</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-light border-gray-mid rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all outline-none" placeholder={t.contact.form.company[lang]} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">{t.contact.form.email[lang]}</label>
                    <input type="email" required className="w-full px-4 py-3 bg-gray-light border-gray-mid rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all outline-none" placeholder="example@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-dark mb-2">{t.contact.form.phone[lang]}</label>
                    <input type="tel" required className="w-full px-4 py-3 bg-gray-light border-gray-mid rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all outline-none" placeholder="+218 9X XXX XXXX" dir="ltr" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-dark mb-2">{t.contact.form.service[lang]}</label>
                  <select className="w-full px-4 py-3 bg-gray-light border-gray-mid rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all outline-none appearance-none">
                    <option value="" disabled selected>{t.contact.form.service[lang]}</option>
                    {t.services.items.map(s => (
                      <option key={s.id} value={s.id}>{s[lang].title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-dark mb-2">{t.contact.form.message[lang]}</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-gray-light border-gray-mid rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-all outline-none resize-none" placeholder={t.contact.form.message[lang]}></textarea>
                </div>

                <Button type="submit" className="w-full py-4 text-lg mt-4 shadow-lg shadow-orange/30">
                  {t.contact.form.submit[lang]}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

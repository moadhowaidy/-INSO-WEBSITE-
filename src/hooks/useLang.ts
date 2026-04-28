import { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import { t } from '../data/translations';


export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }

  const { lang, setLang } = context;

  const toggle = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return { lang, t, toggle };
};

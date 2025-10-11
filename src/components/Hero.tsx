import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export function Hero() {
  const { t } = useLanguage();
  
  return <div className="py-12 md:py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {t('hero.title')}
        </h1>
        <div className="inline-flex items-center justify-center mb-6 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles size={16} className="mr-2" />
          {t('hero.subtitle')}
        </div>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            {t('hero.startDiagnosis')}
          </button>
          <button className="px-8 py-3 bg-white text-pink-500 font-medium rounded-full shadow-sm border border-pink-200 hover:border-pink-300 transition duration-300 ease-in-out">
            {t('hero.learnMore')}
          </button>
        </div>
      </div>
    </div>;
}
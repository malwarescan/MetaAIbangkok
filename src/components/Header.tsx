import React, { useState } from 'react';
import { MenuIcon, X as CloseIcon, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  return <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="relative mr-2">
                  {/* Stylized lotus/flower logo mark */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4C10.5 6 9.5 8.5 9 11C8.5 13.5 9 16 10 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 4C13.5 6 14.5 8.5 15 11C15.5 13.5 15 16 14 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M9 11C7 11 5 12 4 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M15 11C17 11 19 12 20 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 20C14.5 20 17 18.5 18 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 20C9.5 20 7 18.5 6 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="12" cy="11" r="2" fill="white" />
                    </svg>
                  </div>
                  {/* Sparkle effect */}
                  <div className="absolute -top-1 -right-1 text-yellow-300">
                    <Sparkles size={12} />
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 leading-tight">
                    Meta Esthetic
                  </div>
                  <div className="text-xs font-medium text-gray-500 tracking-wider -mt-1">
                    THAILAND <span className="text-pink-500">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
              {t('header.home')}
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
              {t('header.services')}
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
              {t('header.about')}
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
              {t('header.contact')}
            </a>
          </nav>
          <div className="hidden md:flex items-center">
            <LanguageSelector />
          </div>
          <div className="flex md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a href="#" className="text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              {t('header.home')}
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              {t('header.services')}
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              {t('header.about')}
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium">
              {t('header.contact')}
            </a>
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>}
    </header>;
}
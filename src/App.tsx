import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChatInterface } from './components/ChatInterface';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <Header />
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Hero />
          <ChatInterface />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
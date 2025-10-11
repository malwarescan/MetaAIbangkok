import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ko' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  en: {
    // Hero Section
    'hero.title': 'AI-Powered Health Diagnostics',
    'hero.subtitle': 'Powered by advanced medical AI',
    'hero.description': 'Describe your symptoms and our AI will provide a preliminary diagnosis and help you schedule an appointment at Meta Esthetic Thailand.',
    'hero.startDiagnosis': 'Start Diagnosis',
    'hero.learnMore': 'Learn More',
    
    // Header
    'header.home': 'Home',
    'header.services': 'Services',
    'header.about': 'About Us',
    'header.contact': 'Contact',
    
    // Chat Interface
    'chat.title': 'Meta Esthetic AI Assistant',
    'chat.placeholder': 'Describe your symptoms...',
    'chat.welcome': "Hello! I'm the Meta Esthetic AI assistant. Please describe your symptoms, and I'll help diagnose your condition and schedule an appointment if needed.",
    'chat.schedulePrompt': 'Would you like to schedule an appointment at Meta Esthetic Thailand for a professional consultation?',
    'chat.scheduleNow': 'Schedule Now',
    'chat.moreInfo': 'More Info',
    'chat.commonSymptoms': 'Common symptoms you can ask about:',
    'chat.skinIssues': 'Skin Issues',
    'chat.hairProblems': 'Hair Problems',
    'chat.nailConcerns': 'Nail Concerns',
    'chat.headaches': 'Headaches',
    'chat.coldFlu': 'Cold & Flu',
    'chat.footPain': 'Foot Pain',
    'chat.errorMessage': "I apologize, but I'm currently unable to process your request. Please schedule an appointment with our specialists at Meta Esthetic Thailand for a professional consultation.",
    
    // Language Selector
    'lang.english': 'English',
    'lang.korean': '한국어',
    'lang.thai': 'ไทย',
  },
  ko: {
    // Hero Section
    'hero.title': 'AI 기반 건강 진단',
    'hero.subtitle': '고급 의료 AI로 구동',
    'hero.description': '증상을 설명해 주시면 AI가 예비 진단을 제공하고 메타 에스테틱 태국에서 예약을 도와드립니다.',
    'hero.startDiagnosis': '진단 시작',
    'hero.learnMore': '더 알아보기',
    
    // Header
    'header.home': '홈',
    'header.services': '서비스',
    'header.about': '회사 소개',
    'header.contact': '연락처',
    
    // Chat Interface
    'chat.title': '메타 에스테틱 AI 어시스턴트',
    'chat.placeholder': '증상을 설명해 주세요...',
    'chat.welcome': '안녕하세요! 저는 메타 에스테틱 AI 어시스턴트입니다. 증상을 설명해 주시면 상태를 진단하고 필요한 경우 예약을 도와드리겠습니다.',
    'chat.schedulePrompt': '메타 에스테틱 태국에서 전문 상담을 위해 예약을 원하시나요?',
    'chat.scheduleNow': '지금 예약',
    'chat.moreInfo': '더 많은 정보',
    'chat.commonSymptoms': '문의할 수 있는 일반적인 증상:',
    'chat.skinIssues': '피부 문제',
    'chat.hairProblems': '모발 문제',
    'chat.nailConcerns': '손톱 문제',
    'chat.headaches': '두통',
    'chat.coldFlu': '감기 및 독감',
    'chat.footPain': '발 통증',
    'chat.errorMessage': '현재 요청을 처리할 수 없어 죄송합니다. 전문 상담을 위해 Meta Esthetic Thailand의 전문가와 예약을 해주세요.',
    
    // Language Selector
    'lang.english': 'English',
    'lang.korean': '한국어',
    'lang.thai': 'ไทย',
  },
  th: {
    // Hero Section
    'hero.title': 'การวินิจฉัยสุขภาพด้วย AI',
    'hero.subtitle': 'ขับเคลื่อนด้วย AI การแพทย์ขั้นสูง',
    'hero.description': 'อธิบายอาการของคุณและ AI ของเราจะให้การวินิจฉัยเบื้องต้นและช่วยให้คุณนัดหมายที่ Meta Esthetic Thailand',
    'hero.startDiagnosis': 'เริ่มการวินิจฉัย',
    'hero.learnMore': 'เรียนรู้เพิ่มเติม',
    
    // Header
    'header.home': 'หน้าแรก',
    'header.services': 'บริการ',
    'header.about': 'เกี่ยวกับเรา',
    'header.contact': 'ติดต่อ',
    
    // Chat Interface
    'chat.title': 'Meta Esthetic AI Assistant',
    'chat.placeholder': 'อธิบายอาการของคุณ...',
    'chat.welcome': 'สวัสดี! ฉันคือ Meta Esthetic AI Assistant กรุณาอธิบายอาการของคุณ และฉันจะช่วยวินิจฉัยสภาพของคุณและนัดหมายหากจำเป็น',
    'chat.schedulePrompt': 'คุณต้องการนัดหมายที่ Meta Esthetic Thailand เพื่อการปรึกษาแบบมืออาชีพหรือไม่?',
    'chat.scheduleNow': 'นัดหมายตอนนี้',
    'chat.moreInfo': 'ข้อมูลเพิ่มเติม',
    'chat.commonSymptoms': 'อาการทั่วไปที่คุณสามารถสอบถามได้:',
    'chat.skinIssues': 'ปัญหาผิว',
    'chat.hairProblems': 'ปัญหาผม',
    'chat.nailConcerns': 'ปัญหาลูกนัยน์ตา',
    'chat.headaches': 'ปวดหัว',
    'chat.coldFlu': 'ไข้หวัดและไข้หวัดใหญ่',
    'chat.footPain': 'ปวดเท้า',
    'chat.errorMessage': 'ขออภัยที่ปัจจุบันไม่สามารถประมวลผลคำขอของคุณได้ กรุณานัดหมายกับผู้เชี่ยวชาญของเราที่ Meta Esthetic Thailand เพื่อการปรึกษาแบบมืออาชีพ',
    
    // Language Selector
    'lang.english': 'English',
    'lang.korean': '한국어',
    'lang.thai': 'ไทย',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('meta-esthetic-language') as Language;
    if (savedLanguage && ['en', 'ko', 'th'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('meta-esthetic-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

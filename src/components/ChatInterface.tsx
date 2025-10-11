import React, { useEffect, useState, useRef } from 'react';
import { SendIcon, User, Bot, CalendarIcon, InfoIcon } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';
import { SymptomCard } from './SymptomCard';
import { useLanguage } from '../contexts/LanguageContext';

// Helper function to generate AI response using server-side API
const generateResponse = async (message: string, language: string) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, language }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.response || "I apologize, but I'm having trouble processing your request. Please try again or schedule an appointment for a professional consultation.";
  } catch (error) {
    console.error('API error:', error);
    return "I apologize, but I'm currently unable to process your request. Please schedule an appointment with our specialists at Meta Esthetic Thailand for a professional consultation.";
  }
};
export function ChatInterface() {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState([{
    id: 1,
    content: t('chat.welcome'),
    sender: 'ai'
  }]);
  
  // Update welcome message when language changes
  useEffect(() => {
    setMessages([{
      id: 1,
      content: t('chat.welcome'),
      sender: 'ai'
    }]);
  }, [language, t]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const messagesEndRef = useRef(null);
  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: inputValue,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);
    
    try {
      // Generate AI response using OpenAI
      const aiResponse = await generateResponse(currentInput, language);
      const aiMessage = {
        id: messages.length + 2,
        content: aiResponse,
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiMessage]);
      
      // Add appointment suggestion
      setTimeout(() => {
        const appointmentMessage = {
          id: messages.length + 3,
          content: t('chat.schedulePrompt'),
          sender: 'ai',
          isAppointmentPrompt: true
        };
        setMessages(prev => [...prev, appointmentMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage = {
        id: messages.length + 2,
        content: t('chat.errorMessage'),
        sender: 'ai'
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const scrollToBottom = () => {
    (messagesEndRef.current as unknown as HTMLElement)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-pink-100">
        <div className="p-4 bg-gradient-to-r from-pink-100 to-purple-100 flex items-center">
          <div className="w-3 h-3 bg-pink-400 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
          <h2 className="text-lg font-medium text-gray-700 ml-2">
            {t('chat.title')}
          </h2>
        </div>
        {!showAppointment ? <>
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`
                      max-w-[80%] rounded-2xl p-4 
                      ${message.sender === 'user' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm'}
                    `}>
                      <div className="flex items-start mb-1">
                        {message.sender === 'ai' ? <Bot size={16} className="mr-2 text-pink-500 mt-1" /> : <User size={16} className="mr-2 text-white mt-1" />}
                        <span className={`text-xs font-medium ${message.sender === 'user' ? 'text-white' : 'text-pink-500'}`}>
                          {message.sender === 'user' ? 'You' : t('chat.title')}
                        </span>
                      </div>
                      <p>{message.content}</p>
                      {(message as any).isAppointmentPrompt && <div className="mt-3 flex space-x-2">
                          <button onClick={() => setShowAppointment(true)} className="px-3 py-1 bg-pink-500 text-white text-sm rounded-full flex items-center">
                            <CalendarIcon size={14} className="mr-1" /> {t('chat.scheduleNow')}
                          </button>
                          <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full flex items-center">
                            <InfoIcon size={14} className="mr-1" /> {t('chat.moreInfo')}
                          </button>
                        </div>}
                    </div>
                  </div>)}
                {isTyping && <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{
                    animationDelay: '0s'
                  }}></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{
                    animationDelay: '0.2s'
                  }}></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{
                    animationDelay: '0.4s'
                  }}></div>
                      </div>
                    </div>
                  </div>}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <textarea value={inputValue} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder={t('chat.placeholder')} className="flex-grow resize-none border border-gray-200 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" rows={1} />
                <button onClick={handleSendMessage} disabled={inputValue.trim() === '' || isTyping} className={`ml-3 p-3 rounded-full ${inputValue.trim() === '' || isTyping ? 'bg-gray-200 text-gray-500' : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'} flex items-center justify-center`}>
                  <SendIcon size={18} />
                </button>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 bg-white">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                {t('chat.commonSymptoms')}
              </h3>
              <div className="flex flex-wrap gap-2">
                <SymptomCard label={t('chat.skinIssues')} />
                <SymptomCard label={t('chat.hairProblems')} />
                <SymptomCard label={t('chat.nailConcerns')} />
                <SymptomCard label={t('chat.headaches')} />
                <SymptomCard label={t('chat.coldFlu')} />
                <SymptomCard label={t('chat.footPain')} />
              </div>
            </div>
          </> : <AppointmentForm onBack={() => setShowAppointment(false)} />}
      </div>
    </div>;
}
import React, { useEffect, useState, useRef } from 'react';
import { SendIcon, User, Bot, CalendarIcon, InfoIcon } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';
import { SymptomCard } from './SymptomCard';
// Mock diagnosis database
const diagnosisDatabase = {
  headache: 'Based on your description, you might be experiencing a tension headache. This is common and can be caused by stress, dehydration, or eye strain.',
  skin: 'Your skin symptoms could indicate several conditions such as eczema, contact dermatitis, or an allergic reaction.',
  hair: 'Hair loss or thinning can be caused by various factors including hormonal changes, stress, nutritional deficiencies, or certain medical conditions.',
  nails: 'The changes in your nails might be related to fungal infection, nutritional deficiencies, or could be a sign of an underlying health condition.',
  cold: 'Your symptoms align with a common cold or upper respiratory infection, which is typically viral in nature.',
  feet: 'The discomfort in your feet could be related to plantar fasciitis, a fungal infection, or possibly an early sign of arthritis.',
  default: "Based on the symptoms you've described, I recommend scheduling an appointment with our specialists at Meta Esthetic Thailand for a proper diagnosis and treatment plan."
};
// Helper function to generate AI response
const generateResponse = message => {
  const lowerMsg = message.toLowerCase();
  // Check for keywords in the message
  if (lowerMsg.includes('headache') || lowerMsg.includes('head pain') || lowerMsg.includes('migraine')) {
    return diagnosisDatabase.headache;
  } else if (lowerMsg.includes('skin') || lowerMsg.includes('rash') || lowerMsg.includes('acne')) {
    return diagnosisDatabase.skin;
  } else if (lowerMsg.includes('hair') || lowerMsg.includes('baldness') || lowerMsg.includes('thinning')) {
    return diagnosisDatabase.hair;
  } else if (lowerMsg.includes('nail') || lowerMsg.includes('fingernail') || lowerMsg.includes('toenail')) {
    return diagnosisDatabase.nails;
  } else if (lowerMsg.includes('cold') || lowerMsg.includes('flu') || lowerMsg.includes('cough')) {
    return diagnosisDatabase.cold;
  } else if (lowerMsg.includes('foot') || lowerMsg.includes('feet') || lowerMsg.includes('toe')) {
    return diagnosisDatabase.feet;
  } else {
    return diagnosisDatabase.default;
  }
};
export function ChatInterface() {
  const [messages, setMessages] = useState([{
    id: 1,
    content: "Hello! I'm the Meta Esthetic AI assistant. Please describe your symptoms, and I'll help diagnose your condition and schedule an appointment if needed.",
    sender: 'ai'
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const messagesEndRef = useRef(null);
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: inputValue,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    // Simulate AI thinking
    setTimeout(() => {
      // Generate AI response
      const aiResponse = generateResponse(userMessage.content);
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
          content: 'Would you like to schedule an appointment at Meta Esthetic Thailand for a professional consultation?',
          sender: 'ai',
          isAppointmentPrompt: true
        };
        setMessages(prev => [...prev, appointmentMessage]);
        setIsTyping(false);
      }, 1000);
    }, 1500);
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
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
            Meta Esthetic AI Assistant
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
                          {message.sender === 'user' ? 'You' : 'Meta Esthetic AI'}
                        </span>
                      </div>
                      <p>{message.content}</p>
                      {message.isAppointmentPrompt && <div className="mt-3 flex space-x-2">
                          <button onClick={() => setShowAppointment(true)} className="px-3 py-1 bg-pink-500 text-white text-sm rounded-full flex items-center">
                            <CalendarIcon size={14} className="mr-1" /> Schedule
                            Now
                          </button>
                          <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full flex items-center">
                            <InfoIcon size={14} className="mr-1" /> More Info
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
                <textarea value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="Describe your symptoms..." className="flex-grow resize-none border border-gray-200 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" rows={1} />
                <button onClick={handleSendMessage} disabled={inputValue.trim() === '' || isTyping} className={`ml-3 p-3 rounded-full ${inputValue.trim() === '' || isTyping ? 'bg-gray-200 text-gray-500' : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'} flex items-center justify-center`}>
                  <SendIcon size={18} />
                </button>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 bg-white">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Common symptoms you can ask about:
              </h3>
              <div className="flex flex-wrap gap-2">
                <SymptomCard label="Skin Issues" />
                <SymptomCard label="Hair Problems" />
                <SymptomCard label="Nail Concerns" />
                <SymptomCard label="Headaches" />
                <SymptomCard label="Cold & Flu" />
                <SymptomCard label="Foot Pain" />
              </div>
            </div>
          </> : <AppointmentForm onBack={() => setShowAppointment(false)} />}
      </div>
    </div>;
}
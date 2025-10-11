// Client Query Analysis and Response System for Meta Esthetic Thailand
export interface ClientQuery {
  id: string;
  category: 'treatment' | 'pricing' | 'procedure' | 'consultation' | 'symptoms' | 'recovery' | 'general';
  question: string;
  keywords: string[];
  response: string;
  followUpQuestions?: string[];
  relatedServices?: string[];
}

// Comprehensive client query database based on Meta Esthetic Thailand services
export const clientQueries: ClientQuery[] = [
  // Treatment Questions
  {
    id: 'query-001',
    category: 'treatment',
    question: 'How many treatments do I need for freckle removal?',
    keywords: ['freckles', 'freckle removal', 'how many', 'treatments', 'sessions'],
    response: `Freckle removal at Meta Esthetic Thailand typically requires 2-6 treatment sessions depending on freckle depth, skin type, and individual response. Most patients see significant improvement after 2-3 sessions, with complete removal often achieved within 4-6 sessions. Treatment intervals are usually 4-6 weeks apart.`,
    followUpQuestions: [
      'What types of freckle removal treatments do you offer?',
      'How long does each treatment session take?',
      'What is the cost of freckle removal?'
    ],
    relatedServices: ['Laser therapy', 'Chemical peels', 'Topical treatments', 'Skin consultation']
  },
  {
    id: 'query-002',
    category: 'treatment',
    question: 'What treatments do you offer for acne scars?',
    keywords: ['acne scars', 'scar treatment', 'acne', 'scars', 'skin treatment'],
    response: `Meta Esthetic Thailand offers comprehensive acne scar treatment including laser therapy, chemical peels, microneedling, and dermal fillers. Our dermatologists will assess your specific scar type and recommend the most effective treatment combination for optimal results.`,
    followUpQuestions: [
      'How many sessions are needed for acne scar treatment?',
      'What is the recovery time for scar treatment?',
      'Are there any side effects?'
    ],
    relatedServices: ['Laser therapy', 'Chemical peels', 'Microneedling', 'Dermal fillers', 'Dermatology consultation']
  },
  {
    id: 'query-003',
    category: 'treatment',
    question: 'Do you offer Botox treatments?',
    keywords: ['botox', 'botox treatment', 'wrinkles', 'fine lines', 'anti-aging'],
    response: `Yes, Meta Esthetic Thailand offers Botox treatments for wrinkle reduction and anti-aging. Our Botox treatments follow strict safety protocols and are performed by licensed aesthetic physicians. Results typically last 3-6 months and require maintenance treatments.`,
    followUpQuestions: [
      'How long do Botox results last?',
      'What areas can be treated with Botox?',
      'What is the cost of Botox treatment?'
    ],
    relatedServices: ['Botox injection', 'Anti-aging consultation', 'Follow-up care']
  },

  // HBOT Questions
  {
    id: 'query-004',
    category: 'treatment',
    question: 'What is HBOT and how can it help me?',
    keywords: ['HBOT', 'hyperbaric oxygen therapy', 'oxygen therapy', 'healing', 'recovery'],
    response: `HBOT (Hyperbaric Oxygen Therapy) at Meta Esthetic Thailand involves breathing pure oxygen in a pressurized chamber, which increases oxygen delivery to tissues and promotes healing. Our advanced HBOT systems (C750+, FreviveM50, H2MAX, Paramount P1 & P2) are beneficial for wound healing, post-surgical recovery, chronic pain management, and anti-aging treatments.`,
    followUpQuestions: [
      'How many HBOT sessions do I need?',
      'What conditions can HBOT treat?',
      'Are there any side effects of HBOT?'
    ],
    relatedServices: ['HBOT consultation', 'Oxygen therapy session', 'Post-treatment monitoring']
  },
  {
    id: 'query-005',
    category: 'treatment',
    question: 'How many HBOT sessions do I need?',
    keywords: ['HBOT sessions', 'how many', 'hyperbaric oxygen', 'treatment sessions'],
    response: `The number of HBOT sessions needed varies depending on your condition. For chronic wounds, daily sessions for 4-6 weeks are typical. For post-surgical recovery, 3-5 sessions per week for 2-4 weeks. For anti-aging and wellness, 2-3 sessions per week for 6-12 weeks. Our specialists will create a personalized treatment plan during your consultation.`,
    followUpQuestions: [
      'What is the duration of each HBOT session?',
      'What should I expect during HBOT treatment?',
      'How do I prepare for HBOT?'
    ],
    relatedServices: ['HBOT consultation', 'Treatment planning', 'Progress monitoring']
  },

  // Hair Restoration Questions
  {
    id: 'query-006',
    category: 'treatment',
    question: 'Do you offer hair restoration treatments?',
    keywords: ['hair restoration', 'hair loss', 'baldness', 'hair transplant', 'hair treatment'],
    response: `Yes, Meta Esthetic Thailand specializes in advanced hair restoration techniques including FUE (Follicular Unit Extraction), PRP (Platelet-Rich Plasma) therapy, and scalp micropigmentation. Our hair restoration specialists provide comprehensive evaluations and customized treatment plans for both men and women experiencing hair loss.`,
    followUpQuestions: [
      'What is the cost of hair restoration?',
      'How long does hair restoration take?',
      'What is the success rate of hair restoration?'
    ],
    relatedServices: ['Hair evaluation', 'FUE procedure', 'PRP therapy', 'Scalp micropigmentation']
  },
  {
    id: 'query-007',
    category: 'treatment',
    question: 'What is PRP therapy for hair loss?',
    keywords: ['PRP therapy', 'hair loss', 'platelet rich plasma', 'hair treatment'],
    response: `PRP (Platelet-Rich Plasma) therapy at Meta Esthetic Thailand involves using your own blood platelets to stimulate hair growth. The procedure extracts platelets from your blood, concentrates them, and injects them into the scalp to promote natural hair regrowth and improve hair density.`,
    followUpQuestions: [
      'How many PRP sessions are needed?',
      'What is the recovery time for PRP?',
      'When will I see results from PRP?'
    ],
    relatedServices: ['PRP therapy', 'Hair evaluation', 'Follow-up care']
  },

  // Pricing Questions
  {
    id: 'query-008',
    category: 'pricing',
    question: 'How much does freckle removal cost?',
    keywords: ['freckle removal cost', 'pricing', 'price', 'cost', 'freckles'],
    response: `The cost of freckle removal at Meta Esthetic Thailand varies depending on the treatment method, number of sessions needed, and extent of treatment area. We offer competitive pricing with package deals for multiple sessions. Please schedule a consultation for a personalized quote based on your specific needs.`,
    followUpQuestions: [
      'Do you offer payment plans?',
      'What payment methods do you accept?',
      'Are there any package deals available?'
    ],
    relatedServices: ['Skin consultation', 'Treatment planning', 'Payment options']
  },
  {
    id: 'query-009',
    category: 'pricing',
    question: 'What is the cost of HBOT treatment?',
    keywords: ['HBOT cost', 'hyperbaric oxygen therapy price', 'oxygen therapy cost'],
    response: `HBOT treatment costs at Meta Esthetic Thailand depend on the number of sessions, treatment duration, and specific condition being treated. We offer package deals for multiple sessions and various payment options. Contact us for a personalized quote based on your treatment plan.`,
    followUpQuestions: [
      'Do you accept insurance for HBOT?',
      'What payment plans are available?',
      'Are there any discounts for multiple sessions?'
    ],
    relatedServices: ['HBOT consultation', 'Treatment planning', 'Payment options']
  },

  // Procedure Questions
  {
    id: 'query-010',
    category: 'procedure',
    question: 'What should I expect during my first consultation?',
    keywords: ['consultation', 'first visit', 'what to expect', 'appointment'],
    response: `During your first consultation at Meta Esthetic Thailand, our specialists will conduct a thorough assessment of your concerns, review your medical history, discuss treatment options, and create a personalized treatment plan. The consultation typically lasts 30-60 minutes and includes a detailed explanation of recommended procedures.`,
    followUpQuestions: [
      'How should I prepare for my consultation?',
      'What documents should I bring?',
      'How long does a consultation take?'
    ],
    relatedServices: ['Initial consultation', 'Medical assessment', 'Treatment planning']
  },
  {
    id: 'query-011',
    category: 'procedure',
    question: 'How do I prepare for laser treatment?',
    keywords: ['laser treatment preparation', 'prepare for laser', 'laser prep'],
    response: `To prepare for laser treatment at Meta Esthetic Thailand, avoid sun exposure for 2 weeks before treatment, stop using retinoids and exfoliating products 1 week prior, avoid blood-thinning medications and alcohol 24 hours before, and arrive with clean skin. Our team will provide detailed preparation instructions during your consultation.`,
    followUpQuestions: [
      'What should I avoid before laser treatment?',
      'How long should I avoid sun exposure?',
      'What products should I stop using?'
    ],
    relatedServices: ['Laser consultation', 'Pre-treatment instructions', 'Follow-up care']
  },

  // Recovery Questions
  {
    id: 'query-012',
    category: 'recovery',
    question: 'What is the recovery time for laser treatment?',
    keywords: ['laser recovery', 'recovery time', 'laser treatment recovery', 'healing time'],
    response: `Recovery time for laser treatment at Meta Esthetic Thailand varies by treatment type and individual response. Most patients can return to normal activities within 24-48 hours, with complete healing typically occurring within 1-2 weeks. Our team provides detailed post-treatment care instructions to ensure optimal recovery.`,
    followUpQuestions: [
      'What should I avoid during recovery?',
      'How do I care for my skin after laser?',
      'When can I wear makeup again?'
    ],
    relatedServices: ['Post-treatment care', 'Follow-up appointments', 'Recovery monitoring']
  },
  {
    id: 'query-013',
    category: 'recovery',
    question: 'What are the side effects of HBOT?',
    keywords: ['HBOT side effects', 'hyperbaric oxygen side effects', 'oxygen therapy side effects'],
    response: `HBOT at Meta Esthetic Thailand is generally safe with minimal side effects. Some patients may experience ear pressure, temporary vision changes, or fatigue. Our experienced medical team monitors patients throughout treatment to ensure safety. Contraindications include certain lung conditions, pregnancy, and specific medical devices.`,
    followUpQuestions: [
      'How do you manage side effects?',
      'What should I do if I experience side effects?',
      'Are there any long-term side effects?'
    ],
    relatedServices: ['Safety monitoring', 'Side effect management', 'Medical supervision']
  },

  // General Questions
  {
    id: 'query-014',
    category: 'general',
    question: 'Where is Meta Esthetic Thailand located?',
    keywords: ['location', 'address', 'where', 'clinic location', 'Bangkok'],
    response: `Meta Esthetic Thailand is located in Bangkok, Thailand. We are a premier aesthetic and medical clinic specializing in dermatology, aesthetic medicine, hair restoration, and advanced Hyperbaric Oxygen Therapy (HBOT). Our team of board-certified physicians uses the latest technology and follows international safety standards.`,
    followUpQuestions: [
      'What are your clinic hours?',
      'How do I schedule an appointment?',
      'Do you offer virtual consultations?'
    ],
    relatedServices: ['Clinic information', 'Appointment scheduling', 'Virtual consultations']
  },
  {
    id: 'query-015',
    category: 'general',
    question: 'What languages do you speak?',
    keywords: ['languages', 'English', 'Korean', 'Thai', 'communication'],
    response: `Meta Esthetic Thailand provides services in multiple languages including English, Korean, and Thai. Our international team ensures that all patients receive clear communication and understanding of their treatment options, regardless of their preferred language.`,
    followUpQuestions: [
      'Do you have translators available?',
      'Can I bring my own interpreter?',
      'Are your materials available in multiple languages?'
    ],
    relatedServices: ['Multilingual support', 'Translation services', 'International patient care']
  }
];

// Function to find matching client queries
export function findMatchingQuery(userMessage: string): ClientQuery | null {
  const lowerMessage = userMessage.toLowerCase();
  
  // Find exact matches first
  for (const query of clientQueries) {
    if (query.question.toLowerCase().includes(lowerMessage) || 
        lowerMessage.includes(query.question.toLowerCase())) {
      return query;
    }
  }
  
  // Find keyword matches
  for (const query of clientQueries) {
    const keywordMatches = query.keywords.filter(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    );
    
    if (keywordMatches.length >= 2) {
      return query;
    }
  }
  
  // Find single keyword matches with high confidence
  for (const query of clientQueries) {
    const keywordMatches = query.keywords.filter(keyword => 
      lowerMessage.includes(keyword.toLowerCase())
    );
    
    if (keywordMatches.length >= 1) {
      return query;
    }
  }
  
  return null;
}

// Function to generate response based on client query
export function generateClientResponse(userMessage: string): string {
  const matchingQuery = findMatchingQuery(userMessage);
  
  if (matchingQuery) {
    let response = matchingQuery.response;
    
    // Add follow-up questions if available
    if (matchingQuery.followUpQuestions && matchingQuery.followUpQuestions.length > 0) {
      response += '\n\n**You might also want to know:**\n';
      matchingQuery.followUpQuestions.forEach((question, index) => {
        response += `${index + 1}. ${question}\n`;
      });
    }
    
    // Add related services if available
    if (matchingQuery.relatedServices && matchingQuery.relatedServices.length > 0) {
      response += '\n\n**Related Services:**\n';
      response += matchingQuery.relatedServices.join(', ');
    }
    
    response += '\n\n**Next Steps:**\n';
    response += '1. Schedule a consultation with our specialists\n';
    response += '2. Discuss your specific needs and goals\n';
    response += '3. Create a personalized treatment plan\n';
    response += '4. Begin your journey to better health and appearance\n\n';
    response += 'Would you like to schedule a consultation at Meta Esthetic Thailand?';
    
    return response;
  }
  
  // Default response for unmatched queries
  return `Thank you for your interest in Meta Esthetic Thailand. While I don't have specific information about your particular question, our experienced team of specialists can provide detailed answers during a consultation. 

**Meta Esthetic Thailand offers:**
- Advanced dermatology and aesthetic treatments
- Hair restoration services (FUE, PRP, scalp micropigmentation)
- Hyperbaric Oxygen Therapy (HBOT) with state-of-the-art systems
- Botox and dermal filler treatments
- Laser therapy and skin resurfacing
- Chemical peels and microneedling

**To get personalized information:**
1. Schedule a consultation with our specialists
2. Discuss your specific concerns and goals
3. Receive a customized treatment plan
4. Learn about our advanced treatment options

Would you like to schedule a consultation at Meta Esthetic Thailand for a professional evaluation?`;
}

// Function to get all query categories
export function getQueryCategories(): string[] {
  return [...new Set(clientQueries.map(query => query.category))];
}

// Function to get queries by category
export function getQueriesByCategory(category: string): ClientQuery[] {
  return clientQueries.filter(query => query.category === category);
}

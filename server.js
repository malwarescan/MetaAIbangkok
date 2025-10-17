import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
// Embedded client query analysis and response system for Meta Esthetic Thailand
const clientQueries = [
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
function findMatchingQuery(userMessage) {
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
function generateClientResponse(userMessage) {
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

function generateTrainingSystemPrompt(language = 'en') {
  const basePrompts = {
    en: `You are Meta Esthetic AI, a specialized medical assistant for Meta Esthetic Thailand clinic. You have extensive knowledge in aesthetic medicine, dermatology, and general health conditions.

Your role is to:
1. Analyze symptoms thoroughly and provide detailed preliminary assessments
2. Explain possible causes and conditions based on described symptoms
3. Provide specific self-care recommendations and home remedies when appropriate
4. Assess severity and urgency - indicate when immediate medical attention is needed
5. Suggest relevant treatments and procedures available at Meta Esthetic Thailand
6. Always emphasize the importance of professional consultation for definitive diagnosis

Guidelines:
- Be empathetic, professional, and detailed in your responses
- Use medical terminology appropriately but explain in accessible language
- Consider both aesthetic and medical aspects of conditions
- Provide specific recommendations for symptom relief
- Mention relevant Meta Esthetic Thailand services when applicable
- Always recommend professional consultation for proper diagnosis
- Respond in English with comprehensive, helpful information

**IMPORTANT FORMATTING INSTRUCTIONS:**
- Use **bold text** for important points and key recommendations
- Structure information with clear paragraphs separated by double line breaks
- Use bullet points (- or *) for lists of symptoms, recommendations, or treatments
- Keep responses well-organized and easy to read
- Use numbered lists (1., 2., 3.) for step-by-step instructions when appropriate

**TRAINING DATA INTEGRATION:**
- Use the provided Meta Esthetic Thailand information to enhance your responses
- Reference specific services, treatments, and protocols when relevant
- Maintain consistency with clinic standards and procedures
- Always prioritize patient safety and evidence-based recommendations`
  };
  
  return basePrompts[language] || basePrompts.en;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Initialize OpenAI client
let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
  console.log('OpenAI client initialized with API key');
} else {
  console.warn('OPENAI_API_KEY environment variable is not set');
  console.log('Available environment variables:', Object.keys(process.env));
}

// Medical knowledge base
const medicalKnowledge = {
  symptomPatterns: {
    'stuffy nose headache': {
      possibleCauses: ['Sinusitis (acute or chronic)', 'Allergic rhinitis', 'Common cold or viral infection', 'Nasal polyps', 'Deviated septum'],
      severity: 'moderate',
      selfCare: ['Nasal saline irrigation', 'Steam inhalation', 'Adequate hydration', 'Rest and sleep', 'Over-the-counter decongestants (if appropriate)'],
      whenToSeekCare: 'If symptoms persist >7 days, fever >38°C, or severe headache',
      metaEstheticServices: ['ENT consultation', 'Allergy testing', 'Nasal endoscopy', 'Sinus imaging if needed']
    }
  }
};

function analyzeSymptoms(symptoms) {
  const lowerSymptoms = symptoms.toLowerCase();
  
  for (const [pattern, info] of Object.entries(medicalKnowledge.symptomPatterns)) {
    if (lowerSymptoms.includes(pattern)) {
      return {
        analysis: `Based on your symptoms, possible causes include: ${info.possibleCauses.join(', ')}.`,
        severity: info.severity,
        recommendations: info.selfCare,
        urgency: info.severity === 'high' ? 'urgent' : 'routine',
        services: info.metaEstheticServices
      };
    }
  }
  
  return {
    analysis: 'I understand you\'re experiencing symptoms that concern you. While I can provide general guidance, a professional evaluation would be most helpful.',
    severity: 'unknown',
    recommendations: ['Monitor symptoms closely', 'Maintain good general health practices', 'Consider professional consultation'],
    urgency: 'routine',
    services: ['General consultation', 'Health assessment']
  };
}

// API endpoint for AI chat
app.post('/api/chat', async (req, res) => {
  try {
    const { message, language } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Use OpenAI if available, otherwise fall back to rule-based system
    if (openai) {
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are Meta Esthetic AI, an intelligent assistant for Meta Esthetic Thailand, a premium aesthetic clinic specializing in:

- Advanced dermatology and aesthetic treatments
- Hair restoration services (FUE, PRP, scalp micropigmentation)
- Hyperbaric Oxygen Therapy (HBOT) with state-of-the-art systems
- Botox and dermal filler treatments
- Laser therapy and skin resurfacing
- Chemical peels and microneedling
- Anti-aging treatments
- Acne and scar treatment
- Skin rejuvenation

Guidelines:
- Be professional, empathetic, and clinically aware
- Provide helpful information while emphasizing the importance of professional consultation
- Always recommend scheduling a consultation for personalized treatment plans
- Be knowledgeable about aesthetic treatments but never provide medical diagnoses
- Focus on Meta Esthetic Thailand's services and expertise
- Respond in ${language || 'English'} when possible

Remember: You enhance the patient experience by providing intelligent guidance while ensuring they understand the value of professional medical consultation.`
            },
            {
              role: "user",
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        });

        const aiResponse = completion.choices[0].message.content;
        
        // Add Meta Esthetic branding and consultation prompt
        const brandedResponse = `${aiResponse}

**Next Steps:**
Schedule a consultation with our specialists at Meta Esthetic Thailand for personalized treatment planning and professional evaluation.`;

        res.json({ response: brandedResponse });
        return;
      } catch (openaiError) {
        console.error('OpenAI API error:', openaiError);
        // Fall back to rule-based system if OpenAI fails
      }
    }

    // Fallback to rule-based system
    const response = generateClientResponse(message);
    res.json({ response });
  } catch (error) {
    console.error('Response generation error:', error);
    res.status(500).json({ 
      error: "I apologize, but I'm currently unable to process your request. Please schedule an appointment with our specialists at Meta Esthetic Thailand for a professional consultation."
    });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`OpenAI API Key available: ${!!process.env.OPENAI_API_KEY}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});

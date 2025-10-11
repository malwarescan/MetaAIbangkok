import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import { enhancePromptWithTrainingData, generateTrainingSystemPrompt } from './src/utils/aiTrainingSystem.js';

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

    if (!openai) {
      return res.status(500).json({ 
        error: "AI service is currently unavailable. Please set OPENAI_API_KEY environment variable."
      });
    }

    // Enhance prompt with training data
    const enhancedPromptData = enhancePromptWithTrainingData(message, language);
    
    // Analyze symptoms using medical knowledge base
    const symptomAnalysis = analyzeSymptoms(message);
    
    // Create comprehensive enhanced prompt
    const enhancedPrompt = `${enhancedPromptData.enhancedContent}

Based on the medical knowledge base analysis:
- Possible causes: ${symptomAnalysis.analysis}
- Severity level: ${symptomAnalysis.severity}
- Self-care recommendations: ${symptomAnalysis.recommendations.join(', ')}
- Urgency level: ${symptomAnalysis.urgency}
- Relevant Meta Esthetic services: ${symptomAnalysis.services.join(', ')}

Training Data Confidence: ${(enhancedPromptData.confidence * 100).toFixed(1)}%

Please provide a comprehensive response that includes:
1. Detailed analysis of the symptoms
2. Possible causes and explanations
3. Specific self-care recommendations
4. When to seek professional care
5. Relevant Meta Esthetic Thailand services
6. Professional consultation recommendation`;

    // Use the training system to generate system prompts
    const systemPrompts = {
      en: generateTrainingSystemPrompt('en'),

      ko: generateTrainingSystemPrompt('ko'),

      th: generateTrainingSystemPrompt('th')
    };

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompts[language] || systemPrompts.en
        },
        {
          role: "user",
          content: enhancedPrompt
        }
      ],
      max_tokens: 600,
      temperature: 0.3,
    });

    const response = completion.choices[0]?.message?.content || "I apologize, but I'm having trouble processing your request. Please try again or schedule an appointment for a professional consultation.";
    
    res.json({ response });
  } catch (error) {
    console.error('OpenAI API error:', error);
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

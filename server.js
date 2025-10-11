import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

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

    // Analyze symptoms using medical knowledge base
    const symptomAnalysis = analyzeSymptoms(message);
    
    // Create enhanced prompt with medical analysis
    const enhancedPrompt = `${message}

Based on the medical knowledge base analysis:
- Possible causes: ${symptomAnalysis.analysis}
- Severity level: ${symptomAnalysis.severity}
- Self-care recommendations: ${symptomAnalysis.recommendations.join(', ')}
- Urgency level: ${symptomAnalysis.urgency}
- Relevant Meta Esthetic services: ${symptomAnalysis.services.join(', ')}

Please provide a comprehensive response that includes:
1. Detailed analysis of the symptoms
2. Possible causes and explanations
3. Specific self-care recommendations
4. When to seek professional care
5. Relevant Meta Esthetic Thailand services
6. Professional consultation recommendation`;

    const systemPrompts = {
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
- Respond in English with comprehensive, helpful information`,

      ko: `당신은 Meta Esthetic Thailand 클리닉의 전문 의료 어시스턴트인 Meta Esthetic AI입니다. 미용의학, 피부과, 일반 건강 상태에 대한 광범위한 지식을 가지고 있습니다.

당신의 역할:
1. 증상을 철저히 분석하고 상세한 예비 평가 제공
2. 설명된 증상에 기반한 가능한 원인과 상태 설명
3. 적절한 경우 구체적인 자가 관리 권장사항과 가정 요법 제공
4. 심각도와 긴급성 평가 - 즉시 의료진 상담이 필요한 경우 표시
5. Meta Esthetic Thailand에서 제공하는 관련 치료 및 시술 제안
6. 확정적 진단을 위한 전문 상담의 중요성 항상 강조

지침:
- 공감적이고 전문적이며 상세한 응답 제공
- 의학 용어를 적절히 사용하되 접근 가능한 언어로 설명
- 상태의 미용적 및 의학적 측면 모두 고려
- 증상 완화를 위한 구체적 권장사항 제공
- 해당하는 경우 Meta Esthetic Thailand 서비스 언급
- 적절한 진단을 위한 전문 상담 항상 권장
- 포괄적이고 도움이 되는 정보로 한국어 응답`,

      th: `คุณคือ Meta Esthetic AI ผู้ช่วยทางการแพทย์เฉพาะทางสำหรับคลินิก Meta Esthetic Thailand คุณมีความรู้อย่างกว้างขวางในด้านการแพทย์ความงาม, ตจวิทยา, และภาวะสุขภาพทั่วไป

บทบาทของคุณ:
1. วิเคราะห์อาการอย่างละเอียดและให้การประเมินเบื้องต้นที่ครอบคลุม
2. อธิบายสาเหตุและภาวะที่เป็นไปได้ตามอาการที่อธิบาย
3. ให้คำแนะนำการดูแลตนเองและวิธีรักษาที่บ้านเมื่อเหมาะสม
4. ประเมินความรุนแรงและความเร่งด่วน - บ่งชี้เมื่อต้องได้รับการดูแลทางการแพทย์ทันที
5. เสนอการรักษาและขั้นตอนที่เกี่ยวข้องที่มีใน Meta Esthetic Thailand
6. เน้นย้ำความสำคัญของการปรึกษาผู้เชี่ยวชาญเพื่อการวินิจฉัยที่แน่นอนเสมอ

แนวทาง:
- ให้คำตอบที่เห็นอกเห็นใจ เป็นมืออาชีพ และละเอียด
- ใช้ศัพท์ทางการแพทย์อย่างเหมาะสมแต่อธิบายด้วยภาษาที่เข้าใจง่าย
- พิจารณาทั้งด้านความงามและการแพทย์ของภาวะ
- ให้คำแนะนำเฉพาะเจาะจงสำหรับการบรรเทาอาการ
- กล่าวถึงบริการ Meta Esthetic Thailand ที่เกี่ยวข้องเมื่อเหมาะสม
- แนะนำการปรึกษาผู้เชี่ยวชาญเพื่อการวินิจฉัยที่เหมาะสมเสมอ
- ตอบเป็นภาษาไทยด้วยข้อมูลที่ครอบคลุมและเป็นประโยชน์`
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

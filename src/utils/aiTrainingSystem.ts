// AI Training System for Meta Esthetic Thailand
import { trainingData, TrainingData, searchTrainingData, getTrainingDataByCategory } from './trainingData';
import { searchHBOTKnowledge, generateHBOTRecommendation } from './hbotKnowledge';

export interface EnhancedPrompt {
  originalMessage: string;
  relevantTrainingData: TrainingData[];
  enhancedContent: string;
  confidence: number;
}

// Function to enhance AI prompts with training data
export function enhancePromptWithTrainingData(
  message: string, 
  language: string = 'en'
): EnhancedPrompt {
  const lowerMessage = message.toLowerCase();
  
  // Search for relevant training data
  const relevantData = searchTrainingData(message, undefined, language);
  
  // Search HBOT knowledge base
  const hbotResults = searchHBOTKnowledge(message);
  
  // If no specific matches, try category-based search
  let allRelevantData = relevantData;
  if (relevantData.length === 0) {
    // Try different categories
    const categories = ['symptom', 'service', 'treatment', 'faq', 'brand'];
    for (const category of categories) {
      const categoryData = getTrainingDataByCategory(category, language);
      const matches = categoryData.filter(item => 
        item.keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))
      );
      allRelevantData = [...allRelevantData, ...matches];
    }
  }
  
  // Remove duplicates
  const uniqueData = allRelevantData.filter((item, index, self) => 
    index === self.findIndex(t => t.id === item.id)
  );
  
  // Build enhanced content
  let enhancedContent = message;
  
  if (uniqueData.length > 0) {
    enhancedContent += '\n\n**Relevant Meta Esthetic Thailand Information:**\n';
    
    uniqueData.forEach((item, index) => {
      enhancedContent += `\n${index + 1}. **${item.title}**\n`;
      enhancedContent += `${item.content}\n`;
      
      if (item.metadata?.services) {
        enhancedContent += `\nAvailable Services: ${item.metadata.services.join(', ')}\n`;
      }
      
      if (item.metadata?.duration) {
        enhancedContent += `Duration: ${item.metadata.duration}\n`;
      }
    });
  }
  
  // Add HBOT-specific information if relevant
  if (hbotResults.systems.length > 0 || hbotResults.conditions.length > 0) {
    enhancedContent += '\n\n**HBOT (Hyperbaric Oxygen Therapy) Information:**\n';
    
    if (hbotResults.conditions.length > 0) {
      enhancedContent += '\n**Relevant Treatment Conditions:**\n';
      hbotResults.conditions.forEach((condition, index) => {
        enhancedContent += `\n${index + 1}. **${condition.condition}**\n`;
        enhancedContent += `${condition.description}\n`;
        enhancedContent += `Benefits: ${condition.benefits.slice(0, 3).join(', ')}\n`;
        enhancedContent += `Protocol: ${condition.treatmentProtocol}\n`;
      });
    }
    
    if (hbotResults.systems.length > 0) {
      enhancedContent += '\n**Available HBOT Systems:**\n';
      hbotResults.systems.forEach((system, index) => {
        enhancedContent += `\n${index + 1}. **${system.name}**\n`;
        enhancedContent += `${system.description}\n`;
        enhancedContent += `Duration: ${system.duration}\n`;
        enhancedContent += `Applications: ${system.applications.slice(0, 3).join(', ')}\n`;
      });
    }
  }
  
  // Calculate confidence based on relevance
  const confidence = Math.min((uniqueData.length + hbotResults.systems.length + hbotResults.conditions.length) * 0.15, 1.0);
  
  return {
    originalMessage: message,
    relevantTrainingData: uniqueData,
    enhancedContent,
    confidence
  };
}

// Function to generate training-specific system prompts
export function generateTrainingSystemPrompt(language: string = 'en'): string {
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
- Always prioritize patient safety and evidence-based recommendations`,

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
- 포괄적이고 도움이 되는 정보로 한국어 응답

**중요한 서식 지침:**
- 중요한 포인트와 핵심 권장사항에 **굵은 글씨** 사용
- 이중 줄바꿈으로 명확한 단락 구조화
- 증상, 권장사항, 치료법 목록에 불릿 포인트(- 또는 *) 사용
- 응답을 잘 정리하고 읽기 쉽게 유지
- 단계별 지침이 필요한 경우 번호 목록(1., 2., 3.) 사용

**훈련 데이터 통합:**
- 제공된 Meta Esthetic Thailand 정보를 사용하여 응답 향상
- 관련된 경우 특정 서비스, 치료 및 프로토콜 참조
- 클리닉 표준 및 절차와의 일관성 유지
- 항상 환자 안전과 근거 기반 권장사항 우선시`,

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
- ตอบเป็นภาษาไทยด้วยข้อมูลที่ครอบคลุมและเป็นประโยชน์

**คำแนะนำการจัดรูปแบบที่สำคัญ:**
- ใช้ **ตัวหนา** สำหรับประเด็นสำคัญและคำแนะนำหลัก
- จัดโครงสร้างข้อมูลด้วยย่อหน้าที่ชัดเจนแยกด้วยการขึ้นบรรทัดใหม่สองครั้ง
- ใช้จุดสำคัญ (- หรือ *) สำหรับรายการอาการ คำแนะนำ หรือการรักษา
- รักษาการตอบกลับให้เป็นระเบียบและอ่านง่าย
- ใช้รายการหมายเลข (1., 2., 3.) สำหรับคำแนะนำทีละขั้นตอนเมื่อเหมาะสม

**การรวมข้อมูลการฝึกอบรม:**
- ใช้ข้อมูล Meta Esthetic Thailand ที่ให้มาเพื่อปรับปรุงการตอบกลับ
- อ้างอิงบริการเฉพาะ การรักษา และโปรโตคอลเมื่อเกี่ยวข้อง
- รักษาความสอดคล้องกับมาตรฐานและขั้นตอนของคลินิก
- ให้ความสำคัญกับความปลอดภัยของผู้ป่วยและคำแนะนำที่อิงหลักฐานเสมอ`
  };
  
  return basePrompts[language as keyof typeof basePrompts] || basePrompts.en;
}

// Function to validate training data
export function validateTrainingData(data: TrainingData): string[] {
  const errors: string[] = [];
  
  if (!data.id) errors.push('ID is required');
  if (!data.category) errors.push('Category is required');
  if (!data.language) errors.push('Language is required');
  if (!data.title) errors.push('Title is required');
  if (!data.content) errors.push('Content is required');
  if (!data.keywords || data.keywords.length === 0) errors.push('Keywords are required');
  
  const validCategories = ['service', 'symptom', 'treatment', 'procedure', 'faq', 'brand'];
  if (!validCategories.includes(data.category)) {
    errors.push(`Invalid category. Must be one of: ${validCategories.join(', ')}`);
  }
  
  const validLanguages = ['en', 'ko', 'th'];
  if (!validLanguages.includes(data.language)) {
    errors.push(`Invalid language. Must be one of: ${validLanguages.join(', ')}`);
  }
  
  return errors;
}

// Function to add new training data
export function addTrainingData(newData: TrainingData): { success: boolean; errors: string[] } {
  const errors = validateTrainingData(newData);
  
  if (errors.length > 0) {
    return { success: false, errors };
  }
  
  // In a real implementation, this would save to a database
  // For now, we'll just return success
  return { success: true, errors: [] };
}

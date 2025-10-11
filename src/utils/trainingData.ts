// Training data structure for Meta Esthetic Thailand AI
export interface TrainingData {
  id: string;
  category: 'service' | 'symptom' | 'treatment' | 'procedure' | 'faq' | 'brand';
  language: 'en' | 'ko' | 'th';
  title: string;
  content: string;
  keywords: string[];
  metadata?: {
    severity?: 'low' | 'moderate' | 'high' | 'emergency';
    urgency?: 'routine' | 'urgent' | 'emergency';
    services?: string[];
    contraindications?: string[];
    duration?: string;
    cost?: string;
  };
}

// Expanded training data for Meta Esthetic Thailand
export const trainingData: TrainingData[] = [
  // Services and Procedures
  {
    id: 'service-001',
    category: 'service',
    language: 'en',
    title: 'Dermatology Consultation',
    content: `Meta Esthetic Thailand offers comprehensive dermatology consultations for various skin conditions including acne, eczema, psoriasis, and skin cancer screening. Our board-certified dermatologists provide thorough skin examinations using advanced diagnostic tools and create personalized treatment plans tailored to each patient's needs.`,
    keywords: ['dermatology', 'skin consultation', 'skin examination', 'acne', 'eczema', 'psoriasis'],
    metadata: {
      duration: '30-45 minutes',
      services: ['Skin examination', 'Diagnostic testing', 'Treatment planning']
    }
  },
  {
    id: 'service-002',
    category: 'service',
    language: 'en',
    title: 'Aesthetic Treatments',
    content: `Our aesthetic medicine services include Botox injections, dermal fillers, laser treatments, chemical peels, and microneedling. All procedures are performed by licensed aesthetic physicians using FDA-approved products and state-of-the-art equipment. We prioritize patient safety and natural-looking results.`,
    keywords: ['botox', 'dermal fillers', 'laser treatment', 'chemical peel', 'microneedling', 'aesthetic'],
    metadata: {
      duration: '30-90 minutes',
      services: ['Consultation', 'Treatment', 'Follow-up care']
    }
  },
  {
    id: 'service-003',
    category: 'service',
    language: 'en',
    title: 'Hair Restoration',
    content: `Meta Esthetic Thailand specializes in advanced hair restoration techniques including FUE (Follicular Unit Extraction), PRP (Platelet-Rich Plasma) therapy, and scalp micropigmentation. Our hair restoration specialists provide comprehensive evaluations and customized treatment plans for both men and women experiencing hair loss.`,
    keywords: ['hair loss', 'hair restoration', 'FUE', 'PRP', 'scalp micropigmentation', 'baldness'],
    metadata: {
      duration: '2-8 hours',
      services: ['Hair evaluation', 'Surgical procedure', 'Post-operative care']
    }
  },

  // Symptoms and Conditions
  {
    id: 'symptom-001',
    category: 'symptom',
    language: 'en',
    title: 'Chronic Acne',
    content: `Chronic acne is a persistent skin condition that can significantly impact self-esteem and quality of life. At Meta Esthetic Thailand, we offer comprehensive acne treatment including topical medications, oral antibiotics, hormonal therapy, chemical peels, and laser treatments. Our dermatologists work with patients to develop long-term management strategies.`,
    keywords: ['acne', 'pimples', 'breakouts', 'skin inflammation', 'sebum', 'hormonal acne'],
    metadata: {
      severity: 'moderate',
      urgency: 'routine',
      services: ['Dermatology consultation', 'Acne treatment', 'Skin care planning']
    }
  },
  {
    id: 'symptom-002',
    category: 'symptom',
    language: 'en',
    title: 'Hair Thinning',
    content: `Hair thinning can occur due to various factors including genetics, hormonal changes, stress, and medical conditions. Our hair restoration specialists at Meta Esthetic Thailand provide thorough evaluations to determine the underlying cause and recommend appropriate treatments such as PRP therapy, topical medications, or surgical options.`,
    keywords: ['hair loss', 'thinning hair', 'baldness', 'alopecia', 'hair shedding'],
    metadata: {
      severity: 'moderate',
      urgency: 'routine',
      services: ['Hair evaluation', 'PRP therapy', 'Hair restoration consultation']
    }
  },

  // Treatment Protocols
  {
    id: 'treatment-001',
    category: 'treatment',
    language: 'en',
    title: 'Botox Treatment Protocol',
    content: `Botox treatments at Meta Esthetic Thailand follow strict safety protocols. The procedure involves injecting small amounts of botulinum toxin into specific facial muscles to reduce wrinkles and fine lines. Treatment areas include forehead lines, crow's feet, and frown lines. Results typically last 3-6 months and require maintenance treatments.`,
    keywords: ['botox', 'wrinkles', 'fine lines', 'forehead', 'crow\'s feet', 'frown lines'],
    metadata: {
      duration: '15-30 minutes',
      services: ['Consultation', 'Botox injection', 'Follow-up']
    }
  },
  {
    id: 'treatment-002',
    category: 'treatment',
    language: 'en',
    title: 'Laser Skin Resurfacing',
    content: `Laser skin resurfacing at Meta Esthetic Thailand uses advanced laser technology to improve skin texture, reduce scars, and treat various skin conditions. The procedure involves controlled laser energy to remove damaged skin layers, promoting collagen production and skin renewal. Recovery time varies depending on the treatment intensity.`,
    keywords: ['laser', 'skin resurfacing', 'scars', 'skin texture', 'collagen', 'skin renewal'],
    metadata: {
      duration: '30-60 minutes',
      services: ['Skin evaluation', 'Laser treatment', 'Post-treatment care']
    }
  },

  // FAQ and Common Questions
  {
    id: 'faq-001',
    category: 'faq',
    language: 'en',
    title: 'How to Prepare for Aesthetic Treatment',
    content: `Before any aesthetic treatment at Meta Esthetic Thailand, patients should avoid blood-thinning medications, alcohol, and smoking for at least 24 hours. A thorough consultation is required to assess suitability and discuss expectations. Patients should arrive with clean skin and avoid sun exposure prior to treatment.`,
    keywords: ['preparation', 'aesthetic treatment', 'consultation', 'medications', 'alcohol', 'smoking'],
    metadata: {
      services: ['Pre-treatment consultation', 'Treatment preparation']
    }
  },
  {
    id: 'faq-002',
    category: 'faq',
    language: 'en',
    title: 'Post-Treatment Care Instructions',
    content: `After aesthetic treatments, patients should follow specific care instructions including avoiding sun exposure, using gentle skincare products, and attending follow-up appointments. Swelling and bruising may occur and typically resolve within 1-2 weeks. Our medical team provides detailed post-treatment care guidelines.`,
    keywords: ['post-treatment', 'care instructions', 'swelling', 'bruising', 'follow-up', 'skincare'],
    metadata: {
      services: ['Post-treatment care', 'Follow-up appointments']
    }
  },

  // HBOT and Specialized Treatments
  {
    id: 'treatment-003',
    category: 'treatment',
    language: 'en',
    title: 'Hyperbaric Oxygen Therapy (HBOT)',
    content: `Meta Esthetic Thailand offers advanced Hyperbaric Oxygen Therapy (HBOT) using state-of-the-art equipment including C750+, FreviveM50, H2MAX, Paramount P1, and Paramount P2 systems. HBOT involves breathing pure oxygen in a pressurized chamber, which increases oxygen delivery to tissues and promotes healing. This treatment is beneficial for wound healing, tissue repair, anti-aging, and various medical conditions.`,
    keywords: ['HBOT', 'hyperbaric oxygen therapy', 'oxygen therapy', 'tissue repair', 'wound healing', 'anti-aging'],
    metadata: {
      duration: '60-120 minutes',
      services: ['HBOT consultation', 'Oxygen therapy session', 'Post-treatment monitoring'],
      contraindications: ['Pregnancy', 'Certain lung conditions', 'Ear problems']
    }
  },
  {
    id: 'treatment-004',
    category: 'treatment',
    language: 'en',
    title: 'HBOT C750+ System',
    content: `The C750+ is our advanced hyperbaric oxygen therapy system designed for optimal patient comfort and safety. This system provides precise pressure control and monitoring, ensuring effective treatment delivery. The C750+ is particularly effective for chronic wound healing, post-surgical recovery, and anti-aging treatments.`,
    keywords: ['C750+', 'HBOT system', 'pressure control', 'wound healing', 'surgical recovery'],
    metadata: {
      duration: '90-120 minutes',
      services: ['System consultation', 'HBOT session', 'Safety monitoring']
    }
  },
  {
    id: 'treatment-005',
    category: 'treatment',
    language: 'en',
    title: 'FreviveM50 HBOT Treatment',
    content: `The FreviveM50 system at Meta Esthetic Thailand offers specialized hyperbaric oxygen therapy with enhanced safety features and patient comfort. This system is designed for various medical applications including tissue regeneration, immune system enhancement, and recovery from sports injuries.`,
    keywords: ['FreviveM50', 'tissue regeneration', 'immune system', 'sports injuries', 'recovery'],
    metadata: {
      duration: '60-90 minutes',
      services: ['Treatment planning', 'HBOT session', 'Recovery monitoring']
    }
  },
  {
    id: 'treatment-006',
    category: 'treatment',
    language: 'en',
    title: 'H2MAX Hyperbaric Therapy',
    content: `The H2MAX system provides cutting-edge hyperbaric oxygen therapy with advanced monitoring capabilities. This system is particularly effective for treating chronic conditions, promoting cellular regeneration, and enhancing overall wellness. The H2MAX system ensures precise oxygen delivery and optimal therapeutic outcomes.`,
    keywords: ['H2MAX', 'cellular regeneration', 'chronic conditions', 'wellness', 'oxygen delivery'],
    metadata: {
      duration: '75-105 minutes',
      services: ['Comprehensive assessment', 'HBOT treatment', 'Progress monitoring']
    }
  },
  {
    id: 'treatment-007',
    category: 'treatment',
    language: 'en',
    title: 'Paramount P1 & P2 HBOT Systems',
    content: `Meta Esthetic Thailand utilizes both Paramount P1 and P2 hyperbaric oxygen therapy systems, each designed for specific treatment protocols. The Paramount systems offer superior patient comfort with advanced safety features and precise pressure management. These systems are effective for various conditions including post-surgical recovery, chronic pain management, and anti-aging treatments.`,
    keywords: ['Paramount P1', 'Paramount P2', 'pressure management', 'chronic pain', 'post-surgical recovery'],
    metadata: {
      duration: '60-120 minutes',
      services: ['System selection', 'HBOT treatment', 'Safety protocols']
    }
  },

  // HBOT Medical Applications
  {
    id: 'symptom-003',
    category: 'symptom',
    language: 'en',
    title: 'Chronic Wounds and Slow Healing',
    content: `Chronic wounds that fail to heal properly can benefit significantly from Hyperbaric Oxygen Therapy (HBOT). At Meta Esthetic Thailand, our HBOT systems increase oxygen delivery to damaged tissues, promote angiogenesis, and enhance the body's natural healing processes. This treatment is particularly effective for diabetic ulcers, pressure sores, and post-surgical wounds.`,
    keywords: ['chronic wounds', 'slow healing', 'diabetic ulcers', 'pressure sores', 'post-surgical wounds', 'angiogenesis'],
    metadata: {
      severity: 'moderate',
      urgency: 'routine',
      services: ['HBOT consultation', 'Wound assessment', 'Oxygen therapy treatment']
    }
  },
  {
    id: 'symptom-004',
    category: 'symptom',
    language: 'en',
    title: 'Post-Surgical Recovery',
    content: `Post-surgical recovery can be enhanced with Hyperbaric Oxygen Therapy at Meta Esthetic Thailand. HBOT promotes faster healing, reduces inflammation, and minimizes scarring. Our advanced HBOT systems are particularly beneficial for cosmetic surgery recovery, orthopedic procedures, and general post-operative healing.`,
    keywords: ['post-surgical recovery', 'surgery recovery', 'healing', 'inflammation', 'scarring', 'cosmetic surgery'],
    metadata: {
      severity: 'moderate',
      urgency: 'routine',
      services: ['Recovery assessment', 'HBOT treatment planning', 'Post-operative care']
    }
  },
  {
    id: 'symptom-005',
    category: 'symptom',
    language: 'en',
    title: 'Chronic Pain and Inflammation',
    content: `Chronic pain and inflammation can be effectively managed with Hyperbaric Oxygen Therapy at Meta Esthetic Thailand. HBOT reduces inflammation, promotes tissue repair, and can provide significant pain relief for various conditions including arthritis, fibromyalgia, and sports injuries. Our HBOT systems deliver therapeutic oxygen levels that support the body's natural healing processes.`,
    keywords: ['chronic pain', 'inflammation', 'arthritis', 'fibromyalgia', 'sports injuries', 'pain relief'],
    metadata: {
      severity: 'moderate',
      urgency: 'routine',
      services: ['Pain assessment', 'HBOT treatment', 'Pain management planning']
    }
  },

  // HBOT FAQ and Guidelines
  {
    id: 'faq-003',
    category: 'faq',
    language: 'en',
    title: 'HBOT Treatment Preparation',
    content: `Before HBOT treatment at Meta Esthetic Thailand, patients should avoid alcohol and smoking for 24 hours, remove all jewelry and metal objects, and wear comfortable cotton clothing. A thorough medical evaluation is required to assess suitability for hyperbaric oxygen therapy. Patients with certain medical conditions may require additional clearance from their primary physician.`,
    keywords: ['HBOT preparation', 'hyperbaric therapy', 'medical evaluation', 'treatment guidelines', 'safety protocols'],
    metadata: {
      services: ['Pre-treatment consultation', 'Medical clearance', 'Safety assessment']
    }
  },
  {
    id: 'faq-004',
    category: 'faq',
    language: 'en',
    title: 'HBOT Treatment Process',
    content: `During HBOT treatment at Meta Esthetic Thailand, patients enter a pressurized chamber where they breathe pure oxygen. The treatment typically lasts 60-120 minutes depending on the condition being treated. Our advanced monitoring systems ensure patient safety throughout the session. Patients can relax, read, or listen to music during treatment.`,
    keywords: ['HBOT process', 'oxygen chamber', 'treatment duration', 'monitoring', 'patient comfort'],
    metadata: {
      duration: '60-120 minutes',
      services: ['Treatment session', 'Safety monitoring', 'Patient support']
    }
  },
  {
    id: 'faq-005',
    category: 'faq',
    language: 'en',
    title: 'HBOT Side Effects and Safety',
    content: `HBOT at Meta Esthetic Thailand is generally safe with minimal side effects. Some patients may experience ear pressure, temporary vision changes, or fatigue. Our experienced medical team monitors patients throughout treatment to ensure safety. Contraindications include certain lung conditions, pregnancy, and specific medical devices.`,
    keywords: ['HBOT safety', 'side effects', 'ear pressure', 'vision changes', 'contraindications', 'medical monitoring'],
    metadata: {
      services: ['Safety monitoring', 'Side effect management', 'Medical supervision']
    }
  },

  // Korean HBOT Training Data
  {
    id: 'treatment-003-ko',
    category: 'treatment',
    language: 'ko',
    title: '고압산소치료 (HBOT)',
    content: `Meta Esthetic Thailand는 C750+, FreviveM50, H2MAX, Paramount P1, Paramount P2 시스템을 포함한 최첨단 장비를 사용하여 고급 고압산소치료(HBOT)를 제공합니다. HBOT는 가압된 챔버에서 순수 산소를 호흡하는 치료로, 조직에 산소 공급을 증가시키고 치유를 촉진합니다. 이 치료는 상처 치유, 조직 재생, 안티에이징 및 다양한 의학적 상태에 유익합니다.`,
    keywords: ['HBOT', '고압산소치료', '산소치료', '조직재생', '상처치유', '안티에이징'],
    metadata: {
      duration: '60-120분',
      services: ['HBOT 상담', '산소치료 세션', '치료 후 모니터링'],
      contraindications: ['임신', '특정 폐 질환', '귀 문제']
    }
  },
  {
    id: 'symptom-003-ko',
    category: 'symptom',
    language: 'ko',
    title: '만성 상처 및 느린 치유',
    content: `제대로 치유되지 않는 만성 상처는 고압산소치료(HBOT)로 크게 도움을 받을 수 있습니다. Meta Esthetic Thailand의 HBOT 시스템은 손상된 조직에 산소 공급을 증가시키고, 혈관신생을 촉진하며, 신체의 자연 치유 과정을 향상시킵니다. 이 치료는 당뇨성 궤양, 욕창, 수술 후 상처에 특히 효과적입니다.`,
    keywords: ['만성상처', '느린치유', '당뇨성궤양', '욕창', '수술후상처', '혈관신생'],
    metadata: {
      severity: 'moderate',
      urgency: 'routine',
      services: ['HBOT 상담', '상처 평가', '산소치료']
    }
  },

  // Thai HBOT Training Data
  {
    id: 'treatment-003-th',
    category: 'treatment',
    language: 'th',
    title: 'การบำบัดด้วยออกซิเจนความดันสูง (HBOT)',
    content: `Meta Esthetic Thailand ให้บริการการบำบัดด้วยออกซิเจนความดันสูง (HBOT) ขั้นสูงโดยใช้อุปกรณ์ล่าสุด รวมถึงระบบ C750+, FreviveM50, H2MAX, Paramount P1 และ Paramount P2 การบำบัด HBOT เกี่ยวข้องกับการหายใจออกซิเจนบริสุทธิ์ในห้องที่มีความดัน ซึ่งเพิ่มการส่งออกซิเจนไปยังเนื้อเยื่อและส่งเสริมการรักษา การรักษานี้มีประโยชน์ต่อการรักษาบาดแผล การซ่อมแซมเนื้อเยื่อ การต่อต้านริ้วรอย และภาวะทางการแพทย์ต่างๆ`,
    keywords: ['HBOT', 'การบำบัดด้วยออกซิเจนความดันสูง', 'การบำบัดด้วยออกซิเจน', 'การซ่อมแซมเนื้อเยื่อ', 'การรักษาบาดแผล', 'การต่อต้านริ้วรอย'],
    metadata: {
      duration: '60-120 นาที',
      services: ['การปรึกษา HBOT', 'เซสชั่นการบำบัดด้วยออกซิเจน', 'การติดตามหลังการรักษา'],
      contraindications: ['การตั้งครรภ์', 'ภาวะปอดบางอย่าง', 'ปัญหาเกี่ยวกับหู']
    }
  },
  {
    id: 'symptom-003-th',
    category: 'symptom',
    language: 'th',
    title: 'บาดแผลเรื้อรังและการรักษาช้า',
    content: `บาดแผลเรื้อรังที่ไม่หายดีสามารถได้รับประโยชน์อย่างมากจากการบำบัดด้วยออกซิเจนความดันสูง (HBOT) ที่ Meta Esthetic Thailand ระบบ HBOT ของเราช่วยเพิ่มการส่งออกซิเจนไปยังเนื้อเยื่อที่เสียหาย ส่งเสริมการสร้างหลอดเลือดใหม่ และเพิ่มกระบวนการรักษาตามธรรมชาติของร่างกาย การรักษานี้มีประสิทธิภาพเป็นพิเศษสำหรับแผลเบาหวาน แผลกดทับ และบาดแผลหลังการผ่าตัด`,
    keywords: ['บาดแผลเรื้อรัง', 'การรักษาช้า', 'แผลเบาหวาน', 'แผลกดทับ', 'บาดแผลหลังการผ่าตัด', 'การสร้างหลอดเลือดใหม่'],
    metadata: {
      severity: 'moderate',
      urgency: 'routine',
      services: ['การปรึกษา HBOT', 'การประเมินบาดแผล', 'การบำบัดด้วยออกซิเจน']
    }
  },

  // Brand and Clinic Information
  {
    id: 'brand-001',
    category: 'brand',
    language: 'en',
    title: 'Meta Esthetic Thailand Overview',
    content: `Meta Esthetic Thailand is a premier aesthetic and medical clinic located in Bangkok, Thailand. We specialize in dermatology, aesthetic medicine, hair restoration, and advanced Hyperbaric Oxygen Therapy (HBOT). Our team of board-certified physicians uses the latest technology including C750+, FreviveM50, H2MAX, and Paramount HBOT systems, following international safety standards to provide exceptional care to both local and international patients.`,
    keywords: ['Meta Esthetic Thailand', 'Bangkok', 'aesthetic clinic', 'dermatology', 'hair restoration', 'HBOT', 'hyperbaric oxygen therapy'],
    metadata: {
      services: ['Comprehensive medical services', 'Advanced HBOT systems', 'International standards', 'Board-certified physicians']
    }
  }
];

// Function to search training data
export function searchTrainingData(query: string, category?: string, language: string = 'en'): TrainingData[] {
  const lowerQuery = query.toLowerCase();
  
  return trainingData.filter(item => {
    if (category && item.category !== category) return false;
    if (item.language !== language) return false;
    
    return (
      item.title.toLowerCase().includes(lowerQuery) ||
      item.content.toLowerCase().includes(lowerQuery) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
    );
  });
}

// Function to get training data by ID
export function getTrainingDataById(id: string): TrainingData | undefined {
  return trainingData.find(item => item.id === id);
}

// Function to get all categories
export function getTrainingCategories(): string[] {
  return [...new Set(trainingData.map(item => item.category))];
}

// Function to get training data by category
export function getTrainingDataByCategory(category: string, language: string = 'en'): TrainingData[] {
  return trainingData.filter(item => item.category === category && item.language === language);
}

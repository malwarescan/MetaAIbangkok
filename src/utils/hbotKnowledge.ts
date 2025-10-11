// HBOT (Hyperbaric Oxygen Therapy) Knowledge Base for Meta Esthetic Thailand
export interface HBOTSystem {
  name: string;
  model: string;
  description: string;
  applications: string[];
  duration: string;
  features: string[];
  contraindications: string[];
}

export interface HBOTCondition {
  condition: string;
  description: string;
  benefits: string[];
  treatmentProtocol: string;
  expectedOutcomes: string[];
  precautions: string[];
}

// HBOT Systems Available at Meta Esthetic Thailand
export const hbotSystems: HBOTSystem[] = [
  {
    name: 'C750+',
    model: 'C750+',
    description: 'Advanced hyperbaric oxygen therapy system designed for optimal patient comfort and safety with precise pressure control and monitoring.',
    applications: [
      'Chronic wound healing',
      'Post-surgical recovery',
      'Anti-aging treatments',
      'Tissue regeneration',
      'Immune system enhancement'
    ],
    duration: '90-120 minutes',
    features: [
      'Precise pressure control',
      'Advanced monitoring systems',
      'Patient comfort optimization',
      'Safety protocols',
      'Real-time data logging'
    ],
    contraindications: [
      'Pregnancy',
      'Untreated pneumothorax',
      'Certain medications',
      'Ear problems',
      'Claustrophobia'
    ]
  },
  {
    name: 'FreviveM50',
    model: 'FreviveM50',
    description: 'Specialized hyperbaric oxygen therapy system with enhanced safety features and patient comfort for various medical applications.',
    applications: [
      'Tissue regeneration',
      'Immune system enhancement',
      'Sports injury recovery',
      'Chronic fatigue syndrome',
      'Post-traumatic stress disorder'
    ],
    duration: '60-90 minutes',
    features: [
      'Enhanced safety features',
      'Patient comfort optimization',
      'Advanced monitoring',
      'Flexible treatment protocols',
      'Comprehensive reporting'
    ],
    contraindications: [
      'Pregnancy',
      'Active infections',
      'Certain heart conditions',
      'Ear problems',
      'Recent eye surgery'
    ]
  },
  {
    name: 'H2MAX',
    model: 'H2MAX',
    description: 'Cutting-edge hyperbaric oxygen therapy system with advanced monitoring capabilities for treating chronic conditions and promoting cellular regeneration.',
    applications: [
      'Chronic conditions',
      'Cellular regeneration',
      'Overall wellness',
      'Chronic pain management',
      'Neurological conditions'
    ],
    duration: '75-105 minutes',
    features: [
      'Advanced monitoring capabilities',
      'Precise oxygen delivery',
      'Optimal therapeutic outcomes',
      'Comprehensive assessment tools',
      'Progress tracking'
    ],
    contraindications: [
      'Pregnancy',
      'Certain lung conditions',
      'Active bleeding',
      'Ear problems',
      'Recent surgery'
    ]
  },
  {
    name: 'Paramount P1',
    model: 'Paramount P1',
    description: 'First-generation Paramount hyperbaric oxygen therapy system offering superior patient comfort with advanced safety features.',
    applications: [
      'Post-surgical recovery',
      'Chronic pain management',
      'Anti-aging treatments',
      'Wound healing',
      'Recovery enhancement'
    ],
    duration: '60-120 minutes',
    features: [
      'Superior patient comfort',
      'Advanced safety features',
      'Precise pressure management',
      'Comfortable seating',
      'Entertainment options'
    ],
    contraindications: [
      'Pregnancy',
      'Untreated pneumothorax',
      'Certain medications',
      'Ear problems',
      'Claustrophobia'
    ]
  },
  {
    name: 'Paramount P2',
    model: 'Paramount P2',
    description: 'Second-generation Paramount hyperbaric oxygen therapy system with enhanced features and improved treatment protocols.',
    applications: [
      'Advanced wound healing',
      'Post-surgical recovery',
      'Chronic pain management',
      'Anti-aging treatments',
      'Performance enhancement'
    ],
    duration: '60-120 minutes',
    features: [
      'Enhanced treatment protocols',
      'Improved safety systems',
      'Better patient experience',
      'Advanced monitoring',
      'Flexible scheduling'
    ],
    contraindications: [
      'Pregnancy',
      'Active infections',
      'Certain heart conditions',
      'Ear problems',
      'Recent eye surgery'
    ]
  }
];

// HBOT Treatment Conditions and Applications
export const hbotConditions: HBOTCondition[] = [
  {
    condition: 'Chronic Wounds',
    description: 'Non-healing wounds that fail to respond to conventional treatment methods.',
    benefits: [
      'Increased oxygen delivery to tissues',
      'Enhanced angiogenesis (new blood vessel formation)',
      'Improved collagen synthesis',
      'Reduced inflammation',
      'Enhanced immune response'
    ],
    treatmentProtocol: 'Daily sessions for 4-6 weeks, 60-120 minutes per session',
    expectedOutcomes: [
      'Improved wound healing rates',
      'Reduced infection risk',
      'Better tissue quality',
      'Faster recovery time',
      'Reduced scarring'
    ],
    precautions: [
      'Monitor for signs of oxygen toxicity',
      'Assess for contraindications',
      'Regular wound assessment',
      'Patient education on wound care',
      'Follow-up appointments'
    ]
  },
  {
    condition: 'Post-Surgical Recovery',
    description: 'Enhancing recovery after surgical procedures through increased oxygen delivery.',
    benefits: [
      'Faster healing process',
      'Reduced inflammation',
      'Minimized scarring',
      'Enhanced tissue repair',
      'Improved overall recovery'
    ],
    treatmentProtocol: 'Begin 24-48 hours post-surgery, 3-5 sessions per week for 2-4 weeks',
    expectedOutcomes: [
      'Reduced recovery time',
      'Improved surgical outcomes',
      'Better cosmetic results',
      'Reduced complications',
      'Enhanced patient satisfaction'
    ],
    precautions: [
      'Wait for surgical clearance',
      'Monitor for surgical complications',
      'Assess wound healing progress',
      'Coordinate with surgical team',
      'Patient comfort assessment'
    ]
  },
  {
    condition: 'Chronic Pain and Inflammation',
    description: 'Managing chronic pain and inflammation through oxygen therapy.',
    benefits: [
      'Reduced inflammation',
      'Improved tissue repair',
      'Enhanced circulation',
      'Reduced pain perception',
      'Improved quality of life'
    ],
    treatmentProtocol: '3-5 sessions per week for 4-8 weeks, 60-90 minutes per session',
    expectedOutcomes: [
      'Significant pain reduction',
      'Improved mobility',
      'Reduced medication dependency',
      'Better sleep quality',
      'Enhanced daily functioning'
    ],
    precautions: [
      'Assess pain levels regularly',
      'Monitor for side effects',
      'Coordinate with pain management team',
      'Patient education on pain management',
      'Regular follow-up assessments'
    ]
  },
  {
    condition: 'Anti-Aging and Wellness',
    description: 'Promoting overall wellness and anti-aging through oxygen therapy.',
    benefits: [
      'Enhanced cellular regeneration',
      'Improved skin quality',
      'Increased energy levels',
      'Better sleep quality',
      'Enhanced overall wellness'
    ],
    treatmentProtocol: '2-3 sessions per week for 6-12 weeks, 60-90 minutes per session',
    expectedOutcomes: [
      'Improved skin texture',
      'Reduced signs of aging',
      'Increased energy levels',
      'Better sleep quality',
      'Enhanced overall well-being'
    ],
    precautions: [
      'Assess overall health status',
      'Monitor for any adverse effects',
      'Coordinate with wellness team',
      'Patient education on lifestyle factors',
      'Regular wellness assessments'
    ]
  }
];

// Function to get HBOT system by name
export function getHBOTSystem(systemName: string): HBOTSystem | undefined {
  return hbotSystems.find(system => 
    system.name.toLowerCase().includes(systemName.toLowerCase()) ||
    system.model.toLowerCase().includes(systemName.toLowerCase())
  );
}

// Function to get HBOT condition by name
export function getHBOTCondition(conditionName: string): HBOTCondition | undefined {
  return hbotConditions.find(condition => 
    condition.condition.toLowerCase().includes(conditionName.toLowerCase())
  );
}

// Function to search HBOT knowledge base
export function searchHBOTKnowledge(query: string): {
  systems: HBOTSystem[];
  conditions: HBOTCondition[];
} {
  const lowerQuery = query.toLowerCase();
  
  const matchingSystems = hbotSystems.filter(system => 
    system.name.toLowerCase().includes(lowerQuery) ||
    system.model.toLowerCase().includes(lowerQuery) ||
    system.description.toLowerCase().includes(lowerQuery) ||
    system.applications.some(app => app.toLowerCase().includes(lowerQuery)) ||
    system.features.some(feature => feature.toLowerCase().includes(lowerQuery))
  );
  
  const matchingConditions = hbotConditions.filter(condition => 
    condition.condition.toLowerCase().includes(lowerQuery) ||
    condition.description.toLowerCase().includes(lowerQuery) ||
    condition.benefits.some(benefit => benefit.toLowerCase().includes(lowerQuery)) ||
    condition.expectedOutcomes.some(outcome => outcome.toLowerCase().includes(lowerQuery))
  );
  
  return {
    systems: matchingSystems,
    conditions: matchingConditions
  };
}

// Function to generate HBOT treatment recommendation
export function generateHBOTRecommendation(symptoms: string, language: string = 'en'): string {
  const searchResults = searchHBOTKnowledge(symptoms);
  
  if (searchResults.systems.length === 0 && searchResults.conditions.length === 0) {
    return `Based on your symptoms, Hyperbaric Oxygen Therapy (HBOT) at Meta Esthetic Thailand may be beneficial. Our advanced HBOT systems including C750+, FreviveM50, H2MAX, and Paramount P1/P2 can help with various conditions including wound healing, post-surgical recovery, chronic pain, and anti-aging treatments.`;
  }
  
  let recommendation = `Based on your symptoms, Hyperbaric Oxygen Therapy (HBOT) at Meta Esthetic Thailand may be beneficial:\n\n`;
  
  if (searchResults.conditions.length > 0) {
    recommendation += `**Recommended Treatment Conditions:**\n`;
    searchResults.conditions.forEach(condition => {
      recommendation += `- **${condition.condition}**: ${condition.description}\n`;
      recommendation += `  Benefits: ${condition.benefits.slice(0, 3).join(', ')}\n`;
      recommendation += `  Protocol: ${condition.treatmentProtocol}\n\n`;
    });
  }
  
  if (searchResults.systems.length > 0) {
    recommendation += `**Available HBOT Systems:**\n`;
    searchResults.systems.forEach(system => {
      recommendation += `- **${system.name}**: ${system.description}\n`;
      recommendation += `  Duration: ${system.duration}\n`;
      recommendation += `  Applications: ${system.applications.slice(0, 3).join(', ')}\n\n`;
    });
  }
  
  recommendation += `**Next Steps:**\n`;
  recommendation += `1. Schedule a consultation with our HBOT specialists\n`;
  recommendation += `2. Complete a medical evaluation to assess suitability\n`;
  recommendation += `3. Develop a personalized treatment plan\n`;
  recommendation += `4. Begin your HBOT treatment journey\n\n`;
  recommendation += `Our experienced medical team will ensure your safety and optimal outcomes throughout your HBOT treatment.`;
  
  return recommendation;
}

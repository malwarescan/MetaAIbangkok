// Medical knowledge base for common conditions and symptoms
export const medicalKnowledge = {
  // Common symptom patterns and their possible causes
  symptomPatterns: {
    'stuffy nose headache': {
      possibleCauses: [
        'Sinusitis (acute or chronic)',
        'Allergic rhinitis',
        'Common cold or viral infection',
        'Nasal polyps',
        'Deviated septum'
      ],
      severity: 'moderate',
      selfCare: [
        'Nasal saline irrigation',
        'Steam inhalation',
        'Adequate hydration',
        'Rest and sleep',
        'Over-the-counter decongestants (if appropriate)'
      ],
      whenToSeekCare: 'If symptoms persist >7 days, fever >38°C, or severe headache',
      metaEstheticServices: [
        'ENT consultation',
        'Allergy testing',
        'Nasal endoscopy',
        'Sinus imaging if needed'
      ]
    },
    'migraine headache': {
      possibleCauses: [
        'Migraine disorder',
        'Tension headache',
        'Cluster headache',
        'Hormonal changes',
        'Stress or environmental triggers'
      ],
      severity: 'moderate',
      selfCare: [
        'Rest in dark, quiet room',
        'Cold compress on forehead',
        'Hydration',
        'Avoid trigger foods',
        'Stress management techniques'
      ],
      whenToSeekCare: 'If headache is severe, sudden onset, or accompanied by neurological symptoms',
      metaEstheticServices: [
        'Neurological consultation',
        'Headache management program',
        'Stress management therapy',
        'Botulinum toxin therapy for chronic migraines'
      ]
    },
    'skin rash': {
      possibleCauses: [
        'Contact dermatitis',
        'Atopic dermatitis (eczema)',
        'Psoriasis',
        'Allergic reaction',
        'Fungal infection'
      ],
      severity: 'mild',
      selfCare: [
        'Gentle skin care',
        'Moisturize regularly',
        'Avoid irritants',
        'Cool compresses',
        'Over-the-counter hydrocortisone (if appropriate)'
      ],
      whenToSeekCare: 'If rash spreads, becomes infected, or doesn\'t improve with self-care',
      metaEstheticServices: [
        'Dermatological consultation',
        'Skin patch testing',
        'Phototherapy',
        'Advanced skin treatments'
      ]
    },
    'hair loss': {
      possibleCauses: [
        'Androgenetic alopecia',
        'Telogen effluvium',
        'Alopecia areata',
        'Nutritional deficiencies',
        'Hormonal imbalances'
      ],
      severity: 'moderate',
      selfCare: [
        'Gentle hair care',
        'Balanced nutrition',
        'Stress management',
        'Avoid harsh chemicals',
        'Scalp massage'
      ],
      whenToSeekCare: 'If hair loss is rapid, patchy, or accompanied by other symptoms',
      metaEstheticServices: [
        'Hair restoration consultation',
        'PRP therapy',
        'Hair transplant evaluation',
        'Scalp analysis',
        'Nutritional assessment'
      ]
    }
  },

  // Emergency symptoms that require immediate attention
  emergencySymptoms: [
    'severe chest pain',
    'difficulty breathing',
    'sudden severe headache',
    'loss of consciousness',
    'severe abdominal pain',
    'signs of stroke',
    'severe allergic reaction',
    'high fever with rash'
  ],

  // Meta Esthetic Thailand services
  services: {
    dermatology: [
      'Acne treatment',
      'Anti-aging treatments',
      'Laser therapy',
      'Chemical peels',
      'Microneedling',
      'Dermal fillers',
      'Botulinum toxin injections'
    ],
    hair: [
      'Hair restoration',
      'PRP therapy',
      'Hair transplant',
      'Scalp treatments',
      'Hair loss prevention'
    ],
    wellness: [
      'Nutritional counseling',
      'Stress management',
      'Sleep optimization',
      'Hormone balancing',
      'Detox programs'
    ],
    medical: [
      'General health checkups',
      'Chronic disease management',
      'Preventive care',
      'Health optimization'
    ]
  }
};

// Function to analyze symptoms and provide recommendations
export function analyzeSymptoms(symptoms: string): {
  analysis: string;
  severity: string;
  recommendations: string[];
  urgency: string;
  services: string[];
} {
  const lowerSymptoms = symptoms.toLowerCase();
  
  // Check for emergency symptoms
  const isEmergency = medicalKnowledge.emergencySymptoms.some(emergency => 
    lowerSymptoms.includes(emergency)
  );
  
  if (isEmergency) {
    return {
      analysis: 'These symptoms may indicate a medical emergency. Please seek immediate medical attention.',
      severity: 'high',
      recommendations: ['Seek immediate medical care', 'Call emergency services if severe'],
      urgency: 'immediate',
      services: ['Emergency medical care']
    };
  }
  
  // Check for known symptom patterns
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
  
  // General analysis for unknown symptoms
  return {
    analysis: 'I understand you\'re experiencing symptoms that concern you. While I can provide general guidance, a professional evaluation would be most helpful.',
    severity: 'unknown',
    recommendations: [
      'Monitor symptoms closely',
      'Maintain good general health practices',
      'Consider professional consultation'
    ],
    urgency: 'routine',
    services: ['General consultation', 'Health assessment']
  };
}

<?php
/**
 * API Controller for MetaEsthAI PHP Version
 * Handles chat functionality and other API endpoints
 */

class ApiController
{
    private $clientQueries;
    
    public function __construct()
    {
        $this->clientQueries = $this->getClientQueries();
    }
    
    public function handleChat()
    {
        // Set JSON header
        header('Content-Type: application/json');
        
        // Handle CORS
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit;
        }
        
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            exit;
        }
        
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input || !isset($input['message'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Message is required']);
            exit;
        }
        
        $message = $input['message'];
        $language = $input['language'] ?? 'en';
        
        try {
            $response = $this->generateClientResponse($message, $language);
            echo json_encode(['response' => $response]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'error' => "I apologize, but I'm currently unable to process your request. Please schedule an appointment with our specialists at Meta Esthetic Thailand for a professional consultation."
            ]);
        }
    }
    
    private function generateClientResponse($userMessage, $language = 'en')
    {
        $matchingQuery = $this->findMatchingQuery($userMessage);
        
        if ($matchingQuery) {
            $response = $matchingQuery['response'];
            
            // Add follow-up questions if available
            if (!empty($matchingQuery['followUpQuestions'])) {
                $response .= "\n\n**You might also want to know:**\n";
                foreach ($matchingQuery['followUpQuestions'] as $index => $question) {
                    $response .= ($index + 1) . ". $question\n";
                }
            }
            
            // Add related services if available
            if (!empty($matchingQuery['relatedServices'])) {
                $response .= "\n\n**Related Services:**\n";
                $response .= implode(', ', $matchingQuery['relatedServices']);
            }
            
            $response .= "\n\n**Next Steps:**\n";
            $response .= "1. Schedule a consultation with our specialists\n";
            $response .= "2. Discuss your specific needs and goals\n";
            $response .= "3. Create a personalized treatment plan\n";
            $response .= "4. Begin your journey to better health and appearance\n\n";
            $response .= "Would you like to schedule a consultation at Meta Esthetic Thailand?";
            
            return $response;
        }
        
        // Default response for unmatched queries
        return "Thank you for your interest in Meta Esthetic Thailand. While I don't have specific information about your particular question, our experienced team of specialists can provide detailed answers during a consultation. 

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

Would you like to schedule a consultation at Meta Esthetic Thailand for a professional evaluation?";
    }
    
    private function findMatchingQuery($userMessage)
    {
        $lowerMessage = strtolower($userMessage);
        
        // Find exact matches first
        foreach ($this->clientQueries as $query) {
            if (strpos(strtolower($query['question']), $lowerMessage) !== false || 
                strpos($lowerMessage, strtolower($query['question'])) !== false) {
                return $query;
            }
        }
        
        // Find keyword matches
        foreach ($this->clientQueries as $query) {
            $keywordMatches = array_filter($query['keywords'], function($keyword) use ($lowerMessage) {
                return strpos($lowerMessage, strtolower($keyword)) !== false;
            });
            
            if (count($keywordMatches) >= 2) {
                return $query;
            }
        }
        
        // Find single keyword matches with high confidence
        foreach ($this->clientQueries as $query) {
            $keywordMatches = array_filter($query['keywords'], function($keyword) use ($lowerMessage) {
                return strpos($lowerMessage, strtolower($keyword)) !== false;
            });
            
            if (count($keywordMatches) >= 1) {
                return $query;
            }
        }
        
        return null;
    }
    
    private function getClientQueries()
    {
        return [
            [
                'id' => 'query-001',
                'category' => 'treatment',
                'question' => 'How many treatments do I need for freckle removal?',
                'keywords' => ['freckles', 'freckle removal', 'how many', 'treatments', 'sessions'],
                'response' => 'Freckle removal at Meta Esthetic Thailand typically requires 2-6 treatment sessions depending on freckle depth, skin type, and individual response. Most patients see significant improvement after 2-3 sessions, with complete removal often achieved within 4-6 sessions. Treatment intervals are usually 4-6 weeks apart.',
                'followUpQuestions' => [
                    'What types of freckle removal treatments do you offer?',
                    'How long does each treatment session take?',
                    'What is the cost of freckle removal?'
                ],
                'relatedServices' => ['Laser therapy', 'Chemical peels', 'Topical treatments', 'Skin consultation']
            ],
            [
                'id' => 'query-002',
                'category' => 'treatment',
                'question' => 'What treatments do you offer for acne scars?',
                'keywords' => ['acne scars', 'scar treatment', 'acne', 'scars', 'skin treatment'],
                'response' => 'Meta Esthetic Thailand offers comprehensive acne scar treatment including laser therapy, chemical peels, microneedling, and dermal fillers. Our dermatologists will assess your specific scar type and recommend the most effective treatment combination for optimal results.',
                'followUpQuestions' => [
                    'How many sessions are needed for acne scar treatment?',
                    'What is the recovery time for scar treatment?',
                    'Are there any side effects?'
                ],
                'relatedServices' => ['Laser therapy', 'Chemical peels', 'Microneedling', 'Dermal fillers', 'Dermatology consultation']
            ],
            [
                'id' => 'query-003',
                'category' => 'treatment',
                'question' => 'Do you offer Botox treatments?',
                'keywords' => ['botox', 'botox treatment', 'wrinkles', 'fine lines', 'anti-aging'],
                'response' => 'Yes, Meta Esthetic Thailand offers Botox treatments for wrinkle reduction and anti-aging. Our Botox treatments follow strict safety protocols and are performed by licensed aesthetic physicians. Results typically last 3-6 months and require maintenance treatments.',
                'followUpQuestions' => [
                    'How long do Botox results last?',
                    'What areas can be treated with Botox?',
                    'What is the cost of Botox treatment?'
                ],
                'relatedServices' => ['Botox injection', 'Anti-aging consultation', 'Follow-up care']
            ],
            [
                'id' => 'query-004',
                'category' => 'treatment',
                'question' => 'What is HBOT and how can it help me?',
                'keywords' => ['HBOT', 'hyperbaric oxygen therapy', 'oxygen therapy', 'healing', 'recovery'],
                'response' => 'HBOT (Hyperbaric Oxygen Therapy) at Meta Esthetic Thailand involves breathing pure oxygen in a pressurized chamber, which increases oxygen delivery to tissues and promotes healing. Our advanced HBOT systems (C750+, FreviveM50, H2MAX, Paramount P1 & P2) are beneficial for wound healing, post-surgical recovery, chronic pain management, and anti-aging treatments.',
                'followUpQuestions' => [
                    'How many HBOT sessions do I need?',
                    'What conditions can HBOT treat?',
                    'Are there any side effects of HBOT?'
                ],
                'relatedServices' => ['HBOT consultation', 'Oxygen therapy session', 'Post-treatment monitoring']
            ],
            [
                'id' => 'query-005',
                'category' => 'treatment',
                'question' => 'How many HBOT sessions do I need?',
                'keywords' => ['HBOT sessions', 'how many', 'hyperbaric oxygen', 'treatment sessions'],
                'response' => 'The number of HBOT sessions needed varies depending on your condition. For chronic wounds, daily sessions for 4-6 weeks are typical. For post-surgical recovery, 3-5 sessions per week for 2-4 weeks. For anti-aging and wellness, 2-3 sessions per week for 6-12 weeks. Our specialists will create a personalized treatment plan during your consultation.',
                'followUpQuestions' => [
                    'What is the duration of each HBOT session?',
                    'What should I expect during HBOT treatment?',
                    'How do I prepare for HBOT?'
                ],
                'relatedServices' => ['HBOT consultation', 'Treatment planning', 'Progress monitoring']
            ]
        ];
    }
}
?>

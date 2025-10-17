<?php
/**
 * Home Controller for MetaEsthAI PHP Version
 */

class HomeController
{
    private $language;
    
    public function __construct()
    {
        $this->language = $_SESSION['language'] ?? DEFAULT_LANGUAGE;
    }
    
    public function index()
    {
        $data = [
            'title' => $this->getTranslation('hero.title'),
            'subtitle' => $this->getTranslation('hero.subtitle'),
            'description' => $this->getTranslation('hero.description'),
            'startDiagnosis' => $this->getTranslation('hero.startDiagnosis'),
            'learnMore' => $this->getTranslation('hero.learnMore'),
            'currentLanguage' => $this->language,
            'supportedLanguages' => SUPPORTED_LANGUAGES
        ];
        
        $this->render('home/index', $data);
    }
    
    public function services()
    {
        $data = [
            'title' => $this->getTranslation('services.title'),
            'currentLanguage' => $this->language,
            'supportedLanguages' => SUPPORTED_LANGUAGES
        ];
        
        $this->render('home/services', $data);
    }
    
    public function about()
    {
        $data = [
            'title' => $this->getTranslation('about.title'),
            'currentLanguage' => $this->language,
            'supportedLanguages' => SUPPORTED_LANGUAGES
        ];
        
        $this->render('home/about', $data);
    }
    
    public function contact()
    {
        $data = [
            'title' => $this->getTranslation('contact.title'),
            'currentLanguage' => $this->language,
            'supportedLanguages' => SUPPORTED_LANGUAGES
        ];
        
        $this->render('home/contact', $data);
    }
    
    private function getTranslation($key)
    {
        $translations = $this->getTranslations();
        return $translations[$key] ?? $key;
    }
    
    private function getTranslations()
    {
        $translations = [
            'en' => [
                'hero.title' => 'AI-Powered Aesthetic Medicine Consultation',
                'hero.subtitle' => 'Advanced AI Diagnosis & Treatment Planning',
                'hero.description' => 'Get personalized aesthetic medicine recommendations powered by advanced AI technology. Our system analyzes your symptoms and provides professional guidance for your aesthetic journey.',
                'hero.startDiagnosis' => 'Start AI Diagnosis',
                'hero.learnMore' => 'Learn More',
                'services.title' => 'Our Services',
                'about.title' => 'About MetaEsthAI',
                'contact.title' => 'Contact Us'
            ],
            'th' => [
                'hero.title' => 'การปรึกษาเวชศาสตร์ความงามด้วย AI',
                'hero.subtitle' => 'การวินิจฉัยด้วย AI ขั้นสูงและการวางแผนการรักษา',
                'hero.description' => 'รับคำแนะนำเวชศาสตร์ความงามส่วนบุคคลที่ขับเคลื่อนด้วยเทคโนโลยี AI ขั้นสูง ระบบของเราวิเคราะห์อาการของคุณและให้คำแนะนำจากผู้เชี่ยวชาญสำหรับการเดินทางด้านความงามของคุณ',
                'hero.startDiagnosis' => 'เริ่มการวินิจฉัยด้วย AI',
                'hero.learnMore' => 'เรียนรู้เพิ่มเติม',
                'services.title' => 'บริการของเรา',
                'about.title' => 'เกี่ยวกับ MetaEsthAI',
                'contact.title' => 'ติดต่อเรา'
            ],
            'ko' => [
                'hero.title' => 'AI 기반 미용의학 상담',
                'hero.subtitle' => '고급 AI 진단 및 치료 계획',
                'hero.description' => '고급 AI 기술로 구동되는 개인화된 미용의학 추천을 받으세요. 우리 시스템은 귀하의 증상을 분석하고 미용 여정에 대한 전문적인 지침을 제공합니다.',
                'hero.startDiagnosis' => 'AI 진단 시작',
                'hero.learnMore' => '더 알아보기',
                'services.title' => '우리 서비스',
                'about.title' => 'MetaEsthAI 소개',
                'contact.title' => '문의하기'
            ]
        ];
        
        return $translations[$this->language] ?? $translations['en'];
    }
    
    private function render($view, $data = [])
    {
        extract($data);
        include SRC_PATH . '/views/layouts/main.php';
    }
}
?>

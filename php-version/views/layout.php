<?php
  // Required vars:
  // $langCode: 'en' | 'th' | 'ko'
  // $title, $desc: localized strings
  // $content: page body
  // $baseUrl: absolute base like 'https://metaesthetic.com'
  $langCode = $langCode ?? 'en';
  $title    = $title    ?? 'Meta Esthetic — Clinic Intelligence In Your Palm';
  $desc     = $desc     ?? 'Dual AI for clients and doctors: refined, clinical, empathetic.';
  $baseUrl  = $baseUrl  ?? 'https://metaesthetic.com';

  $localePaths = [
    'en' => $baseUrl . '/en/',
    'th' => $baseUrl . '/th/',
    'ko' => $baseUrl . '/kr/',
  ];
?>
<!doctype html>
<html lang="<?= htmlspecialchars($langCode) ?>" class="h-full scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?= htmlspecialchars($title) ?></title>
  <meta name="description" content="<?= htmlspecialchars($desc) ?>" />

  <!-- hreflang -->
  <link rel="alternate" hreflang="en" href="<?= htmlspecialchars($localePaths['en']) ?>" />
  <link rel="alternate" hreflang="th" href="<?= htmlspecialchars($localePaths['th']) ?>" />
  <link rel="alternate" hreflang="ko" href="<?= htmlspecialchars($localePaths['ko']) ?>" />
  <link rel="alternate" hreflang="x-default" href="<?= htmlspecialchars($baseUrl . '/') ?>" />

  <!-- Fonts + CSS -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/app.css?v=<?= time() ?>" />
</head>
<body class="min-h-full bg-me-silver text-me-graphite antialiased [font-family:Inter,ui-sans-serif,system-ui]">
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
    <div class="max-w-7xl mx-auto px-4 py-2 md:py-3 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-0">
      <!-- Language switch -->
      <nav class="flex items-center gap-4">
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='en'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['en']) ?>">EN</a>
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='th'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['th']) ?>">TH</a>
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='ko'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['ko']) ?>">KR</a>
      </nav>

      
    </div>
  </header>

  <main class="space-y-8 md:space-y-16">
    <?= $content ?? '' ?>
  </main>

  <footer class="border-t border-black/5 bg-white dark:bg-neutral-900 dark:border-neutral-700">
    <div class="max-w-7xl mx-auto px-4 py-8 text-sm text-black/60 dark:text-neutral-400 text-center">
      <p>© <?= date('Y') ?> Meta Esthetic — Clinic Intelligence In Your Palm</p>
      <p class="mt-1">AI Language Model Powered by <a href="https://www.nrlc.ai" class="text-blue-600 hover:underline dark:text-blue-400">nrlc.ai</a></p>
    </div>
  </footer>

  <script src="/node_modules/preline/dist/preline.js" defer></script>
  
  <!-- Tailwind arbitrary class keeper + inline fallback for hero min-height -->
  <div class="hidden min-h-[72dvh] md:min-h-screen"></div>
  <script>
    // If your CSS build doesn't include min-h-[72dvh] yet, this inline fallback helps:
    document.querySelectorAll('[data-hero]').forEach(el=>{
      el.style.minHeight = '72dvh';
    });
  </script>
  
  </script>

  <script>
  // Chat functionality
    document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const sendBtn = document.getElementById('send-btn');
    const uploadBtn = document.getElementById('upload-btn');
    const micBtn = document.getElementById('mic-btn');
    
    if (chatInput) {
      // Handle Enter key press
      chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          sendMessage();
        }
      });

      if (sendBtn) {
        sendBtn.addEventListener('click', function() {
          sendMessage();
        });
      }
      
      // Handle click on buttons
      if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
          addMessage('system', 'File upload feature coming soon!');
        });
      }
      
      if (micBtn) {
        micBtn.addEventListener('click', function() {
          startVoiceRecognition();
        });
      }
    }
    
    function addMessage(type, content) {
      // Show chat messages container
      chatMessages.classList.remove('hidden');
      
      // Create message element
      const messageDiv = document.createElement('div');
      messageDiv.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'}`;
      
      const messageContent = document.createElement('div');
      messageContent.className = `max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
        type === 'user' 
          ? 'bg-me-core text-white' 
          : type === 'ai'
          ? 'bg-gray-100 text-gray-800'
          : 'bg-yellow-100 text-yellow-800'
      }`;
      
      // Format content with line breaks
      const formattedContent = content.replace(/\n/g, '<br>');
      messageContent.innerHTML = formattedContent;
      
      messageDiv.appendChild(messageContent);
      chatMessages.appendChild(messageDiv);
      
      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function sendMessage() {
      const message = chatInput.value.trim();
      if (!message) return;
      
      // Add user message to chat
      addMessage('user', message);
      
      // Show loading state
      chatInput.disabled = true;
      chatInput.placeholder = 'Thinking...';
      
      // Add typing indicator
      const typingDiv = document.createElement('div');
      typingDiv.className = 'flex justify-start';
      typingDiv.innerHTML = '<div class="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl"><div class="flex space-x-1"><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div></div></div>';
      chatMessages.appendChild(typingDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // Choose endpoint: Node in dev, PHP in prod
      const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
      const endpoint = isLocal ? 'http://localhost:3000/api/chat' : '/api/chat.php';

      // Send to API
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message })
      })
      .then(response => response.json())
      .then(data => {
        // Remove typing indicator
        typingDiv.remove();
        
        // Add AI response
        addMessage('ai', data.response);
        
        // Reset input
        chatInput.value = '';
        chatInput.disabled = false;
        chatInput.placeholder = 'Ask me anything...';
        chatInput.focus();
      })
      .catch(error => {
        console.error('Error:', error);
        
        // Remove typing indicator
        typingDiv.remove();
        
        // Add error message
        addMessage('system', 'Sorry, there was an error. Please try again.');
        
        // Reset input
        chatInput.disabled = false;
        chatInput.placeholder = 'Ask me anything...';
        chatInput.focus();
        });
    }
    
    // Voice recognition functionality
    let recognition = null;
    let isListening = false;
    
    function startVoiceRecognition() {
      // Check if browser supports speech recognition
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        addMessage('system', 'Voice recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
        return;
      }
      
      // Initialize speech recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      
      // Configure recognition settings
      recognition.continuous = false;
      recognition.interimResults = false;
      
      // Detect language from current page
      const currentLang = document.documentElement.lang || 'en';
      const langMap = {
        'en': 'en-US',
        'th': 'th-TH', 
        'ko': 'ko-KR',
        'zh': 'zh-CN'
      };
      recognition.lang = langMap[currentLang] || 'en-US';
      
      // Visual feedback - change button appearance
      const micBtn = document.getElementById('mic-btn');
      if (micBtn) {
        micBtn.classList.add('bg-red-500', 'text-white');
        micBtn.classList.remove('bg-gray-100', 'text-gray-500');
      }
      
      // Add listening message with language info
      const langName = {
        'en-US': 'English',
        'th-TH': 'Thai', 
        'ko-KR': 'Korean',
        'zh-CN': 'Chinese'
      };
      addMessage('system', `🎤 Listening in ${langName[recognition.lang]}... Speak now!`);
      
      // Start recognition
      recognition.start();
      isListening = true;
      
      // Handle results
      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        console.log('Voice input:', transcript);
        
        // Update chat input with voice transcript
        chatInput.value = transcript;
        
        // Automatically send the message
        sendMessage();
        
        // Reset button appearance
        resetMicButton();
      };
      
      // Handle errors
      recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        
        let errorMessage = 'Voice recognition error. ';
        switch(event.error) {
          case 'no-speech':
            errorMessage += 'No speech detected. Please try again.';
            break;
          case 'audio-capture':
            errorMessage += 'No microphone found. Please check your microphone.';
            break;
          case 'not-allowed':
            errorMessage += 'Microphone permission denied. Please allow microphone access.';
            break;
          case 'network':
            errorMessage += 'Network error. Please check your connection.';
            break;
          default:
            errorMessage += 'Please try again.';
        }
        
        addMessage('system', errorMessage);
        resetMicButton();
      };
      
      // Handle end of recognition
      recognition.onend = function() {
        isListening = false;
        resetMicButton();
      };
    }
    
    function resetMicButton() {
      const micBtn = document.getElementById('mic-btn');
      if (micBtn) {
        micBtn.classList.remove('bg-red-500', 'text-white');
        micBtn.classList.add('bg-gray-100', 'text-gray-500');
      }
    }
    
    // Stop recognition if user clicks again while listening
    function stopVoiceRecognition() {
      if (recognition && isListening) {
        recognition.stop();
        isListening = false;
        resetMicButton();
        addMessage('system', 'Voice recognition stopped.');
      }
      }
    });
  </script>
</body>
</html>
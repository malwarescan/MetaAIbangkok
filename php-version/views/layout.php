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
    <div class="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-center">
      <!-- Language switch -->
      <nav class="flex items-center gap-4">
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='en'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['en']) ?>">EN</a>
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='th'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['th']) ?>">TH</a>
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='ko'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['ko']) ?>">KR</a>
      </nav>
      
      <!-- Language Rotator (Header) -->
      <div id="hero-rotator"
           class="w-full md:w-auto mt-2 md:mt-0 md:ml-6 text-xs md:text-sm text-black/70 tracking-tight
                  overflow-hidden select-none">
        <span id="rot-text"
              class="inline-block transition-all duration-200 ease-in-out
                     opacity-100 translate-y-0"
              aria-live="polite">
          <!-- Fallback text if JS disabled -->
          Intelligent AI for Doctors and Patients
        </span>
      </div>
    </div>
  </header>

  <main class="space-y-10 md:space-y-16">
    <?= $content ?? '' ?>
  </main>

  <footer class="border-t border-black/5 bg-white">
    <div class="max-w-7xl mx-auto px-4 py-10 text-sm text-black/60">
      © <?= date('Y') ?> Meta Esthetic — Clinic Intelligence In Your Palm
    </div>
  </footer>

  <script src="/node_modules/preline/dist/preline.js"></script>
  
  <script>
  (function () {
    // Taglines in four languages (edit copy here anytime)
    const phrases = [
      {
        lang: "en",
        text:
          "Intelligent AI for Doctors and Patients"
      },
      {
        lang: "th",
        text:
          "เอไออัจฉริยะสำหรับแพทย์และผู้ป่วย"
      },
      {
        lang: "ko",
        text:
          "의사와 환자를 위한 지능형 AI"
      },
      {
        lang: "zh",
        text:
          "医生与患者的智能 AI"
      }
    ];

    const startLang = "<?= isset($langCode) ? htmlspecialchars($langCode) : 'en' ?>";
    let idx = Math.max(0, phrases.findIndex(p => p.lang === startLang));
    const wrap = document.getElementById("hero-rotator");
    const el = document.getElementById("rot-text");
    if (!wrap || !el) return;

    function setText(i) {
      el.setAttribute("lang", phrases[i].lang);
      el.textContent = phrases[i].text;
    }

    // Initial text
    setText(idx);

    let timer = null;
    const DUR = 3500; // change every 3.5s
    const FADE = 200; // fade transition ms (matches Tailwind classes)

    function next() {
      // fade out
      el.classList.add("opacity-0", "translate-y-1");
      setTimeout(() => {
        idx = (idx + 1) % phrases.length;
        setText(idx);
        // fade in
        el.classList.remove("opacity-0", "translate-y-1");
      }, FADE);
    }

    function start() {
      if (timer) return;
      timer = setInterval(next, DUR);
    }
    function stop() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }

    // Pause on hover/focus for readability
    wrap.addEventListener("mouseenter", stop);
    wrap.addEventListener("mouseleave", start);
    wrap.addEventListener("focusin", stop);
    wrap.addEventListener("focusout", start);

    // Respect user reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return; // don't auto-rotate
    start();
  })();

  // Hero Section Language Rotator
  (function () {
    const heroTitles = [
      {
        lang: "en",
        title: "Intelligent AI for Doctors and Patients",
        subtitle: "Dual intelligence for clients and doctors — precise, empathetic, and clinically aware."
      },
      {
        lang: "th",
        title: "เอไออัจฉริยะสำหรับแพทย์และผู้ป่วย",
        subtitle: "ระบบคู่ขนานสำหรับผู้รับบริการและแพทย์ — ทั้งแม่นยำ อบอุ่น และเข้าใจการรักษา"
      },
      {
        lang: "ko",
        title: "의사와 환자를 위한 지능형 AI",
        subtitle: "환자와 의사를 아우르는 듀얼 인텔리전스 — 정밀함과 공감을 동시에"
      },
      {
        lang: "zh",
        title: "医生与患者的智能 AI",
        subtitle: "为患者和医生提供双重智能 — 精准、贴心、临床感知"
      }
    ];

    const startLang = "<?= isset($langCode) ? htmlspecialchars($langCode) : 'en' ?>";
    let idx = Math.max(0, heroTitles.findIndex(p => p.lang === startLang));
    const titleEl = document.getElementById("hero-title-rotator");
    const subtitleEl = document.getElementById("hero-subtitle-rotator");
    
    if (!titleEl || !subtitleEl) return;

    function setHeroText(i) {
      titleEl.setAttribute("lang", heroTitles[i].lang);
      titleEl.textContent = heroTitles[i].title;
      subtitleEl.setAttribute("lang", heroTitles[i].lang);
      subtitleEl.textContent = heroTitles[i].subtitle;
    }

    // Initial text
    setHeroText(idx);

    let timer = null;
    const DUR = 4000; // change every 4s
    const FADE = 300; // fade transition ms

    function next() {
      // fade out
      titleEl.classList.add("opacity-0", "translate-y-2");
      subtitleEl.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => {
        idx = (idx + 1) % heroTitles.length;
        setHeroText(idx);
        // fade in
        titleEl.classList.remove("opacity-0", "translate-y-2");
        subtitleEl.classList.remove("opacity-0", "translate-y-2");
      }, FADE);
    }

    function start() {
      if (timer) return;
      timer = setInterval(next, DUR);
    }
    function stop() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }

    // Pause on hover/focus for readability
    const heroSection = document.querySelector('.h-screen');
    if (heroSection) {
      heroSection.addEventListener("mouseenter", stop);
      heroSection.addEventListener("mouseleave", start);
      heroSection.addEventListener("focusin", stop);
      heroSection.addEventListener("focusout", start);
    }

    // Respect user reduced-motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return; // don't auto-rotate
    start();
  })();
  </script>
</body>
</html>
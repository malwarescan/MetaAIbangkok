# Mobile Vertical Audit (Meta Esthetic AI)

## Layout.php

```php
<?php
$baseUrl = 'https://metaesthetic.com';
$localePaths = [
  'en' => '/en/',
  'th' => '/th/',
  'ko' => '/kr/',
  'zh' => '/zh/'
];
?>
<!DOCTYPE html>
<html lang="<?= htmlspecialchars($langCode ?? 'en') ?>" class="h-full">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= htmlspecialchars($title ?? 'Meta Esthetic') ?></title>
  <meta name="description" content="<?= htmlspecialchars($desc ?? 'Intelligent AI for Doctors and Patients') ?>">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?= htmlspecialchars($baseUrl) ?>">
  <meta property="og:title" content="<?= htmlspecialchars($title ?? 'Meta Esthetic') ?>">
  <meta property="og:description" content="<?= htmlspecialchars($desc ?? 'Intelligent AI for Doctors and Patients') ?>">
  <meta property="og:image" content="<?= htmlspecialchars($baseUrl) ?>/og-image.jpg">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="<?= htmlspecialchars($baseUrl) ?>">
  <meta property="twitter:title" content="<?= htmlspecialchars($title ?? 'Meta Esthetic') ?>">
  <meta property="twitter:description" content="<?= htmlspecialchars($desc ?? 'Intelligent AI for Doctors and Patients') ?>">
  <meta property="twitter:image" content="<?= htmlspecialchars($baseUrl) ?>/og-image.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Fonts -->
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

  <main class="space-y-8 md:space-y-16">
    <?= $content ?? '' ?>
  </main>

  <footer class="border-t border-black/5 bg-white">
    <div class="max-w-7xl mx-auto px-4 py-10 text-sm text-black/60">
      © <?= date('Y') ?> Meta Esthetic — Clinic Intelligence In Your Palm
    </div>
  </footer>

  <script src="/node_modules/preline/dist/preline.js"></script>
  
  <!-- Tailwind arbitrary class keeper + inline fallback for hero min-height -->
  <div class="hidden min-h-[72dvh] md:min-h-screen"></div>
  <script>
    // If your CSS build doesn't include min-h-[72dvh] yet, this inline fallback helps:
    document.querySelectorAll('[data-hero]').forEach(el=>{
      el.style.minHeight = '72dvh';
    });
  </script>
  
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
    const heroSection = document.querySelector('[data-hero]');
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
```

## Tailwind Config

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.php",
    "./**/*.html", 
    "./**/*.{js,ts}",
    "./node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'me-core': '#7BB7D8',
        'me-graphite': '#2D3748',
        'me-silver': '#F7FAFC',
      },
      boxShadow: {
        'me-soft': '0 4px 6px -1px rgba(123, 183, 216, 0.1), 0 2px 4px -1px rgba(123, 183, 216, 0.06)',
        'me-subtle': '0 1px 3px 0 rgba(123, 183, 216, 0.1), 0 1px 2px 0 rgba(123, 183, 216, 0.06)',
      },
    },
  },
  plugins: [
    require("preline/plugin"),
  ],
  safelist: [
    // Preline components
    /^hs-/,
    /^data-hs-/,
    // Icon classes
    /^i$/,
    /^material-symbols/,
    // Accessibility
    /^aria-/,
  ],
}
```

## Height & Spacing Matches

### Section Tags
php-version/views/home-shared.php:52:`<section id="learn" class="py-10 md:py-16">`
php-version/views/home-shared.php:78:`<section id="faq" class="py-10 md:py-16">`
php-version/views/home-shared.php:133:`<section id="demo" class="py-10 md:py-16">`
php-version/en/faq.php:98:`<section class="py-10 md:py-16">`
php-version/th/faq.php:82:`<section class="py-10 md:py-16">`
php-version/kr/faq.php:80:`<section class="py-10 md:py-16">`
php-version/zh/faq.php:78:`<section class="py-10 md:py-16">`

### H1 Tags
php-version/views/home-shared.php:17:`<h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">`
php-version/en/faq.php:76:`<h1 class="text-3xl md:text-5xl font-semibold tracking-tight">Pain Points &amp; Solutions</h1>`
php-version/th/faq.php:74:`<h1 class="text-3xl md:text-5xl font-semibold">คำถามที่พบบ่อย</h1>`
php-version/kr/faq.php:70:`<h1 class="text-3xl md:text-5xl font-semibold">자주 묻는 질문</h1>`
php-version/zh/faq.php:68:`<h1 class="text-3xl md:text-5xl font-semibold">常见问题</h1>`

### Data-hero Attributes
php-version/views/home-shared.php:2:`<div data-hero class="min-h-[72dvh] md:min-h-screen flex flex-col pb-6">`

### Height Classes
php-version/views/home-shared.php:2:`min-h-[72dvh] md:min-h-screen`
php-version/views/layout.php:76:`min-h-[72dvh] md:min-h-screen`

### Padding Classes
php-version/views/home-shared.php:52:`py-10 md:py-16`
php-version/views/home-shared.php:78:`py-10 md:py-16`
php-version/views/home-shared.php:133:`py-10 md:py-16`
php-version/en/faq.php:98:`py-10 md:py-16`
php-version/th/faq.php:82:`py-10 md:py-16`
php-version/kr/faq.php:80:`py-10 md:py-16`
php-version/zh/faq.php:78:`py-10 md:py-16`
php-version/views/layout.php:68:`py-10`
php-version/views/home-shared.php:55:`p-6 md:p-8`
php-version/views/home-shared.php:65:`p-6 md:p-8`

### Space-y Classes
php-version/views/layout.php:63:`space-y-8 md:space-y-16`

### Margin Classes
php-version/views/home-shared.php:4:`mt-6 md:mt-12`
php-version/views/home-shared.php:30:`mt-6 md:mt-10`
php-version/views/home-shared.php:80:`mb-12 md:mb-16`
php-version/views/home-shared.php:85:`gap-12 md:gap-16`
php-version/views/home-shared.php:88:`mb-6`
php-version/views/home-shared.php:103:`mb-6`
php-version/views/home-shared.php:121:`mt-12 md:mt-16`
php-version/views/layout.php:40:`py-2 md:py-3`
php-version/views/layout.php:50:`mt-2 md:mt-0`

### Flexbox Centering
php-version/views/home-shared.php:2:`flex flex-col`
php-version/views/home-shared.php:3:`flex flex-col justify-center`
php-version/views/home-shared.php:5:`flex justify-center items-center`
php-version/views/home-shared.php:54:`grid lg:grid-cols-2 gap-4 md:gap-6`
php-version/views/home-shared.php:85:`grid lg:grid-cols-2 gap-12 md:gap-16`
php-version/views/home-shared.php:135:`flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6`
php-version/views/layout.php:40:`flex items-center justify-center`
php-version/views/layout.php:42:`flex items-center gap-4`

## Utility Count Summary

| Utility | Count | Example |
|---------|-------|---------|
| py-10 md:py-16 | 7 | php-version/views/home-shared.php:52 |
| min-h-[72dvh] md:min-h-screen | 2 | php-version/views/home-shared.php:2 |
| space-y-8 md:space-y-16 | 1 | php-version/views/layout.php:63 |
| mt-6 md:mt-12 | 1 | php-version/views/home-shared.php:4 |
| mt-6 md:mt-10 | 1 | php-version/views/home-shared.php:30 |
| mb-12 md:mb-16 | 1 | php-version/views/home-shared.php:80 |
| gap-12 md:gap-16 | 1 | php-version/views/home-shared.php:85 |
| mb-6 | 2 | php-version/views/home-shared.php:88 |
| mt-12 md:mt-16 | 1 | php-version/views/home-shared.php:121 |
| py-2 md:py-3 | 1 | php-version/views/layout.php:40 |
| mt-2 md:mt-0 | 1 | php-version/views/layout.php:50 |
| p-6 md:p-8 | 2 | php-version/views/home-shared.php:55 |
| flex flex-col | 1 | php-version/views/home-shared.php:2 |
| flex flex-col justify-center | 1 | php-version/views/home-shared.php:3 |
| flex justify-center items-center | 1 | php-version/views/home-shared.php:5 |
| grid lg:grid-cols-2 gap-4 md:gap-6 | 1 | php-version/views/home-shared.php:54 |
| grid lg:grid-cols-2 gap-12 md:gap-16 | 1 | php-version/views/home-shared.php:85 |
| flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 | 1 | php-version/views/home-shared.php:135 |
| flex items-center justify-center | 1 | php-version/views/layout.php:40 |
| flex items-center gap-4 | 1 | php-version/views/layout.php:42 |

## Analysis Summary

The codebase shows good mobile-first implementation with:
- Consistent `py-10 md:py-16` pattern across sections
- Proper hero height using `min-h-[72dvh] md:min-h-screen`
- Responsive spacing with mobile-first approach
- Flexbox centering for hero content
- Grid layouts with responsive gaps
- Fallback script for hero height

The vertical rhythm is well-structured with mobile-first spacing that scales up appropriately at the `md:` breakpoint.

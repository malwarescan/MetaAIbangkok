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
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-black/5">
    <div class="max-w-7xl mx-auto py-3 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <?php include __DIR__ . "/partials/logo-meta-esthetic.svg.php"; ?>
        <span class="text-lg font-semibold tracking-tight">Meta Esthetic</span>
      </a>

      <!-- Language switch -->
      <nav class="hidden md:flex items-center gap-4">
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='en'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['en']) ?>">EN</a>
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='th'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['th']) ?>">TH</a>
        <a class="text-sm hover:opacity-80 transition <?= $langCode==='ko'?'font-semibold':'' ?>" href="<?= htmlspecialchars($localePaths['ko']) ?>">KR</a>
      </nav>

      <button type="button" class="hs-button inline-flex items-center justify-center py-2 rounded-xl bg-me-core text-me-graphite font-medium shadow-me-soft hover:shadow-lg transition" data-hs-overlay="#contact-modal">
        Request Demo
      </button>
    </div>
  </header>

  <main>
    <?= $content ?? '' ?>
  </main>

  <footer class="border-black/5 bg-white">
    <div class="max-w-7xl mx-auto py-10 text-black/60">
      © <?= date('Y') ?> Meta Esthetic — Clinic Intelligence In Your Palm
    </div>
  </footer>

  <!-- Contact / Request Demo Modal -->
  <div id="contact-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden overflow-y-auto pointer-events-none">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 m-3 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full sm:mx-auto">
      <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
        <div class="flex justify-between items-center px-6 py-4 border-b">
          <h3 class="text-gray-800 font-bold">Request a Demo</h3>
          <button type="button" class="flex justify-center items-center size-8 text-gray-800 font-semibold rounded-full hover:bg-gray-100" data-hs-overlay="#contact-modal" aria-label="Close">
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div class="p-6">
          <form class="space-y-5" onsubmit="event.preventDefault(); this.reset(); document.querySelector('[data-hs-overlay=\'#contact-modal\']')?.click();">
            <div>
              <label class="block text-gray-800 font-medium mb-2">Clinic Name</label>
              <input type="text" class="px-4 py-2.5 block w-full border-gray-200 rounded-lg text-sm focus:border-me-core focus:ring-me-core" placeholder="Enter clinic name" required>
            </div>
            <div>
              <label class="block text-gray-800 font-medium mb-2">Email</label>
              <input type="email" class="px-4 py-2.5 block w-full border-gray-200 rounded-lg text-sm focus:border-me-core focus:ring-me-core" placeholder="name@clinic.com" required>
            </div>
            <div>
              <label class="block text-gray-800 font-medium mb-2">Message</label>
              <textarea class="px-4 py-2.5 block w-full border-gray-200 rounded-lg text-sm focus:border-me-core focus:ring-me-core" rows="3" placeholder="Tell us a bit about your needs..."></textarea>
            </div>
            <div class="flex justify-end gap-x-3 pt-2">
              <button type="button" class="px-4 py-2 rounded-lg border border-gray-200 text-gray-800 bg-white hover:bg-gray-50" data-hs-overlay="#contact-modal">Cancel</button>
              <button type="submit" class="px-4 py-2 rounded-lg bg-me-core text-me-graphite font-semibold shadow-me-soft hover:shadow-lg">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <script src="/js/preline.js"></script>
</body>
</html>
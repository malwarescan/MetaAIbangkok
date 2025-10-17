<?php
  $title = $title ?? 'Meta Esthetic';
  $desc  = $desc  ?? 'Clinic Intelligence In Your Palm';
?>
<!doctype html>
<html lang="en" class="h-full scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?= htmlspecialchars($title) ?></title>
  <meta name="description" content="<?= htmlspecialchars($desc) ?>" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/app.css" />
</head>
<body class="min-h-full bg-me-silver text-me-graphite antialiased [font-family:Inter,ui-sans-serif,system-ui]">
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-black/5">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <?php include __DIR__ . "/partials/logo-meta-esthetic.svg.php"; ?>
        <span class="text-lg font-semibold tracking-tight">Meta Esthetic</span>
      </a>

      <nav class="hidden md:flex items-center gap-6">
        <a href="#client" class="hs-tooltip-toggle text-sm hover:opacity-80 transition">Client AI</a>
        <a href="#doctor" class="text-sm hover:opacity-80 transition">Doctor AI</a>
        <a href="#contact" class="text-sm hover:opacity-80 transition">Contact</a>
      </nav>

      <a href="#demo" class="hs-button inline-flex items-center justify-center px-4 py-2 rounded-xl bg-me-core text-me-graphite font-medium shadow-me-soft hover:shadow-lg transition">
        Request Demo
      </a>
    </div>
  </header>

  <!-- Preline Alert -->
  <div class="hs-alert-container fixed top-0 start-0 end-0 z-[60] flex flex-col gap-2 p-4">
    <div id="hs-alert-example" class="hs-alert hs-alert-open:translate-x-0 -translate-x-full transition-transform duration-300 hidden bg-me-core border-me-core/20 text-me-graphite" role="alert">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="flex-shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="m12 17 .01 0"/>
          </svg>
        </div>
        <div class="ms-3">
          <h3 class="text-sm font-semibold">
            Welcome to Meta Esthetic AI
          </h3>
          <div class="mt-1 text-sm opacity-90">
            Experience intelligent beauty solutions powered by advanced AI technology.
          </div>
        </div>
        <div class="ps-3 ms-auto">
          <div class="-mx-1.5 -my-1.5">
            <button type="button" class="inline-flex bg-me-core rounded-md p-1.5 text-me-graphite hover:bg-me-core/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-me-core focus:ring-me-graphite" data-hs-remove-element="#hs-alert-example">
              <span class="sr-only">Dismiss</span>
              <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m18 6-12 12"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main>
    <?= $content ?? '' ?>
  </main>

  <footer class="border-t border-black/5 bg-white">
    <div class="max-w-7xl mx-auto px-4 py-10 text-sm text-black/60">
      © <?= date('Y') ?> Meta Esthetic — Clinic Intelligence In Your Palm
    </div>
  </footer>

  <script src="./node_modules/preline/dist/preline.js"></script>
  <script>
    // Show alert on page load
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        const alert = document.getElementById('hs-alert-example');
        if (alert) {
          alert.classList.remove('hidden');
          alert.classList.add('hs-alert-open:translate-x-0');
        }
      }, 1000);
      
      // Handle form submission with spinner
      const form = document.querySelector('form');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          const spinner = document.getElementById('spinner');
          const submitBtn = form.querySelector('button[type="submit"]');
          
          if (spinner && submitBtn) {
            spinner.classList.remove('hidden');
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(function() {
              spinner.classList.add('hidden');
              submitBtn.disabled = false;
              // Close modal
              const modal = document.getElementById('hs-overlay-example');
              if (modal) {
                modal.classList.add('hidden');
              }
            }, 2000);
          }
        });
      }
    });
  </script>
</body>
</html>

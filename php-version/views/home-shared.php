<!-- Content -->
<div class="h-screen flex flex-col pb-6">
  <div class="h-full flex flex-col justify-center">
    <div class="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-4 flex justify-center items-center">
        <!-- Logo -->
        <a class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="/" aria-label="Meta Esthetic">
          <?php include __DIR__ . "/partials/logo-meta-esthetic.svg.php"; ?>
        </a>
        <!-- End Logo -->

        <div class="ms-2">
          <span class="text-lg font-semibold tracking-tight text-me-graphite">Meta Esthetic</span>
        </div>
      </div>

      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        <?= htmlspecialchars($i18n['hero_h1']) ?>
      </h1>
      <p class="mt-3 text-gray-600 dark:text-neutral-400">
        <?= htmlspecialchars($i18n['hero_p']) ?>
      </p>
    </div>

    <!-- Search -->
    <div class="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <input type="text" class="p-3 sm:p-4 block w-full border-gray-200 rounded-full sm:text-sm focus:border-me-core focus:ring-me-core disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Ask me anything...">
        <div class="absolute top-1/2 end-2 -translate-y-1/2">
          <button type="button" class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:focus:text-white">
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
          </button>
          <button type="button" class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:bg-neutral-800 dark:hover:text-white dark:focus:text-white">
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
        </div>
      </div>
    </div>
    <!-- End Search -->
  </div>

  <footer class="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
    <p class="text-xs text-gray-600 dark:text-neutral-500">© <?= date('Y') ?> Meta Esthetic — Clinic Intelligence In Your Palm</p>
  </footer>
</div>
<!-- End Content -->

<section id="learn" class="py-10 md:py-16">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-4 md:gap-6">
      <div id="client" class="bg-white rounded-2xl border border-black/10 shadow-me-subtle p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-semibold"><?= htmlspecialchars($i18n['client_h2']) ?></h2>
        <p class="mt-2 md:mt-3 text-black/70"><?= htmlspecialchars($i18n['client_p']) ?></p>
        <ul class="mt-4 md:mt-6 space-y-2.5 md:space-y-3 text-black/70">
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Onboarding & education</li>
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Personalized recommendations</li>
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Post-care reminders</li>
        </ul>
      </div>

      <div id="doctor" class="bg-white rounded-2xl border border-black/10 shadow-me-subtle p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-semibold"><?= htmlspecialchars($i18n['doctor_h2']) ?></h2>
        <p class="mt-2 md:mt-3 text-black/70"><?= htmlspecialchars($i18n['doctor_p']) ?></p>
        <ul class="mt-4 md:mt-6 space-y-2.5 md:space-y-3 text-black/70">
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Treatment data capture</li>
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Protocol suggestions</li>
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> EMR-ready summaries</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="py-16 md:py-24">
  <div class="max-w-7xl mx-auto px-6 md:px-8">
    <div class="text-center mb-12 md:mb-16">
      <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">Frequently Asked Questions</h2>
      <p class="mt-4 text-gray-600 dark:text-neutral-400">Quick answers to common questions about Meta Esthetic AI</p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12 md:gap-16">
      <!-- Doctor FAQs -->
      <div>
        <div class="mb-6">
          <span class="inline-flex items-center rounded-full bg-white border border-black/10 px-3 py-1 text-xs text-black/70">For Doctors & Clinic Teams</span>
          <h3 class="mt-4 text-lg md:text-xl font-semibold">Clinical & Operational</h3>
        </div>
        <?php 
        $faqDoctors = [
          ['q' => 'How hard is device integration?', 'a' => 'Most devices export CSV/USB or support simple APIs. We provide mapping templates and onboarding support. Typical setup is 1–2 weeks.'],
          ['q' => 'Will AI override clinical judgment?', 'a' => 'Never. The AI proposes data-backed suggestions, but final decisions remain with the physician. You can disable suggestions per device.'],
          ['q' => 'Can it generate EMR-ready notes?', 'a' => 'Yes. Procedure parameters and reactions are captured and summarized to EMR-ready notes, cutting charting time by 30–60%.'],
          ['q' => 'What about privacy compliance?', 'a' => 'Data is encrypted at rest and in transit, stored regionally, and isolated per clinic. We support HIPAA, PDPA, PIPA, and GDPR.']
        ];
        $items = $faqDoctors; 
        $id = 'home-doc-faq'; 
        include __DIR__ . '/partials/faq_accordion.php'; 
        ?>
      </div>

      <!-- Patient FAQs -->
      <div>
        <div class="mb-6">
          <span class="inline-flex items-center rounded-full bg-white border border-black/10 px-3 py-1 text-xs text-black/70">For Patients</span>
          <h3 class="mt-4 text-lg md:text-xl font-semibold">Care & Safety</h3>
        </div>
        <?php 
        $faqPatients = [
          ['q' => 'How does AI help choose treatments?', 'a' => 'It explains options in plain language, compares downtime and costs, and personalizes guidance to your skin type and goals.'],
          ['q' => 'Is my personal data safe?', 'a' => 'Yes. Your data is encrypted and accessible only to your clinic. We follow strict privacy laws and do not sell personal data.'],
          ['q' => 'Will I still meet a real doctor?', 'a' => 'Absolutely. The AI prepares questions and expectations, but your clinical plan is finalized by a licensed physician.'],
          ['q' => 'Does it work on my phone?', 'a' => 'Yes. It\'s mobile-first and runs on any modern smartphone without installing an app.']
        ];
        $items = $faqPatients; 
        $id = 'home-pt-faq'; 
        include __DIR__ . '/partials/faq_accordion.php'; 
        ?>
      </div>
    </div>

    <div class="text-center mt-12 md:mt-16">
      <a href="/<?= $langCode ?>/faq.php" class="hs-button inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-me-core text-me-graphite font-medium shadow-me-soft hover:shadow-lg transition">
        View All FAQs
      </a>
    </div>
  </div>
</section>

<section id="demo" class="py-10 md:py-16">
  <div class="max-w-7xl mx-auto px-4">
    <div class="bg-white rounded-2xl border border-black/10 shadow-me-soft p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
      <div>
        <h3 class="text-xl md:text-2xl font-semibold">Meta Esthetic</h3>
        <p class="text-black/70 mt-1.5 md:mt-2">Precision meets beauty — intelligently.</p>
      </div>
      <a href="#contact" class="hs-button inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 rounded-2xl bg-me-core text-me-graphite font-medium shadow-me-soft hover:shadow-lg transition">
        <?= htmlspecialchars($i18n['cta_primary']) ?>
      </a>
    </div>
  </div>
</section>

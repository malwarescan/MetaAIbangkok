<?php ob_start(); ?>
<section class="relative overflow-hidden bg-gradient-to-b from-white via-white to-me-silver">
  <div class="max-w-7xl mx-auto px-4 pt-20 pb-16">
    <div class="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <div class="flex items-center gap-3 mb-6">
          <?php include __DIR__ . "/partials/logo-meta-esthetic.svg.php"; ?>
          <p class="text-sm text-black/60">Clinic Intelligence In Your Palm</p>
        </div>
        <h1 class="text-4xl md:text-5xl font-semibold tracking-tight">
          <?= htmlspecialchars($i18n['hero_h1']) ?>
        </h1>
        <p class="mt-5 text-lg text-black/70">
          <?= htmlspecialchars($i18n['hero_p']) ?>
        </p>
        <div class="mt-8 flex items-center gap-4">
          <a href="#demo" class="hs-button inline-flex items-center px-5 py-3 rounded-2xl bg-me-core text-me-graphite font-medium shadow-me-soft hover:shadow-lg transition">
            <?= htmlspecialchars($i18n['cta_primary']) ?>
          </a>
          <a href="#learn" class="inline-flex items-center px-5 py-3 rounded-2xl bg-white text-me-graphite shadow-me-subtle border border-black/10 hover:shadow-md transition">
            <?= htmlspecialchars($i18n['cta_secondary']) ?>
          </a>
        </div>
      </div>

      <div class="relative">
        <div class="aspect-[4/3] rounded-2xl bg-white shadow-me-soft border border-black/5 grid place-items-center">
          <div class="relative">
            <div class="w-52 h-52 rounded-full bg-me-core/30 blur-3xl absolute -left-8 -top-6"></div>
            <div class="w-52 h-52 rounded-full bg-me-core/30 blur-3xl absolute left-12 -top-2"></div>
            <?php include __DIR__ . "/partials/logo-meta-esthetic.svg.php"; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="learn" class="py-16">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-6">
      <div id="client" class="bg-white rounded-2xl border border-black/10 shadow-me-subtle p-8">
        <h2 class="text-2xl font-semibold"><?= htmlspecialchars($i18n['client_h2']) ?></h2>
        <p class="mt-3 text-black/70"><?= htmlspecialchars($i18n['client_p']) ?></p>
        <ul class="mt-6 space-y-3 text-black/70">
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Onboarding & education</li>
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Personalized recommendations</li>
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Post-care reminders</li>
        </ul>
      </div>

      <div id="doctor" class="bg-white rounded-2xl border border-black/10 shadow-me-subtle p-8">
        <h2 class="text-2xl font-semibold"><?= htmlspecialchars($i18n['doctor_h2']) ?></h2>
        <p class="mt-3 text-black/70"><?= htmlspecialchars($i18n['doctor_p']) ?></p>
        <ul class="mt-6 space-y-3 text-black/70">
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Treatment data capture</li>
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> Protocol suggestions</li>
          <li class="flex gap-3"><span class="i material-symbols:check-small text-me-core"></span> EMR-ready summaries</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="demo" class="py-16">
  <div class="max-w-7xl mx-auto px-4">
    <div class="bg-white rounded-2xl border border-black/10 shadow-me-soft p-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 class="text-2xl font-semibold">Meta Esthetic</h3>
        <p class="text-black/70 mt-2">Precision meets beauty — intelligently.</p>
      </div>
      <a href="#contact" class="hs-button inline-flex items-center px-6 py-3 rounded-2xl bg-me-core text-me-graphite font-medium shadow-me-soft hover:shadow-lg transition">
        <?= htmlspecialchars($i18n['cta_primary']) ?>
      </a>
    </div>
  </div>
</section>
<?php $content = ob_get_clean(); ?>

<?php
$baseUrl = 'https://metaesthetic.com';
$title = 'Meta Esthetic — Pain Points & Solutions for Doctors and Patients';
$desc  = 'Clear answers for clinics and patients evaluating Meta Esthetic AI. See how it improves workflows, outcomes, safety, and satisfaction.';
$langCode = 'en';

// ---------- DATA: Doctors & Patients (EN) ----------
$faqDoctors = [
  ['q' => 'How hard is device integration (lasers, diagnostics, cameras)?',
   'a' => 'Most devices export CSV/USB or support simple APIs. We provide mapping templates, a connector wizard, and a human onboarding call. Typical setup is 1–2 weeks without interrupting operations.'],
  ['q' => 'Will the AI change my protocols or override clinical judgment?',
   'a' => 'Never. The doctor-facing AI proposes data-backed suggestions and highlights risks, but final decisions remain with the physician. You can disable or tune suggestions per device or indication.'],
  ['q' => 'Can it generate EMR-ready notes and reduce admin time?',
   'a' => 'Yes. Procedure parameters, skin type, and reactions are captured and summarized to EMR-ready notes (HL7/FHIR formats available), cutting charting time by ~30–60%.'],
  ['q' => 'How does it handle multi-branch clinics and role permissions?',
   'a' => 'Granular roles (owner, doctor, nurse, front desk) and branch scoping let staff access only what they need. Analytics can roll up to HQ or drill down per site.'],
  ['q' => 'What about privacy and compliance (HIPAA/PDPA/PIPA/GDPR)?',
   'a' => 'Data is encrypted at rest and in transit, stored regionally, and isolated per clinic. Audit logs, DPA, and BAA are available. We support HIPAA (US), PDPA (TH), PIPA (KR), and GDPR (EU).'],
  ['q' => 'Can we restrict AI recommendations by indication or device?',
   'a' => 'Yes. Turn recommendations on/off per device, per indication, or per user role. All changes are auditable.'],
  ['q' => 'How does Meta Esthetic actually improve outcomes?',
   'a' => 'It correlates settings, phototypes, pre-/post-care behaviors, and reactions to surface protocol optimizations. Over time, clinics see more consistent results and fewer post-care issues.'],
  ['q' => 'How do we measure ROI?',
   'a' => 'Dashboards track time saved per visit, rebooking rate, post-care adherence, product attach rate, and complication reduction. Clinics typically see faster throughput and higher LTV.'],
  ['q' => 'Does it work with unstable Wi-Fi?',
   'a' => 'Yes. A local cache captures inputs and syncs when connectivity returns. Critical data is queued and confirmed with receipts.'],
  ['q' => 'How are images handled (before/after, lesion photos)?',
   'a' => 'Images are hashed, access-controlled, and can be auto-tagged to visits. Optional on-device blur and PHI masking are available before upload.'],
  ['q' => 'Can we white-label the system?',
   'a' => 'Yes. The UI can be branded with your clinic identity while preserving core compliance and model safety.'],
  ['q' => 'What if vendors change or we add new equipment?',
   'a' => 'New data mappers can be added quickly. We maintain a growing library of device profiles and will help you onboard new equipment.'],
  ['q' => 'How do we prevent over-treatment or off-label drift?',
   'a' => 'Guardrails include indication lists, dose/fluence ranges, and alerts when selections deviate from clinic policy or patient history.'],
  ['q' => 'How are translations handled for staff and patients?',
   'a' => 'The interface supports English, Thai, and Korean. Terminology is medically reviewed and consistent across consent, instructions, and follow-ups.'],
];

$faqPatients = [
  ['q' => 'How does the AI help me choose the right treatment?',
   'a' => 'It explains options in plain language, compares downtime and cost ranges, and personalizes guidance to your skin type, history, and goals.'],
  ['q' => 'Is my personal data safe?',
   'a' => 'Yes. Your data is encrypted and accessible only to your clinic. We follow strict privacy laws and do not sell personal data.'],
  ['q' => 'Will I still meet a real doctor?',
   'a' => 'Absolutely. The AI prepares questions and expectations but your clinical plan is finalized by a licensed physician.'],
  ['q' => 'How will I know what to do after treatment?',
   'a' => 'You receive step-by-step post-care instructions, reminders timed to healing phases, and quick guidance if you report unusual reactions.'],
  ['q' => 'Can it help with language barriers?',
   'a' => 'Yes. Information is available in English, Thai, or Korean, with consistent terminology and clinic-approved instructions.'],
  ['q' => 'How do I track progress?',
   'a' => 'You can log symptoms, upload photos, and see a timeline of improvements and appointments, with intelligent reminders.'],
  ['q' => 'Will it push products or upsells?',
   'a' => 'Recommendations are evidence-based and clinic-approved. You can opt out of product suggestions anytime.'],
  ['q' => 'How much does this add to my bill?',
   'a' => 'There is no surcharge for using the AI assistant. It's part of the clinic's service to improve clarity and outcomes.'],
  ['q' => 'What if I have urgent questions?',
   'a' => 'Use the 24/7 assistant for guidance and triage. It will escalate to clinic staff based on your symptoms or concerns.'],
  ['q' => 'Does it work on my phone?',
   'a' => 'Yes. It's mobile-first and runs on any modern smartphone without installing an app.'],
  ['q' => 'Who can see my messages and photos?',
   'a' => 'Only authorized clinic staff can view them. You can request deletion or a copy of your data subject to local regulations.'],
  ['q' => 'Can I change language anytime?',
   'a' => 'Yes. You can switch language instantly in the interface; your preference is saved to your profile.'],
];

// ---------- JSON-LD (FAQPage) ----------
$mainEntity = [];
foreach (array_merge($faqDoctors, $faqPatients) as $item) {
  $mainEntity[] = [
    '@type' => 'Question',
    'name'  => $item['q'],
    'acceptedAnswer' => ['@type' => 'Answer','text' => strip_tags($item['a'])]
  ];
}
$faqSchema = [
  '@context' => 'https://schema.org',
  '@type'    => 'FAQPage',
  'inLanguage' => 'en',
  'mainEntity' => $mainEntity
];

// ---------- VIEW ----------
ob_start();
?>
<section class="bg-gradient-to-b from-white via-white to-me-silver">
  <div class="max-w-7xl mx-auto px-4 pt-12 pb-8 md:pt-20 md:pb-12">
    <div class="mb-6 flex items-center gap-3">
      <?php include __DIR__ . '/../views/partials/logo-meta-esthetic.svg.php'; ?>
      <p class="text-xs md:text-sm text-black/60">Clinic Intelligence In Your Palm</p>
    </div>
    <h1 class="text-3xl md:text-5xl font-semibold tracking-tight">Pain Points &amp; Solutions</h1>
    <p class="mt-3 md:mt-5 text-base md:text-lg text-black/70 max-w-3xl">
      Clear answers for doctors evaluating clinical AI and for patients considering treatment. Mobile-first, multilingual, and compliant by design.
    </p>
  </div>
</section>

<section class="py-10 md:py-16">
  <div class="max-w-7xl mx-auto px-4 space-y-10 md:space-y-16">
    <div>
      <div class="mb-4">
        <span class="inline-flex items-center rounded-full bg-white border border-black/10 px-3 py-1 text-xs text-black/70">For Doctors &amp; Clinic Teams</span>
        <h2 class="mt-3 text-xl md:text-2xl font-semibold">Operational &amp; Clinical Pain Points</h2>
        <p class="mt-2 text-black/70">Integration, outcomes, compliance, adoption, and measurable ROI.</p>
      </div>
      <?php $items = $faqDoctors; $id = 'doc-faq-en'; include __DIR__ . '/../views/partials/faq_accordion.php'; ?>
    </div>

    <div>
      <div class="mb-4">
        <span class="inline-flex items-center rounded-full bg-white border border-black/10 px-3 py-1 text-xs text-black/70">For Patients</span>
        <h2 class="mt-3 text-xl md:text-2xl font-semibold">Care, Clarity &amp; Confidence</h2>
        <p class="mt-2 text-black/70">Choosing treatments, safety, language support, reminders, and progress tracking.</p>
      </div>
      <?php $items = $faqPatients; $id = 'pt-faq-en'; include __DIR__ . '/../views/partials/faq_accordion.php'; ?>
    </div>

    <div class="bg-white rounded-2xl border border-black/10 shadow-sm p-6 md:p-8">
      <h3 class="text-lg md:text-xl font-semibold">How It Helps Related Medical Industries</h3>
      <ul class="mt-4 grid gap-3 md:gap-4 sm:grid-cols-2 text-black/70">
        <li><b>Dermatology &amp; Aesthetics:</b> Laser logs, phototype matching, protocol tuning.</li>
        <li><b>Plastic Surgery:</b> Pre-op education, photo journaling, recovery adherence.</li>
        <li><b>Dental Cosmetics:</b> Whitening/aligner programs, follow-up automations.</li>
        <li><b>IV &amp; Wellness:</b> Program scheduling, symptom check-ins, stock-aware reminders.</li>
        <li><b>Regenerative Medicine:</b> Outcome tracking and adaptive protocols.</li>
        <li><b>Hospital Outpatient:</b> Multilingual intake, discharge assistant, readmission reduction.</li>
      </ul>
    </div>
  </div>
</section>

<?php
$content = ob_get_clean();
echo '<script type="application/ld+json">'.json_encode($faqSchema, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES).'</script>';
include __DIR__ . '/../views/layout.php';

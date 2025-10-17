<?php
  $baseUrl = 'https://metaesthetic.ai';
  $title   = 'Meta Esthetic — Multilingual Clinical Presentation (EN · TH · KO)';
  $desc    = 'A complete, multilingual presentation for hospitals, clinics, doctors and patients.';

  // -------- Slides: 12 sections + appendix per language --------
  // Keep HTML concise so it fits mobile-first cards.

  // ENGLISH
  $slides_en = [
    ['title'=>'1) The Clinical Challenge','body'=>'
      <p>Rising patient volumes, limited staff time, and fragmented data.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>40–60% of consult time lost to notes, duplicate entry, manual follow-ups.</li>
        <li>Device/EMR/CRM silos; outcomes are hard to track consistently.</li>
        <li>Staff rotation breaks continuity; patients expect clarity and access.</li>
      </ul>
      <p class="mt-2 font-medium">→ Clinics need an intelligent assistant and a shared memory core — not another dashboard.</p>
    '],
    ['title'=>'2) What Meta Esthetic Is','body'=>'
      <p><strong>Clinic Intelligence in Your Palm.</strong> An AI layer that unifies EMR, devices, and patient comms.</p>
      <ul class="list-disc pl-5 mt-2">
        <li><b>Doctor-AI Assistant:</b> documentation, parameter suggestions, safety guardrails.</li>
        <li><b>Patient-AI Companion:</b> education, multilingual support, reminders, recovery tracking.</li>
        <li><b>Clinic/Hospital Hub:</b> standards, analytics, role permissions, cross-branch continuity.</li>
      </ul>
      <p class="mt-2">Compliance: HIPAA · PDPA · PIPA · GDPR. Encrypted at rest/in transit; regional hosting.</p>
    '],
    ['title'=>'3) Use Cases — Oncology (Cancer Centers)','body'=>'
      <p><b>Doctors:</b> Auto visit notes (regimen, dosing, AEs), interaction checks, lab thresholds. <b>Patients:</b> chemo calendars, side-effect diary. <b>Hospitals:</b> protocol standardization, infusion chair optimization.</p>
    '],
    ['title'=>'4) Use Cases — Aesthetic / Dermatology','body'=>'
      <p><b>Doctors:</b> Laser/RF parameters → EMR-ready; phototype-safe suggestions. <b>Patients:</b> pre/post-care in their language; healing reminders. <b>Clinics:</b> protocol consistency; product attach insights.</p>
    '],
    ['title'=>'5) Use Cases — Dental (Cosmetic & General)','body'=>'
      <p><b>Doctors:</b> Auto charting, perio indices, imaging notes. <b>Patients:</b> aligner/retainer adherence flows. <b>Clinics:</b> hygiene recall automation; case acceptance analytics.</p>
    '],
    ['title'=>'6) Use Cases — Hospital Services','body'=>'
      <ul class="list-disc pl-5">
        <li><b>ED/Urgent:</b> triage intake, translation, discharge AI.</li>
        <li><b>Primary Care:</b> med rec, guideline nudges, chronic trackers.</li>
        <li><b>Surgery:</b> pre-op readiness, post-op pathways, complication watchlists.</li>
        <li><b>OB/GYN:</b> prenatal checklists, week-based education, red-flag escalation.</li>
      </ul>
    '],
    ['title'=>'7) Patient Memory Core','body'=>'
      <p>One evolving memory per patient: parameters, meds, allergies, notes, images, preferences.</p>
      <p class="mt-2">Instant recall frees clinician bandwidth; continuity persists across branches.</p>
    '],
    ['title'=>'8) Safety & Guardrails','body'=>'
      <ul class="list-disc pl-5">
        <li>Indication lists, dose/fluence ranges, deviation alerts.</li>
        <li>Audit trails and role permissions; branch scoping.</li>
        <li>Least-privilege access; immutable logs; SSO/SAML/OIDC.</li>
      </ul>
    '],
    ['title'=>'9) Measurable Impact (Targets & Pilots)','body'=>'
      <table class="w-full text-sm"><tbody>
        <tr><td>Documentation time</td><td class="text-right font-medium">↓ 30–60%</td></tr>
        <tr><td>No-show / late cancel</td><td class="text-right font-medium">↓ 15–25%</td></tr>
        <tr><td>Follow-up adherence</td><td class="text-right font-medium">↑ 40–70%</td></tr>
        <tr><td>Patient return rate (LTV)</td><td class="text-right font-medium">↑ 20–40%</td></tr>
        <tr><td>Complication callbacks</td><td class="text-right font-medium">↓ 15–30%</td></tr>
      </tbody></table>
    '],
    ['title'=>'10) Scale & Performance','body'=>'
      <ul class="list-disc pl-5">
        <li>Patients: 1,000,000+ · Clinics/Hospitals: 10,000+</li>
        <li>Devices: 40+ (Laser, RF, Imaging, Diagnostics)</li>
        <li>Languages: EN · TH · KO · ZH · Latency &lt; 0.8s · SLA 99.9%</li>
        <li>Cloud, hybrid, or private VPC deployments</li>
      </ul>
    '],
    ['title'=>'11) Integration & Rollout','body'=>'
      <p>HL7/FHIR, CSV/SFTP, device USB/API, calendar/CRM bridges.</p>
      <p class="mt-2">Onboarding 2 weeks: data mapping, specialty templates, 60-min role training.</p>
    '],
    ['title'=>'12) The Human Bond','body'=>'
      <p>Technology that remembers, so humans can connect. Patients feel known and safe; clinicians regain time and focus.</p>
    '],
  ];
  $appendix_en = [
    ['title'=>'Appendix — Security & Compliance','body'=>'
      <ul class="list-disc pl-5">
        <li>HIPAA/BAA, PDPA, PIPA, GDPR; regional data residency.</li>
        <li>AES-256 at rest, TLS 1.2+, RBAC, audit logs.</li>
        <li>Governance: model update cadence, bias monitoring, human-in-the-loop.</li>
      </ul>
    '],
  ];

  // THAI
  $slides_th = [
    ['title'=>'1) ความท้าทายทางคลินิก','body'=>'
      <p>จำนวนผู้ป่วยเพิ่มขึ้น เวลาแพทย์จำกัด ข้อมูลกระจัดกระจาย.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>เสียเวลา 40–60% ไปกับงานบันทึก ซ้ำซ้อน และติดตามผลแบบแมนนวล</li>
        <li>ข้อมูลจากเครื่องมือ/EMR/CRM แยกส่วน ติดตามผลลัพธ์ได้ไม่ต่อเนื่อง</li>
        <li>การหมุนเวียนบุคลากรทำให้ความต่อเนื่องหาย ผู้ป่วยคาดหวังความชัดเจนและการเข้าถึง</li>
      </ul>
      <p class="mt-2 font-medium">→ ทางออกคือผู้ช่วยอัจฉริยะและ <b>แกนความทรงจำของผู้ป่วย</b> ไม่ใช่แดชบอร์ดเพิ่ม</p>
    '],
    ['title'=>'2) Meta Esthetic คืออะไร','body'=>'
      <p><strong>Clinic Intelligence In Your Palm</strong> — ชั้น AI ที่เชื่อม EMR อุปกรณ์ และการสื่อสารกับผู้ป่วยเข้าไว้ด้วยกัน</p>
      <ul class="list-disc pl-5 mt-2">
        <li><b>Doctor-AI:</b> สรุปเวชระเบียน แนะนำพารามิเตอร์ และตั้งรั้วความปลอดภัย</li>
        <li><b>Patient-AI:</b> อธิบาย/แปลภาษา แจ้งเตือน ดูแลหลังทำ และติดตามการฟื้นตัว</li>
        <li><b>Clinic/Hub:</b> มาตรฐานกลาง วิเคราะห์สิทธิ์การเข้าถึง และความต่อเนื่องข้ามสาขา</li>
      </ul>
      <p class="mt-2">สอดคล้อง HIPAA · PDPA · PIPA · GDPR เข้ารหัสทั้งขณะจัดเก็บและส่งต่อ มีโฮสติ้งตามภูมิภาค</p>
    '],
    ['title'=>'3) กรณีใช้งาน — มะเร็งวิทยา (Oncology)','body'=>'
      <p><b>แพทย์:</b> สรุปโน้ตเวชระเบียนอัตโนมัติ ตรวจปฏิกิริยาระหว่างยา เช็คแลบเกณฑ์ <b>ผู้ป่วย:</b> ปฏิทินคีโม บันทึกอาการ <b>โรงพยาบาล:</b> มาตรฐานโปรโตคอล จัดเก้าอี้ให้เหมาะสม</p>
    '],
    ['title'=>'4) กรณีใช้งาน — ผิวหนัง/สหสาขาความงาม','body'=>'
      <p><b>แพทย์:</b> บันทึกค่าตั้งเลเซอร์/RF → EMR แนะนำตามโฟโตไทป์ <b>ผู้ป่วย:</b> คำแนะนำก่อน/หลังทำตามภาษา <b>คลินิก:</b> ลดความคลาดเคลื่อนของโปรโตคอล</p>
    '],
    ['title'=>'5) กรณีใช้งาน — ทันตกรรม','body'=>'
      <p><b>แพทย์:</b> สรุป charting ดัชนีปริทันต์ โน้ตรูปภาพ <b>ผู้ป่วย:</b> เตือนวินัยใส่เครื่องมือจัดฟัน/รีเทนเนอร์ <b>คลินิก:</b> ระบบเรียกทำความสะอาดฟันอัตโนมัติ</p>
    '],
    ['title'=>'6) กรณีใช้งาน — บริการโรงพยาบาลทั่วไป','body'=>'
      <ul class="list-disc pl-5">
        <li><b>ฉุกเฉิน/ด่วน:</b> รับอาการเบื้องต้น แปลภาษา AI สรุปคำสั่งจำหน่าย</li>
        <li><b>อายุรกรรม:</b> ทวนยาทั้งหมด แนะนำตามแนวทางโรคเรื้อรัง</li>
        <li><b>ศัลยกรรม:</b> ความพร้อมก่อนผ่าตัด เส้นทางดูแลหลังผ่าตัด</li>
        <li><b>สตรี/สูติฯ:</b> เช็กลิสต์ฝากครรภ์ คำแนะนำตามอายุครรภ์</li>
      </ul>
    '],
    ['title'=>'7) แกนความทรงจำของผู้ป่วย','body'=>'
      <p>เก็บทุกบริบทของผู้ป่วยไว้ในความทรงจำเดียว: พารามิเตอร์ ยา ประวัติ ภาพถ่าย ความชอบ</p>
      <p class="mt-2">เรียกดูได้ทันที ลดภาระทางความคิด ความต่อเนื่องไม่หลุดแม้ข้ามสาขา</p>
    '],
    ['title'=>'8) ความปลอดภัยและรั้วควบคุม','body'=>'
      <ul class="list-disc pl-5">
        <li>รายการข้อบ่งชี้ ช่วงพลังงาน/fluence และแจ้งเตือนเมื่อออกนอกนโยบาย</li>
        <li>บันทึกการใช้งานและสิทธิ์ตามบทบาท แยกขอบเขตตามสาขา</li>
        <li>Least-privilege, Audit logs, SSO/SAML/OIDC</li>
      </ul>
    '],
    ['title'=>'9) ผลลัพธ์ที่วัดได้ (เป้าหมาย/นำร่อง)','body'=>'
      <table class="w-full text-sm"><tbody>
        <tr><td>เวลางานเอกสาร</td><td class="text-right font-medium">ลด 30–60%</td></tr>
        <tr><td>นัดหลุด/ยกเลิกกระชั้น</td><td class="text-right font-medium">ลด 15–25%</td></tr>
        <tr><td>วินัยการติดตามผล</td><td class="text-right font-medium">เพิ่ม 40–70%</td></tr>
        <tr><td>การกลับมารักษา (LTV)</td><td class="text-right font-medium">เพิ่ม 20–40%</td></tr>
        <tr><td>สายด่วนภาวะแทรกซ้อน</td><td class="text-right font-medium">ลด 15–30%</td></tr>
      </tbody></table>
    '],
    ['title'=>'10) การรองรับระดับองค์กร','body'=>'
      <ul class="list-disc pl-5">
        <li>ผู้ป่วย: 1,000,000+ · สถานพยาบาล: 10,000+</li>
        <li>อุปกรณ์: 40+ ประเภท · ภาษาที่รองรับ: TH · EN · KO · ZH</li>
        <li>Latency &lt; 0.8s · SLA 99.9% · โครงสร้าง Cloud/Hybrid/VPC</li>
      </ul>
    '],
    ['title'=>'11) การเชื่อมต่อและแผนเริ่มต้น','body'=>'
      <p>HL7/FHIR, CSV/SFTP, อุปกรณ์ USB/API, ปฏิทิน/CRM</p>
      <p class="mt-2">ออนบอร์ด 2 สัปดาห์: แมปข้อมูล เทมเพลตเฉพาะสาขา อบรม 60 นาทีต่อบทบาท</p>
    '],
    ['title'=>'12) สายใยมนุษย์','body'=>'
      <p>เทคโนโลยีที่จดจำ เพื่อให้มนุษย์ได้เชื่อมโยงกัน ผู้ป่วยรู้สึกปลอดภัย แพทย์มีเวลาและสมาธิมากขึ้น</p>
    '],
  ];
  $appendix_th = [
    ['title'=>'ภาคผนวก — ความปลอดภัยและการปฏิบัติตามกฎหมาย','body'=>'
      <ul class="list-disc pl-5">
        <li>HIPAA/BAA, PDPA, PIPA, GDPR และโฮสติ้งในภูมิภาค</li>
        <li>AES-256 at rest, TLS 1.2+, RBAC, audit logs</li>
        <li>ธรรมาภิบาลโมเดล: รอบการอัปเดต ติดตามอคติ และการตรวจทานโดยมนุษย์</li>
      </ul>
    '],
  ];

  // KOREAN
  $slides_ko = [
    ['title'=>'1) 임상 현장의 과제','body'=>'
      <p>환자 수 증대, 제한된 시간, 분절된 데이터.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>문서화/중복 입력/수동 추적으로 상담 시간의 40–60% 소모</li>
        <li>장비/EMR/CRM 데이터 사일로, 결과 추적의 비일관성</li>
        <li>스태프 교대에 따른 연속성 상실, 환자의 높은 기대</li>
      </ul>
      <p class="mt-2 font-medium">→ 필요한 것은 <b>지능형 어시스턴트와 환자 메모리 코어</b> 입니다.</p>
    '],
    ['title'=>'2) Meta Esthetic 소개','body'=>'
      <p><strong>Clinic Intelligence in Your Palm</strong> — EMR·장비·환자 커뮤니케이션을 하나로 묶는 AI 레이어</p>
      <ul class="list-disc pl-5 mt-2">
        <li><b>의사용 AI:</b> 문서화, 파라미터 제안, 안전 가드레일</li>
        <li><b>환자용 AI:</b> 교육, 다국어 지원, 리마인더, 회복 추적</li>
        <li><b>클리닉/병원 허브:</b> 표준화, 분석, 권한, 지점 간 연속성</li>
      </ul>
      <p class="mt-2">규정 준수: HIPAA · PDPA · PIPA · GDPR / 데이터 암호화 및 지역 호스팅</p>
    '],
    ['title'=>'3) 활용사례 — 종양내과(암센터)','body'=>'
      <p><b>의사:</b> 방문 노트 자동화(요법/용량/이상반응), 상호작용/검사치 체크 <b>환자:</b> 항암 일정/부작용 일기 <b>병원:</b> 프로토콜 표준화, 의자 회전 최적화</p>
    '],
    ['title'=>'4) 활용사례 — 미용/피부과','body'=>'
      <p><b>의사:</b> 레이저/RF 파라미터 → EMR 요약, 포토타입별 안전 제안 <b>환자:</b> 전후 관리 다국어 안내 <b>클리닉:</b> 지점 간 프로토콜 일관성</p>
    '],
    ['title'=>'5) 활용사례 — 치과','body'=>'
      <p><b>의사:</b> 차팅/치주지수/영상 요약 <b>환자:</b> 교정장치 착용 알림 <b>클리닉:</b> 스케일링 리콜 자동화, 케이스 수락 분석</p>
    '],
    ['title'=>'6) 활용사례 — 병원 진료과','body'=>'
      <ul class="list-disc pl-5">
        <li><b>응급/급성:</b> 증상 접수, 번역, 퇴원 AI</li>
        <li><b>가정의/내과:</b> 약물 조정, 가이드라인 제시, 만성질환 추적</li>
        <li><b>수술과:</b> 수술 전 준비, 수술 후 경로, 합병증 주시</li>
        <li><b>여성의학:</b> 산전 체크리스트, 임신 주차별 교육, 경고 신호 상승</li>
      </ul>
    '],
    ['title'=>'7) 환자 메모리 코어','body'=>'
      <p>환자별로 하나의 살아있는 기억체계: 파라미터, 약, 알레르기, 노트, 이미지, 선호.</p>
      <p class="mt-2">즉시 회상으로 의사의 인지 부담을 줄이고, 지점 간 연속성을 확보합니다.</p>
    '],
    ['title'=>'8) 안전/가드레일','body'=>'
      <ul class="list-disc pl-5">
        <li>적응증 목록, 에너지/플루언스 범위, 이탈 경보</li>
        <li>감사 추적, 역할 권한, 지점 범위</li>
        <li>최소권한, 감사로그, SSO/SAML/OIDC</li>
      </ul>
    '],
    ['title'=>'9) 성과지표(목표/파일럿)','body'=>'
      <table class="w-full text-sm"><tbody>
        <tr><td>문서화 시간</td><td class="text-right font-medium">↓ 30–60%</td></tr>
        <tr><td>노쇼/지각취소</td><td class="text-right font-medium">↓ 15–25%</td></tr>
        <tr><td>사후관리 준수율</td><td class="text-right font-medium">↑ 40–70%</td></tr>
        <tr><td>재방문율(LTV)</td><td class="text-right font-medium">↑ 20–40%</td></tr>
        <tr><td>합병증 콜백</td><td class="text-right font-medium">↓ 15–30%</td></tr>
      </tbody></table>
    '],
    ['title'=>'10) 확장성/성능','body'=>'
      <ul class="list-disc pl-5">
        <li>환자 1,000,000+ · 기관 10,000+</li>
        <li>장비 40+ 유형 · 언어 EN · TH · KO · ZH</li>
        <li>지연 &lt; 0.8s · SLA 99.9% · 클라우드/하이브리드/VPC</li>
      </ul>
    '],
    ['title'=>'11) 통합/도입','body'=>'
      <p>HL7/FHIR, CSV/SFTP, 장비 USB/API, 캘린더/CRM 연동</p>
      <p class="mt-2">2주 온보딩: 데이터 매핑, 전문과 템플릿, 역할별 60분 교육</p>
    '],
    ['title'=>'12) 인간적 연결','body'=>'
      <p>기억하는 기술이 사람을 잇습니다. 환자는 신뢰를, 의사는 시간을 되찾습니다.</p>
    '],
  ];
  $appendix_ko = [
    ['title'=>'부록 — 보안/규정준수','body'=>'
      <ul class="list-disc pl-5">
        <li>HIPAA/BAA, PDPA, PIPA, GDPR / 지역 데이터 거주</li>
        <li>AES-256 저장, TLS 1.2+, RBAC, 감사 로그</li>
        <li>거버넌스: 모델 업데이트, 편향 모니터링, 사람 검토</li>
      </ul>
    '],
  ];

  // ---------- Render helpers ----------
  function renderDeck($slides, $appendix) {
    echo '<div class="space-y-6">';
    foreach ($slides as $i => $s) {
      echo '<div class="bg-white rounded-2xl border border-black/10 shadow-me-soft p-6 md:p-8">';
      echo '<h3 class="text-lg md:text-xl font-semibold">'.htmlspecialchars($s['title']).'</h3>';
      echo '<div class="prose max-w-none mt-3 text-black/70">'. $s['body'] .'</div>';
      echo '</div>';
    }
    // Appendix
    foreach ($appendix as $a) {
      echo '<div class="bg-white rounded-2xl border border-dashed border-black/10 p-6 md:p-8">';
      echo '<h4 class="text-base md:text-lg font-semibold">'.htmlspecialchars($a['title']).'</h4>';
      echo '<div class="prose max-w-none mt-3 text-black/70">'. $a['body'] .'</div>';
      echo '</div>';
    }
    echo '</div>';
  }

  // ---------- VIEW ----------
  ob_start();
?>

<section class="bg-gradient-to-b from-white via-white to-me-silver">
  <div class="max-w-7xl mx-auto px-4 pt-10 md:pt-16 pb-6 md:pb-10">
    <div class="mb-4 flex items-center gap-2">
      <?php if (file_exists(__DIR__ . '/../views/partials/logo-meta-esthetic.svg.php')) { include __DIR__ . '/../views/partials/logo-meta-esthetic.svg.php'; } ?>
      <span class="text-sm text-black/60">Meta Esthetic — Clinic Intelligence In Your Palm</span>
    </div>
    <h1 class="text-2xl md:text-4xl font-semibold tracking-tight">Multilingual Clinical Presentation</h1>
    <p class="mt-2 md:mt-3 text-black/70 max-w-3xl">Complete deck for hospitals, clinics, doctors, and patients — Oncology, Aesthetic/Derm, Dental, and general hospital services.</p>
  </div>
</section>

<section class="py-8 md:py-14">
  <div class="max-w-7xl mx-auto px-4">
    <!-- Language Tabs (Preline) -->
    <nav class="flex items-center gap-2 border-b border-black/10 pb-2" aria-label="Tabs" role="tablist">
      <button type="button" class="hs-tab-active:bg-me-core/10 hs-tab-active:text-me-graphite px-3 py-1.5 rounded-md text-sm text-black/60 hover:text-me-graphite focus:outline-hidden" id="tab-en-trigger" data-hs-tab="#tab-en" aria-controls="tab-en" role="tab">English</button>
      <button type="button" class="hs-tab-active:bg-me-core/10 hs-tab-active:text-me-graphite px-3 py-1.5 rounded-md text-sm text-black/60 hover:text-me-graphite focus:outline-hidden" id="tab-th-trigger" data-hs-tab="#tab-th" aria-controls="tab-th" role="tab">ไทย (Thai)</button>
      <button type="button" class="hs-tab-active:bg-me-core/10 hs-tab-active:text-me-graphite px-3 py-1.5 rounded-md text-sm text-black/60 hover:text-me-graphite focus:outline-hidden" id="tab-ko-trigger" data-hs-tab="#tab-ko" aria-controls="tab-ko" role="tab">한국어 (Korean)</button>
    </nav>

    <!-- English Deck -->
    <div id="tab-en" role="tabpanel" aria-labelledby="tab-en-trigger" class="hs-tab-content w-full mt-6">
      <?php renderDeck($slides_en, $appendix_en); ?>
    </div>

    <!-- Thai Deck (hidden by default) -->
    <div id="tab-th" role="tabpanel" aria-labelledby="tab-th-trigger" class="hs-tab-content hidden w-full mt-6">
      <?php renderDeck($slides_th, $appendix_th); ?>
    </div>

    <!-- Korean Deck (hidden by default) -->
    <div id="tab-ko" role="tabpanel" aria-labelledby="tab-ko-trigger" class="hs-tab-content hidden w-full mt-6">
      <?php renderDeck($slides_ko, $appendix_ko); ?>
    </div>
  </div>
</section>

<?php
  $content = ob_get_clean();
  include __DIR__ . '/../views/layout.php';
?>

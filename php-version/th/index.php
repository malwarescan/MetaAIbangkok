<?php
$baseUrl = 'https://metaesthetic.com';
$i18n = include __DIR__ . '/../languages/th.php';
$langCode = $i18n['lang'];
$title = $i18n['title'];
$desc  = $i18n['desc'];

ob_start();
include __DIR__ . '/../views/home-shared.php';
$page = ob_get_clean();

$schema = [
  "@context" => "https://schema.org",
  "@type" => "Organization",
  "name" => "Meta Esthetic",
  "url" => $baseUrl . "/th/",
  "inLanguage" => "th",
  "description" => $i18n['schema_org_desc'],
  "address" => [
    "@type" => "PostalAddress",
    "addressCountry" => "TH"
  ]
];
ob_start();
?>
<script type="application/ld+json"><?= json_encode($schema, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES) ?></script>
<?php
$schemaTag = ob_get_clean();

$content = $page . $schemaTag;
include __DIR__ . '/../views/layout.php';

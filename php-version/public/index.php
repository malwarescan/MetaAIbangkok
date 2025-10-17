<?php
  // Homepage -> Chat UI layout
  $title = "Meta Esthetic — Clinic Intelligence In Your Palm";
  $desc  = "Dual AI for clients and doctors: refined, clinical, empathetic.";

  // Variables used by chat UI view
  $subtitle        = "Intelligent AI for Doctors and Patients";
  $description     = "Describe symptoms or concerns and get personalized guidance.";
  $startDiagnosis  = "Start AI Consultation";

  ob_start();
  include __DIR__ . "/../src/views/home/index.php"; // chat UI content
  $content = ob_get_clean();
  include __DIR__ . "/../views/layout.php";
?>
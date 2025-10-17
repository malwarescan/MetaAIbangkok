<?php
header('Content-Type: application/json');

// Basic CORS for local dev
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$userMessage = trim($input['message'] ?? '');
if ($userMessage === '') {
  echo json_encode(['response' => 'Please enter a message.']);
  exit;
}

// Minimal stub response (swap to OpenAI later if needed)
$reply = "Thanks for your message: " . $userMessage . "\nThis is a local dev stub.\nDescribe a concern and I’ll provide guidance.";
echo json_encode(['response' => $reply]);
?>


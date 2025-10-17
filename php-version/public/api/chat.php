<?php
// Minimal PHP chat proxy to OpenAI for Railway (no Node required)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

// Read input
$input = json_decode(file_get_contents('php://input'), true);
$message = isset($input['message']) ? trim($input['message']) : '';

if ($message === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Missing message']);
  exit;
}

$apiKey = getenv('OPENAI_API_KEY');
if (!$apiKey) {
  http_response_code(500);
  echo json_encode(['error' => 'OPENAI_API_KEY not set']);
  exit;
}

// Call OpenAI Chat Completions (Responses) API
$url = 'https://api.openai.com/v1/chat/completions';
$payload = [
  'model' => 'gpt-4o-mini',
  'messages' => [
    [ 'role' => 'system', 'content' => 'You are Meta Esthetic AI, a helpful assistant for esthetic clinics. Be concise and safe.' ],
    [ 'role' => 'user', 'content' => $message ]
  ],
  'temperature' => 0.2,
  'max_tokens' => 500
];

$ch = curl_init($url);
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
  ],
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => json_encode($payload)
]);

$response = curl_exec($ch);
$errno = curl_errno($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($errno) {
  http_response_code(502);
  echo json_encode(['error' => 'Upstream error', 'details' => $errno]);
  exit;
}

$data = json_decode($response, true);
if ($httpCode >= 400 || !$data) {
  http_response_code(502);
  echo json_encode(['error' => 'OpenAI error', 'details' => $response]);
  exit;
}

$text = $data['choices'][0]['message']['content'] ?? '';
echo json_encode(['response' => $text]);
?>



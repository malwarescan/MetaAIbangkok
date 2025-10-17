<?php
/**
 * PHP Development Server Script for MetaEsthAI
 * Run with: php server.php
 */

// Set the document root to the public directory
$documentRoot = __DIR__ . '/public';
$port = 8000;

echo "MetaEsthAI PHP Server Starting...\n";
echo "Document Root: $documentRoot\n";
echo "Port: $port\n";
echo "URL: http://localhost:$port\n";
echo "Press Ctrl+C to stop the server\n\n";

// Start the built-in PHP server
$command = "php -S localhost:$port -t $documentRoot";
passthru($command);
?>

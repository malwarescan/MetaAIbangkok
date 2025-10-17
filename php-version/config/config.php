<?php
/**
 * Configuration file for MetaEsthAI PHP Version
 */

// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'metaesth_ai');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

// Application configuration
define('APP_NAME', 'MetaEsthAI');
define('APP_VERSION', '2.0.0');
define('APP_URL', 'http://localhost:8000');
define('APP_ENV', 'development');

// Language configuration
define('DEFAULT_LANGUAGE', 'en');
define('SUPPORTED_LANGUAGES', ['en', 'th', 'ko']);

// API configuration
define('OPENAI_API_KEY', $_ENV['OPENAI_API_KEY'] ?? '');

// Security configuration
define('CSRF_TOKEN_NAME', 'csrf_token');
define('SESSION_TIMEOUT', 3600); // 1 hour

// File upload configuration
define('UPLOAD_MAX_SIZE', 5 * 1024 * 1024); // 5MB
define('UPLOAD_ALLOWED_TYPES', ['jpg', 'jpeg', 'png', 'gif', 'pdf']);

// Chat configuration
define('CHAT_MAX_MESSAGES', 50);
define('CHAT_TIMEOUT', 300); // 5 minutes

// Preline.co theme configuration
define('THEME_PRIMARY_COLOR', '#6366f1');
define('THEME_SECONDARY_COLOR', '#8b5cf6');
define('THEME_ACCENT_COLOR', '#ec4899');

// Error reporting based on environment
if (APP_ENV === 'production') {
    error_reporting(0);
    ini_set('display_errors', 0);
} else {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}
?>

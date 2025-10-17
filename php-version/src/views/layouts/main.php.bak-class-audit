<!DOCTYPE html>
<html lang="<?php echo $currentLanguage; ?>" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($title) ? $title . ' - ' . APP_NAME : APP_NAME; ?></title>
    
    <!-- Preline.co CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/preline@2.0.3/dist/preline.min.css">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/assets/css/style.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico">
    
    <!-- Meta tags -->
    <meta name="description" content="AI-Powered Aesthetic Medicine Consultation - MetaEsthAI Thailand">
    <meta name="keywords" content="aesthetic medicine, AI diagnosis, dermatology, Thailand, beauty treatments">
    <meta name="author" content="MetaEsthAI">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?php echo isset($title) ? $title . ' - ' . APP_NAME : APP_NAME; ?>">
    <meta property="og:description" content="AI-Powered Aesthetic Medicine Consultation">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo APP_URL; ?>">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo generateCSRFToken(); ?>">
</head>
<body class="h-full bg-gray-50">
    <!-- Header -->
    <?php include SRC_PATH . '/views/components/header.php'; ?>
    
    <!-- Main Content -->
    <main class="flex-1">
        <?php 
        $viewFile = SRC_PATH . '/views/' . $view . '.php';
        if (file_exists($viewFile)) {
            include $viewFile;
        } else {
            echo '<div class="container mx-auto px-4 py-8"><h1>View not found: ' . $view . '</h1></div>';
        }
        ?>
    </main>
    
    <!-- Footer -->
    <?php include SRC_PATH . '/views/components/footer.php'; ?>
    
    <!-- Preline.co JS -->
    <script src="https://cdn.jsdelivr.net/npm/preline@2.0.3/dist/preline.min.js"></script>
    
    <!-- Custom JS -->
    <script src="/assets/js/main.js"></script>
    
    <!-- Language Switcher Script -->
    <script>
        function changeLanguage(lang) {
            fetch('/api/language', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ language: lang })
            }).then(() => {
                location.reload();
            });
        }
    </script>
</body>
</html>

<?php
// Helper function for CSRF token generation
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}
?>

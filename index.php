
<?php
// Define the current page
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

// Include header
include 'includes/header.php';

// Load the appropriate page content
switch ($page) {
    case 'home':
        include 'pages/home.php';
        break;
    case 'browse':
        $category = isset($_GET['category']) ? $_GET['category'] : '';
        include 'pages/browse.php';
        break;
    case 'search':
        include 'pages/search.php';
        break;
    default:
        include 'pages/404.php';
        break;
}

// Include footer
include 'includes/footer.php';
?>

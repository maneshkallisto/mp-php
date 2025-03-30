
<?php
// Define the current page
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($page === 'login') {
        // Process login form
        $username = isset($_POST['username']) ? $_POST['username'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        $remember = isset($_POST['remember']) ? true : false;
        
        // Simple validation
        if (empty($username) || empty($password)) {
            header('Location: index.php?page=login&error=Please fill in all fields');
            exit;
        }
        
        // In a real application, you would check these credentials against a database
        // For demo purposes, we'll use a hardcoded check
        if ($username === 'admin' && $password === 'password') {
            // Set a session variable to indicate the user is logged in
            if(!isset($_SESSION)) {
                session_start();
            }
            $_SESSION['user_logged_in'] = true;
            $_SESSION['username'] = $username;
            
            // If remember me is checked, set a cookie
            if ($remember) {
                setcookie('remember_user', $username, time() + (86400 * 30), "/"); // 30 days
            }
            
            header('Location: index.php?success=You are now logged in');
            exit;
        } else {
            header('Location: index.php?page=login&error=Invalid username or password');
            exit;
        }
    } elseif ($page === 'register') {
        // Process register form
        $username = isset($_POST['username']) ? $_POST['username'] : '';
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        $confirm_password = isset($_POST['confirm_password']) ? $_POST['confirm_password'] : '';
        $terms = isset($_POST['terms']) ? true : false;
        
        // Simple validation
        if (empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
            header('Location: index.php?page=register&error=Please fill in all fields');
            exit;
        }
        
        if ($password !== $confirm_password) {
            header('Location: index.php?page=register&error=Passwords do not match');
            exit;
        }
        
        if (!$terms) {
            header('Location: index.php?page=register&error=You must agree to the terms');
            exit;
        }
        
        // In a real application, you would save this data to a database
        // For demo purposes, we'll just redirect with a success message
        if(!isset($_SESSION)) {
            session_start();
        }
        $_SESSION['user_logged_in'] = true;
        $_SESSION['username'] = $username;
        
        header('Location: index.php?success=Registration successful! You are now logged in');
        exit;
    }
}

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
    case 'login':
        include 'pages/login.php';
        break;
    case 'register':
        include 'pages/register.php';
        break;
    case 'logout':
        // Handle logout
        if(!isset($_SESSION)) {
            session_start();
        }
        session_destroy();
        // Clear the remember me cookie if it exists
        if(isset($_COOKIE['remember_user'])) {
            setcookie('remember_user', '', time() - 3600, '/');
        }
        header('Location: index.php?success=You have been logged out');
        exit;
        break;
    default:
        include 'pages/404.php';
        break;
}

// Include footer
include 'includes/footer.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mallu Pirate - Torrent Search Engine</title>
    <meta name="description" content="Mallu Pirate is a torrent search engine with verified torrents for movies, TV shows, games, applications, and more.">
    <meta name="author" content="Mallu Pirate">
    
    <meta property="og:title" content="Mallu Pirate - Torrent Search Engine">
    <meta property="og:description" content="Search and download verified torrents for movies, TV shows, games, and more.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@MalluPirate">
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png">
    
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header class="header">
        <div class="container header-container">
            <a href="index.php" class="logo">Mallu Pirate</a>
            
            <form action="index.php" method="GET" class="search-form">
                <input type="hidden" name="page" value="search">
                <input type="text" name="q" class="search-input" placeholder="Search torrents..." required>
                <button type="submit" class="search-btn">Search</button>
            </form>
            
            <nav class="nav">
                <a href="index.php" class="nav-link <?php echo $page === 'home' ? 'active' : ''; ?>">Home</a>
                <a href="index.php?page=browse" class="nav-link <?php echo $page === 'browse' ? 'active' : ''; ?>">Browse</a>
                <a href="index.php?page=trending" class="nav-link <?php echo $page === 'trending' ? 'active' : ''; ?>">Trending</a>
                <a href="index.php?page=top" class="nav-link <?php echo $page === 'top' ? 'active' : ''; ?>">Top 100</a>
                <div class="auth-nav">
                    <a href="index.php?page=login" class="nav-link <?php echo $page === 'login' ? 'active' : ''; ?>">Login</a>
                    <a href="index.php?page=register" class="nav-link auth-register <?php echo $page === 'register' ? 'active' : ''; ?>">Register</a>
                </div>
            </nav>
        </div>
    </header>
    
    <main class="main">
        <div class="container">

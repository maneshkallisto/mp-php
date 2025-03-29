
<?php
// Get category from URL
$category = isset($_GET['category']) ? $_GET['category'] : '';

// Define category details
$categoryDetails = [
    'movies' => ['name' => 'Movies', 'icon' => 'fa-film'],
    'tv' => ['name' => 'TV Shows', 'icon' => 'fa-tv'],
    'games' => ['name' => 'Games', 'icon' => 'fa-gamepad'],
    'music' => ['name' => 'Music', 'icon' => 'fa-music'],
    'apps' => ['name' => 'Applications', 'icon' => 'fa-file-archive'],
    'documentaries' => ['name' => 'Documentaries', 'icon' => 'fa-book-open'],
    'anime' => ['name' => 'Anime', 'icon' => 'fa-tv'],
    'other' => ['name' => 'Other', 'icon' => 'fa-info-circle'],
];
?>

<div class="welcome-card">
    <h1 class="section-title">
        <?php if ($category && isset($categoryDetails[$category])): ?>
            <i class="fas <?php echo $categoryDetails[$category]['icon']; ?>"></i> 
            Browse <?php echo $categoryDetails[$category]['name']; ?>
        <?php else: ?>
            Browse All Categories
        <?php endif; ?>
    </h1>
    
    <?php if (!$category): ?>
    <p>Select a category below or browse all torrents.</p>
    <?php endif; ?>
</div>

<?php if (!$category): ?>
<!-- Categories Grid -->
<section>
    <h2 class="section-title">Categories</h2>
    <div class="categories-grid">
        <?php
        foreach ($categoryDetails as $id => $details) {
            echo '<a href="index.php?page=browse&category=' . $id . '" class="category-card">';
            echo '<div class="category-icon"><i class="fas ' . $details['icon'] . '"></i></div>';
            echo '<h3 class="category-title">' . $details['name'] . '</h3>';
            echo '</a>';
        }
        ?>
    </div>
</section>

<div class="separator"></div>
<?php endif; ?>

<!-- Torrents in category -->
<section>
    <h2 class="section-title">
        <?php 
        if ($category && isset($categoryDetails[$category])) {
            echo $categoryDetails[$category]['name'] . ' Torrents';
        } else {
            echo 'All Torrents';
        }
        ?>
    </h2>
    
    <?php include 'includes/torrents_table.php'; ?>
</section>

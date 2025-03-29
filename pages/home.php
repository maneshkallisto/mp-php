
<div class="welcome-card">
    <h1 class="text-2xl font-bold mb-2">Welcome to Mallu Pirate</h1>
    <p>
        Mallu Pirate is a torrent search website providing access to verified torrents. 
        Browse our extensive collection of movies, TV shows, games, music, applications, and more.
        Please remember to use a VPN for safe and anonymous browsing.
    </p>
</div>

<!-- Categories Section -->
<section>
    <h2 class="section-title">Browse Categories</h2>
    <div class="categories-grid">
        <?php
        $categories = [
            ['id' => 'movies', 'name' => 'Movies', 'icon' => 'fa-film', 'count' => '193,422'],
            ['id' => 'tv', 'name' => 'TV', 'icon' => 'fa-tv', 'count' => '83,541'],
            ['id' => 'games', 'name' => 'Games', 'icon' => 'fa-gamepad', 'count' => '27,309'],
            ['id' => 'music', 'name' => 'Music', 'icon' => 'fa-music', 'count' => '48,752'],
            ['id' => 'apps', 'name' => 'Applications', 'icon' => 'fa-file-archive', 'count' => '35,810'],
            ['id' => 'documentaries', 'name' => 'Documentaries', 'icon' => 'fa-book-open', 'count' => '12,938'],
            ['id' => 'anime', 'name' => 'Anime', 'icon' => 'fa-tv', 'count' => '31,204'],
            ['id' => 'other', 'name' => 'Other', 'icon' => 'fa-info-circle', 'count' => '15,673'],
        ];
        
        foreach ($categories as $category) {
            echo '<a href="index.php?page=browse&category=' . $category['id'] . '" class="category-card">';
            echo '<div class="category-icon"><i class="fas ' . $category['icon'] . '"></i></div>';
            echo '<h3 class="category-title">' . $category['name'] . '</h3>';
            echo '<p class="category-count">' . $category['count'] . ' torrents</p>';
            echo '</a>';
        }
        ?>
    </div>
</section>

<div class="separator"></div>

<!-- Popular Torrents Section -->
<section>
    <h2 class="section-title">Popular Torrents</h2>
    
    <?php include 'includes/torrents_table.php'; ?>
</section>

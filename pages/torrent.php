
<?php
// Get torrent ID from URL
$torrentId = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Sample torrent details - in a real application, this would come from a database
$torrents = [
    1 => [
        'id' => '1',
        'title' => 'Dune Part Two (2024) [2160p] [4K] [BluRay] [x265]',
        'category' => 'Movies',
        'seeds' => 2451,
        'leechers' => 732,
        'size' => '28.4 GB',
        'uploadDate' => '16 May 2024',
        'uploader' => 'RARBG',
        'isVerified' => true,
        'description' => 'Dune: Part Two explores the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.',
        'imdbRating' => '8.6/10',
        'genre' => 'Sci-Fi, Adventure, Drama',
        'director' => 'Denis Villeneuve',
        'cast' => 'Timothée Chalamet, Zendaya, Rebecca Ferguson',
        'language' => 'English',
        'magnet' => 'magnet:?xt=urn:btih:1a2b3c4d5e6f7g8h9i0j&dn=Dune.Part.Two.2024.2160p.4K.BluRay.x265',
        'fileName' => 'Dune.Part.Two.2024.2160p.4K.BluRay.x265.torrent',
    ],
    2 => [
        'id' => '2',
        'title' => 'Fallout Complete Season 1 [1080p] [WEB-DL] [5.1] [x264]',
        'category' => 'TV',
        'seeds' => 3218,
        'leechers' => 876,
        'size' => '16.2 GB',
        'uploadDate' => '15 May 2024',
        'uploader' => 'EZTV',
        'isVerified' => true,
        'description' => 'Based on the popular video game series, Fallout is set in a post-apocalyptic world devastated by nuclear war.',
        'imdbRating' => '8.5/10',
        'genre' => 'Sci-Fi, Adventure, Action',
        'director' => 'Various',
        'cast' => 'Ella Purnell, Walton Goggins, Kyle MacLachlan',
        'language' => 'English',
        'magnet' => 'magnet:?xt=urn:btih:a1b2c3d4e5f6g7h8i9j0&dn=Fallout.Complete.S01.1080p.WEB-DL.5.1.x264',
        'fileName' => 'Fallout.Complete.S01.1080p.WEB-DL.5.1.x264.torrent',
    ],
    3 => [
        'id' => '3',
        'title' => 'The Monkey (2025) [1080p] [WEBRip] [x264] [AAC] [LAMA]',
        'category' => 'Movies',
        'size' => '2.1 GB',
        'uploadDate' => '17 May 2024',
        'uploader' => 'LAMA',
        'isVerified' => true,
        'description' => 'A horror film about a cursed monkey figurine that brings terror to those who possess it.',
        'imdbRating' => '7.2/10',
        'genre' => 'Horror, Thriller',
        'director' => 'Mike Flanagan',
        'cast' => 'Rebecca Hall, Jake Gyllenhaal, Tilda Swinton',
        'language' => 'English',
        'magnet' => 'magnet:?xt=urn:btih:c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6&dn=The-Monkey-2025-1080p-WEBRip-x264-AAC-LAMA',
        'fileName' => 'The-Monkey-2025-1080p-WEBRip-x264-AAC-LAMA.torrent',
    ],
];

// Get torrent details
$torrent = isset($torrents[$torrentId]) ? $torrents[$torrentId] : null;

if (!$torrent) {
    header('Location: index.php?page=404');
    exit;
}
?>

<div class="welcome-card">
    <h1 class="section-title"><?php echo htmlspecialchars($torrent['title']); ?></h1>
    
    <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
        <div>
            <span style="background: var(--muted); padding: 0.25rem 0.5rem; border-radius: var(--radius); margin-right: 0.5rem;">
                <?php echo htmlspecialchars($torrent['category']); ?>
            </span>
            
            <?php if ($torrent['isVerified']): ?>
            <span style="background: rgba(74, 222, 128, 0.2); color: #4ade80; padding: 0.25rem 0.5rem; border-radius: var(--radius);">
                <i class="fas fa-check-circle"></i> Verified
            </span>
            <?php endif; ?>
        </div>
        
        <div style="color: var(--muted-foreground);">
            Uploaded: <?php echo htmlspecialchars($torrent['uploadDate']); ?> by 
            <a href="#" style="color: var(--primary);"><?php echo htmlspecialchars($torrent['uploader']); ?></a>
        </div>
    </div>
</div>

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-top: 1.5rem;">
    <div>
        <section class="welcome-card">
            <h2 class="section-title">Description</h2>
            <p><?php echo htmlspecialchars($torrent['description']); ?></p>
            
            <?php if (isset($torrent['imdbRating'])): ?>
            <div style="margin-top: 1rem;">
                <strong>IMDb Rating:</strong> <?php echo htmlspecialchars($torrent['imdbRating']); ?>
            </div>
            <?php endif; ?>
            
            <?php if (isset($torrent['genre'])): ?>
            <div>
                <strong>Genre:</strong> <?php echo htmlspecialchars($torrent['genre']); ?>
            </div>
            <?php endif; ?>
            
            <?php if (isset($torrent['director'])): ?>
            <div>
                <strong>Director:</strong> <?php echo htmlspecialchars($torrent['director']); ?>
            </div>
            <?php endif; ?>
            
            <?php if (isset($torrent['cast'])): ?>
            <div>
                <strong>Cast:</strong> <?php echo htmlspecialchars($torrent['cast']); ?>
            </div>
            <?php endif; ?>
            
            <?php if (isset($torrent['language'])): ?>
            <div>
                <strong>Language:</strong> <?php echo htmlspecialchars($torrent['language']); ?>
            </div>
            <?php endif; ?>
        </section>
        
        <section class="welcome-card" style="margin-top: 1.5rem;">
            <h2 class="section-title">Comments</h2>
            <p style="color: var(--muted-foreground);">No comments yet. Be the first to comment!</p>
            
            <div style="margin-top: 1rem;">
                <textarea style="width: 100%; min-height: 100px; background: var(--background); border: 1px solid var(--border); border-radius: var(--radius); padding: 0.75rem; color: var(--foreground); resize: vertical;" placeholder="Write a comment..."></textarea>
                <button style="background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: var(--radius); cursor: pointer; margin-top: 0.5rem;">Post Comment</button>
            </div>
        </section>
    </div>
    
    <div>
        <section class="welcome-card">
            <h2 class="section-title">Download</h2>
            
            <div style="margin: 1.5rem 0; text-align: center;">
                <a href="<?php echo htmlspecialchars($torrent['magnet']); ?>" style="display: block; background: var(--primary); color: white; padding: 1rem; border-radius: var(--radius); text-decoration: none; font-weight: 500; margin-bottom: 1rem;">
                    <i class="fas fa-magnet"></i> Magnet Download
                </a>
                
                <a href="index.php?page=download&id=<?php echo $torrentId; ?>" style="display: block; background: var(--secondary); color: white; padding: 1rem; border-radius: var(--radius); text-decoration: none; font-weight: 500;">
                    <i class="fas fa-download"></i> Download Torrent File
                </a>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
                <div style="text-align: center;">
                    <div style="font-size: 2rem; color: #4ade80; font-weight: bold;"><?php echo number_format($torrent['seeds']); ?></div>
                    <div style="color: var(--muted-foreground);">Seeds</div>
                </div>
                
                <div style="text-align: center;">
                    <div style="font-size: 2rem; color: #fb7185; font-weight: bold;"><?php echo number_format($torrent['leechers']); ?></div>
                    <div style="color: var(--muted-foreground);">Leechers</div>
                </div>
            </div>
            
            <div style="margin-top: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Size:</span>
                    <span><?php echo htmlspecialchars($torrent['size']); ?></span>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Category:</span>
                    <span><?php echo htmlspecialchars($torrent['category']); ?></span>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Uploaded:</span>
                    <span><?php echo htmlspecialchars($torrent['uploadDate']); ?></span>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Uploader:</span>
                    <span><?php echo htmlspecialchars($torrent['uploader']); ?></span>
                </div>
            </div>
        </section>
        
        <section class="welcome-card" style="margin-top: 1.5rem;">
            <h2 class="section-title">Health</h2>
            
            <div style="margin-top: 1rem;">
                <div style="height: 8px; background: var(--secondary); border-radius: 4px; overflow: hidden; margin-bottom: 0.5rem;">
                    <div style="height: 100%; width: <?php echo min(100, ($torrent['seeds'] / ($torrent['seeds'] + $torrent['leechers'])) * 100); ?>%; background: var(--primary);"></div>
                </div>
                
                <div style="display: flex; justify-content: space-between; color: var(--muted-foreground); font-size: 0.875rem;">
                    <span>Poor</span>
                    <span>Excellent</span>
                </div>
            </div>
        </section>
    </div>
</div>

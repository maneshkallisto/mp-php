
<?php
// Get torrent ID from URL and ensure it's an integer
$torrentId = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Sample torrent details - in a real application, this would come from a database
$torrents = [
    1 => [
        'id' => '1',
        'title' => 'Dune Part Two (2024) [2160p] [4K] [BluRay] [x265]',
        'category' => 'Movies',
        'size' => '28.4 GB',
        'uploadDate' => '16 May 2024',
        'uploader' => 'RARBG',
        'isVerified' => true,
        'fileName' => 'Dune.Part.Two.2024.2160p.4K.BluRay.x265.torrent',
        'hash' => 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
        'magnet' => 'magnet:?xt=urn:btih:1a2b3c4d5e6f7g8h9i0j&dn=Dune.Part.Two.2024.2160p.4K.BluRay.x265',
    ],
    2 => [
        'id' => '2',
        'title' => 'Fallout Complete Season 1 [1080p] [WEB-DL] [5.1] [x264]',
        'category' => 'TV',
        'size' => '16.2 GB',
        'uploadDate' => '15 May 2024',
        'uploader' => 'EZTV',
        'isVerified' => true,
        'fileName' => 'Fallout.Complete.S01.1080p.WEB-DL.5.1.x264.torrent',
        'hash' => 'b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6',
        'magnet' => 'magnet:?xt=urn:btih:a1b2c3d4e5f6g7h8i9j0&dn=Fallout.Complete.S01.1080p.WEB-DL.5.1.x264',
    ],
    3 => [
        'id' => '3',
        'title' => 'The Monkey (2025) [1080p] [WEBRip] [x264] [AAC] [LAMA]',
        'category' => 'Movies',
        'size' => '2.1 GB',
        'uploadDate' => '17 May 2024',
        'uploader' => 'LAMA',
        'isVerified' => true,
        'fileName' => 'The-Monkey-2025-1080p-WEBRip-x264-AAC-LAMA.torrent',
        'hash' => 'c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6',
        'magnet' => 'magnet:?xt=urn:btih:c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6&dn=The-Monkey-2025-1080p-WEBRip-x264-AAC-LAMA',
    ],
];

// Get torrent details
$torrent = isset($torrents[$torrentId]) ? $torrents[$torrentId] : null;

if (!$torrent) {
    header('Location: index.php?page=404');
    exit;
}

// Count the download (in a real application, you'd update a database)
// This is a placeholder for demonstration
?>

<div class="download-container">
    <div class="download-header">
        <h1>
            <i class="fas fa-download"></i> 
            Download <?php echo htmlspecialchars($torrent['fileName']); ?>
        </h1>
    </div>
    
    <div class="download-content">
        <div class="download-info">
            <h2><?php echo htmlspecialchars($torrent['title']); ?></h2>
            
            <div class="download-details">
                <div class="detail-item">
                    <span class="detail-label">Category:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($torrent['category']); ?></span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">Size:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($torrent['size']); ?></span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">Uploaded:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($torrent['uploadDate']); ?></span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">By:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($torrent['uploader']); ?></span>
                </div>
                
                <div class="detail-item">
                    <span class="detail-label">Hash:</span>
                    <span class="detail-value hash-value"><?php echo htmlspecialchars($torrent['hash']); ?></span>
                </div>
            </div>
            
            <div class="download-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <p>
                    To download torrents, we recommend you use a VPN to protect your privacy.
                    Downloading copyrighted material may be illegal in your country.
                </p>
            </div>
            
            <div class="download-buttons">
                <a href="<?php echo htmlspecialchars($torrent['magnet']); ?>" class="magnet-button">
                    <i class="fas fa-magnet"></i> Magnet Download
                </a>
                
                <a href="#" onclick="startDownload(); return false;" class="torrent-button">
                    <i class="fas fa-file-download"></i> Download Torrent
                </a>
            </div>
            
            <div class="download-help">
                <h3>How to download:</h3>
                <ol>
                    <li>Click on one of the download buttons above.</li>
                    <li>If using magnet link, your torrent client should open automatically.</li>
                    <li>If downloading the .torrent file, open the file with your preferred torrent client.</li>
                    <li>Select where you want to save the files and start downloading.</li>
                </ol>
                
                <h3>Popular Torrent Clients:</h3>
                <ul>
                    <li><a href="https://www.qbittorrent.org/" target="_blank">qBittorrent</a> (Windows, Mac, Linux)</li>
                    <li><a href="https://www.utorrent.com/" target="_blank">µTorrent</a> (Windows, Mac)</li>
                    <li><a href="https://www.transmissionbt.com/" target="_blank">Transmission</a> (Mac, Linux)</li>
                    <li><a href="https://deluge-torrent.org/" target="_blank">Deluge</a> (Windows, Mac, Linux)</li>
                </ul>
            </div>
        </div>
        
        <div class="download-sidebar">
            <div class="sidebar-box">
                <h3>Recommended:</h3>
                <div class="recommended-vpn">
                    <p>
                        <i class="fas fa-shield-alt"></i>
                        Always use a VPN when downloading torrents
                    </p>
                    <ul class="vpn-list">
                        <li>NordVPN</li>
                        <li>ExpressVPN</li>
                        <li>Surfshark</li>
                        <li>CyberGhost</li>
                    </ul>
                </div>
            </div>
            
            <div class="sidebar-box">
                <h3>Related Torrents:</h3>
                <ul class="related-torrents">
                    <li>
                        <a href="index.php?page=torrent&id=1">Dune Part Two (2024) [2160p] [4K]</a>
                    </li>
                    <li>
                        <a href="index.php?page=torrent&id=2">Fallout Complete Season 1 [1080p]</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<script>
    function startDownload() {
        // Simulate file download (in a real application, this would point to an actual file)
        alert('Starting download for <?php echo htmlspecialchars($torrent['fileName']); ?>');
        // In a real application, you would redirect to a PHP script that serves the torrent file
        // window.location.href = 'download_file.php?id=<?php echo $torrentId; ?>';
    }
</script>

<style>
    .download-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .download-header {
        background: var(--primary);
        color: white;
        padding: 15px 20px;
        border-radius: var(--radius);
        margin-bottom: 20px;
    }
    
    .download-header h1 {
        margin: 0;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }
    
    .download-header h1 i {
        margin-right: 10px;
    }
    
    .download-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
    }
    
    @media (max-width: 768px) {
        .download-content {
            grid-template-columns: 1fr;
        }
    }
    
    .download-info {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 20px;
    }
    
    .download-info h2 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.25rem;
        color: var(--foreground);
    }
    
    .download-details {
        margin-bottom: 20px;
    }
    
    .detail-item {
        display: flex;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--border);
    }
    
    .detail-item:last-child {
        border-bottom: none;
    }
    
    .detail-label {
        width: 100px;
        font-weight: bold;
        color: var(--muted-foreground);
    }
    
    .detail-value {
        flex: 1;
    }
    
    .hash-value {
        word-break: break-all;
    }
    
    .download-warning {
        background: rgba(255, 0, 0, 0.05);
        border: 1px solid rgba(255, 0, 0, 0.2);
        border-radius: var(--radius);
        padding: 15px;
        margin-bottom: 20px;
        display: flex;
        align-items: flex-start;
    }
    
    .download-warning i {
        color: #ff9800;
        margin-right: 10px;
        font-size: 1.5rem;
    }
    
    .download-buttons {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
    }
    
    @media (max-width: 500px) {
        .download-buttons {
            flex-direction: column;
        }
    }
    
    .download-buttons a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 20px;
        border-radius: var(--radius);
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
    }
    
    .download-buttons a i {
        margin-right: 10px;
    }
    
    .magnet-button {
        background: var(--primary);
        color: white;
        flex: 1;
    }
    
    .magnet-button:hover {
        background: var(--primary-foreground);
    }
    
    .torrent-button {
        background: var(--secondary);
        color: white;
        flex: 1;
    }
    
    .torrent-button:hover {
        background: var(--secondary-foreground);
    }
    
    .download-help {
        margin-top: 20px;
    }
    
    .download-help h3 {
        font-size: 1.1rem;
        margin-bottom: 10px;
    }
    
    .download-help ol, .download-help ul {
        margin-left: 20px;
    }
    
    .download-help li {
        margin-bottom: 5px;
    }
    
    .download-sidebar {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .sidebar-box {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 20px;
    }
    
    .sidebar-box h3 {
        margin-top: 0;
        margin-bottom: 15px;
        font-size: 1.1rem;
    }
    
    .recommended-vpn {
        margin-bottom: 10px;
    }
    
    .recommended-vpn p {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .recommended-vpn p i {
        margin-right: 10px;
        color: var(--primary);
    }
    
    .vpn-list {
        margin-left: 25px;
    }
    
    .related-torrents {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .related-torrents li {
        margin-bottom: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--border);
    }
    
    .related-torrents li:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
    
    .related-torrents a {
        color: var(--primary);
        text-decoration: none;
    }
    
    .related-torrents a:hover {
        text-decoration: underline;
    }
</style>

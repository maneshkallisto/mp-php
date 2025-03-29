
<?php
// Define sample data for torrents
$torrents = [
    [
        'id' => '1',
        'title' => 'Dune Part Two (2024) [2160p] [4K] [BluRay] [x265]',
        'category' => 'Movies',
        'seeds' => 2451,
        'leechers' => 732,
        'size' => '28.4 GB',
        'uploadDate' => '16 May 2024',
        'uploader' => 'RARBG',
        'isVerified' => true,
    ],
    [
        'id' => '2',
        'title' => 'Fallout Complete Season 1 [1080p] [WEB-DL] [5.1] [x264]',
        'category' => 'TV',
        'seeds' => 3218,
        'leechers' => 876,
        'size' => '16.2 GB',
        'uploadDate' => '15 May 2024',
        'uploader' => 'EZTV',
        'isVerified' => true,
    ],
    [
        'id' => '3',
        'title' => 'Elden Ring [GOG] + All DLCs + Shadow of the Erdtree',
        'category' => 'Games',
        'seeds' => 1247,
        'leechers' => 532,
        'size' => '62.7 GB',
        'uploadDate' => '12 May 2024',
        'uploader' => 'FitGirl',
        'isVerified' => true,
    ],
    [
        'id' => '4',
        'title' => 'Adobe Photoshop 2024 v25.8.0.427 (x64) Multilingual',
        'category' => 'Applications',
        'seeds' => 937,
        'leechers' => 152,
        'size' => '3.8 GB',
        'uploadDate' => '14 May 2024',
        'uploader' => 'm0nkrus',
        'isVerified' => true,
    ],
    [
        'id' => '5',
        'title' => 'The Batman (2022) [1080p] [BluRay] [5.1] [YTS]',
        'category' => 'Movies',
        'seeds' => 1853,
        'leechers' => 421,
        'size' => '2.4 GB',
        'uploadDate' => '13 May 2024',
        'uploader' => 'YTS',
        'isVerified' => true,
    ],
    [
        'id' => '6',
        'title' => 'The Bear Complete Season 2 [1080p] [WEB-DL] [H264]',
        'category' => 'TV',
        'seeds' => 1532,
        'leechers' => 342,
        'size' => '10.7 GB',
        'uploadDate' => '11 May 2024',
        'uploader' => 'EZTV',
        'isVerified' => true,
    ],
    [
        'id' => '7',
        'title' => 'Deadpool & Wolverine (2024) [1080p] [HDTS] [C4S]',
        'category' => 'Movies',
        'seeds' => 4853,
        'leechers' => 1203,
        'size' => '2.1 GB',
        'uploadDate' => '15 May 2024',
        'uploader' => 'C4S',
        'isVerified' => false,
    ],
    [
        'id' => '8',
        'title' => 'Windows 11 Pro 22H2 (x64) Activated [Pre-Activated]',
        'category' => 'Applications',
        'seeds' => 2145,
        'leechers' => 417,
        'size' => '4.9 GB',
        'uploadDate' => '10 May 2024',
        'uploader' => 'MrPCWarez',
        'isVerified' => true,
    ],
    [
        'id' => '9',
        'title' => 'Oppenheimer (2023) [2160p] [4K] [HDR] [BluRay] [IMAX] [x265]',
        'category' => 'Movies',
        'seeds' => 3257,
        'leechers' => 498,
        'size' => '32.6 GB',
        'uploadDate' => '09 May 2024',
        'uploader' => 'FraMeSToR',
        'isVerified' => true,
    ],
    [
        'id' => '10',
        'title' => 'Microsoft Office 2021 Professional Plus v2108 Build 14332.20262',
        'category' => 'Applications',
        'seeds' => 1756,
        'leechers' => 324,
        'size' => '4.2 GB',
        'uploadDate' => '08 May 2024',
        'uploader' => 'KMS_Activator',
        'isVerified' => true,
    ],
];

// Filter torrents based on category if specified
if (isset($_GET['category']) && $_GET['category']) {
    $category = $_GET['category'];
    $filteredTorrents = array_filter($torrents, function($torrent) use ($category) {
        return strtolower($torrent['category']) === strtolower($category);
    });
    $torrents = $filteredTorrents;
}

// Output the torrents table
?>
<table class="torrents-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Size</th>
            <th>Seeds</th>
            <th>Leechers</th>
            <th>Uploader</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($torrents as $torrent): ?>
        <tr>
            <td>
                <a href="index.php?page=torrent&id=<?php echo $torrent['id']; ?>" class="torrent-link">
                    <?php echo htmlspecialchars($torrent['title']); ?>
                    <?php if ($torrent['isVerified']): ?>
                    <span class="verified-badge">
                        <i class="fas fa-check-circle"></i>
                    </span>
                    <?php endif; ?>
                </a>
            </td>
            <td><?php echo htmlspecialchars($torrent['category']); ?></td>
            <td><?php echo htmlspecialchars($torrent['size']); ?></td>
            <td class="seeds"><?php echo number_format($torrent['seeds']); ?></td>
            <td class="leechers"><?php echo number_format($torrent['leechers']); ?></td>
            <td><?php echo htmlspecialchars($torrent['uploader']); ?></td>
            <td><?php echo htmlspecialchars($torrent['uploadDate']); ?></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>

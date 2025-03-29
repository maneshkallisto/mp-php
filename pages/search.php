
<?php
$searchTerm = isset($_GET['q']) ? htmlspecialchars($_GET['q']) : '';
?>

<div class="welcome-card">
    <h1 class="section-title">Search Results</h1>
    <p>
        <?php if ($searchTerm): ?>
            Showing results for: <strong><?php echo $searchTerm; ?></strong>
        <?php else: ?>
            Please enter a search term
        <?php endif; ?>
    </p>
</div>

<?php if ($searchTerm): ?>
<section>
    <h2 class="section-title">Found Torrents</h2>
    
    <?php
    // In a real application, you would search your database here
    // For this example, we'll include the sample torrents table
    include 'includes/torrents_table.php';
    ?>
</section>

<?php else: ?>
<div class="welcome-card">
    <p>Use the search bar above to find torrents.</p>
</div>
<?php endif; ?>

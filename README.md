
# Mallu Pirate - PHP Torrent Website

This is a PHP implementation of a torrent search website. It provides a user interface for browsing and searching torrents across various categories.

## Features

- Browse torrents by category (Movies, TV Shows, Games, Music, Applications, etc.)
- Search functionality
- Torrent details pages with download links
- Responsive design

## File Structure

- `index.php` - Main entry point that handles page routing
- `css/style.css` - Stylesheet for the entire website
- `includes/` - Contains reusable page elements
  - `header.php` - Website header with navigation
  - `footer.php` - Website footer
  - `torrents_table.php` - Reusable torrent listing table
- `pages/` - Contains individual page templates
  - `home.php` - Homepage with categories and popular torrents
  - `browse.php` - Category browsing page
  - `search.php` - Search results page
  - `torrent.php` - Individual torrent details page
  - `404.php` - Not found page

## Installation

1. Install a web server with PHP support (Apache, Nginx, etc.)
2. Clone or download this project to your web server's document root
3. Access the website through your web browser

## Note

This is a demonstration project only. No actual torrents are hosted or distributed through this website.

## Database Integration

For a real-world implementation, you would need to:

1. Create a database (MySQL/MariaDB recommended)
2. Set up tables for torrents, categories, users, comments, etc.
3. Modify the PHP files to connect to the database and query real data
4. Implement user authentication if needed

## License

This project is for demonstration purposes only.

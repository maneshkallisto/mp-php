
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-8 bg-card border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">1337Archive</h3>
            <p className="text-muted-foreground">
              1337Archive is a torrent site that offers verified torrents for movies, TV shows, games, music, apps, and more.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/browse/movies" className="text-muted-foreground hover:text-primary">Movies</Link></li>
              <li><Link to="/browse/tv" className="text-muted-foreground hover:text-primary">TV Shows</Link></li>
              <li><Link to="/browse/games" className="text-muted-foreground hover:text-primary">Games</Link></li>
              <li><Link to="/browse/music" className="text-muted-foreground hover:text-primary">Music</Link></li>
              <li><Link to="/browse/apps" className="text-muted-foreground hover:text-primary">Applications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/rules" className="text-muted-foreground hover:text-primary">Rules</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link to="/dmca" className="text-muted-foreground hover:text-primary">DMCA</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/trending" className="text-muted-foreground hover:text-primary">Trending</Link></li>
              <li><Link to="/popular" className="text-muted-foreground hover:text-primary">Popular Today</Link></li>
              <li><Link to="/top" className="text-muted-foreground hover:text-primary">Top 100</Link></li>
              <li><Link to="/latest" className="text-muted-foreground hover:text-primary">Latest Uploads</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            This is a demo website and does not actually host or distribute any content. 
            Created for demonstration purposes only.
          </p>
          <p className="mt-2">
            © 2023 1337Archive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

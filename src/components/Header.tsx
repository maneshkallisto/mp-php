
import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, redirect to search results
    window.location.href = `index.php?page=search&q=${encodeURIComponent(searchQuery)}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto">
        {/* Top Header with Logo and Search */}
        <div className="flex items-center justify-between py-4">
          <a href="index.php" className="text-2xl font-bold text-primary">Mallu<span className="text-foreground">Pirate</span></a>
          
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="w-full flex">
              <Input 
                type="text" 
                placeholder="Search for torrents..." 
                className="rounded-r-none focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="rounded-l-none">
                <Search size={16} className="mr-2" /> Search
              </Button>
            </form>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" asChild>
              <a href="index.php?page=login">Login</a>
            </Button>
            <Button asChild>
              <a href="index.php?page=register">Register</a>
            </Button>
          </div>
        </div>
        
        {/* Mobile Search (only visible on small screens) */}
        <div className="md:hidden px-4 pb-4">
          <form onSubmit={handleSearch} className="flex">
            <Input 
              type="text" 
              placeholder="Search for torrents..." 
              className="rounded-r-none focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="rounded-l-none px-3">
              <Search size={16} />
            </Button>
          </form>
        </div>
        
        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t border-border`}>
          <ul className="flex flex-col md:flex-row overflow-x-auto whitespace-nowrap py-1">
            <li>
              <a href="index.php" className="nav-link active">Home</a>
            </li>
            <li>
              <a href="index.php?page=browse&category=movies" className="nav-link">Movies</a>
            </li>
            <li>
              <a href="index.php?page=browse&category=tv" className="nav-link">TV</a>
            </li>
            <li>
              <a href="index.php?page=browse&category=games" className="nav-link">Games</a>
            </li>
            <li>
              <a href="index.php?page=browse&category=music" className="nav-link">Music</a>
            </li>
            <li>
              <a href="index.php?page=browse&category=apps" className="nav-link">Applications</a>
            </li>
            <li>
              <a href="index.php?page=browse&category=documentaries" className="nav-link">Documentaries</a>
            </li>
            <li>
              <a href="index.php?page=browse&category=anime" className="nav-link">Anime</a>
            </li>
            <li>
              <a href="index.php?page=browse&category=other" className="nav-link">Other</a>
            </li>
            <li>
              <a href="index.php?page=top" className="nav-link">Top 100</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

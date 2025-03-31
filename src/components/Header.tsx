
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
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto">
        {/* Top Header with Logo and Search */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-primary">Mallu<span className="text-foreground">Pirate</span></Link>
          
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
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
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
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li>
              <Link to="/browse/movies" className="nav-link">Movies</Link>
            </li>
            <li>
              <Link to="/browse/tv" className="nav-link">TV</Link>
            </li>
            <li>
              <Link to="/browse/games" className="nav-link">Games</Link>
            </li>
            <li>
              <Link to="/browse/music" className="nav-link">Music</Link>
            </li>
            <li>
              <Link to="/browse/apps" className="nav-link">Applications</Link>
            </li>
            <li>
              <Link to="/browse/documentaries" className="nav-link">Documentaries</Link>
            </li>
            <li>
              <Link to="/browse/anime" className="nav-link">Anime</Link>
            </li>
            <li>
              <Link to="/browse/other" className="nav-link">Other</Link>
            </li>
            <li>
              <Link to="/top" className="nav-link">Top 100</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

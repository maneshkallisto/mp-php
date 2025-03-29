
import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Download, Clock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TrendingItemProps {
  id: string;
  title: string;
  category: string;
  image: string;
  seeds: number;
  leechers: number;
  uploadDate: string;
  rating?: string;
}

const trendingItems: TrendingItemProps[] = [
  {
    id: '1',
    title: 'Dune Part Two (2024) [2160p] [4K] [BluRay] [x265]',
    category: 'Movies',
    image: 'https://via.placeholder.com/200x300/1A202C/FFFFFF?text=Dune+Part+Two',
    seeds: 2451,
    leechers: 732,
    uploadDate: '2d ago',
    rating: '8.6/10'
  },
  {
    id: '2',
    title: 'The Batman (2022) [1080p] [BluRay] [5.1]',
    category: 'Movies',
    image: 'https://via.placeholder.com/200x300/1A202C/FFFFFF?text=The+Batman',
    seeds: 1853,
    leechers: 421,
    uploadDate: '3d ago',
    rating: '7.9/10'
  },
  {
    id: '3',
    title: 'Fallout Season 1 Complete [1080p] [WEB-DL]',
    category: 'TV',
    image: 'https://via.placeholder.com/200x300/1A202C/FFFFFF?text=Fallout+S01',
    seeds: 3218,
    leechers: 876,
    uploadDate: '1d ago',
    rating: '8.7/10'
  },
  {
    id: '4',
    title: 'Elden Ring [GOG] + All DLCs',
    category: 'Games',
    image: 'https://via.placeholder.com/200x300/1A202C/FFFFFF?text=Elden+Ring',
    seeds: 1247,
    leechers: 532,
    uploadDate: '4d ago',
    rating: '9.2/10'
  },
  {
    id: '5',
    title: 'Deadpool & Wolverine (2024) [1080p] [HDTS]',
    category: 'Movies',
    image: 'https://via.placeholder.com/200x300/1A202C/FFFFFF?text=Deadpool+%26+Wolverine',
    seeds: 4853,
    leechers: 1203,
    uploadDate: '12h ago',
    rating: '8.2/10'
  },
  {
    id: '6',
    title: 'The Bear Complete Season 2 [1080p] [WEB-DL]',
    category: 'TV',
    image: 'https://via.placeholder.com/200x300/1A202C/FFFFFF?text=The+Bear+S02',
    seeds: 1532,
    leechers: 342,
    uploadDate: '5d ago',
    rating: '8.9/10'
  },
];

const TrendingSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Trending Today</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {trendingItems.map((item) => (
          <Link 
            key={item.id}
            to={`/torrent/${item.id}`}
            className="trending-item bg-card rounded-md overflow-hidden border border-border hover:border-primary transition-all hover:shadow-md"
          >
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <Badge className="absolute top-2 left-2 bg-primary">{item.category}</Badge>
              {item.rating && (
                <div className="absolute bottom-2 left-2 flex items-center bg-black/70 text-yellow-300 text-xs px-2 py-1 rounded">
                  <Star className="w-3 h-3 mr-1" />
                  {item.rating}
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="trending-title text-sm font-medium line-clamp-2 transition-colors">
                {item.title}
              </h3>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center text-green-500">
                  <Download className="w-3 h-3 mr-1" />
                  <span>{item.seeds}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{item.uploadDate}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;

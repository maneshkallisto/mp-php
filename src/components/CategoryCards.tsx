
import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Tv, Gamepad2, Music, FileArchive, BookOpen, BadgeInfo } from 'lucide-react';

const categories = [
  {
    id: 'movies',
    name: 'Movies',
    icon: <Film className="w-8 h-8" />,
    count: '193,422',
  },
  {
    id: 'tv',
    name: 'TV',
    icon: <Tv className="w-8 h-8" />,
    count: '83,541',
  },
  {
    id: 'games',
    name: 'Games',
    icon: <Gamepad2 className="w-8 h-8" />,
    count: '27,309',
  },
  {
    id: 'music',
    name: 'Music',
    icon: <Music className="w-8 h-8" />,
    count: '48,752',
  },
  {
    id: 'apps',
    name: 'Applications',
    icon: <FileArchive className="w-8 h-8" />,
    count: '35,810',
  },
  {
    id: 'documentaries',
    name: 'Documentaries',
    icon: <BookOpen className="w-8 h-8" />,
    count: '12,938',
  },
  {
    id: 'anime',
    name: 'Anime',
    icon: <Tv className="w-8 h-8" />,
    count: '31,204',
  },
  {
    id: 'other',
    name: 'Other',
    icon: <BadgeInfo className="w-8 h-8" />,
    count: '15,673',
  },
];

const CategoryCards = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/browse/${category.id}`}
            className="category-card bg-card rounded-md p-4 border border-border flex flex-col items-center justify-center text-center transition-colors hover:shadow-md"
          >
            <div className="text-muted-foreground mb-3">
              {category.icon}
            </div>
            <h3 className="category-title font-medium mb-1">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.count} torrents</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;

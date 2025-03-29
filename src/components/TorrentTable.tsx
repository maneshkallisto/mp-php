
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Download, Users, UploadCloud, Calendar } from 'lucide-react';

interface TorrentProps {
  id: string;
  title: string;
  category: string;
  seeds: number;
  leechers: number;
  size: string;
  uploadDate: string;
  uploader: string;
  isVerified?: boolean;
}

interface TorrentTableProps {
  torrents: TorrentProps[];
  title: string;
}

const TorrentTable: React.FC<TorrentTableProps> = ({ torrents, title }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-secondary text-secondary-foreground">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-2 text-center whitespace-nowrap">SE</th>
              <th className="py-3 px-2 text-center whitespace-nowrap">LE</th>
              <th className="py-3 px-4 whitespace-nowrap hidden md:table-cell">Size</th>
              <th className="py-3 px-4 whitespace-nowrap hidden lg:table-cell">Date</th>
              <th className="py-3 px-4 whitespace-nowrap hidden lg:table-cell">Uploader</th>
            </tr>
          </thead>
          <tbody>
            {torrents.map((torrent) => (
              <tr 
                key={torrent.id} 
                className="border-b border-border hover:bg-secondary/20 transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="flex flex-col">
                    <Link 
                      to={`/torrent/${torrent.id}`} 
                      className="font-medium torrent-link"
                    >
                      {torrent.title}
                    </Link>
                    <div className="flex mt-1 text-xs">
                      <Badge variant="outline" className="mr-2 border-primary/30 text-primary">
                        {torrent.category}
                      </Badge>
                      {torrent.isVerified && (
                        <Badge variant="secondary" className="text-green-400">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-2 text-center text-green-500 font-medium">
                  {torrent.seeds}
                </td>
                <td className="py-3 px-2 text-center text-red-500 font-medium">
                  {torrent.leechers}
                </td>
                <td className="py-3 px-4 text-center hidden md:table-cell text-sm text-muted-foreground">
                  {torrent.size}
                </td>
                <td className="py-3 px-4 text-center hidden lg:table-cell text-sm text-muted-foreground">
                  {torrent.uploadDate}
                </td>
                <td className="py-3 px-4 text-center hidden lg:table-cell">
                  <Link to={`/user/${torrent.uploader}`} className="text-sm hover:text-primary">
                    {torrent.uploader}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TorrentTable;

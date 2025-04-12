
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const TorrentDetail = () => {
  const { id } = useParams();
  const torrentUrl = `index.php?page=torrent&id=${id}`;
  
  const handleViewTorrent = () => {
    // Open in new tab to avoid iframe security restrictions
    window.open(torrentUrl, "_blank", "noopener,noreferrer");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-12 flex justify-center items-center">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Torrent Details</h1>
          <p className="mb-6">View details for torrent #{id}</p>
          <Button 
            onClick={handleViewTorrent}
            className="flex items-center gap-2"
          >
            View Torrent Details
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TorrentDetail;

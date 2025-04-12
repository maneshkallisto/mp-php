
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from '@/components/Footer';

const TorrentDetail = () => {
  const { id } = useParams();
  const torrentUrl = `index.php?page=torrent&id=${id}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-12 flex justify-center items-center">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Torrent Details</h1>
          <p className="mb-6">Click the button below to view details for torrent #{id}</p>
          <Link 
            to={torrentUrl}
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Open in new tab to avoid iframe security restrictions
              window.open(torrentUrl, "_blank");
            }}
          >
            View Torrent Details
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TorrentDetail;


import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from '@/components/Footer';

const TorrentDetail = () => {
  const { id } = useParams();
  
  useEffect(() => {
    // Force immediate navigation to PHP page
    window.location.href = `index.php?page=torrent&id=${id}`;
    // As a fallback, if replace doesn't work properly
    setTimeout(() => {
      window.location.href = `index.php?page=torrent&id=${id}`;
    }, 100);
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="text-center animate-pulse">
          <p className="text-lg">Loading torrent details...</p>
          <p className="text-sm text-muted-foreground mt-2">Please wait while we redirect you to the torrent page.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TorrentDetail;

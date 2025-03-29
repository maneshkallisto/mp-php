
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCards from '@/components/CategoryCards';
import PopularTorrents from '@/components/PopularTorrents';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-card rounded-lg border border-border p-6 mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome to Mallu Pirate</h1>
          <p className="text-muted-foreground">
            Mallu Pirate is a torrent search website providing access to verified torrents. 
            Browse our extensive collection of movies, TV shows, games, music, applications, and more.
            Please remember to use a VPN for safe and anonymous browsing.
          </p>
        </div>
        
        <CategoryCards />
        
        <Separator className="my-8" />
        
        <PopularTorrents />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

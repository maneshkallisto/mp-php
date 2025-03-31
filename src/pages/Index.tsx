
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCards from '@/components/CategoryCards';
import PopularTorrents from '@/components/PopularTorrents';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  useEffect(() => {
    // Redirect to PHP home page
    window.location.href = 'index.php';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="text-center">
          <p>Redirecting to homepage...</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

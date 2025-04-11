
import React from 'react';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Redirect to PHP home page with full page reload
    window.location.href = 'index.php';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="text-center animate-pulse">
          <p className="text-lg">Redirecting to homepage...</p>
          <p className="text-sm text-muted-foreground mt-2">Please wait while we redirect you to the main page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

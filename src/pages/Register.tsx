
import React from 'react';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Register = () => {
  useEffect(() => {
    // Redirect to PHP register page with full page reload
    window.location.href = 'index.php?page=register';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto py-12 px-4 text-center">
        <div className="animate-pulse">
          <p className="text-lg">Redirecting to register page...</p>
          <p className="text-sm text-muted-foreground mt-2">Please wait while we redirect you to the registration page.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;


import React from 'react';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  useEffect(() => {
    // Redirect to PHP login page with full page reload
    window.location.href = 'index.php?page=login';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto py-12 px-4 text-center">
        <div className="animate-pulse">
          <p className="text-lg">Redirecting to login page...</p>
          <p className="text-sm text-muted-foreground mt-2">Please wait while we redirect you to the login page.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

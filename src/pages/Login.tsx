
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  useEffect(() => {
    // Redirect to PHP login page
    window.location.href = 'index.php?page=login';
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto py-12 px-4 text-center">
        <p>Redirecting to login page...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;


import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Register = () => {
  useEffect(() => {
    // Redirect to PHP register page
    window.location.href = 'index.php?page=register';
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto py-12 px-4 text-center">
        <p>Redirecting to register page...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;


import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    // Redirect to PHP register page
    window.location.href = 'index.php?page=register';
  }, []);

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-2xl font-bold mb-4">Redirecting to register page...</h1>
      <p>If you are not redirected, <a href="index.php?page=register" className="text-primary hover:underline">click here</a>.</p>
    </div>
  );
};

export default Register;

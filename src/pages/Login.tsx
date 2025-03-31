
import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    // Redirect to PHP login page
    window.location.href = 'index.php?page=login';
  }, []);

  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-2xl font-bold mb-4">Redirecting to login page...</h1>
      <p>If you are not redirected, <a href="index.php?page=login" className="text-primary hover:underline">click here</a>.</p>
    </div>
  );
};

export default Login;

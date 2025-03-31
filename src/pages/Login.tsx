
import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    // Redirect to the PHP login page
    window.location.href = 'index.php?page=login';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg">Redirecting to login page...</p>
    </div>
  );
};

export default Login;

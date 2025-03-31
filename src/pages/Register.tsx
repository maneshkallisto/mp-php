
import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    // Redirect to the PHP register page
    window.location.href = 'index.php?page=register';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg">Redirecting to register page...</p>
    </div>
  );
};

export default Register;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Get URL params for error and success messages
  const queryParams = new URLSearchParams(window.location.search);
  const urlError = queryParams.get('error');
  const urlSuccess = queryParams.get('success');

  // Set error or success message from URL params
  React.useEffect(() => {
    if (urlError) setError(urlError);
    if (urlSuccess) setSuccess(urlSuccess);
  }, [urlError, urlSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // For demo purposes, simulate login (in a real app, this would be an API call)
    if (username === 'admin' && password === 'password') {
      window.location.href = '/?success=You are now logged in';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto bg-card border border-border rounded-lg shadow-sm">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
            
            {error && (
              <div className="bg-destructive/15 text-destructive p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4">
                {success}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username or Email</Label>
                <Input 
                  id="username" 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot Password?
                </a>
              </div>
              
              <Button type="submit" className="w-full">Login</Button>
            </form>
            
            <div className="mt-6 text-center">
              <p>
                Don't have an account?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

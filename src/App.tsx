
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import TorrentDetail from "./components/TorrentDetail";

// Direct redirect component with no delays
const DirectRedirect = ({ phpPage }: { phpPage: string }) => {
  React.useEffect(() => {
    // Try both methods for maximum compatibility
    window.location.href = phpPage;
    
    // Fallback with timeout
    setTimeout(() => {
      document.location.href = phpPage;
    }, 100);
  }, [phpPage]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center animate-pulse">
        <p className="text-lg">Loading page...</p>
        <p className="text-sm text-muted-foreground mt-2">Please wait while we redirect you.</p>
      </div>
    </div>
  );
};

function App() {
  const queryClient = new QueryClient();
  
  // Force redirect to PHP on initial load
  React.useEffect(() => {
    const currentPath = window.location.pathname;
    
    // If we're on the root path, immediately redirect to PHP index
    if (currentPath === "/") {
      window.location.href = "index.php";
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Direct immediately to PHP pages */}
            <Route path="/" element={<DirectRedirect phpPage="index.php" />} />
            <Route path="/torrent/:id" element={<TorrentDetail />} />
            <Route path="/login" element={<DirectRedirect phpPage="index.php?page=login" />} />
            <Route path="/register" element={<DirectRedirect phpPage="index.php?page=register" />} />
            {/* Catch all other routes */}
            <Route path="*" element={<DirectRedirect phpPage="index.php" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

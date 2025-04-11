
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TorrentDetail from "./components/TorrentDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Helper component to redirect to PHP page
const RedirectToPhp = ({ phpPage }: { phpPage: string }) => {
  useEffect(() => {
    window.location.href = phpPage;
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
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RedirectToPhp phpPage="index.php" />} />
            <Route path="/torrent/:id" element={<TorrentDetail />} />
            <Route path="/login" element={<RedirectToPhp phpPage="index.php?page=login" />} />
            <Route path="/register" element={<RedirectToPhp phpPage="index.php?page=register" />} />
            {/* Handle any other path by redirecting to PHP index */}
            <Route path="*" element={<RedirectToPhp phpPage="index.php" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

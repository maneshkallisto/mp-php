
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import TorrentDetail from "./components/TorrentDetail";

// Create a simple redirect component
const Redirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.top.location.href = to;
  }, [to]);
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center animate-pulse">
        <p className="text-lg">Redirecting...</p>
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
            <Route path="/" element={<Redirect to="index.php" />} />
            <Route path="/torrent/:id" element={<TorrentDetail />} />
            <Route path="/login" element={<Redirect to="index.php?page=login" />} />
            <Route path="/register" element={<Redirect to="index.php?page=register" />} />
            <Route path="*" element={<Redirect to="index.php" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

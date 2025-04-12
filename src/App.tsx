
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import TorrentDetail from "./components/TorrentDetail";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Create a direct link component to PHP pages
const PHPRedirect = ({ to }: { to: string }) => {
  const handleRedirect = () => {
    window.open(to, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background">
      <div className="text-center max-w-md p-6 bg-card rounded-lg shadow-lg border border-border">
        <h1 className="text-2xl font-bold mb-4">Mallu Pirate</h1>
        <p className="text-lg mb-6">Click the button below to continue to the site:</p>
        <Button 
          onClick={handleRedirect} 
          className="flex items-center gap-2"
          size="lg"
        >
          Continue to Site
          <ExternalLink size={16} />
        </Button>
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
            <Route path="/" element={<PHPRedirect to="index.php" />} />
            <Route path="/torrent/:id" element={<TorrentDetail />} />
            <Route path="/login" element={<PHPRedirect to="index.php?page=login" />} />
            <Route path="/register" element={<PHPRedirect to="index.php?page=register" />} />
            <Route path="*" element={<PHPRedirect to="index.php" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

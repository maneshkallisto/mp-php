
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import TorrentDetail from "./components/TorrentDetail";

// We're simplifying this component to immediately redirect
const RedirectToPhp = ({ phpPage }: { phpPage: string }) => {
  React.useEffect(() => {
    // Use replace instead of href for immediate redirection without browser history entry
    window.location.replace(phpPage);
  }, []);

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
            {/* Direct immediately to PHP pages without React rendering */}
            <Route path="/" element={<RedirectToPhp phpPage="index.php" />} />
            <Route path="/torrent/:id" element={<TorrentDetail />} />
            <Route path="/login" element={<RedirectToPhp phpPage="index.php?page=login" />} />
            <Route path="/register" element={<RedirectToPhp phpPage="index.php?page=register" />} />
            {/* Catch all other routes */}
            <Route path="*" element={<RedirectToPhp phpPage="index.php" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

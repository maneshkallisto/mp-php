
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import TorrentDetail from "./components/TorrentDetail";

// Create a simple redirect display component that doesn't cause security errors
const Redirect = ({ to }: { to: string }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-lg">Please click the link below to continue:</p>
        <div className="mt-4">
          <Link 
            to={to} 
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Open in new tab to avoid iframe security restrictions
              window.open(to, "_blank");
            }}
          >
            Continue to {to}
          </Link>
        </div>
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

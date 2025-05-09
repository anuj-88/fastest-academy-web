
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Preloader from "./components/Preloader";
import AchieversPage from "./pages/AchieversPage";
import { initScrollReveal } from "./utils/scrollReveal";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize scroll reveal
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/achievers" element={<AchieversPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import OurProductSection from "./pages/Ourproduct";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ourproduct" element={<OurProductSection />} />
          <Route path="/product" element={<PlaceholderPage title="Product" description="Discover our revolutionary space technology products and solutions." />} />
          <Route path="/solution" element={<PlaceholderPage title="Solution" description="Explore comprehensive solutions for space infrastructure and connectivity." />} />
          <Route path="/mission" element={<PlaceholderPage title="Mission" description="Learn about our mission to revolutionize space technology and lunar infrastructure." />} />
          <Route path="/vision" element={<PlaceholderPage title="Vision" description="Our vision for the future of space exploration and technology." />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" description="Meet the team behind SpacemanCraft and our journey to space." />} />
          <Route path="/career" element={<PlaceholderPage title="Career" description="Join our mission and explore career opportunities at SpacemanCraft." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

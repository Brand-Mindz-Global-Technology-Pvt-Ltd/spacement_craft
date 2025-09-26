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
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Solution from "./pages/Solution";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import Product from "./pages/Product";

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
          <Route path="/product" element={<Product />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/mission" element={<PlaceholderPage title="Mission" description="Learn about our mission to revolutionize space technology and lunar infrastructure." />} />
          <Route path="/vision" element={<PlaceholderPage title="Vision" description="Our vision for the future of space exploration and technology." />} />
          <Route path="/about" element={<About /> } />
          <Route path="/career" element={<PlaceholderPage title="Career" description="Join our mission and explore career opportunities at SpacemanCraft." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpage" element={<BlogPage/>} />


          <Route path="/contactus" element={<ContactUs /> } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

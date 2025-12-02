import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Preloader from "./components/ui/Preloader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import OurProductSection from "./pages/Ourproduct";
import About from "./pages/about/About";
import ContactUs from "./pages/contactus/ContactUs";
import Solution from "./pages/solution/Solution";
import Blog from "./pages/blog/Blog";
import BlogPage from "./pages/blog/BlogPage";
import Product from "./pages/product/Product";
import Vission from "./pages/vission/Vission";
import Mission from "./pages/Mission";
import Career from "./pages/career/Career";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after it completes (2s logo + 6s loading + 600ms fade)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* {isLoading && <Preloader />} */}
        <BrowserRouter>
          <ScrollToTop />
          <ScrollToTopButton />
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Index />} /> 
=======
            <Route path="/" element={<Index />} />
>>>>>>> cb14ee9e0323aa7ed8d63ce37128c704c244dc06
            <Route path="/vission" element={<Vission />} />
            <Route path="/product" element={<Product />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<PlaceholderPage title="Vision" description="Our vision for the future of space exploration and technology." />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogpage" element={<BlogPage />} />


            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);

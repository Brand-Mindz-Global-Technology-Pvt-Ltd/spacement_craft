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
import Mission from "./pages/mission/Mission";
import Career from "./pages/career/Career";
import { useState, useEffect } from "react";
import { Toaster as HotToaster } from "react-hot-toast";
// ADMIN BLOG PAGES
import BlogList from "./pages/blog/admin/blogs/BlogList";
import AddBlog from "./pages/blog/admin/blogs/AddBlog";
import EditBlog from "./pages/blog/admin/blogs/EditBlog";
import Login from "./pages/blog/admin/Login";
import Dashboard from "./pages/blog/admin/Dashboard";
// AUTH
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // console.log("ENV TEST:", import.meta.env);


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
        <HotToaster position="top-right" />
        <AuthProvider>
          {/* {isLoading && <Preloader />} */}
          <BrowserRouter>
            <ScrollToTop />
            <ScrollToTopButton />
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ---------- PUBLIC PAGES ---------- */}
              <Route path="/vission" element={<Vission />} />
              <Route path="/product" element={<Product />} />
              <Route path="/solution" element={<Solution />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/vision" element={<PlaceholderPage title="Vision" description="Our vision for the future of space exploration and technology." />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contactus" element={<ContactUs />} />

              {/* ---------- BLOG ROUTES ---------- */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPage />} />

              {/* ---------- ADMIN ROUTES FOR BLOG ---------- */}
              <Route path="/admin/blog/login" element={<Login />} />
              <Route path="/admin/blog/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/admin/blog/list" element={<ProtectedRoute><BlogList /></ProtectedRoute>} />
              <Route path="/admin/blog/create" element={<ProtectedRoute><AddBlog /></ProtectedRoute>} />
              <Route path="/admin/blog/edit/:id" element={<ProtectedRoute><EditBlog /></ProtectedRoute>} />

              {/* ---------- CATCH ALL (Must be last) ---------- */}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);

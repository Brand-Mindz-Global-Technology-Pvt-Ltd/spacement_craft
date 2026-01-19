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
import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster as HotToaster } from "react-hot-toast";

// Pages - Lazy Loaded
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage"));
const About = lazy(() => import("./pages/about/About"));
const ContactUs = lazy(() => import("./pages/contactus/ContactUs"));
const Solution = lazy(() => import("./pages/solution/Solution"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogPage = lazy(() => import("./pages/blog/BlogPage"));
const Product = lazy(() => import("./pages/product/Product"));
const Vission = lazy(() => import("./pages/vission/Vission"));
const Mission = lazy(() => import("./pages/mission/Mission"));
const Career = lazy(() => import("./pages/career/Career"));
const TermsConditions = lazy(() => import("./pages/policies/TermsConditions"));
const PrivacyPolicy = lazy(() => import("./pages/policies/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/policies/CookiePolicy"));

// Admin - Lazy Loaded
const BlogList = lazy(() => import("./pages/blog/admin/blogs/BlogList"));
const AddBlog = lazy(() => import("./pages/blog/admin/blogs/AddBlog"));
const EditBlog = lazy(() => import("./pages/blog/admin/blogs/EditBlog"));
const Login = lazy(() => import("./pages/blog/admin/Login"));
const Dashboard = lazy(() => import("./pages/blog/admin/Dashboard"));

// AUTH
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Loading Fallback
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-black">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0BFFD3] border-t-transparent"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Always show preloader on home page (first visit or refresh)
    if (window.location.pathname === "/") return true;

    // Check if it's a page reload
    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (navEntry && navEntry.type === "reload") {
      return false; // Don't show preloader on refresh for other pages
    }

    // Default to showing preloader for first visit (navigation)
    return true;
  });
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
          {isLoading && <Preloader />}
          <BrowserRouter>
            <ScrollToTop />
            <ScrollToTopButton />
            <Suspense fallback={<PageLoader />}>
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

                {/* ---------- POLICY PAGES ---------- */}
                <Route path="/terms-and-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />

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
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);

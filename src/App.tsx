import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import { Navbar } from "@/components/layout/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Venues from "./pages/Venues";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/Dashboard";
import OwnerDashboard from "./pages/owner/Dashboard";
import UserDashboard from "./pages/user/Dashboard";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HelmetProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/venues" element={<Venues />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bookings" element={<Profile />} />
                <Route path="/dashboard/admin" element={<AdminDashboard />} />
                <Route path="/dashboard/facility" element={<OwnerDashboard />} />
                <Route path="/dashboard/user" element={<UserDashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

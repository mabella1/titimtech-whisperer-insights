
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import CloudServicesPage from "./pages/CloudServicesPage";
import CybersecurityPage from "./pages/CybersecurityPage";
import ITSupportPage from "./pages/ITSupportPage";
import SoftwareSolutionsPage from "./pages/SoftwareSolutionsPage";
import NetworkInfrastructurePage from "./pages/NetworkInfrastructurePage";
import TelecommunicationsPage from "./pages/TelecommunicationsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/cloud-services" element={<CloudServicesPage />} />
          <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/services/it-support" element={<ITSupportPage />} />
          <Route path="/services/software-solutions" element={<SoftwareSolutionsPage />} />
          <Route path="/services/network-infrastructure" element={<NetworkInfrastructurePage />} />
          <Route path="/services/telecommunications" element={<TelecommunicationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

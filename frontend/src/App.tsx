import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Certification from "./pages/Certification";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import MobileWebApplications from "./pages/MobileWebApplications";
import CloudSaaSSolutions from "./pages/CloudSaaSSolutions";
import AIMachineLearning from "./pages/AIMachineLearning";
import UIUXDesign from "./pages/UIUXDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import ITConsulting from "./pages/ITConsulting";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route
            path="/mobile-web-applications"
            element={<MobileWebApplications />}
          />
          <Route
            path="/cloud-saas-solutions"
            element={<CloudSaaSSolutions />}
          />
          <Route path="/ai-machine-learning" element={<AIMachineLearning />} />
          <Route path="/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

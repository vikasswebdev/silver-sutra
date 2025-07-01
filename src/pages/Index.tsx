
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
// import PressSection from "@/components/PressSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WeddingVenues from "@/components/WeddingVenues";

const Index = () => {
    return (
        <div className="min-h-screen bg-ivory-50">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
            <WeddingVenues />
            <TestimonialsSection />
            {/* <PressSection /> */}
            {/* <BlogSection /> */}
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Index;
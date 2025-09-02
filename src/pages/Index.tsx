import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import SuccessCases from "@/components/SuccessCases";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <BlogSection />
      <SuccessCases />
      <Certifications />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

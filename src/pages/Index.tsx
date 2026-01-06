import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { IndustrySpecialization } from "@/components/IndustrySpecialization";
import { MultiStateOperations } from "@/components/MultiStateOperations";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { SecurityCompliance } from "@/components/SecurityCompliance";
import { Footer } from "@/components/Footer";

const SectionDivider = () => (
  <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
    <div className="border-t border-border/40" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Kessel Solutions | Premium Web Design & Performance Marketing"
        description="High-converting websites, modern development, and performance marketing systems built to generate leads and revenue."
        canonical="https://kesselsolutions.netlify.app/"
      />

      <Header />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <IndustrySpecialization />
      <SectionDivider />
      <MultiStateOperations />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <SecurityCompliance />
      <Footer />
    </div>
  );
};

export default Index;

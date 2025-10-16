import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ShopSection } from "@/components/sections/ShopSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative cursor-none">
        <CustomCursor />
        <ParticleBackground />
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ResumeSection />
          <PortfolioSection />
          <ShopSection />
          <BlogSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="glass border-t border-border/50 py-8">
          <div className="container mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Nagi. Crafted with creativity & code.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;

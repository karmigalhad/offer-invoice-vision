import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iaHNsKDIxMCwgMTAwJSwgMzAlKSIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KPHBhdGggZD0ibTM2IDM0djEwaDEwdi0xMHptMC0yaDEwdjEwaC0xMHoiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <BarChart3 className="w-4 h-4 mr-2" />
            Advanced Stock Management System
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up leading-tight">
            Transform Your{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Stock Management
            </span>{" "}
            Into Revenue Growth
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up leading-relaxed">
            Automate your invoice processing, track stock levels in real-time, and unlock insights 
            that drive profitability with our intelligent email-based tracking system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              Watch Demo
            </Button>
          </div>

          {/* Social proof */}
          <div className="text-center animate-fade-up">
            <p className="text-muted-foreground mb-4">Trusted by growing businesses worldwide</p>
            <div className="flex items-center justify-center gap-8 text-2xl font-bold text-primary/60">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                500+ Companies
              </span>
              <span className="hidden sm:inline">•</span>
              <span>99.9% Uptime</span>
              <span className="hidden sm:inline">•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-primary/5 rounded-lg animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default HeroSection;
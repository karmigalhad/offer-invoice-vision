import { BarChart3, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const scrollToSection = (sectionId: string, tab?: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    if (tab) {
      // Use a small delay to set hash after smooth scroll starts
      setTimeout(() => {
        history.replaceState(null, '', `#${tab}`);
        // Dispatch custom event for tab switching
        window.dispatchEvent(new CustomEvent('tabSwitch', { detail: tab }));
      }, 100);
    }
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">StockTracker Pro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features', 'features')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('features', 'benefits')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={() => window.location.href='/simple-redirect.html?target=login'}>
              Sign In
            </Button>
            <Button variant="default" onClick={() => window.location.href='/simple-redirect.html?target=register'}>
               Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-card">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('features', 'features');
                  setIsMenuOpen(false);
                }}
                className="block text-muted-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                Features
              </button>
              <button 
                onClick={() => {
                  scrollToSection('features', 'benefits');
                  setIsMenuOpen(false);
                }}
                className="block text-muted-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => {
                  scrollToSection('pricing');
                  setIsMenuOpen(false);
                }}
                className="block text-muted-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block text-muted-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                Contact
              </button>
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
                <Button variant="default" className="w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

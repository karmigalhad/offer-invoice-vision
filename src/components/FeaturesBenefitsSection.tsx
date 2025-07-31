import { Mail, BarChart, Package, FileText, TrendingUp, Users, Shield, Bell, Cloud, CheckCircle, Target, Lightbulb, Clock, DollarSign, Zap, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Package,
    title: "Stock Product Management",
    description: "Add, edit, and track stock products with barcode and SKU support. Real-time stock level updates keep you informed."
  },
  {
    icon: FileText,
    title: "Unlimited Offer Parsing",
    description: "Upload and parse supplier offers (Excel, PDF, email) with intelligent product matching and data extraction."
  },
  {
    icon: Mail,
    title: "Email Integration",
    description: "Automatically capture and process invoices and offers from your inbox with one-click email sync."
  },
  {
    icon: FileText,
    title: "Invoice & Document Management",
    description: "Generate, send, and archive invoices and proformas with customizable templates."
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Sales, stock, and supplier analytics dashboards with exportable reports (PDF, Excel)."
  },
  {
    icon: Users,
    title: "Multi-Brand & Multi-Supplier Support",
    description: "Manage products and offers from multiple brands and suppliers in one centralized system."
  },
  {
    icon: Shield,
    title: "User Management & Permissions",
    description: "Multi-user access with role-based permissions to control who can access what data."
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    description: "Low stock and expiry notifications with custom alert rules to keep your business running smoothly."
  },
  {
    icon: Cloud,
    title: "Secure Cloud Storage",
    description: "All data encrypted and backed up with enterprise-grade security and reliability."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate manual data entry and document processing. Reduce errors and repetitive work significantly."
  },
  {
    icon: DollarSign,
    title: "Increase Profitability",
    description: "Identify best offers and optimize purchasing. Prevent stockouts and overstock situations."
  },
  {
    icon: Search,
    title: "Stay Organized",
    description: "Centralize all product, offer, and invoice data with easy search and filtering capabilities."
  },
  {
    icon: Target,
    title: "Make Informed Decisions",
    description: "Real-time analytics and actionable insights with customizable dashboards for better decision making."
  },
  {
    icon: Zap,
    title: "Scale Effortlessly",
    description: "Unlimited offer parsing for growing businesses with flexible plans for any size company."
  },
  {
    icon: CheckCircle,
    title: "Stay Compliant",
    description: "Audit trails and exportable reports for accounting and tax compliance requirements."
  },
  {
    icon: Lightbulb,
    title: "Easy Onboarding",
    description: "Import existing data and start in minutes with friendly support and comprehensive documentation."
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    description: "Secure, cloud-based, always available system with regular backups and GDPR compliance."
  }
];

const FeaturesBenefitsSection = () => {
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#features") {
      setActiveTab("features");
    } else if (hash === "#benefits") {
      setActiveTab("benefits");
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#features") {
        setActiveTab("features");
      } else if (hash === "#benefits") {
        setActiveTab("benefits");
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <div id="benefits" className="absolute scroll-mt-20"></div>
      <section id="features" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features &{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Amazing Benefits
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our comprehensive stock tracking system can transform your business 
            operations and boost your bottom line.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <div className="relative">
              <button
                onClick={() => setActiveTab("features")}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === "features"
                    ? "bg-gradient-primary text-primary-foreground shadow-elegant transform scale-105"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                Features
              </button>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border"></div>
            <div className="relative">
              <button
                onClick={() => setActiveTab("benefits")}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === "benefits"
                    ? "bg-gradient-primary text-primary-foreground shadow-elegant transform scale-105"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                Benefits
              </button>
            </div>
          </div>
          
          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 border-border/50 bg-gradient-card hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="benefits">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </section>
    </>
  );
};

export default FeaturesBenefitsSection;
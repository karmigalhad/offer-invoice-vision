import { Mail, BarChart, DollarSign, Clock, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Mail,
    title: "Email Integration",
    description: "Automatically capture and process invoices and offers directly from your email inbox with intelligent parsing technology."
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Get instant insights into your stock levels, sales trends, and financial performance with comprehensive dashboards."
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "Identify profitable opportunities and optimize pricing strategies based on real-time market data and demand patterns."
  },
  {
    icon: Clock,
    title: "Time-Saving Automation",
    description: "Reduce manual data entry by 90% with automated document processing and intelligent categorization systems."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with data encryption, audit trails, and compliance with financial regulations."
  },
  {
    icon: Zap,
    title: "Instant Synchronization",
    description: "Keep all your systems in perfect sync with real-time updates across inventory, accounting, and reporting platforms."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Modern Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive stock tracking system is designed to streamline your operations 
            and boost your bottom line through intelligent automation.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default FeaturesSection;
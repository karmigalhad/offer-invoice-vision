import { TrendingUp, Target, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    metric: "35%",
    title: "Average Revenue Increase",
    description: "Businesses using our system see significant revenue growth through better inventory management and pricing optimization."
  },
  {
    icon: Target,
    metric: "90%",
    title: "Reduction in Manual Work",
    description: "Automate repetitive tasks and free up your team to focus on strategic growth initiatives and customer relationships."
  },
  {
    icon: Users,
    metric: "24/7",
    title: "Customer Support",
    description: "Get expert assistance whenever you need it with our dedicated support team and comprehensive knowledge base."
  },
  {
    icon: Lightbulb,
    metric: "5x",
    title: "Faster Decision Making",
    description: "Make informed decisions quickly with real-time data and AI-powered insights delivered straight to your dashboard."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our{" "}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Stock Tracking System
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of successful businesses that have transformed their operations 
            and accelerated their growth with our intelligent tracking solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {benefit.metric}
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

        {/* Value proposition */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-elegant max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Grow Your Revenue?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop losing money on inefficient processes. Start your free trial today 
              and see how our system can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Start Free 30-Day Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Full access to all features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
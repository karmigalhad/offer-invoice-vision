import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Free Tier",
      price: "$0",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 Stock Products",
        "Unlimited Offer Parsing (included)",
        "Up to 10 invoices per month",
        "Manual email sync",
        "Basic analytics",
        "Email support",
        "1 user license"
      ],
      buttonText: "Get Started Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Starter Plan",
      price: "$23",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 Stock Products",
        "Unlimited Offer Parsing (included)",
        "Up to 50 invoices per month",
        "Manual email sync",
        "Advanced analytics & reporting",
        "Priority email support",
        "2 user licenses"
      ],
      buttonText: "Start Free Trial",
      variant: "default" as const,
      popular: true
    },
    {
      name: "Professional Plan",
      price: "$60",
      period: "/month",
      description: "For established businesses",
      features: [
        "Up to 2,000 Stock Products",
        "Unlimited Offer Parsing (included)",
        "Unlimited invoices",
        "Automated email sync",
        "Advanced analytics & reporting",
        "Priority support",
        "10 user licenses"
      ],
      buttonText: "Start Free Trial",
      variant: "default" as const,
      popular: false
    },
    {
      name: "Enterprise Plan",
      price: "$150",
      period: "/month",
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited Stock Products",
        "Unlimited Offer Parsing (included)",
        "Automated email sync",
        "Advanced analytics & reporting",
        "Dedicated onboarding",
        "Unlimited licenses"
      ],
      buttonText: "Contact Sales",
      variant: "professional" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with our free tier and scale as your business grows. All plans include unlimited offer parsing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-elegant' : ''} transition-all duration-300 hover:shadow-elegant`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                  {plan.name === "Enterprise Plan" && (
                    <p className="text-sm text-muted-foreground mt-1">or custom quote</p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant} 
                  className="w-full"
                  onClick={() => window.location.href = plan.name === "Enterprise Plan" ? '#contact' : '/simple-redirect.html?target=register'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            <strong>Note:</strong> Offer parsing is unlimited and included in every plan. 
            Only the number of stock products is limited per plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
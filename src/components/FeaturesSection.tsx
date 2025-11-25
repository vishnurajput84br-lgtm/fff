import { Card, CardContent } from "@/components/ui/card";
import { LogIn, Gift, Smartphone, Trophy, Clock, Shield } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: LogIn,
      title: "Instant Raja Login",
      description: "Jump right in and start playing with seamless authentication"
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Get bonus codes and gift codes regularly for extra benefits"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Powerful Raja App optimized for Android, iOS, and Web"
    },
    {
      icon: Trophy,
      title: "Top-Tier Gaming",
      description: "Exciting gameplay with rewards at every turn"
    },
    {
      icon: Clock,
      title: "Fast Withdrawals",
      description: "Get your winnings within 24 hours, hassle-free"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Safe and trusted gaming environment with reliable support"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Why Choose <span className="text-secondary">RajaGame</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At RajaGame, we redefine what a Raja game can be. Our platform focuses on delivering 
            the best gaming experience with unmatched features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-glow hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-accent rounded-lg shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gaming.jpg";
import rajaLuckLogo from "@/assets/raja-luck-logo.png";
import { Gift } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <img src={rajaLuckLogo} alt="Raja Luck" className="h-32 w-32 md:h-40 md:w-40 animate-fade-in" />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Play Raja Game: Login, Sign Up & Download & Claim{" "}
            <span className="text-secondary">₹300 Giftcode</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="gap-2" asChild>
              <a href="http://jqqcz53181.myrajalucks.com/#/register?invitationCode=jQQCz53181" target="_blank" rel="noopener noreferrer">
                <Gift className="w-5 h-5" />
                FREE ₹300 RAJA GAME BONUS
              </a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <a href="http://jqqcz53181.myrajalucks.com/#/register?invitationCode=jQQCz53181" target="_blank" rel="noopener noreferrer">
                CLICK TO SIGNUP FOR REWARDS
              </a>
            </Button>
          </div>

          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Looking for the ultimate gaming platform?{" "}
            <span className="font-semibold text-secondary">Raja Game</span> brings you a top-tier{" "}
            <span className="font-semibold">gaming</span> experience with seamless design, exciting gameplay, and
            rewards at every turn. Whether you're hunting for exclusive codes or ready to play,{" "}
            <span className="font-semibold">Raja</span> Gaming App has it all.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

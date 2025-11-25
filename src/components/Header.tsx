import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import rajaLuckLogo from "@/assets/raja-luck-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-primary border-b border-secondary/20 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={rajaLuckLogo} alt="Raja Luck" className="h-12 w-12 md:h-14 md:w-14" />
            <h1 className="text-xl md:text-2xl font-black text-secondary">
              RAJA<span className="text-primary-foreground">LUCK</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              Raja Game
            </a>
            <a href="http://jqqcz53181.myrajalucks.com/#/register?invitationCode=jQQCz53181" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              Register
            </a>
            <a href="https://t.me/AB_loot" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              Support
            </a>
            <a href="#about" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              About Us
            </a>
            <a href="#login" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              How to Login
            </a>
            <a href="#privacy" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              Privacy Policy
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-secondary/20 pt-4">
            <a href="#home" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              Raja Game
            </a>
            <a href="http://jqqcz53181.myrajalucks.com/#/register?invitationCode=jQQCz53181" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              Register
            </a>
            <a href="https://t.me/AB_loot" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              Support
            </a>
            <a href="#about" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              About Us
            </a>
            <a href="#login" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              How to Login
            </a>
            <a href="#privacy" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              Privacy Policy
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

import rajaLuckLogo from "@/assets/raja-luck-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary border-t-2 border-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={rajaLuckLogo} alt="Raja Luck" className="h-10 w-10" />
              <h3 className="text-xl font-black text-secondary">RAJALUCK</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your ultimate gaming destination for exciting gameplay, exclusive rewards, and seamless experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="http://jqqcz53181.myrajalucks.com/#/register?invitationCode=jQQCz53181" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="https://t.me/AB_loot" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Telegram Support
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">
                Live Chat Support
              </li>
              <li className="text-primary-foreground/80">
                WhatsApp Support
              </li>
              <li className="text-primary-foreground/80">
                24/7 Customer Service
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary/20 pt-6 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2025 RajaLuck. All rights reserved. Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

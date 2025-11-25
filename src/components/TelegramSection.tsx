import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const TelegramSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Follow Us On Telegram For Raja Game Gift Code
          </h2>
          <Button variant="secondary" size="lg" className="gap-2" asChild>
            <a href="https://t.me/AB_loot" target="_blank" rel="noopener noreferrer">
              <Send className="w-5 h-5" />
              Telegram Channel
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get the ₹300 welcome bonus?",
      answer: "Simply register using our invitation code jQQCz53181 and verify your account. The ₹300 bonus will be automatically credited to your account."
    },
    {
      question: "What is the minimum deposit amount?",
      answer: "The minimum deposit is ₹100. You can deposit using UPI, Paytm, or Bank Transfer for instant crediting."
    },
    {
      question: "How long does withdrawal take?",
      answer: "Withdrawals are processed within 24 hours. Most withdrawals are completed much faster, often within a few hours."
    },
    {
      question: "Is the Raja Game app available for iOS?",
      answer: "Yes! Raja Game is available on Android, iOS, and Web platforms. Download the app for the best gaming experience."
    },
    {
      question: "How do I use gift codes?",
      answer: "Follow our Telegram channel for exclusive gift codes. Enter them in your account dashboard to claim rewards instantly."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support UPI, Paytm, and Bank Transfer. All payment methods are secure and processed instantly."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Eye, Headphones, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-6">
            Ready to Transform{" "}
            <span className="gradient-text">Your Business?</span>
          </h2>
          
          <p className="section-subtitle mx-auto mb-10">
            Let's discuss how we can help you achieve your digital goals with our innovative solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl">
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </Button>
            <Button variant="heroOutline" size="xl">
              <Eye className="w-5 h-5" />
              View Our Work
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
              <Headphones className="w-5 h-5 text-primary" />
              <div className="text-left">
                <span className="text-xl font-bold text-foreground">24/7</span>
                <span className="text-sm text-muted-foreground ml-2">Support Available</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
              <Gift className="w-5 h-5 text-primary" />
              <div className="text-left">
                <span className="text-xl font-bold text-foreground">Free</span>
                <span className="text-sm text-muted-foreground ml-2">Initial Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

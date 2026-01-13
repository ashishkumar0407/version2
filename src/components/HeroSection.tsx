import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up italic">
            <span className="text-white">Innovating Digital</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Solutions for a Smarter Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Trusted IT partner offering cutting-edge solutions in software, web, mobile apps, cloud, and AI. Serving clients worldwide with 200+ successful projects across 15+ countries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base rounded-lg flex items-center gap-3 font-medium">
              <span className="underline underline-offset-4">Enroll Now</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base rounded-lg flex items-center gap-3 font-medium">
              <Play className="w-5 h-5" strokeWidth={1.5} />
              Our Services
            </Button>
          </div>

          {/* Scroll Indicator - Mouse Icon */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center pt-2 bg-white/5 backdrop-blur-sm">
              <div className="w-0.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

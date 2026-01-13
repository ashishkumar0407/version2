import { Button } from "@/components/ui/button";
import { Users, Globe, Trophy, Zap } from "lucide-react";
import ceoImage from "@/assets/ceo-kaptan.png";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Led by Mr. Kaptan, AI Engineer & CEO, our team delivers innovative solutions",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 15+ countries with localized expertise",
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "200+ successful projects with 100% client satisfaction rate",
    },
    {
      icon: Zap,
      title: "Cutting-edge Tech",
      description: "Leveraging latest technologies in AI, Cloud, and Software Development",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">Bigbet.Ai</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Bigbet.Ai is a trusted IT partner offering cutting-edge solutions in software, web, mobile apps, cloud, and AI. With a client base in 15+ countries and 200+ successful projects, we help businesses scale with technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - CEO Card with Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden max-w-md mx-auto">
              {/* CEO Image */}
              <div className="aspect-[3/4] relative">
                <img 
                  src={ceoImage} 
                  alt="Mr. Kaptan - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* BIGBET.AI Logo in top right */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <div className="w-10 h-10">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <path
                        d="M24 2 L44 14 L44 34 L24 46 L4 34 L4 14 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        opacity="0.8"
                      />
                      <circle cx="24" cy="20" r="5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" />
                      <path d="M21 25 L21 28 L27 28 L27 25" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm font-medium tracking-wide">BIGBET.AI</span>
                </div>

                {/* Glass Card Overlay */}
                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/10 border-t border-white/20 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Mr. Kaptan</h3>
                  <p className="text-blue-300 text-sm mb-2">Founder & CEO, AI Engineer</p>
                  <p className="text-white/70 text-sm">
                    Leading innovation in digital transformation and AI solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
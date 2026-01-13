import { Button } from "@/components/ui/button";
import { Users, Globe, Trophy, Cpu, ArrowRight } from "lucide-react";

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
      icon: Cpu,
      title: "Cutting-edge Tech",
      description: "Leveraging latest technologies in AI, Cloud, and Software Development",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title mb-6">
              About <span className="gradient-text">Hexsoftwares</span>
            </h2>
            <p className="section-subtitle mb-10">
              Hexsoftwares is a trusted IT partner offering cutting-edge solutions in software, web, mobile apps, cloud, and AI. With a client base in 15+ countries and 200+ successful projects, we help businesses scale with technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <Button variant="hero">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Content - CEO Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-glow/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative">
                {/* CEO Image Placeholder */}
                <div className="w-32 h-32 rounded-2xl gradient-bg mx-auto mb-6 flex items-center justify-center glow-effect">
                  <span className="text-5xl font-bold text-primary-foreground">K</span>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-1">Mr. Kaptan</h3>
                  <p className="text-primary mb-4">Founder & CEO, AI Engineer</p>
                  <p className="text-muted-foreground">
                    Leading innovation in digital transformation and AI solutions
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">10+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">50+</div>
                    <div className="text-xs text-muted-foreground">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">AI</div>
                    <div className="text-xs text-muted-foreground">Expert</div>
                  </div>
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

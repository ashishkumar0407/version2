import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Briefcase, 
  Cloud, 
  Brain, 
  Palette, 
  TrendingUp, 
  Settings,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements",
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Applications",
      description: "Cross-platform mobile apps and responsive web applications",
    },
    {
      icon: Briefcase,
      title: "Job & Internship",
      description: "Career opportunities and internship programs in cutting-edge technologies",
    },
    {
      icon: Cloud,
      title: "Cloud & SaaS Solutions",
      description: "Scalable cloud infrastructure and Software-as-a-Service platforms",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and ML algorithms",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging and intuitive experiences",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your digital presence",
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your business processes",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive IT solutions tailored to drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border card-hover cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:gradient-bg transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <span className="inline-flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

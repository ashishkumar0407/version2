import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Smartphone, 
  Briefcase, 
  Cloud, 
  Lightbulb, 
  MessageSquare, 
  TrendingUp, 
  Users,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements",
      color: "bg-cyan-400",
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Applications",
      description: "Cross-platform mobile apps and responsive web applications",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: Briefcase,
      title: "Job & Internship",
      description: "Career opportunities and internship programs in cutting-edge technologies",
      color: "bg-gradient-to-br from-emerald-400 to-teal-500",
    },
    {
      icon: Cloud,
      title: "Cloud & SaaS Solutions",
      description: "Scalable cloud infrastructure and Software-as-a-Service platforms",
      color: "bg-gradient-to-br from-orange-400 to-red-500",
    },
    {
      icon: Lightbulb,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and ML algorithms",
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
    },
    {
      icon: MessageSquare,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging and intuitive experiences",
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your digital presence",
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your business processes",
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-5`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="hero" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { CheckCircle, Globe2, Award, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: CheckCircle,
      value: "200+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
    },
    {
      icon: Globe2,
      value: "15+",
      label: "Countries Served",
      description: "Global presence with clients worldwide",
    },
    {
      icon: Award,
      value: "100%",
      label: "Client Satisfaction",
      description: "Maintaining highest standards of quality and service",
    },
    {
      icon: Clock,
      value: "5+",
      label: "Years Experience",
      description: "Proven expertise in cutting-edge technologies",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 hero-glow" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Our Impact in <span className="gradient-text">Numbers</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Delivering excellence and building lasting partnerships worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group text-center p-8 rounded-2xl bg-card border border-border card-hover"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 glow-effect">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="stat-number mb-2">{stat.value}</div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

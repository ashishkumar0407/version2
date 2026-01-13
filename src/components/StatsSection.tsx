import { Trophy, Globe2, Users, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Trophy,
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
      icon: Users,
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
    <section className="py-24 bg-blue-600">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Delivering excellence and building lasting partnerships worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              
              {/* Value */}
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                {stat.value}
              </div>
              
              {/* Label */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-blue-100">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
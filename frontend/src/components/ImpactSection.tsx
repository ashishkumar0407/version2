import { Award, Globe, Users, Clock } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: Award,
      value: "200+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
    },
    {
      icon: Globe,
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
    <section className="py-20 bg-blue-600 dark:bg-blue-700">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-16">
          Delivering excellence and building lasting partnerships worldwide
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-blue-500/50 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-blue-500 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {stat.value}
              </h3>
              <p className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </p>
              <p className="text-white/70 text-sm max-w-[200px] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

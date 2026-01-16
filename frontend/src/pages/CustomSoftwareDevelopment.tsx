import ServiceLayout from "@/components/ServiceLayout";

const CustomSoftwareDevelopment = () => {
  return (
    <ServiceLayout
      title="Custom Software Development"
      description="Transform your business with tailored software solutions designed specifically for your unique requirements and challenges."
      overview="Our custom software development services help businesses create powerful, scalable, and secure applications that drive growth and efficiency. We work closely with you to understand your specific needs and deliver solutions that perfectly align with your business objectives."
      features={[
        "Enterprise Application Development",
        "Legacy System Modernization",
        "API Development & Integration",
        "Database Design & Optimization",
        "System Architecture Planning",
        "Quality Assurance & Testing",
        "Maintenance & Support",
        "Performance Optimization",
      ]}
      benefits={[
        "Increased operational efficiency",
        "Reduced manual processes",
        "Better data management",
        "Scalable architecture",
        "Enhanced security",
        "Cost-effective solutions",
      ]}
      processSteps={[
        { number: 1, title: "Requirements Analysis" },
        { number: 2, title: "System Design" },
        { number: 3, title: "Development" },
        { number: 4, title: "Testing & QA" },
        { number: 5, title: "Deployment" },
        { number: 6, title: "Support & Maintenance" },
      ]}
      timeline="3-6 months"
      teamSize="4-8 developers"
      technologies={[
        "React",
        "Node.js",
        "Python",
        "Java",
        ".NET",
        "PostgreSQL",
        "MongoDB",
        "AWS",
      ]}
    />
  );
};

export default CustomSoftwareDevelopment;

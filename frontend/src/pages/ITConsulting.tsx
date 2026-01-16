import ServiceLayout from "@/components/ServiceLayout";

const ITConsulting = () => {
  return (
    <ServiceLayout
      title="IT Consulting"
      description="Strategic technology consulting to optimize your business processes and drive digital innovation."
      overview="Navigate the complex technology landscape with our expert IT consulting services. We help businesses align their technology strategy with business goals, ensuring optimal performance, security, and scalability."
      features={[
        "Digital Transformation Strategy",
        "IT Infrastructure Assessment",
        "Technology Stack Selection",
        "Security & Risk Assessment",
        "Business Process Automation",
        "Vendor Management",
        "IT Cost Optimization",
        "Disaster Recovery Planning",
      ]}
      benefits={[
        "Strategic alignment",
        "Operational resilience",
        "Cost reduction",
        "Risk mitigation",
        "Enhanced innovation",
        "Future-proof technology",
      ]}
      processSteps={[
        { number: 1, title: "Assessment" },
        { number: 2, title: "Gap Analysis" },
        { number: 3, title: "Strategy Formulation" },
        { number: 4, title: "Roadmap Creation" },
        { number: 5, title: "Implementation Guide" },
        { number: 6, title: "Review" },
      ]}
      timeline="1-4 months"
      teamSize="2-3 consultants"
      technologies={[
        "Enterprise Architecture",
        "Cloud Strategy",
        "DevOps",
        "Agile Methodologies",
        "Cybersecurity Frameworks",
        "ITIL",
        "Six Sigma",
        "Compliance Std",
      ]}
    />
  );
};

export default ITConsulting;

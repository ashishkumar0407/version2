import ServiceLayout from "@/components/ServiceLayout";

const CloudSaaSSolutions = () => {
  return (
    <ServiceLayout
      title="Cloud & SaaS Solutions"
      description="Scalable cloud infrastructure and Software-as-a-Service platforms that enable digital transformation and operational agility."
      overview="We help organizations leverage the power of the cloud to build scalable, secure, and cost-effective solutions. From cloud migration to building multi-tenant SaaS platforms, our experts guide you through every step of your cloud journey."
      features={[
        "Cloud Migration Strategy",
        "SaaS Product Development",
        "Serverless Architecture",
        "Microservices Implementation",
        "DevOps & CI/CD Pipelines",
        "Cloud Security & Compliance",
        "Multi-Cloud Management",
        "High Availability Setup",
      ]}
      benefits={[
        "Scalability on demand",
        "Reduced infrastructure costs",
        "Enhanced data security",
        "Global accessibility",
        "Faster time-to-market",
        "Automated updates & maintenance",
      ]}
      processSteps={[
        { number: 1, title: "Cloud Assessment" },
        { number: 2, title: "Architecture Design" },
        { number: 3, title: "Migration/Build" },
        { number: 4, title: "Integration" },
        { number: 5, title: "Security Audit" },
        { number: 6, title: "Optimization" },
      ]}
      timeline="4-8 months"
      teamSize="4-7 engineers"
      technologies={[
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Redis",
      ]}
    />
  );
};

export default CloudSaaSSolutions;

import ServiceLayout from "@/components/ServiceLayout";

const DigitalMarketing = () => {
  return (
    <ServiceLayout
      title="Digital Marketing"
      description="Data-driven marketing strategies to grow your digital presence and reach your target audience effectively."
      overview="Accelerate your growth with our comprehensive digital marketing solutions. We combine creativity with data analytics to create campaigns that resonate with your audience and deliver measurable return on investment."
      features={[
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing Campaigns",
        "Conversion Rate Optimization",
        "Analytics & Reporting",
        "Brand Identity Development",
      ]}
      benefits={[
        "Higher search rankings",
        "Increased brand awareness",
        "Targeted lead generation",
        "Improved ROI",
        "Measurable results",
        "Customer loyalty",
      ]}
      processSteps={[
        { number: 1, title: "Audit & Strategy" },
        { number: 2, title: "Audience Targeting" },
        { number: 3, title: "Content Creation" },
        { number: 4, title: "Campaign Launch" },
        { number: 5, title: "Optimization" },
        { number: 6, title: "Reporting" },
      ]}
      timeline="Ongoing"
      teamSize="3-5 marketers"
      technologies={[
        "Google Analytics",
        "SEMrush",
        "HubSpot",
        "Mailchimp",
        "Facebook Ads",
        "Google Ads",
        "Hootsuite",
        "Canva",
      ]}
    />
  );
};

export default DigitalMarketing;

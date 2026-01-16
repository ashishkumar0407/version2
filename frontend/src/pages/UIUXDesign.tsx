import ServiceLayout from "@/components/ServiceLayout";

const UIUXDesign = () => {
  return (
    <ServiceLayout
      title="UI/UX Design"
      description="User-centered design that creates engaging and intuitive experiences, turning visitors into loyal customers."
      overview="We craft digital experiences that are not only visually stunning but also intuitive and user-friendly. Our design process focuses on understanding your users' behaviors and needs to create interfaces that drive engagement and satisfaction."
      features={[
        "User Research & Analysis",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Interaction Design",
        "Usability Testing",
        "Design Systems Creation",
        "Responsive & Adaptive Design",
        "Accessibility Compliance",
      ]}
      benefits={[
        "Increased conversation rates",
        "Lower bounce rates",
        "Enhanced brand perception",
        "Improved user satisfaction",
        "Reduced development costs",
        "Competitive advantage",
      ]}
      processSteps={[
        { number: 1, title: "User Research" },
        { number: 2, title: "Wireframing" },
        { number: 3, title: "Prototyping" },
        { number: 4, title: "Visual Design" },
        { number: 5, title: "Usability Testing" },
        { number: 6, title: "Handoff" },
      ]}
      timeline="1-3 months"
      teamSize="2-4 designers"
      technologies={[
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Principle",
        "Zeplin",
        "Miro",
        "Illustrator",
      ]}
    />
  );
};

export default UIUXDesign;

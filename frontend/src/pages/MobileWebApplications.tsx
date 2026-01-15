import ServiceLayout from "@/components/ServiceLayout";

const MobileWebApplications = () => {
  return (
    <ServiceLayout
      title="Mobile & Web Applications"
      description="Cross-platform mobile apps and responsive web applications that deliver exceptional user experiences across all devices."
      overview="We build high-performance mobile and web applications that engage users and drive business results. Whether you need a native iOS/Android app or a progressive web application, our team delivers seamless experiences across all platforms."
      features={[
        "iOS & Android App Development",
        "Cross-Platform Solutions (React Native/Flutter)",
        "Progressive Web Apps (PWAs)",
        "Single Page Applications (SPAs)",
        "E-commerce Platforms",
        "Enterprise Mobility Solutions",
        "App Store Optimization",
        "UI/UX Implementation",
      ]}
      benefits={[
        "Wider market reach",
        "Improved user engagement",
        "Seamless cross-platform experience",
        "Offline capabilities",
        "Push notifications support",
        "Native device integration",
      ]}
      processSteps={[
        { number: 1, title: "Discovery & Strategy" },
        { number: 2, title: "UI/UX Design" },
        { number: 3, title: "App Development" },
        { number: 4, title: "Testing & Validation" },
        { number: 5, title: "App Store Launch" },
        { number: 6, title: "Post-Launch Support" },
      ]}
      timeline="2-5 months"
      teamSize="3-6 developers"
      technologies={[
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "React.js",
        "Next.js",
        "Firebase",
        "Redux",
      ]}
    />
  );
};

export default MobileWebApplications;

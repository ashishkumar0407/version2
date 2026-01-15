const TrustedBySection = () => {
  const companies = [
    "Global Innovators",
    "Future Systems Inc.",
    "Apex Solutions",
    "Digital Edge Co.",
    "Quantum Innovations",
    "Synergy Tech",
    "Nexus Dynamics",
    "Stellar Solutions",
  ];

  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by <span className="text-primary">Leading Companies</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We're proud to build strong partnerships with innovative companies
            of all sizes.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {companies.map((company, index) => (
            <span
              key={index}
              className="text-gray-400 dark:text-gray-500 text-lg font-medium hover:text-primary transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

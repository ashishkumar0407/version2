import ServiceLayout from "@/components/ServiceLayout";

const AIMachineLearning = () => {
  return (
    <ServiceLayout
      title="AI & Machine Learning"
      description="Intelligent solutions powered by artificial intelligence and ML algorithms to automate and optimize your business operations."
      overview="Unlock the potential of your data with our AI and Machine Learning services. We build intelligent systems that learn, adapt, and provide executable insights, helping you automate complex processes and make data-driven decisions."
      features={[
        "Predictive Analytics Models",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions",
        "Deep Learning Algorithms",
        "Recommendation Engines",
        "Chatbots & Virtual Assistants",
        "Process Automation (RPA)",
        "Data Mining & Analysis",
      ]}
      benefits={[
        "Automated decision making",
        "Personalized user experiences",
        "Operational process efficiency",
        "Fraud detection & prevention",
        "Predictive maintenance",
        "Enhanced customer insights",
      ]}
      processSteps={[
        { number: 1, title: "Data Assessment" },
        { number: 2, title: "Model Selection" },
        { number: 3, title: "Data Preparation" },
        { number: 4, title: "Training & Tuning" },
        { number: 5, title: "Integration" },
        { number: 6, title: "Monitoring" },
      ]}
      timeline="3-9 months"
      teamSize="3-6 data scientists"
      technologies={[
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
        "Scikit-learn",
        "Pandas",
        "Keras",
        "LangChain",
      ]}
    />
  );
};

export default AIMachineLearning;

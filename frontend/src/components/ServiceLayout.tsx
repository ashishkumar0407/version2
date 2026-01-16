import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CheckCircle2, Star, ArrowLeft, Clock, Users } from "lucide-react";

interface ProcessStep {
  number: number;
  title: string;
}

interface ServiceLayoutProps {
  title: string;
  description: string;
  overview: string;
  features: string[];
  benefits: string[];
  processSteps: ProcessStep[];
  timeline: string;
  teamSize: string;
  technologies: string[];
}

const ServiceLayout = ({
  title,
  description,
  overview,
  features,
  benefits,
  processSteps,
  timeline,
  teamSize,
  technologies,
}: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar alwaysOpaque={true} />

      {/* Hero Section */}
      <RevealOnScroll>
        <section className="bg-primary dark:bg-blue-950 py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {description}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-16 md:py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Overview */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Service Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {overview}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Benefits
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 dark:bg-card border border-gray-100 dark:border-border rounded-2xl p-6 lg:p-8 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Project Details
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Timeline
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {timeline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Team Size
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {teamSize}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                        Get Free Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Process Section */}
      <RevealOnScroll>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-muted/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                A proven methodology to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* CTA Section */}
      <RevealOnScroll>
        <section className="py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Let's discuss your project requirements and how we can help bring
              your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <Footer />
    </div>
  );
};

export default ServiceLayout;

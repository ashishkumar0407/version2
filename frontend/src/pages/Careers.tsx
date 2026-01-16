import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Coffee,
  GraduationCap,
  Users,
  MapPin,
  Clock,
  Heart,
  Award,
  Building,
  Zap,
} from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const benefits = [
  {
    icon: Coffee,
    title: "Flexible Work Environment",
    description: "Remote work options and flexible hours",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities and skill development",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive environment",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health benefits and wellness programs",
  },
  {
    icon: Award,
    title: "Recognition & Growth",
    description: "Performance-based recognition and career advancement",
  },
  {
    icon: Building,
    title: "Exciting Projects",
    description: "Work on cutting-edge projects with global clients",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Data",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 6,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <RevealOnScroll>
        <section className="bg-gradient-to-r from-primary via-primary to-blue-600 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Build your career with innovative projects and cutting-edge
              technologies. We welcome talent from all over the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#positions">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base font-medium">
                  View Open Positions
                </Button>
              </a>
              <a href="#culture">
                <Button
                  variant="outline"
                  className="border-white text-primary bg-white hover:bg-gray-100 px-8 py-6 text-base font-medium"
                >
                  Learn About Our Culture
                </Button>
              </a>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Why Join Us Section */}
      <RevealOnScroll>
        <section id="culture" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Why <span className="text-primary">Bigbets.Ai</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
                Join a company that values innovation, growth, and work-life
                balance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-card p-8 rounded-xl border-b-4 border-transparent hover:border-primary/20 transition-all duration-300 text-center hover:shadow-xl shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Application Process Section */}
      <RevealOnScroll>
        <section className="py-16 md:py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Application <span className="text-primary">Process</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
                Simple and transparent hiring process
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Apply Online",
                  description: "Submit your application through our portal",
                },
                {
                  step: 2,
                  title: "Initial Review",
                  description:
                    "Our team reviews your application and portfolio",
                },
                {
                  step: 3,
                  title: "Interview",
                  description: "Technical and cultural fit assessment",
                },
                {
                  step: 4,
                  title: "Welcome Aboard",
                  description: "Join our team and start your journey",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Open Positions Section */}
      <RevealOnScroll>
        <section
          id="positions"
          className="py-16 md:py-24 bg-gray-50 dark:bg-muted/10"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Open <span className="text-primary">Positions</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
                Explore our current job openings and find your perfect role
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-white dark:bg-card p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {position.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {position.department}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </span>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* CTA Section */}
      <RevealOnScroll>
        <section className="py-16 md:py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                We're always looking for talented individuals. Send us your
                resume and we'll reach out when a suitable position opens up.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base">
                  Send Your Resume
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

export default Careers;

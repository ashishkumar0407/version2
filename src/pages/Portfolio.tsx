import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Filter, ExternalLink } from "lucide-react";

const categories = [
  "All Projects",
  "FinTech",
  "Healthcare",
  "Retail",
  "Education",
  "Logistics",
  "Startups",
  "AI/ML",
  "Cloud",
];

const projects = [
  {
    id: 1,
    title: "Banking Dashboard",
    description: "A comprehensive banking solution with real-time analytics and secure transactions.",
    category: "FinTech",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Healthcare Portal",
    description: "Patient management system with telemedicine integration and appointment scheduling.",
    category: "Healthcare",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured online store with inventory management and payment processing.",
    category: "Retail",
    featured: false,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Interactive educational platform with course creation and student tracking.",
    category: "Education",
    featured: true,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Fleet Management",
    description: "Real-time vehicle tracking and route optimization for logistics companies.",
    category: "Logistics",
    featured: false,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Startup MVP",
    description: "Rapid prototyping and MVP development for an innovative tech startup.",
    category: "Startups",
    featured: false,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "AI Chatbot Platform",
    description: "Intelligent conversational AI with natural language processing capabilities.",
    category: "AI/ML",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Cloud Migration",
    description: "Enterprise cloud infrastructure migration with zero downtime deployment.",
    category: "Cloud",
    featured: false,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    title: "Investment Portfolio Tracker",
    description: "Real-time portfolio management with market insights and automated alerts.",
    category: "FinTech",
    featured: false,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary to-blue-600 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Showcasing our successful projects and the impact we've made for our clients
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <Filter className="w-4 h-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <span className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss your project requirements and how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-6 text-base"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;

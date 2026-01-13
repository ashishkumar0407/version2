import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";
import { Users, Target, Lightbulb, Award, Globe, Zap } from "lucide-react";
import officeImage from "@/assets/office-workspace.png";
import ceoImage from "@/assets/ceo-kaptan.png";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients to understand and exceed expectations.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Quality and precision are at the core of everything we do.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain transparency and honesty in all our dealings.",
    },
  ];

  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "15+", label: "Countries Served" },
    { value: "50+", label: "Team Members" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 italic">
            About Bigbet.Ai
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Innovating Digital Solutions for a Smarter Future
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bigbet.Ai was founded with a simple yet powerful vision: to bridge the gap between innovative technology and real-world business solutions. Led by Mr. Kaptan, an experienced AI Engineer and visionary CEO, we have grown from a small startup to a globally recognized software development company.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our journey began in Ghaziabad, India, and has since expanded to serve clients across 15+ countries. With over 200 successful projects under our belt, we continue to push the boundaries of what's possible in software development, AI, and digital transformation.
              </p>
            </div>
            <div className="relative">
              <img 
                src={officeImage} 
                alt="Our Office" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering excellence in every project we undertake.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a global leader in digital transformation, recognized for our innovative solutions, exceptional talent, and unwavering commitment to client success. We envision a future where technology seamlessly enhances every aspect of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Meet the visionary behind Bigbet.Ai
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[3/4]">
                <img 
                  src={ceoImage} 
                  alt="Mr. Kaptan - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">Mr. Kaptan</h3>
                  <p className="text-primary text-sm mb-2">Founder & CEO, AI Engineer</p>
                  <p className="text-white/70 text-sm">
                    Leading innovation in digital transformation and AI solutions with a vision to empower businesses globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">Bigbet.Ai?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-500 text-sm">Quick turnaround without compromising quality</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-500 text-sm">Skilled professionals with diverse expertise</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Award className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-500 text-sm">200+ successful projects and counting</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default About;

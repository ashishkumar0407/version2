import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";
import { Users, Target, Lightbulb, Award, Globe, Zap, MapPin, Calendar, Eye } from "lucide-react";
import officeImage from "@/assets/office-workspace.png";
import ceoImage from "@/assets/ceo-kaptan.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business growth.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working closely with our clients to understand their unique needs and challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every project we undertake.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We maintain open communication and provide clear insights throughout the development process.",
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
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our journey began in Ghaziabad, India, and has since expanded to serve clients across 15+ countries. With over 200 successful projects under our belt, we continue to push the boundaries of what's possible in software development, AI, and digital transformation.
              </p>
              
              {/* Location & Founded Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Crossing Republik, Ghaziabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Founded in 2023</span>
                </div>
              </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-primary">Mission & Vision</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses worldwide with innovative, scalable, and reliable technology solutions that drive growth, efficiency, and digital transformation. We strive to be the trusted partner that helps organizations navigate the complexities of the digital age.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in innovative software solutions, recognized for our expertise in AI, cloud technologies, and digital transformation. We envision a future where technology seamlessly integrates with business processes to create unprecedented value and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Key milestones in our growth and evolution
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-24">
              {/* 2023 - Company Founded */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">2023</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Company Founded</h3>
                    <p className="text-gray-500 text-sm">Bigbet.Ai was established with a vision to innovate digital solutions</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden md:block" />
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2" />
              </div>

              {/* 2023 - First Major Project */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden md:block" />
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">2023</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">First Major Project</h3>
                    <p className="text-gray-500 text-sm">Successfully delivered our first enterprise-level software solution</p>
                  </div>
                </div>
              </div>

              {/* 2024 - Global Expansion */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">2024</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Global Expansion</h3>
                    <p className="text-gray-500 text-sm">Extended our services to international markets across 5 countries</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden md:block" />
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2" />
              </div>

              {/* 2024 - AI Integration */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden md:block" />
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">2024</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Integration</h3>
                    <p className="text-gray-500 text-sm">Launched AI and Machine Learning division with cutting-edge solutions</p>
                  </div>
                </div>
              </div>

              {/* 2024 - 200+ Projects */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">2024</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">200+ Projects</h3>
                    <p className="text-gray-500 text-sm">Reached milestone of 200+ successful projects across 15+ countries</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden md:block" />
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2" />
              </div>

              {/* 2025 - Innovation Hub */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden md:block" />
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-2xl font-bold text-primary mb-2">2025</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation Hub</h3>
                    <p className="text-gray-500 text-sm">Established innovation center focusing on emerging technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Visionary leaders driving innovation and excellence
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-10 text-center">
              {/* Avatar Circle */}
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-primary">HK</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Kaptan</h3>
              <p className="text-primary font-medium mb-6">Founder & CEO, AI Engineer</p>
              
              <p className="text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto">
                Bigbet.Ai was founded in 2023 by Mr. Kaptan, a visionary entrepreneur passionate about technology and innovation. Under his leadership, the company focuses on cutting-edge solutions in Generative AI, Machine Learning, Cybersecurity, and Data Science. He is building Bigbet.Ai into a trusted name for next-generation software development and digital transformation.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>contact@bigbets.ai</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>+91 836 887 1848</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global <span className="text-primary">Presence</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Serving clients across continents with local expertise and global standards
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { name: "India", code: "in" },
              { name: "USA", code: "us" },
              { name: "UK", code: "gb" },
              { name: "Canada", code: "ca" },
              { name: "Australia", code: "au" },
              { name: "Germany", code: "de" },
              { name: "France", code: "fr" },
              { name: "Japan", code: "jp" },
              { name: "Singapore", code: "sg" },
              { name: "UAE", code: "ae" },
              { name: "Brazil", code: "br" },
              { name: "Netherlands", code: "nl" },
              { name: "Sweden", code: "se" },
              { name: "Switzerland", code: "ch" },
              { name: "South Africa", code: "za" }
            ].map((country, index) => (
              <div 
                key={index} 
                className="bg-gray-50 hover:bg-primary/5 rounded-xl p-6 text-center transition-colors duration-300"
              >
                <img 
                  src={`https://flagcdn.com/48x36/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="w-12 h-9 mx-auto mb-3 rounded shadow-sm"
                />
                <p className="text-gray-700 font-medium text-sm">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default About;

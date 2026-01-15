import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import bigbetsLogo from "@/assets/bigbets-logo.png";

import { Link } from "react-router-dom";
// ... imports

const Footer = () => {
  const services = [
    {
      name: "Custom Software Development",
      href: "/custom-software-development",
    },
    { name: "Mobile & Web Applications", href: "/mobile-web-applications" },
    { name: "Cloud & SaaS Solutions", href: "/cloud-saas-solutions" },
    { name: "AI & Machine Learning", href: "/ai-machine-learning" },
    { name: "UI/UX Design", href: "/ui-ux-design" },
    { name: "Digital Marketing", href: "/digital-marketing" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Certification", href: "/certification" },
    { name: "Contact", href: "/contact" },
  ];

  const industries = [
    { name: "FinTech", href: "/services" },
    { name: "Healthcare", href: "/services" },
    { name: "Retail", href: "/services" },
    { name: "Education", href: "/services" },
    { name: "Logistics", href: "/services" },
    { name: "Startups", href: "/services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-card border-t border-transparent dark:border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={bigbetsLogo}
                alt="Bigbets.Ai Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  BIGBETS.AI
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-wider">
                  INNOVATE | CONNECT | INSPIRE
                </span>
              </div>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              Innovating Digital Solutions for a Smarter Future. Trusted IT
              partner offering cutting-edge solutions in software, web, mobile
              apps, cloud, and AI.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Crossing Republik, Ghaziabad, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <a
                  href="tel:+918368871848"
                  className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors"
                >
                  +91 836 887 1848
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <a
                  href="mailto:contact@bigbets.ai"
                  className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors"
                >
                  contact@bigbets.ai
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link
                    to={industry.href}
                    className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 Bigbets.Ai. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-primary hover:underline transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-primary hover:underline transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

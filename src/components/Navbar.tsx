import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Certification", href: "#certification" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white border-b border-gray-100 shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* Hexagon Logo with Lightbulb */}
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                {/* Outer hexagon */}
                <path
                  d="M24 2 L44 14 L44 34 L24 46 L4 34 L4 14 Z"
                  fill="none"
                  stroke={isScrolled ? "#1a1a2e" : "#ffffff"}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                {/* Inner hexagon */}
                <path
                  d="M24 8 L38 17 L38 31 L24 40 L10 31 L10 17 Z"
                  fill="none"
                  stroke={isScrolled ? "#1a1a2e" : "#ffffff"}
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                />
                {/* Lightbulb */}
                <circle cx="24" cy="20" r="6" fill="none" stroke={isScrolled ? "#1a1a2e" : "#ffffff"} strokeWidth="1.5" className="transition-all duration-300" />
                <path d="M21 26 L21 30 L27 30 L27 26" fill="none" stroke={isScrolled ? "#1a1a2e" : "#ffffff"} strokeWidth="1.5" className="transition-all duration-300" />
                <line x1="22" y1="32" x2="26" y2="32" stroke={isScrolled ? "#1a1a2e" : "#ffffff"} strokeWidth="1.5" className="transition-all duration-300" />
                <line x1="24" y1="14" x2="24" y2="16" stroke={isScrolled ? "#1a1a2e" : "#ffffff"} strokeWidth="1.5" className="transition-all duration-300" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-wide transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}>Bigbet.Ai</span>
              <span className={`text-[10px] tracking-[0.2em] transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-gray-300"}`}>INNOVATE | CONNECT | INSPIRE</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative text-sm font-medium transition-colors duration-200 py-2 ${
                  activeLink === link.name
                    ? "text-primary"
                    : isScrolled 
                      ? "text-gray-600 hover:text-gray-900" 
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={`p-2 transition-colors ${isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"}`}>
              <Moon className="w-5 h-5" />
            </button>
            <Button variant="hero" size="default">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                  className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
                    activeLink === link.name
                      ? "text-primary bg-primary/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4 px-4">
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Moon className="w-5 h-5" />
                </button>
                <Button variant="hero" size="default" className="flex-1">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

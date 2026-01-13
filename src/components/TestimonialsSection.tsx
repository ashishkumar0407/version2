import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const clientTestimonials = [
    {
      quote: "Hexsoftwares delivered an exceptional AI-powered solution that transformed our business operations. Their expertise in machine learning is unmatched.",
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "SJ",
    },
    {
      quote: "Working with Hexsoftwares was a game-changer for our startup. They built a scalable platform that handles millions of transactions seamlessly.",
      name: "Michael Chen",
      role: "CEO, FinanceHub",
      avatar: "MC",
    },
    {
      quote: "Their team's expertise in cloud solutions helped us reduce infrastructure costs by 40% while improving performance significantly.",
      name: "Emily Rodriguez",
      role: "VP Engineering, CloudFirst",
      avatar: "ER",
    },
  ];

  const internTestimonials = [
    {
      quote: "The internship at Hexsoftwares was an incredible learning experience. I got to work on a real-world project and received amazing mentorship.",
      name: "Anjali Gupta",
      role: "Web Development Intern",
      avatar: "AG",
    },
    {
      quote: "Best internship experience! The team was supportive and I learned more in 3 months here than in my entire college curriculum.",
      name: "Rahul Sharma",
      role: "AI/ML Intern",
      avatar: "RS",
    },
    {
      quote: "Hexsoftwares gave me the opportunity to work on cutting-edge technologies. The hands-on experience was invaluable.",
      name: "Priya Patel",
      role: "Mobile App Intern",
      avatar: "PP",
    },
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof clientTestimonials[0] }) => (
    <div className="p-6 rounded-2xl bg-card border border-border card-hover">
      <Quote className="w-10 h-10 text-primary/30 mb-4" />
      
      <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
          <span className="text-sm font-semibold text-primary-foreground">{testimonial.avatar}</span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Client Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {clientTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Intern Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              From Our <span className="gradient-text">Interns</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Hear about the experiences of students who started their tech careers with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {internTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

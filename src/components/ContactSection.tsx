import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
      );

    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_j1813ro",     // e.g. service_abcd123
        "template_4tuewq8",    // e.g. template_xyz456
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "v3Hvt0eU6hgelQoGl"      // e.g. AbCdEfGhIj
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-16 md:pt-14 pb-24 md:pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">
            <span className="text-foreground">GET</span>{" "}
            <span className="text-gradient">IN</span>{" "}
            <span className="text-foreground">TOUCH</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side */}
          <div className="reveal-left">
            <h3 className="font-display text-3xl text-foreground mb-8">
              LET&apos;S CONNECT
            </h3>

            <div className="space-y-4 mb-12">
              <a
                href="mailto:kmgnanadeepak@gmail.com"
                className="glass-card p-4 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">
                    kmgnanadeepak@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:9441652345"
                className="glass-card p-4 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">
                    +91 9441652345
                  </p>
                </div>
              </a>
            </div>

            <div>
              <h4 className="font-display text-xl text-foreground mb-4">
                FOLLOW ME
              </h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/kmgnanadeepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 icon-glow hover:scale-105 transition-transform"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/kmgnanadeepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 icon-glow hover:scale-105 transition-transform"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="https://instagram.com/i_dk_158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 icon-glow hover:scale-105 transition-transform"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <h3 className="font-display text-2xl text-foreground mb-6">
                SEND A MESSAGE
              </h3>

              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-input"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-input"
                  placeholder="Your Email"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass-input resize-none"
                  placeholder="Tell me about your project..."
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-netflix w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

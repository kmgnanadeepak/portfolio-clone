import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Code,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <div className="flex justify-center mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm md:text-base text-muted-foreground tracking-wide">
                MERN Stack Engineer
              </span>
            </div>
          </div>

          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-foreground">KM GNANA</span>
            <br />
            <span className="text-gradient tracking-[0.1em]">DEEPAK</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="mailto:kmgnanadeepak@gmail.com"
              className="flex items-center gap-2 px-4 py-2 glass-card text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} className="text-primary" />
              kmgnanadeepak@gmail.com
            </a>

            <a
              href="tel:9441652345"
              className="flex items-center gap-2 px-4 py-2 glass-card text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={16} className="text-primary" />
              +91 9441652345
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a href="#projects" className="btn-netflix pulse-glow">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Get In Touch
            </a>
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <span className="text-xs tracking-widest text-muted-foreground">
              LET'S CONNECT
            </span>

            <div className="flex gap-4">

              {/* GitHub */}
              <div className="relative group w-12 h-12 flex items-center justify-center">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-3 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  GitHub
                </span>
                <a
                  href="https://github.com/kmgnanadeepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 icon-glow hover:scale-105 transition-transform"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="relative group w-12 h-12 flex items-center justify-center">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-3 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/kmgnanadeepak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 icon-glow hover:scale-105 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>

              {/* LeetCode */}
              <div className="relative group w-12 h-12 flex items-center justify-center">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-3 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  LeetCode
                </span>
                <a
                  href="https://leetcode.com/u/kmGnanaDeepak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 icon-glow hover:scale-105 transition-transform"
                  aria-label="LeetCode"
                >
                  <Code size={22} />
                </a>
              </div>

              {/* Instagram */}
              <div className="relative group w-12 h-12 flex items-center justify-center">
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-3 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  Instagram
                </span>
                <a
                  href="https://instagram.com/i_dk_158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 icon-glow hover:scale-105 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

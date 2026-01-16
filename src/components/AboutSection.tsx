import { useEffect, useRef } from "react";
import { Code2, Film, Zap, Heart } from "lucide-react";

const stats = [
  { value: "2+", label: "Industry Internships" },
  { value: "5+", label: "Major Projects Built" },
  { value: "15+", label: "APIs Tested & Deployed" },
  { value: "100%", label: "Dedication & Problem-Solving Mindset" },
];

import {
  Layers,
  Server,
  Cloud,
  Gauge
} from "lucide-react";

const highlights = [
  {
    icon: Layers, // architecture, layers, system design
    title: "End-to-End Application Engineering",
    description:
      "Designing and building scalable full-stack applications with clean architecture, modular code, and production-ready workflows.",
  },
  {
    icon: Server, // backend, APIs, systems
    title: "API Design & Backend Systems",
    description:
      "Developing secure and performant REST APIs using Node.js & Express, handling authentication, authorization, and data flow efficiently.",
  },
  {
    icon: Cloud, // cloud + docker + aws
    title: "Cloud-Ready & Containerized Deployments",
    description:
      "Packaging applications using Docker and deploying them on AWS infrastructure with proper environment isolation and scalability in mind.",
  },
  {
    icon: Gauge, // speed, performance
    title: "Performance Focused",
    description:
      "Optimizing applications for speed, scalability, and exceptional user experience.",
  },
];


const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

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

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden pt-0 md:pt-28 pb-12"
    >
      {/* Background */}
    <div className="absolute inset-0 p-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />


      <div className="container mx-auto px-6 relative z-10">
        {/* ABOUT HEADER */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">
            <span className="text-gradient">About</span>{" "}
            <span className="text-foreground">Me</span>
          </h2>

          <p className="section-subtitle mx-auto">
            A Full Stack Developer specializing in the MERN stack, with hands-on
            experience building scalable web and mobile applications using REST
            APIs, JWT authentication, AWS, Docker, and CI/CD pipelines.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 reveal">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CORE CAPABILITIES */}
        <div className="text-center mb-14 reveal">
          <h2 className="section-title">
            <span className="text-foreground">Core</span>{" "}
            <span className="text-gradient">Capabilities</span>
          </h2>

          <p className="section-subtitle mx-auto">
            Technical strengths and development mindset shaped by real-world
            projects and internships.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`reveal-${
                index % 2 === 0 ? "left" : "right"
              } glass-card p-8 group`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={24} />
                </div>

                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* QUOTE */}
        <div className="mt-8 reveal">
          <blockquote className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground italic mb-4">
              “If it can’t be deployed, it’s not finished.”
            </p>
            <cite className="text-muted-foreground">
              — KM Gnana Deepak
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

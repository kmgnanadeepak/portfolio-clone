import { useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  BarChart3,
  Film,
  CheckCircle,
  Bot,
  Dumbbell,
  Shield,
  Leaf,
} from "lucide-react";

const projects = [
  {
    title: "KisanSetu – Smart Agricultural Marketplace Platform",
    description:
    "KisanSetu is a multi-role digital agricultural marketplace designed to directly connect Farmers, Merchants, and Customers on a unified platform, eliminating middlemen and ensuring transparent, fair, and efficient agricultural trade. The system enables real-time product listings, smart price discovery, direct transactions, and streamlined supply-chain communication, improving profitability for farmers while providing customers with reliable farm-fresh products.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Role-Based Authentication", "Responsive UI"],
    github: "https://github.com/kmgnanadeepak/KisanSetu-v2.git",
    live: "https://kisansetu-v2.vercel.app/",
    icon: Leaf,
  },
  {
    title: "Safe Fall – Fall Detection & SOS Alert System",
    description:
      "A real-time fall detection and emergency response system designed to identify sudden falls and trigger immediate SOS alerts to family and friends.",
    tech: ["React", "Express.js", "MongoDB", "Node.js", "Responsive Design"],
    github: "https://github.com/kmgnanadeepak/safe-fall.git",
    live: "https://safefall-kmgd.vercel.app/",
    icon: Shield,
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pt-8 md:pt-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-8 reveal">
             <h2 className="section-title">
            <span className="text-gradient">MY</span>{" "}
             <span className="text-foreground">PROJECTS</span>
               </h2>
          <p className="section-subtitle mx-auto">
            A collection of projects showcasing my skills in full-stack
            development and real-world problem solving.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {projects.map((project, index) => (
            <div
              key={project.title + index}
              className="glass-card project-card h-full flex flex-col overflow-hidden group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                <project.icon className="w-12 h-12 text-red-500 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-display text-xl text-foreground mb-2">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tag-chip text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 icon-glow text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={20} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 icon-glow text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

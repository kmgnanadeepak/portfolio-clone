import { Briefcase, Calendar, Code, Server, TestTube, Layers } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    type: "Virtual / Project-Based",
    company: "Internship Studio",
    duration: "Nov 2025 – Dec 2025",
    highlights: [
      {
        icon: Server,
        text: "Built a MERN stack task manager with JWT authentication and 10+ REST APIs supporting multi-user CRUD operations"
      },
      {
        icon: Layers,
        text: "Integrated React frontend with Node.js & Express backend, enabling seamless end-to-end data flow across multiple modules"
      },
      {
        icon: TestTube,
        text: "Tested and validated 15+ REST APIs using Postman, ensuring reliability and scalable backend structure"
      }
    ]
  },
  {
    role: "Full Stack Development Intern",
    type: "Remote",
    company: "Cognifyz Technologies",
    duration: "Dec 2025 – Jan 2026",
    highlights: [
      {
        icon: Code,
        text: "Developed and integrated frontend components using HTML, CSS, and JavaScript with backend logic"
      },
      {
        icon: TestTube,
        text: "Tested backend endpoints and enhanced application features for performance, reliability, and maintainability"
      }
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-14 px-4 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-netflix-red/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-netflix-red to-transparent mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-netflix-red via-netflix-red/50 to-transparent transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-netflix-red rounded-full transform -translate-x-1/2 border-4 border-background shadow-[0_0_20px_rgba(229,9,20,0.5)] z-10" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 rounded-xl border border-white/10 hover:border-netflix-red/50 transition-all duration-500 group hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] animate-fade-in ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-netflix-red/20 text-netflix-red group-hover:bg-netflix-red group-hover:text-white transition-all duration-300">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-netflix-red transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-netflix-red font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.type}</p>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 text-netflix-red" />
                    {exp.duration}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                      >
                        <highlight.icon className="w-5 h-5 text-netflix-red/70 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{highlight.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
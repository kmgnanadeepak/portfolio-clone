import {
  Trophy,
  Rocket,
  Award,
  Cloud,
  Code,
  Coffee,
  Medal,
  Palette,
  Sparkles,
  Star,
} from "lucide-react";

/* ===================== DATA ===================== */

/* ACHIEVEMENTS (WITH CERTIFICATES + DATES) */
const achievements = [
  {
    icon: Trophy,
    title: "National-Level Hackathon Winner",
    event:
      "Won 1st Prize (Among 70+ teams) – National Level 24-Hour Hackathon, Sri Manakula Vinayagar Engineering College, Puducherry",
    date: "19 & 20 Sep 2025",
    credential: "/Manakula_vinayagar.pdf",
    color: "from-netflix-red to-red-600",
  },
  {
  icon: Award,
  title: "Responsive Web UI/UX Design Champion",
  event: "Won 1st Prize (Among 60+ teams) – Web Design Competition, Technical Fest, Kuppam Engineering College",
  date: "10 Feb 2026",
  credential: "/web_design_kuppam.pdf",
  color: "from-netflix-red to-red-600",
},
  {
    icon: Rocket,
    title: "Technical Quiz Runner-Up",
    event: "Secured 2nd Place (among 45 teams) – Technical Quiz, AItheronML’25, Kuppam Engineering College",
    date: "22 Aug 2025",
    credential: "/KEC_TechQuizRunner.pdf",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Medal,
    title: "Selected Participant – National Hackathon",
    event: "National level 24-Hour Hackathon Participant – NEXATHON’25 , Dr. T. Thimmaiah Institute of Technology, Karnataka",
    date: "28 & 29 Nov 2025",
    credential: "/Dr.TTIT_hackathon.pdf",
    color: "from-purple-500 to-indigo-500",
  },
  {
  icon: Star,
  title: "Logo Identification – Winner",
  event: "Won 1st Prize – Technical Logo Identification Competition, AItheronML’25, Kuppam Engineering College",
  date: "22 Aug 2025",
  credential: "/KEC_Logoidentification.pdf",
  color: "from-green-500 to-emerald-500",
},

];

/* CERTIFICATIONS (COURSES ONLY + DATES) */
const certifications = [
  {
    icon: Cloud,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "Dec 2025",
    credential: "/aws.pdf",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Code,
    title: "Delta – Full Stack Web Development",
    issuer: "Apna College",
    date: "Oct 2024 – Jun 2025",
    credential: "/GDdelta.pdf",
    color: "from-netflix-red to-pink-500",
  },
  {
    icon: Coffee,
    title: "Java Programming",
    issuer: "Scaler",
    date: "Aug 2024",
    credential: "/java-scaler.pdf",
    color: "from-blue-500 to-cyan-500",
  },
];

/* ===================== COMPONENT ===================== */

const AchievementsSection = () => {
  return (
    <>
      {/* ================= ACHIEVEMENTS ================= */}
      <section
        id="achievements"
        className="relative py-16 px-4 md:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-netflix-red/3 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-netflix-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-netflix-red to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((a, index) => (
              <div
                key={index}
                className="relative z-10 glass-card p-6 rounded-xl border border-white/10 hover:border-netflix-red/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${a.color} shadow-lg`}
                  >
                    <a.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground">
                      {a.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {a.event}
                    </p>
                    <span className="block text-xs text-muted-foreground mt-1">
                      {a.date}
                    </span>

                    <a
                      href={a.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-block mt-3 text-sm font-medium text-netflix-red hover:underline cursor-pointer"
                    >
                      View Certificate →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section
        id="certifications"
        className="relative py-6 px-4 md:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-netflix-red/3 to-transparent pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-netflix-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-netflix-red to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((c, index) => (
              <div
                key={index}
                className="relative z-10 glass-card p-6 rounded-xl border border-white/10 hover:border-netflix-red/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative mb-4">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${c.color} shadow-lg`}
                  >
                    <c.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-netflix-red rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-foreground mb-1">
                  {c.title}
                </h4>

                <p className="text-muted-foreground text-sm">
                  {c.issuer}
                </p>

                <span className="block text-xs text-muted-foreground mb-4">
                  {c.date}
                </span>

                <a
                  href={c.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 inline-block text-sm font-medium text-netflix-red hover:underline cursor-pointer"
                >
                  View Credential →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;

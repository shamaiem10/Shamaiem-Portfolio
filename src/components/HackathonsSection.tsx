import { Trophy, Users, Code, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HackathonsSection = () => {
  const hackathons = [
    {
      name: "Neuravia Hacks 2025",
      project: "Vytal",
      description: "AI-powered health & wellness companion with diary logging, mood analysis, OCR-based prescription management, and dynamic visual insights.",
      tech: ["React (Vite)", "Flask", "SQLite", "HuggingFace API", "OCR", "TailwindCSS", "Shadcn UI"],
      status: "Certificate Available",
      result: "Completed Successfully",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-sticky-blue",
      badge: "🏆"
    },
    {
      name: "CS Girlies Hackathon",
      project: "Persona",
      description: "An innovative personality analysis platform that leverages AI to provide insights into user behavior and characteristics.",
      tech: ["Flask", "HuggingFace API", "SQLite", "HTML", "CSS"],
      status: "Participation",
      result: "Great Learning Experience",
      icon: <Users className="h-6 w-6" />,
      color: "bg-sticky-pink",
      badge: "💼"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative paper-texture">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-handwritten text-primary mb-4">Hackathons</h2>
          <p className="font-handwritten text-xl text-primary/70">(Adventures & Stickers)</p>
          <div className="w-24 h-1 bg-primary/30 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Hackathon cards arranged like stickers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {hackathons.map((hackathon, index) => (
            <div 
              key={hackathon.name}
              className="animate-fade-in-up"
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <div className={`relative ${hackathon.color} p-8 rounded-lg sticky-note shadow-lg`}>
                {/* Badge sticker */}
                <div className="absolute -top-3 -right-3 text-4xl animate-wiggle">
                  {hackathon.badge}
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-background rounded-lg">
                    {hackathon.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-handwritten text-foreground mb-1">{hackathon.name}</h3>
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-foreground/70" />
                      <span className="font-body font-semibold text-foreground">{hackathon.project}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-foreground/90 leading-relaxed mb-6">
                  {hackathon.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-handwritten text-lg text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-background/80 rounded text-xs font-body text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status and Result */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-foreground/70" />
                    <span className="font-body text-sm text-foreground/80">
                      <strong>Status:</strong> {hackathon.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-foreground/70" />
                    <span className="font-body text-sm text-foreground/80">
                      <strong>Result:</strong> {hackathon.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Philosophy */}
        <div className="text-center">
          <div className="sticky-note bg-sticky-yellow inline-block p-8 rounded-lg max-w-2xl">
            <h3 className="text-2xl font-handwritten text-foreground mb-4">My Hackathon Journey</h3>
            <p className="font-body text-foreground/90 leading-relaxed mb-4">
              Hackathons are where creativity meets technical skills under pressure. I thrive in these fast-paced environments 
              where innovative ideas come to life within tight deadlines. Each hackathon teaches me something new about 
              rapid prototyping, team collaboration, and turning concepts into working solutions.
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl">
              <span>⚡</span>
              <span className="font-handwritten text-lg text-foreground">Fast • Innovative • Collaborative</span>
              <span>🚀</span>
            </div>
          </div>
        </div>

        {/* Next Goals */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="sticky-note bg-sticky-green p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-handwritten text-lg text-foreground mb-2">Next Goal</h4>
            <p className="font-body text-sm text-foreground/80">Win a major hackathon</p>
          </div>
          
          <div className="sticky-note bg-sticky-blue p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h4 className="font-handwritten text-lg text-foreground mb-2">Expand</h4>
            <p className="font-body text-sm text-foreground/80">International hackathons</p>
          </div>
          
          <div className="sticky-note bg-sticky-pink p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="font-handwritten text-lg text-foreground mb-2">Connect</h4>
            <p className="font-body text-sm text-foreground/80">Build lasting partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
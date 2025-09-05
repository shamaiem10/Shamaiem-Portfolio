import { ExternalLink, Github, FileText, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ServeSpace",
      subtitle: "Volunteer Management Web Application",
      description: "A comprehensive platform that helps organizations manage volunteers, track hours, and schedule events efficiently. Built with a focus on user experience and administrative functionality.",
      tech: ["Django", "SQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/shamaiem10/ServeSpace",
      color: "bg-sticky-blue",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Vigilantia",
      subtitle: "Security Management System",
      description: "Real-time monitoring and incident management system designed for safety improvement. Features advanced computer vision capabilities and barcode scanning integration.",
      tech: ["Java", "OpenCV", "ZXing"],
      github: "https://github.com/shamaiem10/Vigilantia-Security-Management-System",
      color: "bg-sticky-pink",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Vytal",
      subtitle: "Neuravia Hacks 2025 - Hackathon Project",
      description: "AI-powered health & wellness companion featuring diary logging, mood analysis, OCR-based prescription management, and dynamic visual insights for comprehensive health tracking.",
      tech: ["React (Vite)", "Flask", "SQLite", "HuggingFace API", "OCR", "TailwindCSS", "Shadcn UI"],
      github: "https://github.com/shamaiem10/Vytal",
      color: "bg-sticky-yellow",
      icon: <FileText className="h-6 w-6" />,
      featured: true
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative paper-texture">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-handwritten text-primary mb-4">Projects</h2>
          <p className="font-handwritten text-xl text-primary/70">(Notebook Experiments)</p>
          <div className="w-24 h-1 bg-primary/30 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.title} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Project spread like notebook pages */}
              <div className={`relative ${project.featured ? 'lg:scale-105' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card p-8 rounded-lg shadow-lg border-2 border-border">
                  {/* Left page - Project info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${project.color}`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-handwritten text-primary">{project.title}</h3>
                        <p className="text-sm font-body text-muted-foreground">{project.subtitle}</p>
                      </div>
                      {project.featured && (
                        <div className="ml-auto">
                          <span className="bg-accent px-3 py-1 rounded-full text-xs font-handwritten text-foreground">
                            Latest
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="font-body text-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Tech stack as handwritten labels */}
                    <div>
                      <h4 className="font-handwritten text-lg text-primary mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm font-body text-secondary-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <Button asChild variant="default" className="font-body">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="font-body">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Learn More
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right page - Visual representation */}
                  <div className="flex items-center justify-center">
                    <div className={`w-full max-w-md aspect-video rounded-lg ${project.color} flex items-center justify-center border-2 border-dashed border-foreground/20 sticky-note`}>
                      <div className="text-center p-6">
                        <div className="text-4xl mb-4">{project.icon}</div>
                        <p className="font-handwritten text-lg text-foreground">
                          {project.title}
                        </p>
                        <p className="font-body text-sm text-foreground/70 mt-2">
                          Screenshot placeholder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paper clip decoration */}
                <div className="absolute -top-4 -right-4 w-8 h-12 bg-paper-shadow rounded-sm transform rotate-12 opacity-60"></div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub footer note */}
        <div className="mt-16 text-center">
          <div className="sticky-note bg-sticky-green inline-block px-6 py-4 rounded-lg">
            <p className="font-handwritten text-lg text-foreground mb-2">
              📝 Footnotes:
            </p>
            <p className="font-body text-sm text-foreground/80">
              All projects are open source and available on my GitHub profile
            </p>
            <Button asChild variant="link" className="mt-2 font-body">
              <a href="https://github.com/shamaiem10" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                @shamaiem10
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
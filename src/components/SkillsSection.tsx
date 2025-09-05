import { Check, Code, Database, Wrench, Award } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Java", "C++", "Python", "HTML", "CSS", "JavaScript", "SQL"],
      color: "bg-sticky-blue"
    },
    {
      title: "Frameworks",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Flask", "Django", "Bootstrap", "WordPress"],
      color: "bg-sticky-pink"
    },
    {
      title: "Libraries",
      icon: <Database className="h-5 w-5" />,
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Seaborn"],
      color: "bg-sticky-yellow"
    },
    {
      title: "Tools & Databases",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", "MySQL", "SQLite"],
      color: "bg-sticky-green"
    }
  ];

  const certifications = [
    {
      title: "AI for Everyone",
      provider: "Andrew Ng, DeepLearning.AI",
      priority: 1
    },
    {
      title: "Python for Data Science & AI",
      provider: "IBM",
      priority: 2
    },
    {
      title: "Data Analysis with Python",
      provider: "IBM",
      priority: 3
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative paper-texture">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-handwritten text-primary mb-4">Skills & Certifications</h2>
          <p className="font-handwritten text-xl text-primary/70">(Toolkit Page)</p>
          <div className="w-24 h-1 bg-primary/30 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Checklist */}
          <div>
            <h3 className="text-3xl font-handwritten text-primary mb-8 flex items-center gap-3">
              <Check className="h-8 w-8 text-accent" />
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className={`${category.color} p-6 rounded-lg sticky-note animate-fade-in-up`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h4 className="font-handwritten text-lg text-foreground">{category.title}</h4>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-foreground rounded-sm flex items-center justify-center bg-background">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="font-body text-sm text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-handwritten text-primary mb-8 flex items-center gap-3">
              <Award className="h-8 w-8 text-accent" />
              Top Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="bg-card p-6 rounded-lg shadow-lg border-l-4 border-primary animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-handwritten font-bold">{cert.priority}</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-lg mb-2">{cert.title}</h4>
                      <p className="font-body text-muted-foreground">{cert.provider}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional learning note */}
              <div className="sticky-note bg-accent p-4 rounded-lg mt-8">
                <h4 className="font-handwritten text-lg text-foreground mb-2">📚 Continuous Learning</h4>
                <p className="font-body text-sm text-foreground/80">
                  Always expanding my knowledge through online courses, documentation, and hands-on projects. 
                  Currently exploring advanced AI/ML concepts and cloud technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-handwritten text-primary mb-8 text-center">Scholarships & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="sticky-note bg-sticky-yellow p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Award className="h-6 w-6 text-foreground" />
                <h4 className="font-handwritten text-xl text-foreground">PEEF Outreach Scholarship</h4>
              </div>
              <p className="font-body text-foreground/80">
                Awarded for <strong>Academic Excellence</strong> in recognition of outstanding academic performance and potential.
              </p>
            </div>

            <div className="sticky-note bg-sticky-green p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Award className="h-6 w-6 text-foreground" />
                <h4 className="font-handwritten text-xl text-foreground">Quaid-e-Azam Merit Scholarship</h4>
              </div>
              <p className="font-body text-foreground/80">
                Secured <strong>3rd position in Faisalabad Board</strong>, demonstrating consistent academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
import { Calendar, MapPin, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 relative paper-texture">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-handwritten text-primary mb-4">About Me</h2>
          <p className="font-handwritten text-xl text-primary/70">(Diary Entries)</p>
          <div className="w-24 h-1 bg-primary/30 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Diary Entries */}
          <div className="space-y-8">
            {/* Entry 1 */}
            <div className="bg-card p-8 rounded-lg shadow-lg border-l-4 border-primary animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-handwritten text-lg text-primary">September 2023</span>
              </div>
              <p className="font-body text-foreground leading-relaxed mb-3">
                Started my <strong>Software Engineering degree at NUST</strong> with a current CGPA of <strong>3.06/4.00</strong>. 
                The journey has been challenging but incredibly rewarding as I dive deep into the world of programming and software development.
              </p>
            </div>

            {/* Entry 2 */}
            <div className="bg-card p-8 rounded-lg shadow-lg border-l-4 border-accent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-handwritten text-lg text-primary">August 2025</span>
              </div>
              <p className="font-body text-foreground leading-relaxed mb-3">
                Thrilled to be selected as an <strong>AI Fellow at Buildables (Remote)</strong>! Working on exciting AI/ML projects 
                under mentorship, expanding my knowledge in machine learning algorithms and their real-world applications.
              </p>
            </div>

            {/* Personal Philosophy */}
            <div className="sticky-note bg-sticky-yellow p-6 rounded-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h3 className="font-handwritten text-xl text-foreground mb-3">My Philosophy</h3>
              <p className="font-body text-foreground/90 leading-relaxed">
                "I'm a software engineering student passionate about full-stack development, AI/ML, and hackathon-driven innovation. 
                I love turning ideas into working prototypes that solve real-world problems."
              </p>
            </div>
          </div>

          {/* Current Focus */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="font-handwritten text-2xl text-primary mb-6">Current Focus</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">AI & Machine Learning</h4>
                    <p className="font-body text-muted-foreground text-sm">Building intelligent systems and exploring deep learning applications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Full-Stack Development</h4>
                    <p className="font-body text-muted-foreground text-sm">Creating end-to-end solutions with modern web technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-sticky-pink rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Hackathon Innovation</h4>
                    <p className="font-body text-muted-foreground text-sm">Rapid prototyping and competitive programming challenges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sticky-note bg-sticky-blue p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-foreground" />
                  <span className="font-handwritten text-lg text-foreground">Based in</span>
                </div>
                <p className="font-body text-foreground/90">Pakistan</p>
              </div>
              
              <div className="sticky-note bg-sticky-green p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-foreground" />
                  <span className="font-handwritten text-lg text-foreground">CGPA</span>
                </div>
                <p className="font-body text-foreground/90">3.06/4.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Laptop, Rocket, Lightbulb, Heart } from 'lucide-react';

const CoverPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative paper-texture page-section">
      {/* Doodle decorations */}
      <div className="absolute top-20 left-10 doodle">
        <Laptop className="h-12 w-12 text-primary/60 animate-float" />
      </div>
      <div className="absolute top-32 right-20 doodle">
        <Rocket className="h-10 w-10 text-primary/60 animate-wiggle" />
      </div>
      <div className="absolute bottom-40 left-20 doodle">
        <Lightbulb className="h-14 w-14 text-primary/60 animate-float" />
      </div>
      <div className="absolute bottom-20 right-10 doodle">
        <Heart className="h-8 w-8 text-primary/60 animate-wiggle" />
      </div>

      {/* Main title */}
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-handwritten font-bold text-primary mb-6 animate-fade-in-up">
          Shamaiem Shabbir
        </h1>
        
        <div className="relative mb-8">
          <h2 className="text-2xl md:text-3xl font-handwritten text-primary/80 mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Software Engineering Student @ NUST
          </h2>
          
          {/* Underline doodle */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-primary/30 rounded-full animate-fade-in-up" style={{animationDelay: '0.4s'}}></div>
        </div>

        <p className="text-xl md:text-2xl font-body text-muted-foreground mb-12 animate-fade-in-up max-w-2xl mx-auto leading-relaxed" style={{animationDelay: '0.6s'}}>
          "Passionate about building AI-powered and human-centered solutions"
        </p>

        {/* Sticky note style badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <div className="sticky-note bg-sticky-blue px-6 py-4 rounded-lg animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <span className="font-handwritten text-lg text-foreground">Full-Stack Developer</span>
          </div>
          <div className="sticky-note bg-sticky-pink px-6 py-4 rounded-lg animate-fade-in-up" style={{animationDelay: '1s'}}>
            <span className="font-handwritten text-lg text-foreground">AI Enthusiast</span>
          </div>
          <div className="sticky-note bg-sticky-yellow px-6 py-4 rounded-lg animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <span className="font-handwritten text-lg text-foreground">Hackathon Lover</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
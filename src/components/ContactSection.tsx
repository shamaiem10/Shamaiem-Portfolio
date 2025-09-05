import { Mail, Github, Linkedin, MessageSquare, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 relative paper-texture">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-handwritten text-primary mb-4">Let's Connect</h2>
          <p className="font-handwritten text-xl text-primary/70">(Back Page Scribbles)</p>
          <div className="w-24 h-1 bg-primary/30 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Contact Cards arranged like scattered notes */}
        <div className="relative">
          {/* Main contact card */}
          <div className="bg-card p-8 rounded-lg shadow-lg mb-12 animate-fade-in-up">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-handwritten text-primary mb-4">Ready to collaborate?</h3>
              <p className="font-body text-foreground/80 text-lg max-w-2xl mx-auto">
                I'm always excited to work on innovative projects, especially those involving AI/ML, 
                full-stack development, or anything that can make a positive impact. Let's build something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="sticky-note bg-sticky-blue p-6 rounded-lg text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-foreground" />
                <h4 className="font-handwritten text-lg text-foreground mb-2">Email</h4>
                <Button asChild variant="link" className="font-body text-sm p-0 h-auto">
                  <a href="mailto:shamaiemshabbir14@gmail.com">
                    shamaiemshabbir14@gmail.com
                  </a>
                </Button>
              </div>

              {/* LinkedIn */}
              <div className="sticky-note bg-sticky-pink p-6 rounded-lg text-center">
                <Linkedin className="h-8 w-8 mx-auto mb-3 text-foreground" />
                <h4 className="font-handwritten text-lg text-foreground mb-2">LinkedIn</h4>
                <Button asChild variant="link" className="font-body text-sm p-0 h-auto">
                  <a href="https://linkedin.com/in/shamaiem-shabbir" target="_blank" rel="noopener noreferrer">
                    /in/shamaiem-shabbir
                  </a>
                </Button>
              </div>

              {/* GitHub */}
              <div className="sticky-note bg-sticky-yellow p-6 rounded-lg text-center">
                <Github className="h-8 w-8 mx-auto mb-3 text-foreground" />
                <h4 className="font-handwritten text-lg text-foreground mb-2">GitHub</h4>
                <Button asChild variant="link" className="font-body text-sm p-0 h-auto">
                  <a href="https://github.com/shamaiem10" target="_blank" rel="noopener noreferrer">
                    github.com/shamaiem10
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="font-body">
                <a href="mailto:shamaiemshabbir14@gmail.com">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Start a Conversation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body">
                <a href="https://linkedin.com/in/shamaiem-shabbir" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Availability note */}
          <div className="sticky-note bg-sticky-green p-6 rounded-lg text-center max-w-md mx-auto mb-12">
            <h4 className="font-handwritten text-xl text-foreground mb-3">🗓️ Availability</h4>
            <p className="font-body text-foreground/90 text-sm leading-relaxed">
              Currently open to <strong>internship opportunities</strong>, <strong>freelance projects</strong>, 
              and <strong>collaborative ventures</strong> in AI/ML and full-stack development.
            </p>
          </div>

          {/* Footer message */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-accent px-6 py-3 rounded-full">
              <span className="font-handwritten text-lg text-foreground">Thank you for visiting!</span>
              <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            </div>
            <p className="font-body text-muted-foreground text-sm mt-4">
              Built with React, TailwindCSS & lots of ☕ by Shamaiem Shabbir
            </p>
          </div>

          {/* Decorative doodles */}
          <div className="absolute -top-10 -left-5 text-2xl animate-float opacity-50">📝</div>
          <div className="absolute -bottom-5 -right-10 text-2xl animate-wiggle opacity-50">✨</div>
          <div className="absolute top-1/2 -left-8 text-xl animate-pulse opacity-30">💡</div>
          <div className="absolute top-1/4 -right-5 text-xl animate-bounce opacity-30">🚀</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
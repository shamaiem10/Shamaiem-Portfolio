import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('cover');

  const navItems = [
    { id: 'cover', label: 'Cover', emoji: '📖' },
    { id: 'about', label: 'About', emoji: '📝' },
    { id: 'projects', label: 'Projects', emoji: '💻' },
    { id: 'hackathons', label: 'Hackathons', emoji: '🏆' },
    { id: 'skills', label: 'Skills', emoji: '🛠️' },
    { id: 'contact', label: 'Contact', emoji: '📧' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation - Notebook Tab Style */}
      <nav className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-card/90 backdrop-blur-sm rounded-l-lg shadow-lg border border-border overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground">
            <BookOpen className="h-4 w-4" />
            <span className="font-handwritten text-sm">Pages</span>
          </div>
          
          <div className="p-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded text-sm font-body transition-all duration-200 flex items-center gap-3 ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <span className="text-base">{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          variant="default"
          className="rounded-full shadow-lg"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {isOpen && (
          <div className="absolute top-12 right-0 bg-card/95 backdrop-blur-sm rounded-lg shadow-lg border border-border min-w-[200px] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground">
              <BookOpen className="h-4 w-4" />
              <span className="font-handwritten text-sm">Navigate</span>
            </div>
            
            <div className="p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded text-sm font-body transition-all duration-200 flex items-center gap-3 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
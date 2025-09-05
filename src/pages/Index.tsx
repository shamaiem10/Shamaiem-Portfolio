import CoverPage from "@/components/CoverPage";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HackathonsSection from "@/components/HackathonsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      
      {/* Cover Page */}
      <div id="cover">
        <CoverPage />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Hackathons Section */}
      <div id="hackathons">
        <HackathonsSection />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;

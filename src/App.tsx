import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialScope, setQuoteInitialScope] = useState<string | undefined>(undefined);
  const [quoteInitialBudget, setQuoteInitialBudget] = useState<number | undefined>(undefined);

  // Intersection observer for updating active nav state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteModal = (scope?: string, budget?: number) => {
    setQuoteInitialScope(scope);
    setQuoteInitialBudget(budget);
    setIsQuoteModalOpen(true);
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#161324] flex flex-col font-sans selection:bg-[#b5883e]/20 selection:text-[#b5883e]">
      
      {/* Primary Navigation Bar (3-zone contract) */}
      <Navbar
        activeSection={activeSection}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section with Large Construction Banner, Reliability Headline, and Request Quote Button */}
        <Hero
          onRequestQuote={() => handleOpenQuoteModal()}
          onExploreProjects={handleExploreProjects}
        />

        {/* Services & Cost Engineering Section */}
        <ServicesSection
          onRequestQuoteWithScope={(scope) => handleOpenQuoteModal(scope)}
        />

        {/* Notable Projects Portfolio (30+ works from PDF) */}
        <ProjectsSection
          onRequestQuoteForProject={(projectName) => handleOpenQuoteModal(`Similar to ${projectName}`)}
        />

        {/* Corporate Profile, Leadership, & Statutory Accreditations */}
        <AboutSection />

        {/* Testimonials & Institutional Client Footprint */}
        <TestimonialsSection />

        {/* Contact, Principal Office, & Direct Consultation Form */}
        <ContactSection
          onRequestQuote={() => handleOpenQuoteModal()}
        />
      </main>

      {/* Corporate Geometric Footer */}
      <Footer
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Interactive Request a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialScope={quoteInitialScope}
        initialBudget={quoteInitialBudget}
      />

    </div>
  );
}

import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Farhan | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Welcome to Farhan's portfolio. A passionate Full-Stack Developer specializing in React, Node.js, and modern web technologies. View my projects and get in touch." />
        <meta name="keywords" content="web developer, react developer, full-stack developer, portfolio, frontend, backend, javascript, typescript" />
        <meta property="og:title" content="Farhan | Full-Stack Developer Portfolio" />
        <meta property="og:description" content="A passionate Full-Stack Developer crafting beautiful web experiences with React and modern technologies." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://farhan.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
